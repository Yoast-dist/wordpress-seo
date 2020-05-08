<?php
/**
 * Yoast SEO plugin file.
 *
 * @package Yoast\YoastSEO\Conditionals
 */

namespace Yoast\WP\SEO\Conditionals;

/**
 * Conditional that is only met when in the admin dashboard, update or Yoast SEO pages.
 */
class Yoast_Admin_And_Dashboard_Conditional implements Conditional {

	/**
	 * @inheritDoc
	 */
	public function is_met() {
		global $pagenow;

		// Do not output on plugin / theme installation pages or when wordpress is upgrading.
		if ( ( defined( 'IFRAME_REQUEST' ) && IFRAME_REQUEST ) || $this->on_plugin_or_theme_page() || wp_installing() ) {
			return false;
		}

		if ( $pagenow === 'admin.php' && isset( $_GET['page'] ) && strpos( $_GET['page'], 'wpseo' ) === 0 ) {
			return true;
		}

		return \in_array( $pagenow, [
			'index.php',
			'plugins.php',
			'update-core.php',
		], true );
	}

	/**
	 * Checks if we are on a theme or plugin upgrade page.
	 *
	 * @return bool Whether we are on a theme or plugin upgrade page.
	 */
	private function on_plugin_or_theme_page() {
		/*
		 * IFRAME_REQUEST is not defined on these pages,
		 * though these action pages do show when upgrading themes or plugins.
		 */
		$actions = [ 'do-theme-upgrade', 'do-plugin-upgrade' ];
		return isset( $_GET['action'] ) && in_array( $_GET['action'], $actions, true );
	}
}
