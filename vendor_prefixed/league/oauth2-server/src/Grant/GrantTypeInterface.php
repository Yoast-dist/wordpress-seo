<?php

/**
 * OAuth 2.0 Grant type interface.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

use DateInterval;
use YoastSEO_Vendor\Defuse\Crypto\Key;
use YoastSEO_Vendor\League\Event\EmitterAwareInterface;
use YoastSEO_Vendor\League\OAuth2\Server\CryptKey;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\ClientRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\ScopeRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest;
use YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
/**
 * Grant type interface.
 */
interface GrantTypeInterface extends \YoastSEO_Vendor\League\Event\EmitterAwareInterface
{
    /**
     * Set refresh token TTL.
     *
     * @param DateInterval $refreshTokenTTL
     */
    public function setRefreshTokenTTL(\DateInterval $refreshTokenTTL);
    /**
     * Return the grant identifier that can be used in matching up requests.
     *
     * @return string
     */
    public function getIdentifier();
    /**
     * Respond to an incoming request.
     *
     * @param ServerRequestInterface $request
     * @param ResponseTypeInterface  $responseType
     * @param DateInterval           $accessTokenTTL
     *
     * @return ResponseTypeInterface
     */
    public function respondToAccessTokenRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface $responseType, \DateInterval $accessTokenTTL);
    /**
     * The grant type should return true if it is able to response to an authorization request
     *
     * @param ServerRequestInterface $request
     *
     * @return bool
     */
    public function canRespondToAuthorizationRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request);
    /**
     * If the grant can respond to an authorization request this method should be called to validate the parameters of
     * the request.
     *
     * If the validation is successful an AuthorizationRequest object will be returned. This object can be safely
     * serialized in a user's session, and can be used during user authentication and authorization.
     *
     * @param ServerRequestInterface $request
     *
     * @return AuthorizationRequest
     */
    public function validateAuthorizationRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request);
    /**
     * Once a user has authenticated and authorized the client the grant can complete the authorization request.
     * The AuthorizationRequest object's $userId property must be set to the authenticated user and the
     * $authorizationApproved property must reflect their desire to authorize or deny the client.
     *
     * @param AuthorizationRequest $authorizationRequest
     *
     * @return ResponseTypeInterface
     */
    public function completeAuthorizationRequest(\YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest $authorizationRequest);
    /**
     * The grant type should return true if it is able to respond to this request.
     *
     * For example most grant types will check that the $_POST['grant_type'] property matches it's identifier property.
     *
     * @param ServerRequestInterface $request
     *
     * @return bool
     */
    public function canRespondToAccessTokenRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request);
    /**
     * Set the client repository.
     *
     * @param ClientRepositoryInterface $clientRepository
     */
    public function setClientRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\ClientRepositoryInterface $clientRepository);
    /**
     * Set the access token repository.
     *
     * @param AccessTokenRepositoryInterface $accessTokenRepository
     */
    public function setAccessTokenRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\AccessTokenRepositoryInterface $accessTokenRepository);
    /**
     * Set the scope repository.
     *
     * @param ScopeRepositoryInterface $scopeRepository
     */
    public function setScopeRepository(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\ScopeRepositoryInterface $scopeRepository);
    /**
     * Set the default scope.
     *
     * @param string $scope
     */
    public function setDefaultScope($scope);
    /**
     * Set the path to the private key.
     *
     * @param CryptKey $privateKey
     */
    public function setPrivateKey(\YoastSEO_Vendor\League\OAuth2\Server\CryptKey $privateKey);
    /**
     * Set the encryption key
     *
     * @param string|Key|null $key
     */
    public function setEncryptionKey($key = null);
}
