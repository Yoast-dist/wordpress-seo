<?php

/**
 * This file is part of Lcobucci\JWT, a simple library to handle JWT and JWS
 *
 * @license http://opensource.org/licenses/BSD-3-Clause BSD-3-Clause
 */
namespace YoastSEO_Vendor\Lcobucci\JWT;

use DateTimeImmutable;
use DateTimeInterface;
use Generator;
use YoastSEO_Vendor\Lcobucci\JWT\Claim\Factory;
use YoastSEO_Vendor\Lcobucci\JWT\Claim\Validatable;
use YoastSEO_Vendor\Lcobucci\JWT\Signer\Key;
use YoastSEO_Vendor\Lcobucci\JWT\Token\DataSet;
use YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims;
use OutOfBoundsException;
use function current;
use function func_num_args;
use function in_array;
use function is_array;
use function sprintf;
use function trigger_error;
use const E_USER_DEPRECATED;
/**
 * Basic structure of the JWT
 *
 * @author Luís Otávio Cobucci Oblonczyk <lcobucci@gmail.com>
 * @since 0.1.0
 */
class Token
{
    /**
     * The token headers
     *
     * @var DataSet
     */
    private $headers;
    /**
     * The token claim set
     *
     * @var DataSet
     */
    private $claims;
    /**
     * The token signature
     *
     * @var Signature
     */
    private $signature;
    /**
     * @internal This serves just as compatibility layer
     *
     * @var Factory
     */
    private $claimFactory;
    /**
     * Initializes the object
     *
     * @param array|DataSet $headers
     * @param array|DataSet $claims
     * @param Signature|null $signature
     * @param array $payload
     * @param Factory|null $claimFactory
     */
    public function __construct($headers = ['alg' => 'none'], $claims = [], \YoastSEO_Vendor\Lcobucci\JWT\Signature $signature = null, array $payload = ['', ''], \YoastSEO_Vendor\Lcobucci\JWT\Claim\Factory $claimFactory = null)
    {
        $this->headers = $this->convertToDataSet($headers, $payload[0]);
        $this->claims = $this->convertToDataSet($claims, $payload[1]);
        $this->signature = $signature ?: \YoastSEO_Vendor\Lcobucci\JWT\Signature::fromEmptyData();
        $this->claimFactory = $claimFactory ?: new \YoastSEO_Vendor\Lcobucci\JWT\Claim\Factory();
    }
    /**
     * @param array|DataSet $data
     * @param string $payload
     */
    private function convertToDataSet($data, $payload)
    {
        if ($data instanceof \YoastSEO_Vendor\Lcobucci\JWT\Token\DataSet) {
            return $data;
        }
        return new \YoastSEO_Vendor\Lcobucci\JWT\Token\DataSet($data, $payload);
    }
    /** @return DataSet */
    public function headers()
    {
        return $this->headers;
    }
    /**
     * Returns the token headers
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::headers()
     *
     * @return array
     */
    public function getHeaders()
    {
        $items = [];
        foreach ($this->headers->all() as $name => $value) {
            if (!\in_array($name, \YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::ALL, \true) || !$this->claims->has($name)) {
                $items[$name] = $value;
                continue;
            }
            $items[$name] = $this->claimFactory->create($name, $value);
        }
        return $items;
    }
    /**
     * Returns if the header is configured
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::headers()
     * @see DataSet::has()
     *
     * @param string $name
     *
     * @return boolean
     */
    public function hasHeader($name)
    {
        return $this->headers->has($name);
    }
    /**
     * Returns the value of a token header
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::headers()
     * @see DataSet::has()
     *
     * @param string $name
     * @param mixed $default
     *
     * @return mixed
     *
     * @throws OutOfBoundsException
     */
    public function getHeader($name, $default = null)
    {
        if (\func_num_args() === 1 && !$this->headers->has($name)) {
            throw new \OutOfBoundsException(\sprintf('Requested header "%s" is not configured', $name));
        }
        return $this->headers->get($name, $default);
    }
    /** @return DataSet */
    public function claims()
    {
        return $this->claims;
    }
    /**
     * Returns the token claim set
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::claims()
     *
     * @return array
     */
    public function getClaims()
    {
        $items = [];
        foreach ($this->claims->all() as $name => $value) {
            $items[$name] = $this->claimFactory->create($name, $value);
        }
        return $items;
    }
    /**
     * Returns if the claim is configured
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::claims()
     * @see DataSet::has()
     *
     * @param string $name
     *
     * @return boolean
     */
    public function hasClaim($name)
    {
        return $this->claims->has($name);
    }
    /**
     * Returns the value of a token claim
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::claims()
     * @see DataSet::get()
     *
     * @param string $name
     * @param mixed $default
     *
     * @return mixed
     *
     * @throws OutOfBoundsException
     */
    public function getClaim($name, $default = null)
    {
        if (\func_num_args() === 1 && !$this->claims->has($name)) {
            throw new \OutOfBoundsException(\sprintf('Requested header "%s" is not configured', $name));
        }
        $value = $this->claims->get($name, $default);
        if ($value instanceof \DateTimeImmutable && \in_array($name, \YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::DATE_CLAIMS, \true)) {
            return $value->getTimestamp();
        }
        if ($name === \YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::AUDIENCE && \is_array($value)) {
            if (\count($value) > 1) {
                \trigger_error('You will only get the first array entry as a string. Use Token::claims()->get() instead.', \E_USER_DEPRECATED);
            }
            return \current($value);
        }
        return $value;
    }
    /**
     * Verify if the key matches with the one that created the signature
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see \Lcobucci\JWT\Validation\Validator
     *
     * @param Signer $signer
     * @param Key|string $key
     *
     * @return boolean
     */
    public function verify(\YoastSEO_Vendor\Lcobucci\JWT\Signer $signer, $key)
    {
        if ($this->headers->get('alg') !== $signer->getAlgorithmId()) {
            return \false;
        }
        return $this->signature->verify($signer, $this->getPayload(), $key);
    }
    /**
     * Validates if the token is valid
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see \Lcobucci\JWT\Validation\Validator
     *
     * @param ValidationData $data
     *
     * @return boolean
     */
    public function validate(\YoastSEO_Vendor\Lcobucci\JWT\ValidationData $data)
    {
        foreach ($this->getValidatableClaims() as $claim) {
            if (!$claim->validate($data)) {
                return \false;
            }
        }
        return \true;
    }
    /**
     * Determine if the token is expired.
     *
     * @param DateTimeInterface|null $now Defaults to the current time.
     *
     * @return bool
     */
    public function isExpired(\DateTimeInterface $now = null)
    {
        if (!$this->claims->has('exp')) {
            return \false;
        }
        if ($now === null) {
            \trigger_error('Not providing the current time is deprecated. Please pass an instance of DateTimeInterface.', \E_USER_DEPRECATED);
        }
        $now = $now ?: new \DateTimeImmutable();
        return $now >= $this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::EXPIRATION_TIME);
    }
    /**
     * @param string $audience
     *
     * @return bool
     */
    public function isPermittedFor($audience)
    {
        return \in_array($audience, $this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::AUDIENCE, []), \true);
    }
    /**
     * @param string $id
     *
     * @return bool
     */
    public function isIdentifiedBy($id)
    {
        return $this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::ID) === $id;
    }
    /**
     * @param string $subject
     *
     * @return bool
     */
    public function isRelatedTo($subject)
    {
        return $this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::SUBJECT) === $subject;
    }
    /**
     * @param list<string> $issuers
     *
     * @return bool
     */
    public function hasBeenIssuedBy(...$issuers)
    {
        return \in_array($this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::ISSUER), $issuers, \true);
    }
    /**
     * @param DateTimeInterface $now
     *
     * @return bool
     */
    public function hasBeenIssuedBefore(\DateTimeInterface $now)
    {
        return $now >= $this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::ISSUED_AT);
    }
    /**
     * @param DateTimeInterface $now
     *
     * @return bool
     */
    public function isMinimumTimeBefore(\DateTimeInterface $now)
    {
        return $now >= $this->claims->get(\YoastSEO_Vendor\Lcobucci\JWT\Token\RegisteredClaims::NOT_BEFORE);
    }
    /**
     * Yields the validatable claims
     *
     * @return Generator
     */
    private function getValidatableClaims()
    {
        foreach ($this->getClaims() as $claim) {
            if ($claim instanceof \YoastSEO_Vendor\Lcobucci\JWT\Claim\Validatable) {
                (yield $claim);
            }
        }
    }
    /**
     * Returns the token payload
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::payload()
     *
     * @return string
     */
    public function getPayload()
    {
        return $this->payload();
    }
    /**
     * Returns the token payload
     *
     * @return string
     */
    public function payload()
    {
        return $this->headers->toString() . '.' . $this->claims->toString();
    }
    /** @return Signature */
    public function signature()
    {
        return $this->signature;
    }
    /**
     * Returns an encoded representation of the token
     *
     * @deprecated This method has been removed from the interface in v4.0
     * @see Token::toString()
     *
     * @return string
     */
    public function __toString()
    {
        return $this->toString();
    }
    /** @return string */
    public function toString()
    {
        return $this->headers->toString() . '.' . $this->claims->toString() . '.' . $this->signature->toString();
    }
}
