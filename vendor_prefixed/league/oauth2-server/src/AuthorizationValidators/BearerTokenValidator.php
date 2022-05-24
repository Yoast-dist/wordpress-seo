<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators;

use DateTimeZone;
use YoastSEO_Vendor\Lcobucci\Clock\SystemClock;
use YoastSEO_Vendor\Lcobucci\JWT\Configuration;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa\Sha256;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\SignedWith;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\StrictValidAt;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\ValidAt;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\RequiredConstraintsViolated;
use YoastSEO_Vendor\League\OAuth2\Server\CryptKey;
use YoastSEO_Vendor\League\OAuth2\Server\CryptTrait;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class BearerTokenValidator implements \YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\AuthorizationValidatorInterface
{
    use CryptTrait;
    /**
     * @var AccessTokenRepositoryInterface
     */
    private $accessTokenRepository;
    /**
     * @var CryptKey
     */
    protected $publicKey;
    /**
     * @var Configuration
     */
    private $jwtConfiguration;
    /**
     * @param AccessTokenRepositoryInterface $accessTokenRepository
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface $accessTokenRepository)
    {
        $this->accessTokenRepository = $accessTokenRepository;
    }
    /**
     * Set the public key
     *
     * @param CryptKey $key
     */
    public function setPublicKey(\YoastSEO_Vendor\League\OAuth2\Server\CryptKey $key)
    {
        $this->publicKey = $key;
        $this->initJwtConfiguration();
    }
    /**
     * Initialise the JWT configuration.
     */
    private function initJwtConfiguration()
    {
        $this->jwtConfiguration = \YoastSEO_Vendor\Lcobucci\JWT\Configuration::forSymmetricSigner(new \YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa\Sha256(), \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory::plainText('empty', 'empty'));
        $this->jwtConfiguration->setValidationConstraints(\class_exists(\YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\StrictValidAt::class) ? new \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\StrictValidAt(new \YoastSEO_Vendor\Lcobucci\Clock\SystemClock(new \DateTimeZone(\date_default_timezone_get()))) : new \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\ValidAt(new \YoastSEO_Vendor\Lcobucci\Clock\SystemClock(new \DateTimeZone(\date_default_timezone_get()))), new \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\SignedWith(new \YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa\Sha256(), \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory::plainText($this->publicKey->getKeyContents(), $this->publicKey->getPassPhrase() ?? '')));
    }
    /**
     * {@inheritdoc}
     */
    public function validateAuthorization(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        if ($request->hasHeader('authorization') === \false) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::accessDenied('Missing "Authorization" header');
        }
        $header = $request->getHeader('authorization');
        $jwt = \trim((string) \preg_replace('/^\\s*Bearer\\s/', '', $header[0]));
        try {
            // Attempt to parse the JWT
            $token = $this->jwtConfiguration->parser()->parse($jwt);
        } catch (\YoastSEO_Vendor\Lcobucci\JWT\Exception $exception) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::accessDenied($exception->getMessage(), null, $exception);
        }
        try {
            // Attempt to validate the JWT
            $constraints = $this->jwtConfiguration->validationConstraints();
            $this->jwtConfiguration->validator()->assert($token, ...$constraints);
        } catch (\YoastSEO_Vendor\Lcobucci\JWT\Validation\RequiredConstraintsViolated $exception) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::accessDenied('Access token could not be verified');
        }
        $claims = $token->claims();
        // Check if token has been revoked
        if ($this->accessTokenRepository->isAccessTokenRevoked($claims->get('jti'))) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::accessDenied('Access token has been revoked');
        }
        // Return the request with additional attributes
        return $request->withAttribute('oauth_access_token_id', $claims->get('jti'))->withAttribute('oauth_client_id', $this->convertSingleRecordAudToString($claims->get('aud')))->withAttribute('oauth_user_id', $claims->get('sub'))->withAttribute('oauth_scopes', $claims->get('scopes'));
    }
    /**
     * Convert single record arrays into strings to ensure backwards compatibility between v4 and v3.x of lcobucci/jwt
     *
     * @param mixed $aud
     *
     * @return array|string
     */
    private function convertSingleRecordAudToString($aud)
    {
        return \is_array($aud) && \count($aud) === 1 ? $aud[0] : $aud;
    }
}
