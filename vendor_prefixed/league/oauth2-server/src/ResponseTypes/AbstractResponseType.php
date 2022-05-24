<?php

/**
 * OAuth 2.0 Abstract Response Type.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes;

use YoastSEO_Vendor\League\OAuth2\Server\CryptKey;
use YoastSEO_Vendor\League\OAuth2\Server\CryptTrait;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface;
abstract class AbstractResponseType implements \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\ResponseTypeInterface
{
    use CryptTrait;
    /**
     * @var AccessTokenEntityInterface
     */
    protected $accessToken;
    /**
     * @var RefreshTokenEntityInterface
     */
    protected $refreshToken;
    /**
     * @var CryptKey
     */
    protected $privateKey;
    /**
     * {@inheritdoc}
     */
    public function setAccessToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface $accessToken)
    {
        $this->accessToken = $accessToken;
    }
    /**
     * {@inheritdoc}
     */
    public function setRefreshToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface $refreshToken)
    {
        $this->refreshToken = $refreshToken;
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
}
