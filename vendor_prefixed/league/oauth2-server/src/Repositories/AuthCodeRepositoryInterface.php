<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Repositories;

use YoastSEO_Vendor\League\OAuth2\Server\Entities\AuthCodeEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException;
/**
 * Auth code storage interface.
 */
interface AuthCodeRepositoryInterface extends \YoastSEO_Vendor\League\OAuth2\Server\Repositories\RepositoryInterface
{
    /**
     * Creates a new AuthCode
     *
     * @return AuthCodeEntityInterface
     */
    public function getNewAuthCode();
    /**
     * Persists a new auth code to permanent storage.
     *
     * @param AuthCodeEntityInterface $authCodeEntity
     *
     * @throws UniqueTokenIdentifierConstraintViolationException
     */
    public function persistNewAuthCode(\YoastSEO_Vendor\League\OAuth2\Server\Entities\AuthCodeEntityInterface $authCodeEntity);
    /**
     * Revoke an auth code.
     *
     * @param string $codeId
     */
    public function revokeAuthCode($codeId);
    /**
     * Check if the auth code has been revoked.
     *
     * @param string $codeId
     *
     * @return bool Return true if this code has been revoked
     */
    public function isAuthCodeRevoked($codeId);
}
