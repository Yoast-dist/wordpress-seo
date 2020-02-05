<?php
/**
 * Presenter class for the OpenGraph title.
 *
 * @package Yoast\YoastSEO\Presenters\Open_Graph
 */

namespace Yoast\WP\SEO\Presenters\Open_Graph;

use Yoast\WP\SEO\Helpers\String_Helper;
use Yoast\WP\SEO\Presentations\Indexable_Presentation;
use Yoast\WP\SEO\Presenters\Abstract_Indexable_Presenter;

/**
 * Class Title_Presenter
 */
class Title_Presenter extends Abstract_Indexable_Presenter {

	/**
	 * @var String_Helper
	 */
	private $string;

	/**
	 * Title_Presenter constructor.
	 *
	 * @param String_Helper $string The string helper.
	 */
	public function __construct( String_Helper $string ) {
		$this->string = $string;
	}

	/**
	 * Returns the title for a post.
	 *
	 * @param Indexable_Presentation $presentation The presentation of an indexable.
	 *
	 * @return string The title tag.
	 */
	public function present( Indexable_Presentation $presentation ) {
		$title = $this->filter( $this->replace_vars( $presentation->og_title, $presentation ), $presentation );
		$title = $this->string->strip_all_tags( \stripslashes( $title ) );

		if ( \is_string( $title ) && $title !== '' ) {
			return '<meta property="og:title" content="' . \esc_attr( $title ) . '" />';
		}

		return '';
	}

	/**
	 * Run the title content through the `wpseo_opengraph_title` filter.
	 *
	 * @param string                 $title        The title to filter.
	 * @param Indexable_Presentation $presentation The presentation of an indexable.
	 *
	 * @return string $title The filtered title.
	 */
	private function filter( $title, Indexable_Presentation $presentation ) {
		/**
		 * Filter: 'wpseo_opengraph_title' - Allow changing the Yoast SEO generated title.
		 *
		 * @api string $title The title.
		 *
		 * @param Indexable_Presentation $presentation The presentation of an indexable.
		 */
		return (string) \trim( \apply_filters( 'wpseo_opengraph_title', $title, $presentation ) );
	}
}
