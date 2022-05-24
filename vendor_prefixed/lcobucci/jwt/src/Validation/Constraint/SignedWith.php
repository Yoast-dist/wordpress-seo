<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use YoastSEO_Vendor\Lcobucci\JWT\Signer;
use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class SignedWith implements \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint
{
    /** @var Signer */
    private $signer;
    /** @var Signer\Key */
    private $key;
    public function __construct(\YoastSEO_Vendor\Lcobucci\JWT\Signer $signer, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        $this->signer = $signer;
        $this->key = $key;
    }
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token)
    {
        if ($token->headers()->get('alg') !== $this->signer->getAlgorithmId()) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('Token signer mismatch');
        }
        if (!$this->signer->verify((string) $token->signature(), $token->getPayload(), $this->key)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('Token signature mismatch');
        }
    }
}
