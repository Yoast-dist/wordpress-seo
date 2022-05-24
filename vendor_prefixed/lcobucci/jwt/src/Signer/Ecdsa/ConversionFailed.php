<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Signer\Ecdsa;

use InvalidArgumentException;
use YoastSEO_Vendor\Lcobucci\JWT\Exception;
final class ConversionFailed extends \InvalidArgumentException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
{
    /** @return self */
    public static function invalidLength()
    {
        return new self('Invalid signature length.');
    }
    /** @return self */
    public static function incorrectStartSequence()
    {
        return new self('Invalid data. Should start with a sequence.');
    }
    /** @return self */
    public static function integerExpected()
    {
        return new self('Invalid data. Should contain an integer.');
    }
}
