<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation;

use YoastSEO_Vendor\Lcobucci\JWT\Token;
interface Constraint
{
    /** @throws ConstraintViolation */
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token);
}
