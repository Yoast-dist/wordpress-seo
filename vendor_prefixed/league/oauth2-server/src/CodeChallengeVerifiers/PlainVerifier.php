<?php

/**
 * @author      Lukáš Unger <lookymsc@gmail.com>
 * @copyright   Copyright (c) Lukáš Unger
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers;

class PlainVerifier implements \YoastSEO_Vendor\League\OAuth2\Server\CodeChallengeVerifiers\CodeChallengeVerifierInterface
{
    /**
     * Return code challenge method.
     *
     * @return string
     */
    public function getMethod()
    {
        return 'plain';
    }
    /**
     * Verify the code challenge.
     *
     * @param string $codeVerifier
     * @param string $codeChallenge
     *
     * @return bool
     */
    public function verifyCodeChallenge($codeVerifier, $codeChallenge)
    {
        return \hash_equals($codeVerifier, $codeChallenge);
    }
}
