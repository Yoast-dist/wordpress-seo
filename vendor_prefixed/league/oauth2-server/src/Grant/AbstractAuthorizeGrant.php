<?php

/**
 * Abstract authorization grant.
 *
 * @author      Julián Gutiérrez <juliangut@gmail.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Grant;

abstract class AbstractAuthorizeGrant extends \YoastSEO_Vendor\League\OAuth2\Server\Grant\AbstractGrant
{
    /**
     * @param string $uri
     * @param array  $params
     * @param string $queryDelimiter
     *
     * @return string
     */
    public function makeRedirectUri($uri, $params = [], $queryDelimiter = '?')
    {
        $uri .= \strstr($uri, $queryDelimiter) === \false ? $queryDelimiter : '&';
        return $uri . \http_build_query($params);
    }
}
