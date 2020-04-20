<?php
/**
 * Yoast SEO Plugin File.
 *
 * @package WPSEO\Migrations
 */

use Yoast\WP\SEO\ORM\Yoast_Model;
use Ruckusing_Migration_Base;

/**
 * Class AddColumnsToIndexables.
 */
class AddColumnsToIndexables extends Ruckusing_Migration_Base {

	/**
	 * Migration up.
	 */
	public function up() {
		$tables  = $this->get_tables();
		$blog_id = \get_current_blog_id();
		foreach ( $tables as $table ) {
			$this->add_column( $table, 'blog_id', 'biginteger', [
				'null'    => false,
				'limit'   => 20,
				'default' => $blog_id,
			] );
		}

		$indexable_table = $this->get_indexable_table();
		$this->add_column( $indexable_table, 'language', 'string', [ 'null' => true, 'limit' => 32 ] );
		$this->add_column( $indexable_table, 'region', 'string', [ 'null' => true, 'limit' => 32 ] );
		$this->add_column( $indexable_table, 'schema_page_type', 'string', [ 'null' => true, 'limit' => 64 ] );
		$this->add_column( $indexable_table, 'schema_article_type', 'string', [ 'null' => true, 'limit' => 64 ] );
	}

	/**
	 * Migration down.
	 */
	public function down() {
		$tables = $this->get_tables();
		foreach ( $tables as $table ) {
			$this->remove_column( $table, 'blog_id' );
		}

		$indexable_table = $this->get_indexable_table();
		$this->remove_column( $indexable_table, 'language' );
		$this->remove_column( $indexable_table, 'region' );
		$this->remove_column( $indexable_table, 'schema_page_type' );
		$this->remove_column( $indexable_table, 'schema_article_type' );
	}

	/**
	 * Retrieves the Indexable table.
	 *
	 * @return string The Indexable table name.
	 */
	protected function get_indexable_table() {
		return Yoast_Model::get_table_name( 'Indexable' );
	}

	/**
	 * Retrieves the table names to use.
	 *
	 * @return string[] The table names to use.
	 */
	protected function get_tables() {
		return [
			$this->get_indexable_table(),
			Yoast_Model::get_table_name( 'Indexable_Hierarchy' ),
			Yoast_Model::get_table_name( 'Primary_Term' ),
		];
	}
}
