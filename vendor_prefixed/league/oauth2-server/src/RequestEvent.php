<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server;

use YoastSEO_Vendor\League\Event\Event;
use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
class RequestEvent extends \YoastSEO_Vendor\League\Event\Event
{
    const CLIENT_AUTHENTICATION_FAILED = 'client.authentication.failed';
    const USER_AUTHENTICATION_FAILED = 'user.authentication.failed';
    const REFRESH_TOKEN_CLIENT_FAILED = 'refresh_token.client.failed';
    const REFRESH_TOKEN_ISSUED = 'refresh_token.issued';
    const ACCESS_TOKEN_ISSUED = 'access_token.issued';
    /**
     * @var ServerRequestInterface
     */
    private $request;
    /**
     * RequestEvent constructor.
     *
     * @param string                 $name
     * @param ServerRequestInterface $request
     */
    public function __construct($name, \YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request)
    {
        parent::__construct($name);
        $this->request = $request;
    }
    /**
     * @return ServerRequestInterface
     * @codeCoverageIgnore
     */
    public function getRequest()
    {
        return $this->request;
    }
}
