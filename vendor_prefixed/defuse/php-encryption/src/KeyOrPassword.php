<?php

namespace YoastSEO_Vendor\Defuse\Crypto;

use YoastSEO_Vendor\Defuse\Crypto\Exception as Ex;
final class KeyOrPassword
{
    const PBKDF2_ITERATIONS = 100000;
    const SECRET_TYPE_KEY = 1;
    const SECRET_TYPE_PASSWORD = 2;
    /**
     * @var int
     */
    private $secret_type = 0;
    /**
     * @var Key|string
     */
    private $secret;
    /**
     * Initializes an instance of KeyOrPassword from a key.
     *
     * @param Key $key
     *
     * @return KeyOrPassword
     */
    public static function createFromKey(\YoastSEO_Vendor\Defuse\Crypto\Key $key)
    {
        return new \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword(self::SECRET_TYPE_KEY, $key);
    }
    /**
     * Initializes an instance of KeyOrPassword from a password.
     *
     * @param string $password
     *
     * @return KeyOrPassword
     */
    public static function createFromPassword($password)
    {
        return new \YoastSEO_Vendor\Defuse\Crypto\KeyOrPassword(self::SECRET_TYPE_PASSWORD, $password);
    }
    /**
     * Derives authentication and encryption keys from the secret, using a slow
     * key derivation function if the secret is a password.
     *
     * @param string $salt
     *
     * @throws Ex\CryptoException
     * @throws Ex\EnvironmentIsBrokenException
     *
     * @return DerivedKeys
     */
    public function deriveKeys($salt)
    {
        \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\YoastSEO_Vendor\Defuse\Crypto\Core::ourStrlen($salt) === \YoastSEO_Vendor\Defuse\Crypto\Core::SALT_BYTE_SIZE, 'Bad salt.');
        if ($this->secret_type === self::SECRET_TYPE_KEY) {
            \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue($this->secret instanceof \YoastSEO_Vendor\Defuse\Crypto\Key);
            /**
             * @psalm-suppress PossiblyInvalidMethodCall
             */
            $akey = \YoastSEO_Vendor\Defuse\Crypto\Core::HKDF(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $this->secret->getRawBytes(), \YoastSEO_Vendor\Defuse\Crypto\Core::KEY_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::AUTHENTICATION_INFO_STRING, $salt);
            /**
             * @psalm-suppress PossiblyInvalidMethodCall
             */
            $ekey = \YoastSEO_Vendor\Defuse\Crypto\Core::HKDF(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $this->secret->getRawBytes(), \YoastSEO_Vendor\Defuse\Crypto\Core::KEY_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::ENCRYPTION_INFO_STRING, $salt);
            return new \YoastSEO_Vendor\Defuse\Crypto\DerivedKeys($akey, $ekey);
        } elseif ($this->secret_type === self::SECRET_TYPE_PASSWORD) {
            \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($this->secret));
            /* Our PBKDF2 polyfill is vulnerable to a DoS attack documented in
             * GitHub issue #230. The fix is to pre-hash the password to ensure
             * it is short. We do the prehashing here instead of in pbkdf2() so
             * that pbkdf2() still computes the function as defined by the
             * standard. */
            /**
             * @psalm-suppress PossiblyInvalidArgument
             */
            $prehash = \hash(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $this->secret, \true);
            $prekey = \YoastSEO_Vendor\Defuse\Crypto\Core::pbkdf2(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $prehash, $salt, self::PBKDF2_ITERATIONS, \YoastSEO_Vendor\Defuse\Crypto\Core::KEY_BYTE_SIZE, \true);
            $akey = \YoastSEO_Vendor\Defuse\Crypto\Core::HKDF(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $prekey, \YoastSEO_Vendor\Defuse\Crypto\Core::KEY_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::AUTHENTICATION_INFO_STRING, $salt);
            /* Note the cryptographic re-use of $salt here. */
            $ekey = \YoastSEO_Vendor\Defuse\Crypto\Core::HKDF(\YoastSEO_Vendor\Defuse\Crypto\Core::HASH_FUNCTION_NAME, $prekey, \YoastSEO_Vendor\Defuse\Crypto\Core::KEY_BYTE_SIZE, \YoastSEO_Vendor\Defuse\Crypto\Core::ENCRYPTION_INFO_STRING, $salt);
            return new \YoastSEO_Vendor\Defuse\Crypto\DerivedKeys($akey, $ekey);
        } else {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\EnvironmentIsBrokenException('Bad secret type.');
        }
    }
    /**
     * Constructor for KeyOrPassword.
     *
     * @param int   $secret_type
     * @param mixed $secret      (either a Key or a password string)
     */
    private function __construct($secret_type, $secret)
    {
        // The constructor is private, so these should never throw.
        if ($secret_type === self::SECRET_TYPE_KEY) {
            \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue($secret instanceof \YoastSEO_Vendor\Defuse\Crypto\Key);
        } elseif ($secret_type === self::SECRET_TYPE_PASSWORD) {
            \YoastSEO_Vendor\Defuse\Crypto\Core::ensureTrue(\is_string($secret));
        } else {
            throw new \YoastSEO_Vendor\Defuse\Crypto\Exception\EnvironmentIsBrokenException('Bad secret type.');
        }
        $this->secret_type = $secret_type;
        $this->secret = $secret;
    }
}
