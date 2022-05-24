<?php

namespace YoastSEO_Vendor\League\Event;

interface ListenerInterface
{
    /**
     * Handle an event.
     *
     * @param EventInterface $event
     *
     * @return void
     */
    public function handle(\YoastSEO_Vendor\League\Event\EventInterface $event);
    /**
     * Check whether the listener is the given parameter.
     *
     * @param mixed $listener
     *
     * @return bool
     */
    public function isListener($listener);
}
