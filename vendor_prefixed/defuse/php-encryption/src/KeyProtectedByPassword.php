<?php

namespace YoastSEO_Vendor\Defuse\Crypto;

use YoastSEO_Vendor\Defuse\Crypto\Exception as Ex;
final class KeyProtectedByPassword
{
    const PASSWORD_KEY_CURRENT_VERSION = "ήρ\0\0";
    /**
     * @var string
     */
    private $encrypted_key = '';
    /**
     * Creates a random key protected by the provided password.
     *
     * @param string $password
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return KeyProtectedByPassword
     */
    public static function createRandomPasswordProtectedKey($password)
    {
        $inner_key = \YoastSEO_Vendor\Defuse\Crypto\Key::createNewRandomKey();
        /* The password is hashed as a form of poor-man's domain separation
         * between this use of encryptWithPassword() and other uses of
         * encryptWithPassword() that the user may also be using as part of the
         * same protocol. */
        $encrypted_key = \YoastSEO_Vendor\Defuse\Crypto\Crypto::encryptWithPassword($inner_key->saveToAsciiSafeString(), \hash(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $password, \true), \true);
        return new \YoastSEO_Vendor\Defuse\Crypto\KeyProtectedByPassword($encrypted_key);
    }
    /**
     * Loads a KeyProtectedByPassword from its encoded form.
     *
     * @param string $saved_key_string
     *
     * @throws Ex\BadFormatException
     *
     * @return KeyProtectedByPassword
     */
    public static function loadFromAsciiSafeString($saved_key_string)
    {
        $encrypted_key = \YoastSEO_Vendor\Defuse\Crypto\Encoding::loadBytesFromChecksummedAsciiSafeString(self::PASSWORD_KEY_CURRENT_VERSION, $saved_key_string);
        return new \YoastSEO_Vendor\Defuse\Crypto\KeyProtectedByPassword($encrypted_key);
    }
    /**
     * Encodes the KeyProtectedByPassword into a string of printable ASCII
     * characters.
     *
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return string
     */
    public function saveToAsciiSafeString()
    {
        return \YoastSEO_Vendor\Defuse\Crypto\Encoding::saveBytesToChecksummedAsciiSafeString(self::PASSWORD_KEY_CURRENT_VERSION, $this->encrypted_key);
    }
    /**
     * Decrypts the protected key, returning an unprotected Key object that can
     * be used for encryption and decryption.
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws Ex\WrongKeyOrModifiedCiphertextException
     *
     * @param string $password
     * @return Key
     */
    public function unlockKey($password)
    {
        try {
            $inner_key_encoded = \YoastSEO_Vendor\Defuse\Crypto\Crypto::decryptWithPassword($this->encrypted_key, \hash(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $password, \true), \true);
            return \YoastSEO_Vendor\Defuse\Crypto\Key::loadFromAsciiSafeString($inner_key_encoded);
        } catch (\YoastSEO_Vendor\Defuse\Crypto\Exception\BadFormatException $ex) {
            /* This should never happen unless an attacker replaced the
             * encrypted key ciphertext with some other ciphertext that was
             * encrypted with the same password. We transform the exception type
             * here in order to make the API simpler, avoiding the need to
             * document that this method might throw an Ex\BadFormatException. */
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\WrongKeyOrModifiedCiphertextException("The decrypted key was found to be in an invalid format. " . "This very likely indicates it was modified by an attacker.");
        }
    }
    /**
     * Changes the password.
     *
     * @param string $current_password
     * @param string $new_password
     *
     * @throws Ex\EnvironmentIsBrokenException
     * @throws Ex\WrongKeyOrModifiedCiphertextException
     *
     * @return KeyProtectedByPassword
     */
    public function changePassword($current_password, $new_password)
    {
        $inner_key = $this->unlockKey($current_password);
        /* The password is hashed as a form of poor-man's domain separation
         * between this use of encryptWithPassword() and other uses of
         * encryptWithPassword() that the user may also be using as part of the
         * same protocol. */
        $encrypted_key = \YoastSEO_Vendor\Defuse\Crypto\Crypto::encryptWithPassword($inner_key->saveToAsciiSafeString(), \hash(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $new_password, \true), \true);
        $this->encrypted_key = $encrypted_key;
        return $this;
    }
    /**
     * Constructor for KeyProtectedByPassword.
     *
     * @param string $encrypted_key
     */
    private function __construct($encrypted_key)
    {
        $this->encrypted_key = $encrypted_key;
    }
}
