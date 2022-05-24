<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

use DateInterval;
use DateTimeImmutable;
use Exception;
use YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers\CodeChallengeVerifierInterface;
use YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers\PlainVerifier;
use YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers\S256Verifier;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\UserEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\AuthCodeRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface;
use YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestRefreshTokenEvent;
use YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest;
use YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\RedirectResponse;
use YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface;
use LogicException;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
use stdClass;
class AuthCodeGrant extends \YoastSEO_Vendor\League\OAuth2\Server\Grant\AbstractAuthorizeGrant
{
    /**
     * @var DateInterval
     */
    private $authCodeTTL;
    /**
     * @var bool
     */
    private $requireCodeChallengeForPublicClients = \true;
    /**
     * @var CodeChallengeVerifierInterface[]
     */
    private $codeChallengeVerifiers = [];
    /**
     * @param AuthCodeRepositoryInterface     $authCodeRepository
     * @param RefreshTokenRepositoryInterface $refreshTokenRepository
     * @param DateInterval                    $authCodeTTL
     *
     * @throws Exception
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\Repositories\AuthCodeRepositoryInterface $authCodeRepository, \YoastSEO_Vendor\League\OAuth2\Server\Repositories\RefreshTokenRepositoryInterface $refreshTokenRepository, \DateInterval $authCodeTTL)
    {
        $this->setAuthCodeRepository($authCodeRepository);
        $this->setRefreshTokenRepository($refreshTokenRepository);
        $this->authCodeTTL = $authCodeTTL;
        $this->refreshTokenTTL = new \DateInterval('P1M');
        if (\in_array('sha256', \hash_algos(), \true)) {
            $s256Verifier = new \YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers\S256Verifier();
            $this->codeChallengeVerifiers[$s256Verifier->getMethod()] = $s256Verifier;
        }
        $plainVerifier = new \YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers\PlainVerifier();
        $this->codeChallengeVerifiers[$plainVerifier->getMethod()] = $plainVerifier;
    }
    /**
     * Disable the requirement for a code challenge for public clients.
     */
    public function disableRequireCodeChallengeForPublicClients()
    {
        $this->requireCodeChallengeForPublicClients = \false;
    }
    /**
     * Respond to an access token request.
     *
     * @param ServerRequestInterface $request
     * @param ResponseTypeInterface  $responseType
     * @param DateInterval           $accessTokenTTL
     *
     * @throws OAuthServerException
     *
     * @return ResponseTypeInterface
     */
    public function respondToAccessTokenRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface $responseType, \DateInterval $accessTokenTTL)
    {
        list($clientId) = $this->getClientCredentials($request);
        $client = $this->getClientEntityOrFail($clientId, $request);
        // Only validate the client if it is confidential
        if ($client->isConfidential()) {
            $this->validateClient($request);
        }
        $encryptedAuthCode = $this->getRequestParameter('code', $request, null);
        if (!\is_string($encryptedAuthCode)) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code');
        }
        try {
            $authCodePayload = \json_decode($this->decrypt($encryptedAuthCode));
            $this->validateAuthorizationCode($authCodePayload, $client, $request);
            $scopes = $this->scopeRepository->finalizeScopes($this->validateScopes($authCodePayload->scopes), $this->getIdentifier(), $client, $authCodePayload->user_id);
        } catch (\LogicException $e) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code', 'Cannot decrypt the authorization code', $e);
        }
        // Validate code challenge
        if (!empty($authCodePayload->code_challenge)) {
            $codeVerifier = $this->getRequestParameter('code_verifier', $request, null);
            if ($codeVerifier === null) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code_verifier');
            }
            // Validate code_verifier according to RFC-7636
            // @see: https://tools.ietf.org/html/rfc7636#section-4.1
            if (\preg_match('/^[A-Za-z0-9-._~]{43,128}$/', $codeVerifier) !== 1) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code_verifier', 'Code Verifier must follow the specifications of RFC-7636.');
            }
            if (\property_exists($authCodePayload, 'code_challenge_method')) {
                if (isset($this->codeChallengeVerifiers[$authCodePayload->code_challenge_method])) {
                    $codeChallengeVerifier = $this->codeChallengeVerifiers[$authCodePayload->code_challenge_method];
                    if ($codeChallengeVerifier->verifyCodeChallenge($codeVerifier, $authCodePayload->code_challenge) === \false) {
                        throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidGrant('Failed to verify `code_verifier`.');
                    }
                } else {
                    throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::serverError(\sprintf('Unsupported code challenge method `%s`', $authCodePayload->code_challenge_method));
                }
            }
        }
        // Issue and persist new access token
        $accessToken = $this->issueAccessToken($accessTokenTTL, $client, $authCodePayload->user_id, $scopes);
        $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestAccessTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::ACCESS_TOKEN_ISSUED, $request, $accessToken));
        $responseType->setAccessToken($accessToken);
        // Issue and persist new refresh token if given
        $refreshToken = $this->issueRefreshToken($accessToken);
        if ($refreshToken !== null) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestRefreshTokenEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::REFRESH_TOKEN_ISSUED, $request, $refreshToken));
            $responseType->setRefreshToken($refreshToken);
        }
        // Revoke used auth code
        $this->authCodeRepository->revokeAuthCode($authCodePayload->auth_code_id);
        return $responseType;
    }
    /**
     * Validate the authorization code.
     *
     * @param stdClass               $authCodePayload
     * @param ClientEntityInterface  $client
     * @param ServerRequestInterface $request
     */
    private function validateAuthorizationCode($authCodePayload, \YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface $client, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        if (!\property_exists($authCodePayload, 'auth_code_id')) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code', 'Authorization code malformed');
        }
        if (\time() > $authCodePayload->expire_time) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code', 'Authorization code has expired');
        }
        if ($this->authCodeRepository->isAuthCodeRevoked($authCodePayload->auth_code_id) === \true) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code', 'Authorization code has been revoked');
        }
        if ($authCodePayload->client_id !== $client->getIdentifier()) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code', 'Authorization code was not issued to this client');
        }
        // The redirect URI is required in this request
        $redirectUri = $this->getRequestParameter('redirect_uri', $request, null);
        if (empty($authCodePayload->redirect_uri) === \false && $redirectUri === null) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('redirect_uri');
        }
        if ($authCodePayload->redirect_uri !== $redirectUri) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('redirect_uri', 'Invalid redirect URI');
        }
    }
    /**
     * Return the grant identifier that can be used in matching up requests.
     *
     * @return string
     */
    public function getIdentifier()
    {
        return 'authorization_code';
    }
    /**
     * {@inheritdoc}
     */
    public function canRespondToAuthorizationRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        return \array_key_exists('response_type', $request->getQueryParams()) && $request->getQueryParams()['response_type'] === 'code' && isset($request->getQueryParams()['client_id']);
    }
    /**
     * {@inheritdoc}
     */
    public function validateAuthorizationRequest(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        $clientId = $this->getQueryStringParameter('client_id', $request, $this->getServerParameter('PHP_AUTH_USER', $request));
        if ($clientId === null) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('client_id');
        }
        $client = $this->getClientEntityOrFail($clientId, $request);
        $redirectUri = $this->getQueryStringParameter('redirect_uri', $request);
        if ($redirectUri !== null) {
            if (!\is_string($redirectUri)) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('redirect_uri');
            }
            $this->validateRedirectUri($redirectUri, $client, $request);
        } elseif (empty($client->getRedirectUri()) || \is_array($client->getRedirectUri()) && \count($client->getRedirectUri()) !== 1) {
            $this->getEmitter()->emit(new \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent(\YoastSEO_Vendor\League\OAuth2\Server\RequestEvent::CLIENT_AUTHENTICATION_FAILED, $request));
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidClient($request);
        }
        $defaultClientRedirectUri = \is_array($client->getRedirectUri()) ? $client->getRedirectUri()[0] : $client->getRedirectUri();
        $scopes = $this->validateScopes($this->getQueryStringParameter('scope', $request, $this->defaultScope), $redirectUri ?? $defaultClientRedirectUri);
        $stateParameter = $this->getQueryStringParameter('state', $request);
        $authorizationRequest = new \YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest();
        $authorizationRequest->setGrantTypeId($this->getIdentifier());
        $authorizationRequest->setClient($client);
        $authorizationRequest->setRedirectUri($redirectUri);
        if ($stateParameter !== null) {
            $authorizationRequest->setState($stateParameter);
        }
        $authorizationRequest->setScopes($scopes);
        $codeChallenge = $this->getQueryStringParameter('code_challenge', $request);
        if ($codeChallenge !== null) {
            $codeChallengeMethod = $this->getQueryStringParameter('code_challenge_method', $request, 'plain');
            if (\array_key_exists($codeChallengeMethod, $this->codeChallengeVerifiers) === \false) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code_challenge_method', 'Code challenge method must be one of ' . \implode(', ', \array_map(function ($method) {
                    return '`' . $method . '`';
                }, \array_keys($this->codeChallengeVerifiers))));
            }
            // Validate code_challenge according to RFC-7636
            // @see: https://tools.ietf.org/html/rfc7636#section-4.2
            if (\preg_match('/^[A-Za-z0-9-._~]{43,128}$/', $codeChallenge) !== 1) {
                throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code_challenge', 'Code challenge must follow the specifications of RFC-7636.');
            }
            $authorizationRequest->setCodeChallenge($codeChallenge);
            $authorizationRequest->setCodeChallengeMethod($codeChallengeMethod);
        } elseif ($this->requireCodeChallengeForPublicClients && !$client->isConfidential()) {
            throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::invalidRequest('code_challenge', 'Code challenge must be provided for public clients');
        }
        return $authorizationRequest;
    }
    /**
     * {@inheritdoc}
     */
    public function completeAuthorizationRequest(\YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest $authorizationRequest)
    {
        if ($authorizationRequest->getUser() instanceof \YoastSEO_Vendor\League\OAuth2\Server\Entities\UserEntityInterface === \false) {
            throw new \LogicException('An instance of UserEntityInterface should be set on the AuthorizationRequest');
        }
        $finalRedirectUri = $authorizationRequest->getRedirectUri() ?? $this->getClientRedirectUri($authorizationRequest);
        // The user approved the client, redirect them back with an auth code
        if ($authorizationRequest->isAuthorizationApproved() === \true) {
            $authCode = $this->issueAuthCode($this->authCodeTTL, $authorizationRequest->getClient(), $authorizationRequest->getUser()->getIdentifier(), $authorizationRequest->getRedirectUri(), $authorizationRequest->getScopes());
            $payload = ['client_id' => $authCode->getClient()->getIdentifier(), 'redirect_uri' => $authCode->getRedirectUri(), 'auth_code_id' => $authCode->getIdentifier(), 'scopes' => $authCode->getScopes(), 'user_id' => $authCode->getUserIdentifier(), 'expire_time' => (new \DateTimeImmutable())->add($this->authCodeTTL)->getTimestamp(), 'code_challenge' => $authorizationRequest->getCodeChallenge(), 'code_challenge_method' => $authorizationRequest->getCodeChallengeMethod()];
            $jsonPayload = \json_encode($payload);
            if ($jsonPayload === \false) {
                throw new \LogicException('An error was encountered when JSON encoding the authorization request response');
            }
            $response = new \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\RedirectResponse();
            $response->setRedirectUri($this->makeRedirectUri($finalRedirectUri, ['code' => $this->encrypt($jsonPayload), 'state' => $authorizationRequest->getState()]));
            return $response;
        }
        // The user denied the client, redirect them back with an error
        throw \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException::accessDenied('The user denied the request', $this->makeRedirectUri($finalRedirectUri, ['state' => $authorizationRequest->getState()]));
    }
    /**
     * Get the client redirect URI if not set in the request.
     *
     * @param AuthorizationRequest $authorizationRequest
     *
     * @return string
     */
    private function getClientRedirectUri(\YoastSEO_Vendor\League\OAuth2\Server\RequestTypes\AuthorizationRequest $authorizationRequest)
    {
        return \is_array($authorizationRequest->getClient()->getRedirectUri()) ? $authorizationRequest->getClient()->getRedirectUri()[0] : $authorizationRequest->getClient()->getRedirectUri();
    }
}
