<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa;

use YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa;
/**
 * Signer for ECDSA SHA-384
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 2.1.0
 */
class Sha384 extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa
{
    /**
     * {@inheritdoc}
     */
    public function getAlgorithmId()
    {
        return 'ES384';
    }
    /**
     * {@inheritdoc}
     */
    public function getAlgorithm()
    {
        return 'sha384';
    }
    /**
     * {@inheritdoc}
     */
    public function getKeyLength()
    {
        return 96;
    }
}
