<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Entities\Traits;

use DateTimeImmutable;
use YoastSEO_Vendor\Lcobucci\JWT\Configuration;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa\Sha256;
use YoastSEO_Vendor\Lcobucci\JWT\Token;
use YoastSEO_Vendor\League\OAuth2\Server\CryptKey;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ScopeEntityInterface;
trait AccessTokenTrait
{
    /**
     * @var CryptKey
     */
    private $privateKey;
    /**
     * @var Configuration
     */
    private $jwtConfiguration;
    /**
     * Set the private key used to encrypt this access token.
     */
    public function setPrivateKey(\YoastSEO_Vendor\League\OAuth2\Server\CryptKey $privateKey)
    {
        $this->privateKey = $privateKey;
    }
    /**
     * Initialise the JWT Configuration.
     */
    public function initJwtConfiguration()
    {
        $this->jwtConfiguration = \YoastSEO_Vendor\Lcobucci\JWT\Configuration::forAsymmetricSigner(new \YoastSEO_Vendor\Lcobucci\JWT\Signer\Rsa\Sha256(), \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory::plainText($this->privateKey->getKeyContents(), $this->privateKey->getPassPhrase() ?? ''), \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key\InMemory::plainText('empty', 'empty'));
    }
    /**
     * Generate a JWT from the access token
     *
     * @return Token
     */
    private function convertToJWT()
    {
        $this->initJwtConfiguration();
        return $this->jwtConfiguration->builder()->permittedFor($this->getClient()->getIdentifier())->identifiedBy($this->getIdentifier())->issuedAt(new \DateTimeImmutable())->canOnlyBeUsedAfter(new \DateTimeImmutable())->expiresAt($this->getExpiryDateTime())->relatedTo((string) $this->getUserIdentifier())->withClaim('scopes', $this->getScopes())->getToken($this->jwtConfiguration->signer(), $this->jwtConfiguration->signingKey());
    }
    /**
     * Generate a string representation from the access token
     */
    public function __toString()
    {
        return $this->convertToJWT()->toString();
    }
    /**
     * @return ClientEntityInterface
     */
    public abstract function getClient();
    /**
     * @return DateTimeImmutable
     */
    public abstract function getExpiryDateTime();
    /**
     * @return string|int
     */
    public abstract function getUserIdentifier();
    /**
     * @return ScopeEntityInterface[]
     */
    public abstract function getScopes();
    /**
     * @return string
     */
    public abstract function getIdentifier();
}
