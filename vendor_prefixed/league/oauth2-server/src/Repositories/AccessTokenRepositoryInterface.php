<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Repositories;

use YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Entities\ScopeEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException;
/**
 * Access token interface.
 */
interface AccessTokenRepositoryInterface extends \YoastSEO_Vendor\League\OAuth2\Server\Repositories\RepositoryInterface
{
    /**
     * Create a new access token
     *
     * @param ClientEntityInterface  $clientEntity
     * @param ScopeEntityInterface[] $scopes
     * @param mixed                  $userIdentifier
     *
     * @return AccessTokenEntityInterface
     */
    public function getNewToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\ClientEntityInterface $clientEntity, array $scopes, $userIdentifier = null);
    /**
     * Persists a new access token to permanent storage.
     *
     * @param AccessTokenEntityInterface $accessTokenEntity
     *
     * @throws UniqueTokenIdentifierConstraintViolationException
     */
    public function persistNewAccessToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\AccessTokenEntityInterface $accessTokenEntity);
    /**
     * Revoke an access token.
     *
     * @param string $tokenId
     */
    public function revokeAccessToken($tokenId);
    /**
     * Check if the access token has been revoked.
     *
     * @param string $tokenId
     *
     * @return bool Return true if this token has been revoked
     */
    public function isAccessTokenRevoked($tokenId);
}
