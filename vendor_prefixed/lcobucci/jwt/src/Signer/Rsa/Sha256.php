<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa;

use YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa;
/**
 * Signer for RSA SHA-256
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 2.1.0
 */
class Sha256 extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa
{
    /**
     * {@inheritdoc}
     */
    public function getAlgorithmId()
    {
        return 'RS256';
    }
    /**
     * {@inheritdoc}
     */
    public function getAlgorithm()
    {
        return \OPENSSL_ALGO_SHA256;
    }
}
