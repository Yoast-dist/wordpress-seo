<?php

/**
 * OAuth 2.0 Password grant.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

use DateInterval;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\UserEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\UserRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestRefreshTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
/**
 * Password grant class.
 */
class PasswordGrant extends \YoastSEO_Vendor\League\OAuth2\Server\Grant\AbstractGrant
{
    /**
     * @param UserRepositoryInterface         $userRepository
     * @param RefreshTokenRepositoryInterface $refreshTokenRepository
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\UserRepositoryInterface $userRepository, \YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface $refreshTokenRepository)
    {
        $this->setUserRepository($userRepository);
        $this->setRefreshTokenRepository($refreshTokenRepository);
        $this->refreshTokenTTL = new \DateInterval('P1M');
    }
    /**
     * {@inheritdoc}
     */
    public function respondToAccessTokenRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface $responseType, \DateInterval $accessTokenTTL)
    {
        // Validate request
        $client = $this->validateClient($request);
        $scopes = $this->validateScopes($this->getRequestParameter('scope', $request, $this->defaultScope));
        $user = $this->validateUser($request, $client);
        // Finalize the requested scopes
        $finalizedScopes = $this->scopeRepository->finalizeScopes($scopes, $this->getIdentifier(), $client, $user->getIdentifier());
        // Issue and persist new access token
        $accessToken = $this->issueAccessToken($accessTokenTTL, $client, $user->getIdentifier(), $finalizedScopes);
        $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::ACCESS_TOKEN_ISSUED, $request, $accessToken));
        $responseType->setAccessToken($accessToken);
        // Issue and persist new refresh token if given
        $refreshToken = $this->issueRefreshToken($accessToken);
        if ($refreshToken !== null) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestRefreshTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::REFRESH_TOKEN_ISSUED, $request, $refreshToken));
            $responseType->setRefreshToken($refreshToken);
        }
        return $responseType;
    }
    /**
     * @param ServerRequestInterface $request
     * @param ClientEntityInterface  $client
     *
     * @throws OAuthServerException
     *
     * @return UserEntityInterface
     */
    protected function validateUser(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface $client)
    {
        $username = $this->getRequestParameter('username', $request);
        if (!\is_string($username)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('username');
        }
        $password = $this->getRequestParameter('password', $request);
        if (!\is_string($password)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('password');
        }
        $user = $this->userRepository->getUserEntityByUserCredentials($username, $password, $this->getIdentifier(), $client);
        if ($user instanceof \YoastSEO_Vendor\League\OAuth2\Server\Entities\UserEntityInterface === \false) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::USER_AUTHENTICATION_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidCredentials();
        }
        return $user;
    }
    /**
     * {@inheritdoc}
     */
    public function getIdentifier()
    {
        return 'password';
    }
}
