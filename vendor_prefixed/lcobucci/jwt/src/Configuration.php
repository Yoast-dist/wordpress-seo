<?php

namespace YoastSEO_Vendor\Lcobucci\JWT;

use Closure;
use YoastSEO_Vendor\Lcobucci\JWT\Parsing\Decoder;
use YoastSEO_Vendor\Lcobucci\JWT\Parsing\Encoder;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Key;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\None;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
/**
 * Configuration container for the JWT Builder and Parser
 *
 * Serves like a small DI container to simplify the creation and usage
 * of the objects.
 */
final class Configuration
{
    /** @var Parser */
    private $parser;
    /** @var Signer */
    private $signer;
    /** @var Key */
    private $signingKey;
    /** @var Key */
    private $verificationKey;
    /** @var Validator */
    private $validator;
    /** @var Closure(): Builder */
    private $builderFactory;
    /** @var Constraint[] */
    private $validationConstraints = [];
    private function __construct(\YoastSEO_Vendor\Lcobucci\JWT\Signer $signer, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $signingKey, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $verificationKey, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Encoder $encoder = null, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Decoder $decoder = null)
    {
        $this->signer = $signer;
        $this->signingKey = $signingKey;
        $this->verificationKey = $verificationKey;
        $this->parser = new \YoastSEO_Vendor\Lcobucci\JWT\Parser($decoder ?: new \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Decoder());
        $this->validator = new \YoastSEO_Vendor\Lcobucci\JWT\Validation\Validator();
        $this->builderFactory = static function () use($encoder) {
            return new \YoastSEO_Vendor\Lcobucci\JWT\Builder($encoder ?: new \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Encoder());
        };
    }
    /** @return self */
    public static function forAsymmetricSigner(\YoastSEO_Vendor\Lcobucci\JWT\Signer $signer, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $signingKey, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $verificationKey, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Encoder $encoder = null, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Decoder $decoder = null)
    {
        return new self($signer, $signingKey, $verificationKey, $encoder, $decoder);
    }
    /** @return self */
    public static function forSymmetricSigner(\YoastSEO_Vendor\Lcobucci\JWT\Signer $signer, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Encoder $encoder = null, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Decoder $decoder = null)
    {
        return new self($signer, $key, $key, $encoder, $decoder);
    }
    /** @return self */
    public static function forUnsecuredSigner(\YoastSEO_Vendor\Lcobucci\JWT\Parsing\Encoder $encoder = null, \YoastSEO_Vendor\Lcobucci\JWT\Parsing\Decoder $decoder = null)
    {
        $key = \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory::plainText('');
        return new self(new \YoastSEO_Vendor\Lcobucci\JWT\Signer\None(), $key, $key, $encoder, $decoder);
    }
    /** @param callable(): Builder $builderFactory */
    public function setBuilderFactory(callable $builderFactory)
    {
        if (!$builderFactory instanceof \Closure) {
            $builderFactory = static function () use($builderFactory) {
                return $builderFactory();
            };
        }
        $this->builderFactory = $builderFactory;
    }
    /** @return Builder */
    public function builder()
    {
        $factory = $this->builderFactory;
        return $factory();
    }
    /** @return Parser */
    public function parser()
    {
        return $this->parser;
    }
    public function setParser(\YoastSEO_Vendor\Lcobucci\JWT\Parser $parser)
    {
        $this->parser = $parser;
    }
    /** @return Signer */
    public function signer()
    {
        return $this->signer;
    }
    /** @return Key */
    public function signingKey()
    {
        return $this->signingKey;
    }
    /** @return Key */
    public function verificationKey()
    {
        return $this->verificationKey;
    }
    /** @return Validator */
    public function validator()
    {
        return $this->validator;
    }
    public function setValidator(\YoastSEO_Vendor\Lcobucci\JWT\Validator $validator)
    {
        $this->validator = $validator;
    }
    /** @return Constraint[] */
    public function validationConstraints()
    {
        return $this->validationConstraints;
    }
    public function setValidationConstraints(\YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint ...$validationConstraints)
    {
        $this->validationConstraints = $validationConstraints;
    }
}
