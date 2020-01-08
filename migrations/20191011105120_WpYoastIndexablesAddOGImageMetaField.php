<?php
/**
 * Yoast SEO Plugin File.
 *
 * @package WPSEO\Migrations
 */

use Yoast\WP\SEO\ORM\Yoast_Model;
use Ruckusing_Migration_Base;

/**
 * Class WpYoastIndexablesAddOGImageMetaField
 */
class WpYoastIndexablesAddOGImageMetaField  extends Ruckusing_Migration_Base {
	/**
	 * Migration up.
	 */
	public function up() {
		$table_name = $this->get_table_name();
		$this->add_column( $table_name, 'og_image_meta', 'text', [ 'null' => true ] );
	}

	/**
	 * Migration down.
	 */
	public function down() {
		$table_name = $this->get_table_name();
		$this->remove_column( $table_name, 'og_image_meta' );
	}

	/**
	 * Retrieves the table name to use.
	 *
	 * @return string The table name to use.
	 */
	protected function get_table_name() {
		return Yoast_Model::get_table_name( 'Indexable' );
	}
}
