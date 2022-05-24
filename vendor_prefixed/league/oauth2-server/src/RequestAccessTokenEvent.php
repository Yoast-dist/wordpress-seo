<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server;

use YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class RequestAccessTokenEvent extends \YoastSEO_Vendor\League\OAuth2\Server\RequestEvent
{
    /**
     * @var AccessTokenEntityInterface
     */
    private $accessToken;
    /**
     * @param string                 $name
     * @param ServerRequestInterface $request
     */
    public function __construct($name, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request, \YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface $accessToken)
    {
        parent::__construct($name, $request);
        $this->accessToken = $accessToken;
    }
    /**
     * @return AccessTokenEntityInterface
     * @codeCoverageIgnore
     */
    public function getAccessToken()
    {
        return $this->accessToken;
    }
}
