<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\AuthorizationValidators;

use YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface;
interface AuthorizationValidatorInterface
{
    /**
     * Determine the access token in the authorization header and append OAUth properties to the request
     *  as attributes.
     *
     * @param ServerRequestInterface $request
     *
     * @return ServerRequestInterface
     */
    public function validateAuthorization(\YoastSEO_Vendor\Psr\Http\Message\ServerRequestInterface $request);
}
