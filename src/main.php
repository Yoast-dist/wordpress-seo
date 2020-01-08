<?php
/**
 * Yoast SEO Plugin File.
 *
 * @package Yoast\YoastSEO\Loaders
 */

namespace Yoast\WP\SEO;

use Yoast\WP\SEO\Dependency_Injection\Container_Compiler;
use Yoast\WP\SEO\Generated\Cached_Container;
use Yoast\WP\SEO\Memoizer\Meta_Tags_Context_Memoizer;

if ( ! \defined( 'WPSEO_VERSION' ) ) {
	\header( 'Status: 403 Forbidden' );
	\header( 'HTTP/1.1 403 Forbidden' );
	exit();
}

/**
 * Class Main
 */
class Main {

	/**
	 * The DI container.
	 *
	 * @var Cached_Container|null
	 */
	private $container;

	/**
	 * Initializes the plugin.
	 */
	public function initialize() {
		$this->load();
	}

	/**
	 * Retrieves an instance from the container.
	 *
	 * @param string $class_name The classname to get the instance for.
	 *
	 * @return object The instance from the container.
	 * @throws \Exception If something goes wrong generating the DI container.
	 */
	public function get_instance( $class_name ) {
		return $this->container->get( $class_name );
	}

	/**
	 * Retrieves the presentation for the current page.
	 *
	 * @return Presentations\Indexable_Presentation The presentation for current page.
	 * @throws \Exception If something goes wrong generating the DI container.
	 */
	public function get_current_page_presentation() {
		/**
		 * The value returned by get_instance.
		 *
		 * @var Memoizer\Meta_Tags_Context_Memoizer $context
		 */
		$context      = $this->get_instance( Meta_Tags_Context_Memoizer::class );
		$presentation = $context->for_current_page()->presentation;

		return $presentation;
	}

	/**
	 * Loads the plugin.
	 *
	 * @throws \Exception If loading fails and YOAST_ENVIRONMENT is development.
	 */
	public function load() {
		try {
			$this->container = $this->get_container();

			if ( ! $this->container ) {
				return;
			}

			$this->container->get( Loader::class )->load();
		} catch ( \Exception $e ) {
			if ( $this->is_development() ) {
				throw $e;
			}
			// Don't crash the entire site, simply don't load.
			// TODO: Add error notifications here.
		}
	}

	/**
	 * Loads the DI container.
	 *
	 * @return null|Cached_Container The DI container.
	 *
	 * @throws \Exception If something goes wrong generating the DI container.
	 */
	private function get_container() {
		if ( $this->is_development() && \class_exists( '\Yoast\WP\SEO\Dependency_Injection\Container_Compiler' ) ) {
			// Exception here is unhandled as it will only occur in development.
			Container_Compiler::compile( $this->is_development() );
		}

		if ( \file_exists( __DIR__ . '/generated/container.php' ) ) {
			require_once __DIR__ . '/generated/container.php';
			return new Cached_Container();
		}

		return null;
	}

	/**
	 * Returns whether or not we're in an environment for Yoast development.
	 *
	 * @return bool Whether or not to load in development mode.
	 */
	private function is_development() {
		return \defined( 'YOAST_ENVIRONMENT' ) && \YOAST_ENVIRONMENT === 'development';
	}
}
