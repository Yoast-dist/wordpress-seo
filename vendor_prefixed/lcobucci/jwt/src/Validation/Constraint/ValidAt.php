<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use DateInterval;
use DateTimeInterface;
use YoastSEO_Vendor\Lcobucci\Clock\Clock;
use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;
use YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation;
final class ValidAt implements \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint
{
    /** @var Clock */
    private $clock;
    /** @var DateInterval */
    private $leeway;
    public function __construct(\YoastSEO_Vendor\Lcobucci\Clock\Clock $clock, \DateInterval $leeway = null)
    {
        $this->clock = $clock;
        $this->leeway = $this->guardLeeway($leeway);
    }
    /** @return DateInterval */
    private function guardLeeway(\DateInterval $leeway = null)
    {
        if ($leeway === null) {
            return new \DateInterval('PT0S');
        }
        if ($leeway->invert === 1) {
            throw \YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint\LeewayCannotBeNegative::create();
        }
        return $leeway;
    }
    public function assert(\YoastSEO_Vendor\Lcobucci\JWT\Token $token)
    {
        $now = $this->clock->now();
        $this->assertIssueTime($token, $now->add($this->leeway));
        $this->assertMinimumTime($token, $now->add($this->leeway));
        $this->assertExpiration($token, $now->sub($this->leeway));
    }
    /** @throws ConstraintViolation */
    private function assertExpiration(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \DateTimeInterface $now)
    {
        if ($token->isExpired($now)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token is expired');
        }
    }
    /** @throws ConstraintViolation */
    private function assertMinimumTime(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \DateTimeInterface $now)
    {
        if (!$token->isMinimumTimeBefore($now)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token cannot be used yet');
        }
    }
    /** @throws ConstraintViolation */
    private function assertIssueTime(\YoastSEO_Vendor\Lcobucci\JWT\Token $token, \DateTimeInterface $now)
    {
        if (!$token->hasBeenIssuedBefore($now)) {
            throw new \YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation('The token was issued in the future');
        }
    }
}
