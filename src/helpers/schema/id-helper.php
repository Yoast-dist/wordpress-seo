<?php
/**
 * WPSEO plugin file.
 *
 * @package Yoast\WP\SEO\Helpers\Schema
 */

namespace Yoast\WP\SEO\Helpers\Schema;

use Exception;
use Yoast\WP\SEO\Context\Meta_Tags_Context;

/**
 * Schema utility functions.
 *
 * @property string author_hash
 * @property string author_logo_hash
 * @property string breadcrumb_hash
 * @property string person_hash
 * @property string article_hash
 * @property string organization_hash
 * @property string organization_logo_hash
 * @property string person_logo_hash
 * @property string primary_image_hash
 * @property string webpage_hash
 * @property string website_hash
 */
class ID_Helper {
	/**
	 * Hash used for the Author `@id`.
	 */
	const AUTHOR_HASH = '#author';

	/**
	 * Hash used for the Author Logo's `@id`.
	 */
	const AUTHOR_LOGO_HASH = '#authorlogo';

	/**
	 * Hash used for the Breadcrumb's `@id`.
	 */
	const BREADCRUMB_HASH = '#breadcrumb';

	/**
	 * Hash used for the Person `@id`.
	 */
	const PERSON_HASH = '#/schema/person/';

	/**
	 * Hash used for the Article `@id`.
	 */
	const ARTICLE_HASH = '#article';

	/**
	 * Hash used for the Organization `@id`.
	 */
	const ORGANIZATION_HASH = '#organization';

	/**
	 * Hash used for the Organization `@id`.
	 */
	const ORGANIZATION_LOGO_HASH = '#logo';

	/**
	 * Hash used for the logo `@id`.
	 */
	const PERSON_LOGO_HASH = '#personlogo';

	/**
	 * Hash used for an Article's primary image `@id`.
	 */
	const PRIMARY_IMAGE_HASH = '#primaryimage';

	/**
	 * Hash used for the WebPage's `@id`.
	 */
	const WEBPAGE_HASH = '#webpage';

	/**
	 * Hash used for the Website's `@id`.
	 */
	const WEBSITE_HASH = '#website';

	/**
	 * Retrieve a users Schema ID.
	 *
	 * @param int               $user_id The ID of the User you need a Schema ID for.
	 * @param Meta_Tags_Context $context A value object with context variables.
	 *
	 * @return string The user's schema ID.
	 */
	public function get_user_schema_id( $user_id, $context ) {
		$user = get_userdata( $user_id );
		if ( is_a( $user, 'WP_User' ) ) {
			return $context->site_url . $this->person_hash . wp_hash( $user->user_login . $user_id );
		}

		return '';
	}

	/**
	 * Magic getter for lazy loading of generate functions.
	 *
	 * @param string $name The constant to get.
	 *
	 * @return mixed The value if it could be generated.
	 *
	 * @throws Exception If there is no generator for the property.
	 */
	public function __get( $name ) {
		$name = strtoupper( $name );

		if ( \defined( 'static::' . $name ) ) {
			return \constant( 'static::' . $name );
		}
		throw new Exception( "Property $name does not exist." );
	}
}
