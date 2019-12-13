<?php
/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Frontend
 */

/**
 * This class handles the Twitter card functionality.
 *
 * @deprecated xx.x
 *
 * @link https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards
 */
class WPSEO_Twitter {

	/**
	 * Instance of this class.
	 *
	 * @var object
	 */
	public static $instance;

	/**
	 * Images.
	 *
	 * @var array
	 */
	public $shown_images = array();

	/**
	 * Class constructor.
	 *
	 * @deprecated xx.x
	 * @codeCoverageIgnore
	 */
	public function __construct() {
		_deprecated_function( __METHOD__, 'WPSEO xx.x' );
	}

	/**
	 * Outputs the Twitter Card code on singular pages.
	 *
	 * @deprecated xx.x
	 * @codeCoverageIgnore
	 */
	public function twitter() {
		_deprecated_function( __METHOD__, 'WPSEO xx.x' );
	}

	/**
	 * Get the singleton instance of this class.
	 *
	 * @deprecated xx.x
	 * @codeCoverageIgnore
	 *
	 * @return object
	 */
	public static function get_instance() {
		_deprecated_function( __METHOD__, 'WPSEO xx.x' );

		return null;
	}
} /* End of class */
