<?php

/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */
namespace YoastSEO_Vendor\League\OAuth2\Server\Repositories;

use YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface;
use YoastSEO_Vendor\League\OAuth2\Server\Exception\UniqueTokenIdentifierConstraintViolationException;
/**
 * Refresh token interface.
 */
interface RefreshTokenRepositoryInterface extends \YoastSEO_Vendor\League\OAuth2\Server\Repositories\RepositoryInterface
{
    /**
     * Creates a new refresh token
     *
     * @return RefreshTokenEntityInterface|null
     */
    public function getNewRefreshToken();
    /**
     * Create a new refresh token_name.
     *
     * @param RefreshTokenEntityInterface $refreshTokenEntity
     *
     * @throws UniqueTokenIdentifierConstraintViolationException
     */
    public function persistNewRefreshToken(\YoastSEO_Vendor\League\OAuth2\Server\Entities\RefreshTokenEntityInterface $refreshTokenEntity);
    /**
     * Revoke the refresh token.
     *
     * @param string $tokenId
     */
    public function revokeRefreshToken($tokenId);
    /**
     * Check if the refresh token has been revoked.
     *
     * @param string $tokenId
     *
     * @return bool Return true if this token has been revoked
     */
    public function isRefreshTokenRevoked($tokenId);
}
