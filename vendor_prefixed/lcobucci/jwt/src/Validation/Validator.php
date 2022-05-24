<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation;

use YoastSEO_Vendor\Lcobucci\JWT\Token;
final class Validator implements \YoastSEO_Vendor\Lcobucci\JWT\Validator
{
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint ...$constraints)
    {
        if ($constraints === []) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\NoConstraintsGiven('No constraint given.');
        }
        $violations = [];
        foreach ($constraints as $constraint) {
            $this->checkConstraint($constraint, $token, $violations);
        }
        if ($violations) {
            throw \YoastSEO_Vendor\Lcobucci\JWT\Validation\RequiredConstraintsViolated::fromViolations(...$violations);
        }
    }
    /** @param ConstraintViolation[] $violations */
    private function checkConstraint(\YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint $constraint, \YoastSEO_Vendor\Lcobucci\JWT\Token $token, array &$violations)
    {
        try {
            $constraint->assert($token);
        } catch (\YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation $e) {
            $violations[] = $e;
        }
    }
    public function validate(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint ...$constraints)
    {
        if ($constraints === []) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\NoConstraintsGiven('No constraint given.');
        }
        try {
            foreach ($constraints as $constraint) {
                $constraint->assert($token);
            }
            return \true;
        } catch (\YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation $e) {
            return \false;
        }
    }
}
