<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Token;

use InvalidArgumentException;
use YoastSEO_Vendor\Lcobucci\JWT\Exception;
final class UnsupportedHeaderFound extends \InvalidArgumentException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
{
    /** @return self */
    public static function encryption()
    {
        return new self('Encryption is not supported yet');
    }
}
