<?php
/**
 * Yoast SEO Plugin File.
 *
 * @package WPSEO\Migrations
 */

use Yoast\WP\SEO\ORM\Yoast_Model;
use Ruckusing_Migration_Base;

/**
 * Class WpYoastIndexableHierarchy
 */
class WpYoastIndexableHierarchy extends Ruckusing_Migration_Base {

	/**
	 * Migration up.
	 */
	public function up() {
		$table_name = $this->get_table_name();

		$indexable_table = $this->create_table( $table_name, [ 'id' => false ] );

		$indexable_table->column( 'indexable_id', 'integer', [
			'primary_key' => true,
			'unsigned'    => true,
			'null'        => true,
			'limit'       => 11,
		] );
		$indexable_table->column( 'ancestor_id', 'integer', [
			'primary_key' => true,
			'unsigned'    => true,
			'null'        => true,
			'limit'       => 11,
		] );
		$indexable_table->column( 'depth', 'integer', [ 'unsigned' => true, 'null' => true, 'limit' => 11 ] );
		$indexable_table->finish();

		$this->add_index( $table_name, 'indexable_id', [ 'name' => 'indexable_id' ] );
		$this->add_index( $table_name, 'ancestor_id', [ 'name' => 'ancestor_id' ] );
		$this->add_index( $table_name, 'depth', [ 'name' => 'depth' ] );
	}

	/**
	 * Migration up.
	 */
	public function down() {
		$this->drop_table( $this->get_table_name() );
	}

	/**
	 * Retrieves the table name to use.
	 *
	 * @return string The table name to use.
	 */
	protected function get_table_name() {
		return Yoast_Model::get_table_name( 'Indexable_Hierarchy' );
	}
}
