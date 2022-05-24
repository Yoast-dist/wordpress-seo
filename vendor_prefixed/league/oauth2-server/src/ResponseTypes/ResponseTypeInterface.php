<?php

/**
 * OAuth 2.0 Response Type Interface.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes;

use YoastSEO_Vendor\Defuse\Crypto\Key;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface;
use YoastSEO_Vendor\Psr\Http\Message\ResponseInterface;
interface ResponseTypeInterface
{
    /**
     * @param AccessTokenEntityInterface $accessToken
     */
    public function setAccessToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface $accessToken);
    /**
     * @param RefreshTokenEntityInterface $refreshToken
     */
    public function setRefreshToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface $refreshToken);
    /**
     * @param ResponseInterface $response
     *
     * @return ResponseInterface
     */
    public function generateHttpResponse(\YoastSEO_Vendor\Psr\Http\Message\ResponseInterface $response);
    /**
     * Set the encryption key
     *
     * @param string|Key|null $key
     */
    public function setEncryptionKey($key = null);
}
