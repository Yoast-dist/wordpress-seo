<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Signer\Key;

use YoastSEO_Vendor\Lcobucci\JWT\Exception;
use InvalidArgumentException;
if (\PHP_MAJOR_VERSION === 7) {
    final class FileCouldNotBeRead extends \InvalidArgumentException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
    {
        /** @return self */
        public static function onPath(string $path, \Throwable $cause = null)
        {
            return new self('The path "' . $path . '" does not contain a valid key file', 0, $cause);
        }
    }
} else {
    final class FileCouldNotBeRead extends \InvalidArgumentException implements \YoastSEO_Vendor\Lcobucci\JWT\Exception
    {
        /**
         * @param string $path
         * @param \Exception|null $cause
         *
         * @return self
         */
        public static function onPath($path, \Exception $cause = null)
        {
            return new self('The path "' . $path . '" does not contain a valid key file', 0, $cause);
        }
    }
}
