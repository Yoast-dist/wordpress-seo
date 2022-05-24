<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Entities;

use YoastSEO_Vendor\League\OAuth2\Server\CryptKey;
interface AccessTokenEntityInterface extends \YoastSEO_Vendor\League\OAuth2\Server\Entities\TokenInterface
{
    /**
     * Set a private key used to encrypt the access token.
     */
    public function setPrivateKey(\YoastSEO_Vendor\League\OAuth2\Server\CryptKey $privateKey);
    /**
     * Generate a string representation of the access token.
     */
    public function __toString();
}
