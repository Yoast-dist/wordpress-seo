<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Signer\Key;

use YoastSEO_Vendor\Lcobucci\JWT\Encoding\CannotDecodeContent;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Key;
use function base64_decode;
final class InMemory extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key
{
    /**
     * @param string $contents
     * @param string $passphrase
     *
     * @return self
     */
    public static function plainText($contents, $passphrase = '')
    {
        return new self($contents, $passphrase);
    }
    /**
     * @param string $contents
     * @param string $passphrase
     *
     * @return self
     */
    public static function base64Encoded($contents, $passphrase = '')
    {
        $decoded = \base64_decode($contents, \true);
        if ($decoded === \false) {
            throw \YoastSEO_Vendor\Lcobucci\JWT\Encoding\CannotDecodeContent::invalidBase64String();
        }
        return new self($decoded, $passphrase);
    }
    /**
     * @param string $path
     * @param string $passphrase
     *
     * @return InMemory
     *
     * @throws FileCouldNotBeRead
     */
    public static function file($path, $passphrase = '')
    {
        return new self('file://' . $path, $passphrase);
    }
}
