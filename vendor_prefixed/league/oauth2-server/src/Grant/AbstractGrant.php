<?php

/**
 * OAuth 2.0 Abstract grant.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

use DateInterval;
use DateTimeImmutable;
use Error;
use Exception;
use YoastSEO_Vendor\League\Event\EmitterAwareTrait;
use YoastSEO_Vendor\League\OAuth2\Server\CryptKey;
use YoastSEO_Vendor\League\OAuth2\Server\CryptTrait;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\AuthCodeEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ScopeEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException;
use YoastSEO_Vendor\League\OAuth2\Server\RedirectUriValidators\RedirectUriValidator;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\AuthCodeRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\ClientRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\ScopeRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\UserRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\RequestEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest;
use LogicException;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
use TypeError;
/**
 * Abstract grant class.
 */
abstract class AbstractGrant implements \YoastSEO_Vendor\League\OAuth2\Server\Grant\GrantTypeInterface
{
    use EmitterAwareTrait, CryptTrait;
    const SCOPE_DELIMITER_STRING = ' ';
    const MAX_RANDOM_TOKEN_GENERATION_ATTEMPTS = 10;
    /**
     * @var ClientRepositoryInterface
     */
    protected $clientRepository;
    /**
     * @var AccessTokenRepositoryInterface
     */
    protected $accessTokenRepository;
    /**
     * @var ScopeRepositoryInterface
     */
    protected $scopeRepository;
    /**
     * @var AuthCodeRepositoryInterface
     */
    protected $authCodeRepository;
    /**
     * @var RefreshTokenRepositoryInterface
     */
    protected $refreshTokenRepository;
    /**
     * @var UserRepositoryInterface
     */
    protected $userRepository;
    /**
     * @var DateInterval
     */
    protected $refreshTokenTTL;
    /**
     * @var CryptKey
     */
    protected $privateKey;
    /**
     * @var string
     */
    protected $defaultScope;
    /**
     * @var bool
     */
    protected $revokeRefreshTokens;
    /**
     * @param ClientRepositoryInterface $clientRepository
     */
    public function setClientRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\ClientRepositoryInterface $clientRepository)
    {
        $this->clientRepository = $clientRepository;
    }
    /**
     * @param AccessTokenRepositoryInterface $accessTokenRepository
     */
    public function setAccessTokenRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface $accessTokenRepository)
    {
        $this->accessTokenRepository = $accessTokenRepository;
    }
    /**
     * @param ScopeRepositoryInterface $scopeRepository
     */
    public function setScopeRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\ScopeRepositoryInterface $scopeRepository)
    {
        $this->scopeRepository = $scopeRepository;
    }
    /**
     * @param RefreshTokenRepositoryInterface $refreshTokenRepository
     */
    public function setRefreshTokenRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface $refreshTokenRepository)
    {
        $this->refreshTokenRepository = $refreshTokenRepository;
    }
    /**
     * @param AuthCodeRepositoryInterface $authCodeRepository
     */
    public function setAuthCodeRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\AuthCodeRepositoryInterface $authCodeRepository)
    {
        $this->authCodeRepository = $authCodeRepository;
    }
    /**
     * @param UserRepositoryInterface $userRepository
     */
    public function setUserRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    /**
     * {@inheritdoc}
     */
    public function setRefreshTokenTTL(\DateInterval $refreshTokenTTL)
    {
        $this->refreshTokenTTL = $refreshTokenTTL;
    }
    /**
     * Set the private key
     *
     * @param CryptKey $key
     */
    public function setPrivateKey(\YoastSEO_Vendor\League\OAuth2\Server\CryptKey $key)
    {
        $this->privateKey = $key;
    }
    /**
     * @param string $scope
     */
    public function setDefaultScope($scope)
    {
        $this->defaultScope = $scope;
    }
    /**
     * @param bool $revokeRefreshTokens
     */
    public function revokeRefreshTokens(bool $revokeRefreshTokens)
    {
        $this->revokeRefreshTokens = $revokeRefreshTokens;
    }
    /**
     * Validate the client.
     *
     * @param ServerRequestInterface $request
     *
     * @throws OAuthServerException
     *
     * @return ClientEntityInterface
     */
    protected function validateClient(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        [$clientId, $clientSecret] = $this->getClientCredentials($request);
        if ($this->clientRepository->validateClient($clientId, $clientSecret, $this->getIdentifier()) === \false) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::CLIENT_AUTHENTICATION_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidClient($request);
        }
        $client = $this->getClientEntityOrFail($clientId, $request);
        // If a redirect URI is provided ensure it matches what is pre-registered
        $redirectUri = $this->getRequestParameter('redirect_uri', $request, null);
        if ($redirectUri !== null) {
            if (!\is_string($redirectUri)) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('redirect_uri');
            }
            $this->validateRedirectUri($redirectUri, $client, $request);
        }
        return $client;
    }
    /**
     * Wrapper around ClientRepository::getClientEntity() that ensures we emit
     * an event and throw an exception if the repo doesn't return a client
     * entity.
     *
     * This is a bit of defensive coding because the interface contract
     * doesn't actually enforce non-null returns/exception-on-no-client so
     * getClientEntity might return null. By contrast, this method will
     * always either return a ClientEntityInterface or throw.
     *
     * @param string                 $clientId
     * @param ServerRequestInterface $request
     *
     * @return ClientEntityInterface
     */
    protected function getClientEntityOrFail($clientId, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        $client = $this->clientRepository->getClientEntity($clientId);
        if ($client instanceof \YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface === \false) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::CLIENT_AUTHENTICATION_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidClient($request);
        }
        return $client;
    }
    /**
     * Gets the client credentials from the request from the request body or
     * the Http Basic Authorization header
     *
     * @param ServerRequestInterface $request
     *
     * @return array
     */
    protected function getClientCredentials(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        [$basicAuthUser, $basicAuthPassword] = $this->getBasicAuthCredentials($request);
        $clientId = $this->getRequestParameter('client_id', $request, $basicAuthUser);
        if (\is_null($clientId)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('client_id');
        }
        $clientSecret = $this->getRequestParameter('client_secret', $request, $basicAuthPassword);
        if ($clientSecret !== null && !\is_string($clientSecret)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('client_secret');
        }
        return [$clientId, $clientSecret];
    }
    /**
     * Validate redirectUri from the request.
     * If a redirect URI is provided ensure it matches what is pre-registered
     *
     * @param string                 $redirectUri
     * @param ClientEntityInterface  $client
     * @param ServerRequestInterface $request
     *
     * @throws OAuthServerException
     */
    protected function validateRedirectUri(string $redirectUri, \YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface $client, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        $validator = new \YoastSEO_Vendor\League\OAuth2\Server\RedirectUriValidators\RedirectUriValidator($client->getRedirectUri());
        if (!$validator->validateRedirectUri($redirectUri)) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::CLIENT_AUTHENTICATION_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidClient($request);
        }
    }
    /**
     * Validate scopes in the request.
     *
     * @param string|array $scopes
     * @param string       $redirectUri
     *
     * @throws OAuthServerException
     *
     * @return ScopeEntityInterface[]
     */
    public function validateScopes($scopes, $redirectUri = null)
    {
        if ($scopes === null) {
            $scopes = [];
        } elseif (\is_string($scopes)) {
            $scopes = $this->convertScopesQueryStringToArray($scopes);
        }
        if (!\is_array($scopes)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('scope');
        }
        $validScopes = [];
        foreach ($scopes as $scopeItem) {
            $scope = $this->scopeRepository->getScopeEntityByIdentifier($scopeItem);
            if ($scope instanceof \YoastSEO_Vendor\League\OAuth2\Server\Entities\ScopeEntityInterface === \false) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidScope($scopeItem, $redirectUri);
            }
            $validScopes[] = $scope;
        }
        return $validScopes;
    }
    /**
     * Converts a scopes query string to an array to easily iterate for validation.
     *
     * @param string $scopes
     *
     * @return array
     */
    private function convertScopesQueryStringToArray(string $scopes)
    {
        return \array_filter(\explode(self::SCOPE_DELIMITER_STRING, \trim($scopes)), function ($scope) {
            return $scope !== '';
        });
    }
    /**
     * Retrieve request parameter.
     *
     * @param string                 $parameter
     * @param ServerRequestInterface $request
     * @param mixed                  $default
     *
     * @return null|string
     */
    protected function getRequestParameter($parameter, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, $default = null)
    {
        $requestParameters = (array) $request->getParsedBody();
        return $requestParameters[$parameter] ?? $default;
    }
    /**
     * Retrieve HTTP Basic Auth credentials with the Authorization header
     * of a request. First index of the returned array is the username,
     * second is the password (so list() will work). If the header does
     * not exist, or is otherwise an invalid HTTP Basic header, return
     * [null, null].
     *
     * @param ServerRequestInterface $request
     *
     * @return string[]|null[]
     */
    protected function getBasicAuthCredentials(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        if (!$request->hasHeader('Authorization')) {
            return [null, null];
        }
        $header = $request->getHeader('Authorization')[0];
        if (\strpos($header, 'Basic ') !== 0) {
            return [null, null];
        }
        if (!($decoded = \base64_decode(\substr($header, 6)))) {
            return [null, null];
        }
        if (\strpos($decoded, ':') === \false) {
            return [null, null];
            // HTTP Basic header without colon isn't valid
        }
        return \explode(':', $decoded, 2);
    }
    /**
     * Retrieve query string parameter.
     *
     * @param string                 $parameter
     * @param ServerRequestInterface $request
     * @param mixed                  $default
     *
     * @return null|string
     */
    protected function getQueryStringParameter($parameter, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, $default = null)
    {
        return isset($request->getQueryParams()[$parameter]) ? $request->getQueryParams()[$parameter] : $default;
    }
    /**
     * Retrieve cookie parameter.
     *
     * @param string                 $parameter
     * @param ServerRequestInterface $request
     * @param mixed                  $default
     *
     * @return null|string
     */
    protected function getCookieParameter($parameter, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, $default = null)
    {
        return isset($request->getCookieParams()[$parameter]) ? $request->getCookieParams()[$parameter] : $default;
    }
    /**
     * Retrieve server parameter.
     *
     * @param string                 $parameter
     * @param ServerRequestInterface $request
     * @param mixed                  $default
     *
     * @return null|string
     */
    protected function getServerParameter($parameter, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, $default = null)
    {
        return isset($request->getServerParams()[$parameter]) ? $request->getServerParams()[$parameter] : $default;
    }
    /**
     * Issue an access token.
     *
     * @param DateInterval           $accessTokenTTL
     * @param ClientEntityInterface  $client
     * @param string|null            $userIdentifier
     * @param ScopeEntityInterface[] $scopes
     *
     * @throws OAuthServerException
     * @throws UniqueTokenIdentifierConstraintViolationException
     *
     * @return AccessTokenEntityInterface
     */
    protected function issueAccessToken(\DateInterval $accessTokenTTL, \YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface $client, $userIdentifier, array $scopes = [])
    {
        $maxGenerationAttempts = self::MAX_RANDOM_TOKEN_GENERATION_ATTEMPTS;
        $accessToken = $this->accessTokenRepository->getNewToken($client, $scopes, $userIdentifier);
        $accessToken->setExpiryDateTime((new \DateTimeImmutable())->add($accessTokenTTL));
        $accessToken->setPrivateKey($this->privateKey);
        while ($maxGenerationAttempts-- > 0) {
            $accessToken->setIdentifier($this->generateUniqueIdentifier());
            try {
                $this->accessTokenRepository->persistNewAccessToken($accessToken);
                return $accessToken;
            } catch (\YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException $e) {
                if ($maxGenerationAttempts === 0) {
                    throw $e;
                }
            }
        }
    }
    /**
     * Issue an auth code.
     *
     * @param DateInterval           $authCodeTTL
     * @param ClientEntityInterface  $client
     * @param string                 $userIdentifier
     * @param string|null            $redirectUri
     * @param ScopeEntityInterface[] $scopes
     *
     * @throws OAuthServerException
     * @throws UniqueTokenIdentifierConstraintViolationException
     *
     * @return AuthCodeEntityInterface
     */
    protected function issueAuthCode(\DateInterval $authCodeTTL, \YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface $client, $userIdentifier, $redirectUri, array $scopes = [])
    {
        $maxGenerationAttempts = self::MAX_RANDOM_TOKEN_GENERATION_ATTEMPTS;
        $authCode = $this->authCodeRepository->getNewAuthCode();
        $authCode->setExpiryDateTime((new \DateTimeImmutable())->add($authCodeTTL));
        $authCode->setClient($client);
        $authCode->setUserIdentifier($userIdentifier);
        if ($redirectUri !== null) {
            $authCode->setRedirectUri($redirectUri);
        }
        foreach ($scopes as $scope) {
            $authCode->addScope($scope);
        }
        while ($maxGenerationAttempts-- > 0) {
            $authCode->setIdentifier($this->generateUniqueIdentifier());
            try {
                $this->authCodeRepository->persistNewAuthCode($authCode);
                return $authCode;
            } catch (\YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException $e) {
                if ($maxGenerationAttempts === 0) {
                    throw $e;
                }
            }
        }
    }
    /**
     * @param AccessTokenEntityInterface $accessToken
     *
     * @throws OAuthServerException
     * @throws UniqueTokenIdentifierConstraintViolationException
     *
     * @return RefreshTokenEntityInterface|null
     */
    protected function issueRefreshToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface $accessToken)
    {
        $refreshToken = $this->refreshTokenRepository->getNewRefreshToken();
        if ($refreshToken === null) {
            return null;
        }
        $refreshToken->setExpiryDateTime((new \DateTimeImmutable())->add($this->refreshTokenTTL));
        $refreshToken->setAccessToken($accessToken);
        $maxGenerationAttempts = self::MAX_RANDOM_TOKEN_GENERATION_ATTEMPTS;
        while ($maxGenerationAttempts-- > 0) {
            $refreshToken->setIdentifier($this->generateUniqueIdentifier());
            try {
                $this->refreshTokenRepository->persistNewRefreshToken($refreshToken);
                return $refreshToken;
            } catch (\YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException $e) {
                if ($maxGenerationAttempts === 0) {
                    throw $e;
                }
            }
        }
    }
    /**
     * Generate a new unique identifier.
     *
     * @param int $length
     *
     * @throws OAuthServerException
     *
     * @return string
     */
    protected function generateUniqueIdentifier($length = 40)
    {
        try {
            return \bin2hex(\random_bytes($length));
            // @codeCoverageIgnoreStart
        } catch (\TypeError $e) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::serverError('An unexpected error has occurred', $e);
        } catch (\Error $e) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::serverError('An unexpected error has occurred', $e);
        } catch (\Exception $e) {
            // If you get this message, the CSPRNG failed hard.
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::serverError('Could not generate a random string', $e);
        }
        // @codeCoverageIgnoreEnd
    }
    /**
     * {@inheritdoc}
     */
    public function canRespondToAccessTokenRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        $requestParameters = (array) $request->getParsedBody();
        return \array_key_exists('grant_type', $requestParameters) && $requestParameters['grant_type'] === $this->getIdentifier();
    }
    /**
     * {@inheritdoc}
     */
    public function canRespondToAuthorizationRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        return \false;
    }
    /**
     * {@inheritdoc}
     */
    public function validateAuthorizationRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        throw new \LogicException('This grant cannot validate an authorization request');
    }
    /**
     * {@inheritdoc}
     */
    public function completeAuthorizationRequest(\YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest $authorizationRequest)
    {
        throw new \LogicException('This grant cannot complete an authorization request');
    }
}
