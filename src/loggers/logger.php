<?php
/**
 * Yoast extension of the Model class.
 *
 * @package Yoast\YoastSEO\Loggers
 */

namespace Yoast\WP\SEO\Loggers;

use Psr\Log\LoggerInterface;
use Psr\Log\LoggerTrait;
use Psr\Log\NullLogger;

/**
 * Creates an instance of a logger object.
 */
class Logger implements LoggerInterface {
	use LoggerTrait;

	/**
  * The logger object.
  *
  * @var \Psr\Log\LoggerInterface
  */
 protected $wrapped_logger;

	/**
	 * Logger constructor.
	 */
	public function __construct() {
		$this->wrapped_logger = new NullLogger();

		/**
   * Gives the possibility to set override the logger interface.
   *
   * @api \Psr\Log\LoggerInterface $logger Instance of NullLogger.
   *
   * @return \Psr\Log\LoggerInterface The logger object.
   */
  $this->wrapped_logger = \apply_filters( 'wpseo_logger', $this->wrapped_logger );
	}

	/**
	 * Logs with an arbitrary level.
	 *
	 * @param mixed  $level   The log level.
	 * @param string $message The log message.
	 * @param array  $context The log context.
	 *
	 * @return void
	 */
	public function log( $level, $message, array $context = [] ) {
		$this->wrapped_logger->log( $level, $message, $context );
	}
}
