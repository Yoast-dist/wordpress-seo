<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class RelatedTo implements \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint
{
    /** @var string */
    private $subject;
    public function __construct($subject)
    {
        $this->subject = $subject;
    }
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token)
    {
        if (!$token->isRelatedTo($this->subject)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token is not related to the expected subject');
        }
    }
}
