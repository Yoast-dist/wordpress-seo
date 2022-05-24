<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Signer;

use InvalidArgumentException;
use YoastSEO_Vendor\Lcobucci\JWT\Exception;
final class CannotSignPayload extends \InvalidArgumentException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
{
    /**
     * @pararm string $error
     *
     * @return self
     */
    public static function errorHappened($error)
    {
        return new self('There was an error while creating the signature: ' . $error);
    }
}
