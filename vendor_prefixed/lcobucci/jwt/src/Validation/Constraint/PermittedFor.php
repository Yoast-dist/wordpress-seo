<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class PermittedFor implements \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint
{
    /** @var string  */
    private $audience;
    public function __construct($audience)
    {
        $this->audience = $audience;
    }
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token)
    {
        if (!$token->isPermittedFor($this->audience)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token is not allowed to be used by this audience');
        }
    }
}
