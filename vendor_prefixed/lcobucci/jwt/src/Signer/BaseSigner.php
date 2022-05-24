<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT\Signer;

use YoastSEO_Vendor\Lcobucci\JWT\Signature;
use YoastSEO_Vendor\Lcobucci\JWT\Signer;
use function trigger_error;
use const E_USER_DEPRECATED;
/**
 * Base class for signers
 *
 * @deprecated This class will be removed on v4
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 0.1.0
 */
abstract class BaseSigner implements \YoastSEO_Vendor\Lcobucci\JWT\Signer
{
    /**
     * {@inheritdoc}
     */
    public function modifyHeader(array &$headers)
    {
        $headers['alg'] = $this->getAlgorithmId();
    }
    /**
     * {@inheritdoc}
     */
    public function sign($payload, $key)
    {
        return new \YoastSEO_Vendor\Lcobucci\JWT\Signature($this->createHash($payload, $this->getKey($key)));
    }
    /**
     * {@inheritdoc}
     */
    public function verify($expected, $payload, $key)
    {
        return $this->doVerify($expected, $payload, $this->getKey($key));
    }
    /**
     * @param Key|string $key
     *
     * @return Key
     */
    private function getKey($key)
    {
        if (\is_string($key)) {
            \trigger_error('Implicit conversion of keys from strings is deprecated. Please use InMemory or LocalFileReference classes.', \E_USER_DEPRECATED);
            $key = new \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key($key);
        }
        return $key;
    }
    /**
     * Creates a hash with the given data
     *
     * @internal
     *
     * @param string $payload
     * @param Key $key
     *
     * @return string
     */
    public abstract function createHash($payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key);
    /**
     * Performs the signature verification
     *
     * @internal
     *
     * @param string $expected
     * @param string $payload
     * @param Key $key
     *
     * @return boolean
     */
    public abstract function doVerify($expected, $payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key);
}
