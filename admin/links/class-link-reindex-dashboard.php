<?php
/**
 * WPSEO plugin file.
 *
 * @package WPSEO\Admin\Links\Reindex
 */

/**
 * Handles the reindexing of links interface in the Dashboard.
 */
class WPSEO_Link_Reindex_Dashboard {

	/**
	 * Public post types to scan for unprocessed items.
	 *
	 * @var array
	 */
	protected $public_post_types = [];

	/**
	 * Number of unprocessed items.
	 *
	 * @var int
	 */
	protected $unprocessed = 0;

	/**
	 * Registers all hooks to WordPress.
	 *
	 * @return void
	 */
	public function register_hooks() {
		if ( ! $this->is_dashboard_page() ) {
			return;
		}

		add_action( 'admin_enqueue_scripts', [ $this, 'calculate_unprocessed' ], 9 );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue' ], 10 );

		add_action( 'admin_footer', [ $this, 'modal_box' ], 20 );

		add_action( 'wpseo_tools_overview_list_items', [ $this, 'show_tools_overview_item' ], 10 );
	}

	/**
	 * Calculates the number of unprocessed items per post type.
	 *
	 * @return void
	 */
	public function calculate_unprocessed() {
		$this->public_post_types = apply_filters( 'wpseo_link_count_post_types', WPSEO_Post_Type::get_accessible_post_types() );

		if ( is_array( $this->public_post_types ) && $this->public_post_types !== [] ) {
			$this->unprocessed = WPSEO_Link_Query::get_unprocessed_count( $this->public_post_types );
		}
	}

	/**
	 * Adds an item to the tools page overview list.
	 *
	 * @return void
	 */
	public function show_tools_overview_item() {
		echo '<li>';
		echo '<strong>' . esc_html__( 'Text link counter', 'wordpress-seo' ) . '</strong><br/>';

		if ( ! $this->has_unprocessed() ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Reason: `message_already_indexed` is considered a safe method.
			echo $this->message_already_indexed();
		}

		if ( $this->has_unprocessed() ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Reason: `message_start_indexing` is considered a safe method.
			printf( $this->message_start_indexing() );
		}

		echo '</li>';
	}

	/**
	 * Generates the model box.
	 *
	 * @return void
	 */
	public function modal_box() {
		if ( ! $this->is_dashboard_page() ) {
			return;
		}

		// Adding the thickbox.
		add_thickbox();

		$blocks = [];

		if ( ! $this->has_unprocessed() ) {
			$inner_text = sprintf(
				'<p>%s</p>',
				esc_html__( 'All your texts are already counted, there is no need to count them again.', 'wordpress-seo' )
			);
		}

		if ( $this->has_unprocessed() ) {
			$progress = sprintf(
				/* translators: 1: expands to a <span> containing the number of items recalculated. 2: expands to a <strong> containing the total number of items. */
				esc_html__( 'Text %1$s of %2$s processed.', 'wordpress-seo' ),
				'<span id="wpseo_count_index_links">0</span>',
				sprintf( '<strong id="wpseo_count_total">%d</strong>', $this->get_unprocessed_count() )
			);

			$inner_text  = '<div id="wpseo_index_links_progressbar" class="wpseo-progressbar"></div>';
			$inner_text .= sprintf( '<p>%s</p>', $progress );
		}

		$blocks[] = sprintf(
			'<div><p>%s</p>%s</div>',
			esc_html__( 'Counting links in your texts', 'wordpress-seo' ),
			$inner_text
		);
		?>
		<div id="wpseo_index_links_wrapper" class="hidden">
			<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Reason: All inputs are escaped properly.
				echo implode( '<hr />', $blocks );
			?>
			<button onclick="tb_remove();" type="button"
					class="button"><?php esc_html_e( 'Stop counting', 'wordpress-seo' ); ?></button>
		</div>
		<?php
	}

	/**
	 * Enqueues site wide analysis script.
	 *
	 * @return void
	 */
	public function enqueue() {
		$asset_manager = new WPSEO_Admin_Asset_Manager();
		$asset_manager->enqueue_script( 'reindex-links' );

		$data = [
			'amount'  => $this->get_unprocessed_count(),
			'restApi' => [
				'root'     => esc_url_raw( rest_url() ),
				'endpoint' => WPSEO_Link_Reindex_Post_Endpoint::REST_NAMESPACE . '/' . WPSEO_Link_Reindex_Post_Endpoint::ENDPOINT_QUERY,
				'nonce'    => wp_create_nonce( 'wp_rest' ),
			],
			'message' => [
				'indexingCompleted' => $this->message_already_indexed(),
			],
			'l10n'    => [
				'calculationInProgress' => __( 'Calculation in progress...', 'wordpress-seo' ),
				'calculationCompleted'  => __( 'Calculation completed.', 'wordpress-seo' ),
			],
		];

		wp_localize_script( WPSEO_Admin_Asset_Manager::PREFIX . 'reindex-links', 'yoastReindexLinksData', [ 'data' => $data ] );
	}

	/**
	 * Checks if the current page is the dashboard page.
	 *
	 * @return bool True when current page is the dashboard page.
	 */
	protected function is_dashboard_page() {
		return ( filter_input( INPUT_GET, 'page' ) === 'wpseo_tools' );
	}

	/**
	 * Retrieves the string to display when everything has been indexed.
	 *
	 * @return string The message to show when everything has been indexed.
	 */
	public function message_already_indexed() {
		return '<span class="yoast-check">' . esc_html__( 'Good job! All the links in your texts have been counted.', 'wordpress-seo' ) . '</span>';
	}

	/**
	 * Returns if there are unprocessed items.
	 *
	 * @return bool True if there are unprocessed items.
	 */
	public function has_unprocessed() {
		return $this->unprocessed > 0;
	}

	/**
	 * Returns the number of unprocessed items.
	 *
	 * @return int Number of unprocessed items.
	 */
	public function get_unprocessed_count() {
		return $this->unprocessed;
	}

	/**
	 * Retrieves the message to show starting indexation.
	 *
	 * @return string The message.
	 */
	public function message_start_indexing() {
		return sprintf(
			'<a id="openLinkIndexing" href="#TB_inline?width=600&height=%1$s&inlineId=wpseo_index_links_wrapper" title="%2$s" class="yoast-button yoast-button--secondary yoast-js-calculate-index-links--all thickbox">%2$s</a>',
			175,
			esc_attr__( 'Count links in your texts', 'wordpress-seo' )
		);
	}
}
