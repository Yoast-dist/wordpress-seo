<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT\Signer;

/**
 * Base class for hmac signers
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 0.1.0
 */
abstract class Hmac extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\BaseSigner
{
    /**
     * {@inheritdoc}
     */
    public function createHash($payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        return \hash_hmac($this->getAlgorithm(), $payload, $key->getContent(), \true);
    }
    /**
     * {@inheritdoc}
     */
    public function doVerify($expected, $payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        if (!\is_string($expected)) {
            return \false;
        }
        return \hash_equals($expected, $this->createHash($payload, $key));
    }
    /**
     * Returns the algorithm name
     *
     * @internal
     *
     * @return string
     */
    public abstract function getAlgorithm();
}
