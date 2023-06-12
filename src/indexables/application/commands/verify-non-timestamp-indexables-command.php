<?php

namespace Yoast\WP\SEO\Indexables\Application\Commands;

use Yoast\WP\SEO\Indexables\Domain\Abstract_Indexables_Command;
use Yoast\WP\SEO\Indexables\Domain\Batch_Size;
use Yoast\WP\SEO\Indexables\Domain\Current_Verification_Action;

class Verify_Non_Timestamp_Indexables_Command extends Abstract_Indexables_Command {

	/**
	 * @var Current_Verification_Action $current_action The current verification action in progress.
	 */
	private $current_action;

	/**
	 * @var Batch_Size $batch_size The batch size.
	 */
	private $batch_size;

	/**
	 * @param int    $last_batch            The last batch count.
	 * @param string $plugin_deactivated_at The plugin deactivated at timestamp.
	 * @param string $current_action        The current verification action.
	 */
	public function __construct( int $last_batch, int $batch_size, string $plugin_deactivated_at, string $current_action ) {
		$this->current_action = new Current_Verification_Action( $current_action );
		$this->batch_size     = new Batch_Size( $batch_size );
		parent::__construct( $last_batch, $plugin_deactivated_at );
	}

	/**
	 * @return Current_Verification_Action
	 */
	public function get_current_action(): Current_Verification_Action {
		return $this->current_action;
	}

	/**
	 * @return \Yoast\WP\SEO\Indexables\Domain\Batch_Size
	 */
	public function get_batch_size(): Batch_Size {
		return $this->batch_size;
	}
}
