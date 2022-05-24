<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server;

use YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\AuthorizationValidatorInterface;
use YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\BearerTokenValidator;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class ResourceServer
{
    /**
     * @var AccessTokenRepositoryInterface
     */
    private $accessTokenRepository;
    /**
     * @var CryptKey
     */
    private $publicKey;
    /**
     * @var null|AuthorizationValidatorInterface
     */
    private $authorizationValidator;
    /**
     * New server instance.
     *
     * @param AccessTokenRepositoryInterface       $accessTokenRepository
     * @param CryptKey|string                      $publicKey
     * @param null|AuthorizationValidatorInterface $authorizationValidator
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface $accessTokenRepository, $publicKey, \YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\AuthorizationValidatorInterface $authorizationValidator = null)
    {
        $this->accessTokenRepository = $accessTokenRepository;
        if ($publicKey instanceof \YoastSEO_Vendor\League\OAuth2\Server\CryptKey === \false) {
            $publicKey = new \YoastSEO_Vendor\League\OAuth2\Server\CryptKey($publicKey);
        }
        $this->publicKey = $publicKey;
        $this->authorizationValidator = $authorizationValidator;
    }
    /**
     * @return AuthorizationValidatorInterface
     */
    protected function getAuthorizationValidator()
    {
        if ($this->authorizationValidator instanceof \YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\AuthorizationValidatorInterface === \false) {
            $this->authorizationValidator = new \YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\BearerTokenValidator($this->accessTokenRepository);
        }
        if ($this->authorizationValidator instanceof \YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators\BearerTokenValidator === \true) {
            $this->authorizationValidator->setPublicKey($this->publicKey);
        }
        return $this->authorizationValidator;
    }
    /**
     * Determine the access token validity.
     *
     * @param ServerRequestInterface $request
     *
     * @throws OAuthServerException
     *
     * @return ServerRequestInterface
     */
    public function validateAuthenticatedRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        return $this->getAuthorizationValidator()->validateAuthorization($request);
    }
}
