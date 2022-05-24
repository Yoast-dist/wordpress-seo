<?php

/**
 * OAuth 2.0 Refresh token grant.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

use DateInterval;
use Exception;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestRefreshTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
/**
 * Refresh token grant.
 */
class RefreshTokenGrant extends \YoastSEO_Vendor\League\OAuth2\Server\Grant\AbstractGrant
{
    /**
     * @param RefreshTokenRepositoryInterface $refreshTokenRepository
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface $refreshTokenRepository)
    {
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
        $oldRefreshToken = $this->validateOldRefreshToken($request, $client->getIdentifier());
        $scopes = $this->validateScopes($this->getRequestParameter('scope', $request, \implode(self::SCOPE_DELIMITER_STRING, $oldRefreshToken['scopes'])));
        // The OAuth spec says that a refreshed access token can have the original scopes or fewer so ensure
        // the request doesn't include any new scopes
        foreach ($scopes as $scope) {
            if (\in_array($scope->getIdentifier(), $oldRefreshToken['scopes'], \true) === \false) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidScope($scope->getIdentifier());
            }
        }
        // Expire old tokens
        $this->accessTokenRepository->revokeAccessToken($oldRefreshToken['access_token_id']);
        if ($this->revokeRefreshTokens) {
            $this->refreshTokenRepository->revokeRefreshToken($oldRefreshToken['refresh_token_id']);
        }
        // Issue and persist new access token
        $accessToken = $this->issueAccessToken($accessTokenTTL, $client, $oldRefreshToken['user_id'], $scopes);
        $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::ACCESS_TOKEN_ISSUED, $request, $accessToken));
        $responseType->setAccessToken($accessToken);
        // Issue and persist new refresh token if given
        if ($this->revokeRefreshTokens) {
            $refreshToken = $this->issueRefreshToken($accessToken);
            if ($refreshToken !== null) {
                $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestRefreshTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::REFRESH_TOKEN_ISSUED, $request, $refreshToken));
                $responseType->setRefreshToken($refreshToken);
            }
        }
        return $responseType;
    }
    /**
     * @param ServerRequestInterface $request
     * @param string                 $clientId
     *
     * @throws OAuthServerException
     *
     * @return array
     */
    protected function validateOldRefreshToken(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, $clientId)
    {
        $encryptedRefreshToken = $this->getRequestParameter('refresh_token', $request);
        if (!\is_string($encryptedRefreshToken)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('refresh_token');
        }
        // Validate refresh token
        try {
            $refreshToken = $this->decrypt($encryptedRefreshToken);
        } catch (\Exception $e) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRefreshToken('Cannot decrypt the refresh token', $e);
        }
        $refreshTokenData = \json_decode($refreshToken, \true);
        if ($refreshTokenData['client_id'] !== $clientId) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::REFRESH_TOKEN_CLIENT_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRefreshToken('Token is not linked to client');
        }
        if ($refreshTokenData['expire_time'] < \time()) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRefreshToken('Token has expired');
        }
        if ($this->refreshTokenRepository->isRefreshTokenRevoked($refreshTokenData['refresh_token_id']) === \true) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRefreshToken('Token has been revoked');
        }
        return $refreshTokenData;
    }
    /**
     * {@inheritdoc}
     */
    public function getIdentifier()
    {
        return 'refresh_token';
    }
}
