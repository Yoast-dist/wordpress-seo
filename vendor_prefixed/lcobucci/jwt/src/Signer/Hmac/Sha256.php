<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT\Signer\Hmac;

use YoastSEO_Vendor\Lcobucci\JWT\Signer\Hmac;
/**
 * Signer for HMAC SHA-256
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 0.1.0
 */
class Sha256 extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\Hmac
{
    /**
     * {@inheritdoc}
     */
    public function getAlgorithmId()
    {
        return 'HS256';
    }
    /**
     * {@inheritdoc}
     */
    public function getAlgorithm()
    {
        return 'sha256';
    }
}
