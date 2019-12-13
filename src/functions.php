<?php
/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Internals
 */

if ( ! defined( 'WPSEO_VERSION' ) ) {
	header( 'Status: 403 Forbidden' );
	header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

use Yoast\WP\Free\Main;

/**
 * Retrieves the main instance.
 *
 * @return Main The main instance.
 */
function yoastseo() {
	static $main;

	if ( $main === null ) {
		$main = new Main();
		$main->initialize();
	}

	return $main;
}
