<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server;

use YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class RequestRefreshTokenEvent extends \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent
{
    /**
     * @var RefreshTokenEntityInterface
     */
    private $refreshToken;
    /**
     * @param string                 $name
     * @param ServerRequestInterface $request
     */
    public function __construct($name, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface $refreshToken)
    {
        parent::__construct($name, $request);
        $this->refreshToken = $refreshToken;
    }
    /**
     * @return RefreshTokenEntityInterface
     * @codeCoverageIgnore
     */
    public function getRefreshToken()
    {
        return $this->refreshToken;
    }
}
