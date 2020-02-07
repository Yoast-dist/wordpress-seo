<?php
/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Internals
 */

/**
 * Represents the health check for Ryte.
 */
class WPSEO_Health_Check_Ryte extends WPSEO_Health_Check {

	/**
	 * The name of the test.
	 *
	 * @var string
	 */
	protected $test = 'yoast-health-check-ryte';

	/**
	 * The Ryte option.
	 *
	 * @var WPSEO_Ryte_Option $ryte_option The Ryte Option.
	 */
	protected $ryte_option;

	/**
	 * Runs the test.
	 *
	 * @return void
	 */
	public function run() {
		$this->ryte_option = $this->get_ryte_option();

		// If Ryte is disabled or the blog is not public or development mode is on, don't run code.
		if ( ! $this->should_run() ) {
			return;
		}

		/*
		 * Fetch the indexability status, set last fetch time, and update the
		 * Ryte option status. Will run a new fetch only if the last fetch is not
		 * within the `WPSEO_Ryte_Option::FETCH_LIMIT` time interval.
		 */
		$wpseo_ryte = new WPSEO_Ryte();
		$wpseo_ryte->fetch_from_ryte();

		// Get the updated Ryte option.
		$this->ryte_option = $this->get_ryte_option();

		switch ( $this->ryte_option->get_status() ) {
			case WPSEO_Ryte_Option::IS_NOT_INDEXABLE:
				$this->is_not_indexable_response();
				break;
			case WPSEO_Ryte_Option::IS_INDEXABLE:
				$this->is_indexable_response();
				break;
			case WPSEO_Ryte_Option::NOT_FETCHED:
			default: // WPSEO_Ryte_Option::CANNOT_FETCH.
				$this->unknown_indexability_response();
				break;
		}

		$this->add_yoast_signature();
	}

	/**
	 * Checks whether Ryte is enabled, the blog is public, and it is not development mode.
	 *
	 * @return bool True when Ryte is enabled, the blog is public and development mode is not on.
	 */
	protected function should_run() {
		if ( ! $this->ryte_option->is_enabled() ) {
			return false;
		}

		if ( '0' === get_option( 'blog_public' ) ) {
			return false;
		}

		return ! $this->is_development_mode();
	}

	/**
	 * Checks if debug mode is on but Yoast development mode is not on (i.e. for non-Yoast developers).
	 *
	 * @return bool True when debug mode is on and Yoast development mode is not on.
	 */
	protected function is_development_mode() {
		return wp_debug_mode() && ! WPSEO_Utils::is_development_mode();
	}

	/**
	 * Returns a new instance of WPSEO_Ryte_Option.
	 *
	 * @return WPSEO_Ryte_Option New Ryte Option.
	 */
	protected function get_ryte_option() {
		return new WPSEO_Ryte_Option();
	}

	/**
	 * Adds the content for the "Cannot be indexed" response.
	 *
	 * @return void
	 */
	protected function is_not_indexable_response() {
		$this->label          = esc_html__( 'Your site cannot be found by search engines', 'wordpress-seo' );
		$this->status         = self::STATUS_CRITICAL;
		$this->badge['color'] = 'red';

		$this->description  = sprintf(
			/* translators: %1$s: Expands to 'Ryte', %2$s: Expands to 'Yoast SEO'. */
			esc_html__( '%1$s offers a free indexability check for %2$s users and it has determined that your site cannot be found by search engines. If this site is live or about to become live, this should be fixed.', 'wordpress-seo' ),
			'Ryte',
			'Yoast SEO'
		);

		$this->actions  = sprintf(
			/* translators: %1$s: Opening tag of the link to the Yoast knowledge base, %2$s: Link closing tag. */
			esc_html__( '%1$sRead more about troubleshooting search engine visibility.%2$s', 'wordpress-seo' ),
			'<a href="' . esc_url( WPSEO_Shortlinker::get( 'https://yoa.st/onpageindexerror' ) ) . '" target="_blank">',
			WPSEO_Admin_Utils::get_new_tab_message() . '</a>'
		);
		$this->actions .= '<br /><br />';

		$this->add_ryte_link();
	}

	/**
	 * Adds the content for the "Cannot tell if it can be indexed" response.
	 *
	 * @return void
	 */
	protected function unknown_indexability_response() {
		$this->label          = sprintf(
			/* translators: %1$s: Expands to 'Ryte'. */
			esc_html__( '%1$s cannot determine whether your site can be found by search engines', 'wordpress-seo' ),
			'Ryte'
		);
		$this->status         = self::STATUS_RECOMMENDED;
		$this->badge['color'] = 'red';

		$this->description = sprintf(
			/* translators: %1$s: Expands to 'Ryte', %2$s: Expands to 'Yoast SEO', %3$s: Opening tag to the Yoast knowledge base, %4$s: Link closing tag. */
			esc_html__( '%1$s offers a free indexability check for %2$s users and right now it has trouble determining
			whether search engines can find your site. This could have several (legitimate) reasons and is not a problem
			in itself. If this is a live site, %3$sit is recommended that you figure out why the %1$s check failed.%4$s', 'wordpress-seo' ),
			'Ryte',
			'Yoast SEO',
			'<a href="' . esc_url( WPSEO_Shortlinker::get( 'https://yoa.st/onpagerequestfailed' ) ) . '" target="_blank">',
			WPSEO_Admin_Utils::get_new_tab_message() . '</a>'
		);

		$this->add_ryte_link();
	}

	/**
	 * Adds the content for the "Can be indexed" response.
	 *
	 * @return void
	 */
	protected function is_indexable_response() {
		$this->label          = esc_html__( 'Your site can be found by search engines', 'wordpress-seo' );
		$this->status         = self::STATUS_GOOD;
		$this->badge['color'] = 'blue';

		$this->description = sprintf(
			/* translators: %1$s: Expands to 'Ryte', %2$s: Expands to 'Yoast SEO'. */
			esc_html__( '%1$s offers a free indexability check for %2$s users, and it shows
			that your site can be found by search engines.', 'wordpress-seo' ),
			'Ryte',
			'Yoast SEO'
		);
	}

	/**
	 * Adds the link to the Ryte site to the actions.
	 *
	 * @return void
	 */
	protected function add_ryte_link() {
		$this->actions .= sprintf(
			/* translators: %1$s: Opening tag of the link to the Yoast Ryte website, %2$s: Expands to 'Ryte', %3$s: Link closing tag. */
			esc_html__( '%1$sGo to %2$s to analyze your entire site%3$s', 'wordpress-seo' ),
			'<a href="' . esc_url( WPSEO_Shortlinker::get( 'https://yoa.st/rytelp' ) ) . '" target="_blank">',
			'Ryte',
			WPSEO_Admin_Utils::get_new_tab_message() . '</a>'
		);
	}
}
