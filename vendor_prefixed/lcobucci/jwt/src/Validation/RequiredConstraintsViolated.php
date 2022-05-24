<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation;

use YoastSEO_Vendor\Lcobucci\JWT\Exception;
use RuntimeException;
use function array_map;
use function implode;
final class RequiredConstraintsViolated extends \RuntimeException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
{
    /** @var ConstraintViolation[] */
    private $violations = [];
    /**
     * @param ConstraintViolation ...$violations
     * @return self
     */
    public static function fromViolations(\YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation ...$violations)
    {
        $exception = new self(self::buildMessage($violations));
        $exception->violations = $violations;
        return $exception;
    }
    /**
     * @param ConstraintViolation[] $violations
     *
     * @return string
     */
    private static function buildMessage(array $violations)
    {
        $violations = \array_map(static function (\YoastSEO_Vendor\Lcobucci\JWT\Validation\ConstraintViolation $violation) {
            return '- ' . $violation->getMessage();
        }, $violations);
        $message = "The token violates some mandatory constraints, details:\n";
        $message .= \implode("\n", $violations);
        return $message;
    }
    /** @return ConstraintViolation[] */
    public function violations()
    {
        return $this->violations;
    }
}
