<?php
/**
 * A helper object for OpenGraph images.
 *
 * @package \Yoast\WP\Free\Helpers\Open_Graph
 */

namespace Yoast\WP\Free\Helpers\Open_Graph;

use Yoast\WP\Free\Helpers\Image_Helper as Base_Image_Helper;
use Yoast\WP\Free\Helpers\Url_Helper;

/**
 * Class Image_Helper
 */
class Image_Helper {

	/**
	 * @var Url_Helper
	 */
	private $url_helper;

	/**
	 * @var Base_Image_Helper
	 */
	private $image_helper;

	/**
	 * The parameters we have for Facebook images.
	 *
	 * @var array
	 */
	private $image_params = [
		'min_width'  => 200,
		'max_width'  => 2000,
		'min_height' => 200,
		'max_height' => 2000,
	];

	/**
	 * Image_Helper constructor.
	 *
	 * @codeCoverageIgnore
	 *
	 * @param Url_Helper        $url_helper   The url helper.
	 * @param Base_Image_Helper $image_helper The image helper.
	 */
	public function __construct( Url_Helper $url_helper, Base_Image_Helper $image_helper ) {
		$this->url_helper   = $url_helper;
		$this->image_helper = $image_helper;
	}

	/**
	 * Determines whether the passed URL is considered valid.
	 *
	 * @param array $image The image array.
	 *
	 * @return bool Whether or not the URL is a valid image.
	 */
	public function is_image_url_valid( array $image ) {
		if ( empty( $image['url'] ) || ! is_string( $image['url'] ) ) {
			return false;
		}

		$image_extension = $this->url_helper->get_extension_from_url( $image['url'] );
		$is_valid        = $this->image_helper->is_extension_valid( $image_extension );

		/**
		 * Filter: 'wpseo_opengraph_is_valid_image_url' - Allows extra validation for an image url.
		 *
		 * @api bool - Current validation result.
		 *
		 * @param string $url The image url to validate.
		 */
		return (bool) apply_filters( 'wpseo_opengraph_is_valid_image_url', $is_valid, $image['url'] );
	}

	/**
	 * Retrieves the overridden image size value.
	 *
	 * @return string|null The image size when overriden by filter or null when not.
	 */
	public function get_override_image_size() {
		/**
		 * Filter: 'wpseo_opengraph_image_size' - Allow overriding the image size used
		 * for OpenGraph sharing. If this filter is used, the defined size will always be
		 * used for the og:image. The image will still be rejected if it is too small.
		 *
		 * Only use this filter if you manually want to determine the best image size
		 * for the `og:image` tag.
		 *
		 * Use the `wpseo_image_sizes` filter if you want to use our logic. That filter
		 * can be used to add an image size that needs to be taken into consideration
		 * within our own logic.
		 *
		 * @api string|false $size Size string.
		 */
		return \apply_filters( 'wpseo_opengraph_image_size', null );
	}

	/**
	 * Retrieves the image url by a given attachment id.
	 *
	 * @param int $attachment_id The attachment id.
	 *
	 * @return string|false The url when found, false when not.
	 */
	public function get_image_url_by_id( $attachment_id ) {
		if ( ! $this->image_helper->is_valid_attachment( $attachment_id ) ) {
			return false;
		}

		$override_image_size = $this->get_override_image_size();
		if ( $override_image_size ) {
			return $this->image_helper->get_image( $attachment_id, $override_image_size );
		}

		return $this->image_helper->get_best_attachment_variation( $attachment_id, $this->image_params );
	}
}
