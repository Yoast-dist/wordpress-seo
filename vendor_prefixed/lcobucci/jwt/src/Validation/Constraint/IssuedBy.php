<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class IssuedBy implements \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint
{
    /** @var string[] */
    private $issuers;
    /** @param list<string> $issuers */
    public function __construct(...$issuers)
    {
        $this->issuers = $issuers;
    }
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token)
    {
        if (!$token->hasBeenIssuedBy(...$this->issuers)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token was not issued by the given issuers');
        }
    }
}
