<?php

/**
 * OAuth 2.0 Client credentials grant.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

use DateInterval;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestEvent;
use YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
/**
 * Client credentials grant class.
 */
class ClientCredentialsGrant extends \YoastSEO_Vendor\League\OAuth2\Server\Grant\AbstractGrant
{
    /**
     * {@inheritdoc}
     */
    public function respondToAccessTokenRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface $responseType, \DateInterval $accessTokenTTL)
    {
        list($clientId) = $this->getClientCredentials($request);
        $client = $this->getClientEntityOrFail($clientId, $request);
        if (!$client->isConfidential()) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::CLIENT_AUTHENTICATION_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidClient($request);
        }
        // Validate request
        $this->validateClient($request);
        $scopes = $this->validateScopes($this->getRequestParameter('scope', $request, $this->defaultScope));
        // Finalize the requested scopes
        $finalizedScopes = $this->scopeRepository->finalizeScopes($scopes, $this->getIdentifier(), $client);
        // Issue and persist access token
        $accessToken = $this->issueAccessToken($accessTokenTTL, $client, null, $finalizedScopes);
        // Send event to emitter
        $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::ACCESS_TOKEN_ISSUED, $request, $accessToken));
        // Inject access token into response type
        $responseType->setAccessToken($accessToken);
        return $responseType;
    }
    /**
     * {@inheritdoc}
     */
    public function getIdentifier()
    {
        return 'client_credentials';
    }
}
