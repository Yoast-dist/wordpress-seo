<?php

namespace YoastSEO_Vendor\Defuse\Crypto;

use YoastSEO_Vendor\Defuse\Crypto\Exception as Ex;
final class Key
{
    const KEY_CURRENT_VERSION = "ήπ\0\0";
    const KEY_BYTE_SIZE = 32;
    /**
     * @var string
     */
    private $key_bytes;
    /**
     * Creates new random key.
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return Key
     */
    public static function createNewRandomKey()
    {
        return new \YoastSEO_Vendor\Defuse\Crypto\Key(\YoastSEO_Vendor\Defuse\Crypto\Core::secureRandom(self::KEY_BYTE_SIZE));
    }
    /**
     * Loads a Key from its encoded form.
     *
     * By default, this function will call Encoding::trimTrailingWhitespace()
     * to remove trailing CR, LF, NUL, TAB, and SPACE characters, which are
     * commonly appended to files when working with text editors.
     *
     * @param string $saved_key_string
     * @param bool $do_not_trim (default: false)
     *
     * @throws Ex\BadFormatException
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return Key
     */
    public static function loadFromAsciiSafeString($saved_key_string, $do_not_trim = \false)
    {
        if (!$do_not_trim) {
            $saved_key_string = \YoastSEO_Vendor\Defuse\Crypto\Encoding::trimTrailingWhitespace($saved_key_string);
        }
        $key_bytes = \YoastSEO_Vendor\Defuse\Crypto\Encoding::loadBytesFromChecksummedAsciiSafeString(self::KEY_CURRENT_VERSION, $saved_key_string);
        return new \YoastSEO_Vendor\Defuse\Crypto\Key($key_bytes);
    }
    /**
     * Encodes the Key into a string of printable ASCII characters.
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return string
     */
    public function saveToAsciiSafeString()
    {
        return \YoastSEO_Vendor\Defuse\Crypto\Encoding::saveBytesToChecksummedAsciiSafeString(self::KEY_CURRENT_VERSION, $this->key_bytes);
    }
    /**
     * Gets the raw bytes of the key.
     *
     * @return string
     */
    public function getRawBytes()
    {
        return $this->key_bytes;
    }
    /**
     * Constructs a new Key object from a string of raw bytes.
     *
     * @param string $bytes
     *
     * @throws Ex\EnvironmentIsBrokenException
     */
    private function __construct($bytes)
    {
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($bytes) === self::KEY_BYTE_SIZE, 'Bad key length.');
        $this->key_bytes = $bytes;
    }
}
