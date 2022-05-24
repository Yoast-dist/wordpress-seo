<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Entities;

interface AuthCodeEntityInterface extends \YoastSEO_Vendor\League\OAuth2\Server\Entities\TokenInterface
{
    /**
     * @return string|null
     */
    public function getRedirectUri();
    /**
     * @param string $uri
     */
    public function setRedirectUri($uri);
}
