<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class IdentifiedBy implements \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint
{
    /** @var string */
    private $id;
    /** @param string $id */
    public function __construct($id)
    {
        $this->id = $id;
    }
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token)
    {
        if (!$token->isIdentifiedBy($this->id)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token is not identified with the expected ID');
        }
    }
}
