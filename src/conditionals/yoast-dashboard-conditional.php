<?php
/**
 * Yoast SEO plugin file.
 *
 * @package Yoast\YoastSEO\Conditionals
 */

namespace Yoast\WP\SEO\Conditionals;

/**
 * Conditional that is only met when in the admin.
 */
class Yoast_Dashboard_Conditional implements Conditional {

	/**
	 * @inheritDoc
	 */
	public function is_met() {
		return ( \filter_input( INPUT_GET, 'page' ) === 'wpseo_tools' );
	}
}
