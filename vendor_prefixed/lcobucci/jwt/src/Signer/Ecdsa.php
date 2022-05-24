<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT\Signer;

use YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa\MultibyteStringConverter;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa\SignatureConverter;
use const OPENSSL_KEYTYPE_EC;
/**
 * Base class for ECDSA signers
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 2.1.0
 */
abstract class Ecdsa extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\OpenSSL
{
    /**
     * @var SignatureConverter
     */
    private $converter;
    public function __construct(\YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa\SignatureConverter $converter = null)
    {
        $this->converter = $converter ?: new \YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa\MultibyteStringConverter();
    }
    /**
     * {@inheritdoc}
     */
    public function createHash($payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        return $this->converter->fromAsn1(parent::createHash($payload, $key), $this->getKeyLength());
    }
    /**
     * {@inheritdoc}
     */
    public function doVerify($expected, $payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        return parent::doVerify($this->converter->toAsn1($expected, $this->getKeyLength()), $payload, $key);
    }
    /**
     * Returns the length of each point in the signature, so that we can calculate and verify R and S points properly
     *
     * @internal
     */
    public abstract function getKeyLength();
    /**
     * {@inheritdoc}
     */
    public final function getKeyType()
    {
        return \OPENSSL_KEYTYPE_EC;
    }
}
