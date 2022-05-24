<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Validation\Constraint;

use InvalidArgumentException;
use YoastSEO_Vendor\Lcobucci\JWT\Exception;
final class LeewayCannotBeNegative extends \InvalidArgumentException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
{
    /** @return self */
    public static function create()
    {
        return new self('Leeway cannot be negative');
    }
}
