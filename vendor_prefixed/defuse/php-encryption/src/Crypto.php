<?php

namespace YoastSEO_Vendor\Defuse\Crypto;

use YoastSEO_Vendor\Defuse\Crypto\Exception as Ex;
class Crypto
{
    /**
     * Encrypts a string with a Key.
     *
     * @param string $plaintext
     * @param Key    $key
     * @param bool   $raw_binary
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws \TypeError
     *
     * @return string
     */
    public static function encrypt($plaintext, $key, $raw_binary = \false)
    {
        if (!\is_string($plaintext)) {
            throw new \TypeError('String expected for argument 1. ' . \ucfirst(\gettype($plaintext)) . ' given instead.');
        }
        if (!$key instanceof \YoastSEO_Vendor\Defuse\Crypto\Key) {
            throw new \TypeError('Key expected for argument 2. ' . \ucfirst(\gettype($key)) . ' given instead.');
        }
        if (!\is_bool($raw_binary)) {
            throw new \TypeError('Boolean expected for argument 3. ' . \ucfirst(\gettype($raw_binary)) . ' given instead.');
        }
        return self::encryptInternal($plaintext, \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword::createFromKey($key), $raw_binary);
    }
    /**
     * Encrypts a string with a password, using a slow key derivation function
     * to make password cracking more expensive.
     *
     * @param string $plaintext
     * @param string $password
     * @param bool   $raw_binary
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws \TypeError
     *
     * @return string
     */
    public static function encryptWithPassword($plaintext, $password, $raw_binary = \false)
    {
        if (!\is_string($plaintext)) {
            throw new \TypeError('String expected for argument 1. ' . \ucfirst(\gettype($plaintext)) . ' given instead.');
        }
        if (!\is_string($password)) {
            throw new \TypeError('String expected for argument 2. ' . \ucfirst(\gettype($password)) . ' given instead.');
        }
        if (!\is_bool($raw_binary)) {
            throw new \TypeError('Boolean expected for argument 3. ' . \ucfirst(\gettype($raw_binary)) . ' given instead.');
        }
        return self::encryptInternal($plaintext, \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword::createFromPassword($password), $raw_binary);
    }
    /**
     * Decrypts a ciphertext to a string with a Key.
     *
     * @param string $ciphertext
     * @param Key    $key
     * @param bool   $raw_binary
     *
     * @throws \TypeError
     * @throws Ex\EnvironmentIsBrokenException
     * @throws Ex\WrongKeyOrModifiedCiphertextException
     *
     * @return string
     */
    public static function decrypt($ciphertext, $key, $raw_binary = \false)
    {
        if (!\is_string($ciphertext)) {
            throw new \TypeError('String expected for argument 1. ' . \ucfirst(\gettype($ciphertext)) . ' given instead.');
        }
        if (!$key instanceof \YoastSEO_Vendor\Defuse\Crypto\Key) {
            throw new \TypeError('Key expected for argument 2. ' . \ucfirst(\gettype($key)) . ' given instead.');
        }
        if (!\is_bool($raw_binary)) {
            throw new \TypeError('Boolean expected for argument 3. ' . \ucfirst(\gettype($raw_binary)) . ' given instead.');
        }
        return self::decryptInternal($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword::createFromKey($key), $raw_binary);
    }
    /**
     * Decrypts a ciphertext to a string with a password, using a slow key
     * derivation function to make password cracking more expensive.
     *
     * @param string $ciphertext
     * @param string $password
     * @param bool   $raw_binary
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws Ex\WrongKeyOrModifiedCiphertextException
     * @throws \TypeError
     *
     * @return string
     */
    public static function decryptWithPassword($ciphertext, $password, $raw_binary = \false)
    {
        if (!\is_string($ciphertext)) {
            throw new \TypeError('String expected for argument 1. ' . \ucfirst(\gettype($ciphertext)) . ' given instead.');
        }
        if (!\is_string($password)) {
            throw new \TypeError('String expected for argument 2. ' . \ucfirst(\gettype($password)) . ' given instead.');
        }
        if (!\is_bool($raw_binary)) {
            throw new \TypeError('Boolean expected for argument 3. ' . \ucfirst(\gettype($raw_binary)) . ' given instead.');
        }
        return self::decryptInternal($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword::createFromPassword($password), $raw_binary);
    }
    /**
     * Decrypts a legacy ciphertext produced by version 1 of this library.
     *
     * @param string $ciphertext
     * @param string $key
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws Ex\WrongKeyOrModifiedCiphertextException
     * @throws \TypeError
     *
     * @return string
     */
    public static function legacyDecrypt($ciphertext, $key)
    {
        if (!\is_string($ciphertext)) {
            throw new \TypeError('String expected for argument 1. ' . \ucfirst(\gettype($ciphertext)) . ' given instead.');
        }
        if (!\is_string($key)) {
            throw new \TypeError('String expected for argument 2. ' . \ucfirst(\gettype($key)) . ' given instead.');
        }
        \YoastSEO_Vendor\Defuse\Crypto\RuntimeTests::runtimeTest();
        // Extract the HMAC from the front of the ciphertext.
        if (\YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($ciphertext) <= \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_MAC_BYTE_SIZE) {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Ciphertext is too short.');
        }
        /**
         * @var string
         */
        $hmac = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, 0, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_MAC_BYTE_SIZE);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($hmac));
        /**
         * @var string
         */
        $messageCiphertext = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_MAC_BYTE_SIZE);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($messageCiphertext));
        // Regenerate the same authentication sub-key.
        $akey = \YoastSEO_Vendor\Defuse\Crypto\Core::HKDF(\YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_HASH_FUNCTION_NAME, $key, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_KEY_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_AUTHENTICATION_INFO_STRING, null);
        if (self::verifyHMAC($hmac, $messageCiphertext, $akey)) {
            // Regenerate the same encryption sub-key.
            $ekey = \YoastSEO_Vendor\Defuse\Crypto\Core::HKDF(\YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_HASH_FUNCTION_NAME, $key, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_KEY_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_ENCRYPTION_INFO_STRING, null);
            // Extract the IV from the ciphertext.
            if (\YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($messageCiphertext) <= \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_BLOCK_BYTE_SIZE) {
                throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Ciphertext is too short.');
            }
            /**
             * @var string
             */
            $iv = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($messageCiphertext, 0, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_BLOCK_BYTE_SIZE);
            \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($iv));
            /**
             * @var string
             */
            $actualCiphertext = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($messageCiphertext, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_BLOCK_BYTE_SIZE);
            \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($actualCiphertext));
            // Do the decryption.
            $plaintext = self::plainDecrypt($actualCiphertext, $ekey, $iv, \YoastSEO_Vendor\Defuse\Crypto\Core::LEGACY_CIPHER_METHOD);
            return $plaintext;
        } else {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Integrity check failed.');
        }
    }
    /**
     * Encrypts a string with either a key or a password.
     *
     * @param string        $plaintext
     * @param KeyOrPassword $secret
     * @param bool          $raw_binary
     *
     * @return string
     */
    private static function encryptInternal($plaintext, \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword $secret, $raw_binary)
    {
        \YoastSEO_Vendor\Defuse\Crypto\RuntimeTests::runtimeTest();
        $salt = \YoastSEO_Vendor\Defuse\Crypto\Core::secureRandom(\YoastSEO_Vendor\Defuse\Crypto\Core::SALT_BYTE_SIZE);
        $keys = $secret->deriveKeys($salt);
        $ekey = $keys->getEncryptionKey();
        $akey = $keys->getAuthenticationKey();
        $iv = \YoastSEO_Vendor\Defuse\Crypto\Core::secureRandom(\YoastSEO_Vendor\Defuse\Crypto\Core::BLOCK_BYTE_SIZE);
        $ciphertext = \YoastSEO_Vendor\Defuse\Crypto\Core::CURRENT_VERSION . $salt . $iv . self::plainEncrypt($plaintext, $ekey, $iv);
        $auth = \hash_hmac(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $ciphertext, $akey, \true);
        $ciphertext = $ciphertext . $auth;
        if ($raw_binary) {
            return $ciphertext;
        }
        return \YoastSEO_Vendor\Defuse\Crypto\Encoding::binToHex($ciphertext);
    }
    /**
     * Decrypts a ciphertext to a string with either a key or a password.
     *
     * @param string        $ciphertext
     * @param KeyOrPassword $secret
     * @param bool          $raw_binary
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws Ex\WrongKeyOrModifiedCiphertextException
     *
     * @return string
     */
    private static function decryptInternal($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword $secret, $raw_binary)
    {
        \YoastSEO_Vendor\Defuse\Crypto\RuntimeTests::runtimeTest();
        if (!$raw_binary) {
            try {
                $ciphertext = \YoastSEO_Vendor\Defuse\Crypto\Encoding::hexToBin($ciphertext);
            } catch (\YoastSEO_Vendor\Defuse\Crypto\Exception\BadFormatException $ex) {
                throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Ciphertext has invalid hex encoding.');
            }
        }
        if (\YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($ciphertext) < \YoastSEO_Vendor\Defuse\Crypto\Core::MINIMUM_CIPHERTEXT_SIZE) {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Ciphertext is too short.');
        }
        // Get and check the version header.
        /** @var string $header */
        $header = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, 0, \YoastSEO_Vendor\Defuse\Crypto\Core::HEADER_VERSION_SIZE);
        if ($header !== \YoastSEO_Vendor\Defuse\Crypto\Core::CURRENT_VERSION) {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Bad version header.');
        }
        // Get the salt.
        /** @var string $salt */
        $salt = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\Core::HEADER_VERSION_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::SALT_BYTE_SIZE);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($salt));
        // Get the IV.
        /** @var string $iv */
        $iv = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\Core::HEADER_VERSION_SIZE + \YoastSEO_Vendor\Defuse\Crypto\Core::SALT_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::BLOCK_BYTE_SIZE);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($iv));
        // Get the HMAC.
        /** @var string $hmac */
        $hmac = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($ciphertext) - \YoastSEO_Vendor\Defuse\Crypto\Core::MAC_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::MAC_BYTE_SIZE);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($hmac));
        // Get the actual encrypted ciphertext.
        /** @var string $encrypted */
        $encrypted = \YoastSEO_Vendor\Defuse\Crypto\Core::ourSubstr($ciphertext, \YoastSEO_Vendor\Defuse\Crypto\Core::HEADER_VERSION_SIZE + \YoastSEO_Vendor\Defuse\Crypto\Core::SALT_BYTE_SIZE + \YoastSEO_Vendor\Defuse\Crypto\Core::BLOCK_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($ciphertext) - \YoastSEO_Vendor\Defuse\Crypto\Core::MAC_BYTE_SIZE - \YoastSEO_Vendor\Defuse\Crypto\Core::SALT_BYTE_SIZE - \YoastSEO_Vendor\Defuse\Crypto\Core::BLOCK_BYTE_SIZE - \YoastSEO_Vendor\Defuse\Crypto\Core::HEADER_VERSION_SIZE);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($encrypted));
        // Derive the separate encryption and authentication keys from the key
        // or password, whichever it is.
        $keys = $secret->deriveKeys($salt);
        if (self::verifyHMAC($hmac, $header . $salt . $iv . $encrypted, $keys->getAuthenticationKey())) {
            $plaintext = self::plainDecrypt($encrypted, $keys->getEncryptionKey(), $iv, \YoastSEO_Vendor\Defuse\Crypto\Core::CIPHER_METHOD);
            return $plaintext;
        } else {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException('Integrity check failed.');
        }
    }
    /**
     * Raw unauthenticated encryption (insecure on its own).
     *
     * @param string $plaintext
     * @param string $key
     * @param string $iv
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return string
     */
    protected static function plainEncrypt($plaintext, $key, $iv)
    {
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureConstantExists('OPENSSL_RAW_DATA');
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureFunctionExists('openssl_encrypt');
        /** @var string $ciphertext */
        $ciphertext = \openssl_encrypt($plaintext, \YoastSEO_Vendor\Defuse\Crypto\Core::CIPHER_METHOD, $key, \OPENSSL_RAW_DATA, $iv);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($ciphertext), 'openssl_encrypt() failed');
        return $ciphertext;
    }
    /**
     * Raw unauthenticated decryption (insecure on its own).
     *
     * @param string $ciphertext
     * @param string $key
     * @param string $iv
     * @param string $cipherMethod
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return string
     */
    protected static function plainDecrypt($ciphertext, $key, $iv, $cipherMethod)
    {
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureConstantExists('OPENSSL_RAW_DATA');
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureFunctionExists('openssl_decrypt');
        /** @var string $plaintext */
        $plaintext = \openssl_decrypt($ciphertext, $cipherMethod, $key, \OPENSSL_RAW_DATA, $iv);
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($plaintext), 'openssl_decrypt() failed.');
        return $plaintext;
    }
    /**
     * Verifies an HMAC without leaking information through side-channels.
     *
     * @param string $expected_hmac
     * @param string $message
     * @param string $key
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return bool
     */
    protected static function verifyHMAC($expected_hmac, $message, $key)
    {
        $message_hmac = \hash_hmac(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $message, $key, \true);
        return \YoastSEO_Vendor\Defuse\Crypto\Core::hashEquals($message_hmac, $expected_hmac);
    }
}
