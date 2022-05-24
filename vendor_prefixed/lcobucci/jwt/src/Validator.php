<?php

namespace YoastSEO_Vendor\Lcobucci\JWT;

use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\NoConstraintsGiven;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\RequiredConstraintsViolated;
interface Validator
{
    /**
     * @throws RequiredConstraintsViolated
     * @throws NoConstraintsGiven
     */
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint ...$constraints);
    /**
     * @return bool
     *
     * @throws NoConstraintsGiven
     */
    public function validate(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint ...$constraints);
}
