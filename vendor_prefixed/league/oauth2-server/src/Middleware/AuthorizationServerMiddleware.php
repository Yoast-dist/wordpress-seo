<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Middleware;

use Exception;
use YoastSEO_Vendor\League\OAuth2\Server\AuthorizationServer;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\Psr\Http\Message\ResponseInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class AuthorizationServerMiddleware
{
    /**
     * @var AuthorizationServer
     */
    private $server;
    /**
     * @param AuthorizationServer $server
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\AuthorizationServer $server)
    {
        $this->server = $server;
    }
    /**
     * @param ServerRequestInterface $request
     * @param ResponseInterface      $response
     * @param callable               $next
     *
     * @return ResponseInterface
     */
    public function __invoke(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\Psr\Http\Message\ResponseInterface $response, callable $next)
    {
        try {
            $response = $this->server->respondToAccessTokenRequest($request, $response);
        } catch (\YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException $exception) {
            return $exception->generateHttpResponse($response);
            // @codeCoverageIgnoreStart
        } catch (\Exception $exception) {
            return (new \YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException($exception->getMessage(), 0, 'unknown_error', 500))->generateHttpResponse($response);
            // @codeCoverageIgnoreEnd
        }
        // Pass the request and response on to the next responder in the chain
        return $next($request, $response);
    }
}
