<?php

/**
 * OAuth 2.0 Redirect Response.
 *
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes;

use YoastSEO_Vendor\Psr\Http\Message\ResponseInterface;
class RedirectResponse extends \YoastSEO_Vendor\League\OAuth2\Server\ResponseTypes\AbstractResponseType
{
    /**
     * @var string
     */
    private $redirectUri;
    /**
     * @param string $redirectUri
     */
    public function setRedirectUri($redirectUri)
    {
        $this->redirectUri = $redirectUri;
    }
    /**
     * @param ResponseInterface $response
     *
     * @return ResponseInterface
     */
    public function generateHttpResponse(\YoastSEO_Vendor\Psr\Http\Message\ResponseInterface $response)
    {
        return $response->withStatus(302)->withHeader('Location', $this->redirectUri);
    }
}
