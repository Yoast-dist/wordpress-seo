<?php
/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Inc
 */

/**
 * Represents the addon manager.
 */
class WPSEO_Addon_Manager {

	/**
	 * Holds the name of the transient.
	 *
	 * @var string
	 */
	const SITE_INFORMATION_TRANSIENT = 'wpseo_site_information';

	/**
	 * The expected addon data.
	 *
	 * @var array
	 */
	protected static $addons = array(
		// Yoast SEO Free isn't an addon actually, but we needed it in some cases.
		'wp-seo.php'            => 'yoast-seo-wordpress',
		'wp-seo-premium.php'    => 'yoast-seo-wordpress-premium',
		'wpseo-news.php'        => 'yoast-seo-news',
		'video-seo.php'         => 'yoast-seo-video',
		'wpseo-woocommerce.php' => 'yoast-seo-woocommerce',
		'local-seo.php'         => 'yoast-seo-local',
	);

	/**
	 * Hooks into WordPress.
	 *
	 * @codeCoverageIgnore
	 *
	 * @return void
	 */
	public function register_hooks() {
		add_filter( 'pre_set_site_transient_update_plugins', array( $this, 'check_for_updates' ) );
		add_filter( 'plugins_api', array( $this, 'get_plugin_information' ), 10, 3 );
	}

	/**
	 * Retrieves the site information.
	 *
	 * @return stdClass The site information.
	 */
	public function get_site_information() {
		$site_information = $this->get_site_information_transient();

		if ( $site_information ) {
			return $site_information;
		}

		$site_information = $this->request_current_sites();
		if ( $site_information ) {
			$this->set_site_information_transient( $site_information );

			return $site_information;
		}

		// Otherwise return the defaults.
		return (object) array(
			'url'           => WPSEO_Utils::get_home_url(),
			'subscriptions' => array(),
		);
	}

	/**
	 * Gets the subscriptions for current site.
	 *
	 * @return stdClass The subscriptions.
	 */
	public function get_subscriptions() {
		return $this->get_site_information()->subscriptions;
	}

	/**
	 * Retrieves the subscription for the given slug.
	 *
	 * @param string $slug The plugin slug to retrieve.
	 *
	 * @return stdClass|false Subscription data when found, false when not found.
	 */
	public function get_subscription( $slug ) {
		foreach ( $this->get_subscriptions() as $subscription ) {
			if ( $subscription->product->slug === $slug ) {
				return $subscription;
			}
		}

		return false;
	}

	/**
	 * Retrieves a list of (subscription) slugs by the active addons.
	 *
	 * @return array The slugs.
	 */
	public function get_subscriptions_for_active_addons() {
		$active_addons      = array_keys( $this->get_active_addons() );
		$subscription_slugs = array_map( array( $this, 'get_slug_by_plugin_file' ), $active_addons );
		$subscriptions      = array();
		foreach ( $subscription_slugs as $subscription_slug ) {
			$subscriptions[ $subscription_slug ] = $this->get_subscription( $subscription_slug );
		}

		return $subscriptions;
	}

	/**
	 * Retrieves a list of versions for each addon.
	 *
	 * @return array The addon versions.
	 */
	public function get_installed_addons_versions() {
		$addon_versions = array();
		foreach ( $this->get_installed_addons() as $plugin_file => $installed_addon ) {
			$addon_versions[ $this->get_slug_by_plugin_file( $plugin_file ) ] = $installed_addon['Version'];
		}

		return $addon_versions;
	}

	/**
	 * Retrieves the plugin information from the subscriptions.
	 *
	 * @param stdClass|false $data   The result object. Default false.
	 * @param string         $action The type of information being requested from the Plugin Installation API.
	 * @param stdClass       $args   Plugin API arguments.
	 *
	 * @return object Extended plugin data.
	 */
	public function get_plugin_information( $data, $action, $args ) {
		if ( $action !== 'plugin_information' ) {
			return $data;
		}

		if ( ! isset( $args->slug ) ) {
			return $data;
		}

		$subscription = $this->get_subscription( $args->slug );
		if ( ! $subscription || $subscription->expires === 'expired' ) {
			return $data;
		}

		return $this->convert_subscription_to_plugin( $subscription );
	}

	/**
	 * Checks if there are addon updates.
	 *
	 * @param stdClass|mixed $data The current data for update_plugins.
	 *
	 * @return stdClass Extended data for update_plugins.
	 */
	public function check_for_updates( $data ) {
		if ( empty( $data ) ) {
			return $data;
		}

		foreach ( $this->get_installed_addons() as $plugin_file => $installed_plugin ) {
			$subscription_slug = $this->get_slug_by_plugin_file( $plugin_file );
			$subscription      = $this->get_subscription( $subscription_slug );

			if ( ! $subscription || $subscription->expires === 'expired' ) {
				continue;
			}

			if ( version_compare( $installed_plugin['Version'], $subscription->product->version, '<' ) ) {
				$data->response[ $plugin_file ] = $this->convert_subscription_to_plugin( $subscription );
			}
		}

		return $data;
	}

	/**
	 * Converts a subscription to plugin based format.
	 *
	 * @param stdClass $subscription The subscription to convert.
	 *
	 * @return stdClass The converted subscription.
	 */
	protected function convert_subscription_to_plugin( $subscription ) {
		return (object) array(
			'new_version'   => $subscription->product->version,
			'name'          => $subscription->product->name,
			'slug'          => $subscription->product->slug,
			'url'           => $subscription->product->storeUrl,
			'last_update'   => $subscription->product->lastUpdated,
			'homepage'      => $subscription->product->storeUrl,
			'download_link' => $subscription->product->download,
			'package'       => $subscription->product->download,
			'sections'      =>
				array(
					'changelog' => $subscription->product->changelog,
				),
		);
	}

	/**
	 * Checks if the given plugin_file belongs to a Yoast addon.
	 *
	 * @param string $plugin_file Path to the plugin.
	 *
	 * @return bool True when plugin file is for a Yoast addon.
	 */
	protected function is_yoast_addon( $plugin_file ) {
		return $this->get_slug_by_plugin_file( $plugin_file ) !== '';
	}

	/**
	 * Retrieves the addon slug by given plugin file path.
	 *
	 * @param string $plugin_file The file path to the plugin.
	 *
	 * @return string The slug when found or empty string when not.
	 */
	protected function get_slug_by_plugin_file( $plugin_file ) {
		foreach ( self::$addons as $addon => $addon_slug ) {
			if ( strpos( $plugin_file, $addon ) !== false ) {
				return $addon_slug;
			}
		}

		return '';
	}

	/**
	 * Retrieves the installed Yoast addons.
	 *
	 * @return array The installed plugins.
	 */
	protected function get_installed_addons() {
		return $this->filter_by_key( $this->get_plugins(), array( $this, 'is_yoast_addon' ) );
	}

	/**
	 * Retrieves a list of active addons.
	 *
	 * @return array The active addons.
	 */
	protected function get_active_addons() {
		return $this->filter_by_key( $this->get_installed_addons(), array( $this, 'is_plugin_active' ) );
	}

	/**
	 * Retrieves the current sites from the API.
	 *
	 * @codeCoverageIgnore
	 *
	 * @return bool|stdClass Object when request is successful. False if not.
	 */
	protected function request_current_sites() {
		$api_request = new WPSEO_MyYoast_Api_Request( 'sites/current' );
		if ( $api_request->fire() ) {
			return $api_request->get_response();
		}

		return false;
	}

	/**
	 * Retrieves the transient value with the site information.
	 *
	 * @codeCoverageIgnore
	 *
	 * @return stdClass|false The transient value.
	 */
	protected function get_site_information_transient() {
		return get_transient( self::SITE_INFORMATION_TRANSIENT );
	}

	/**
	 * Sets the site information transient.
	 *
	 * @codeCoverageIgnore
	 *
	 * @param stdClass $site_information The site information to save.
	 *
	 * @return void
	 */
	protected function set_site_information_transient( $site_information ) {
		set_transient( self::SITE_INFORMATION_TRANSIENT, $site_information, DAY_IN_SECONDS );
	}

	/**
	 * Retrieves all installed WordPress plugins.
	 *
	 * @codeCoverageIgnore
	 *
	 * @return array The plugins.
	 */
	protected function get_plugins() {
		return get_plugins();
	}

	/**
	 * Checks if the given plugin file belongs to an active plugin.
	 *
	 * @codeCoverageIgnore
	 *
	 * @param string $plugin_file The file path to the plugin.
	 *
	 * @return bool True when plugin is active.
	 */
	protected function is_plugin_active( $plugin_file ) {
		return is_plugin_active( $plugin_file );
	}

	/**
	 * Filters the given array by its keys.
	 *
	 * This method is temporary. When WordPress has minimaal PHP 5.6 support we can change this to:
	 *
	 * array_filter( $array_to_filter, $filter, ARRAY_FILTER_USE_KEY )
	 *
	 * @codeCoverageIgnore
	 *
	 * @param array    $array_to_filter The array to filter.
	 * @param callable $callback        The filter callback.
	 *
	 * @return array The filtered array,
	 */
	private function filter_by_key( $array_to_filter, $callback ) {
		$keys_to_filter = array_filter( array_keys( $array_to_filter ), $callback );
		$filtered_array = array();
		foreach ( $keys_to_filter as $filtered_key ) {
			$filtered_array[ $filtered_key ] = $array_to_filter[ $filtered_key ];
		}

		return $filtered_array;
	}
}
