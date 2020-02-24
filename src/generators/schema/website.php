<?php
/**
 * WPSEO plugin file.
 *
 * @package Yoast\WP\SEO\Presentations\Generators\Schema
 */

namespace Yoast\WP\SEO\Presentations\Generators\Schema;

use Yoast\WP\SEO\Context\Meta_Tags_Context;
use Yoast\WP\SEO\Helpers\Options_Helper;
use Yoast\WP\SEO\Helpers\Schema\HTML_Helper;
use Yoast\WP\SEO\Helpers\Schema\Language_Helper;

/**
 * Returns schema Website data.
 *
 * @since 10.2
 */
class Website extends Abstract_Schema_Piece {

	/**
	 * The options helper.
	 *
	 * @var Options_Helper
	 */
	private $options;

	/**
	 * The HTML helper.
	 *
	 * @var HTML_Helper
	 */
	private $html;

	/**
	 * The language helper.
	 *
	 * @var Language_Helper
	 */
	private $language;

	/**
	 * Website constructor.
	 *
	 * @param Options_Helper  $options  The options helper.
	 * @param HTML_Helper     $html     The HTML helper.
	 * @param Language_Helper $language The language helper.
	 */
	public function __construct(
		Options_Helper $options,
		HTML_Helper $html,
		Language_Helper $language
	) {
		$this->html     = $html;
		$this->options  = $options;
		$this->language = $language;
	}

	/**
	 * Determines whether or not a piece should be added to the graph.
	 *
	 * @param Meta_Tags_Context $context The meta tags context.
	 *
	 * @return bool
	 */
	public function is_needed( Meta_Tags_Context $context ) {
		return true;
	}

	/**
	 * Outputs code to allow recognition of the internal search engine.
	 *
	 * @param Meta_Tags_Context $context The meta tags context.
	 *
	 * @return array Website data blob.
	 *
	 * @since 1.5.7
	 *
	 * @link https://developers.google.com/structured-data/site-name
	 */
	public function generate( Meta_Tags_Context $context ) {
		$data = [
			'@type'       => 'WebSite',
			'@id'         => $context->site_url . $this->id->website_hash,
			'url'         => $context->site_url,
			'name'        => $this->html->smart_strip_tags( $context->site_name ),
			'description' => \get_bloginfo( 'description' ),
		];

		if ( $context->site_represents_reference ) {
			$data['publisher'] = $context->site_represents_reference;
		}

		$data = $this->add_alternate_name( $data );
		$data = $this->internal_search_section( $data, $context );
		$data = $this->language->add_piece_language( $data );

		return $data;
	}

	/**
	 * Returns an alternate name if one was specified in the Yoast SEO settings.
	 *
	 * @param array $data The website data array.
	 *
	 * @return array $data
	 */
	private function add_alternate_name( $data ) {
		$alternate_name = $this->options->get( 'alternate_website_name', '' );
		if ( $alternate_name !== '' ) {
			$data['alternateName'] = $this->html->smart_strip_tags( $alternate_name );
		}

		return $data;
	}

	/**
	 * Adds the internal search JSON LD code to the homepage if it's not disabled.
	 *
	 * @link https://developers.google.com/structured-data/slsb-overview
	 *
	 * @param array             $data    The website data array.
	 * @param Meta_Tags_Context $context The meta tags context.
	 *
	 * @return array $data
	 */
	private function internal_search_section( $data, Meta_Tags_Context $context ) {
		/**
		 * Filter: 'disable_wpseo_json_ld_search' - Allow disabling of the json+ld output.
		 *
		 * @api bool $display_search Whether or not to display json+ld search on the frontend.
		 */
		if ( \apply_filters( 'disable_wpseo_json_ld_search', false ) ) {
			return $data;
		}

		/**
		 * Filter: 'wpseo_json_ld_search_url' - Allows filtering of the search URL for Yoast SEO.
		 *
		 * @api string $search_url The search URL for this site with a `{search_term_string}` variable.
		 */
		$search_url = \apply_filters( 'wpseo_json_ld_search_url', $context->site_url . '?s={search_term_string}' );

		$data['potentialAction'] = [
			'@type'       => 'SearchAction',
			'target'      => $search_url,
			'query-input' => 'required name=search_term_string',
		];

		return $data;
	}
}
