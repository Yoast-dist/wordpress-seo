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
use YoastSEO_Vendor\League\OAuth2\Server\Exception\OAuthServerException;
use YoastSEO_Vendor\League\OAuth2\Server\ResourceServer;
use YoastSEO_Vendor\Psr\Http\Message\ResponseInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class ResourceServerMiddleware
{
    /**
     * @var ResourceServer
     */
    private $server;
    /**
     * @param ResourceServer $server
     */
    public function __construct(\YoastSEO_Vendor\League\OAuth2\Server\ResourceServer $server)
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
            $request = $this->server->validateAuthenticatedRequest($request);
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
