<?php
/**
 * Yoast extension of the Model class.
 *
 * @package Yoast\YoastSEO\ORM\Repositories
 */

namespace Yoast\WP\Free\Repositories;

use Yoast\WP\Free\ORM\Yoast_Model;

/**
 * Class SEO_Links_Repository
 *
 * @package Yoast\WP\Free\ORM\Repositories
 */
class SEO_Links_Repository {

	/**
	 * Starts a query for this repository.
	 *
	 * @return \Yoast\WP\Free\ORM\ORMWrapper
	 */
	public function query() {
		return Yoast_Model::of_type( 'SEO_Links' );
	}
}
