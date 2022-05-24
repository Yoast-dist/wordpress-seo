<?php

namespace YoastSEO_Vendor\League\Event;

interface ListenerProviderInterface
{
    /**
     * Provide event
     *
     * @param ListenerAcceptorInterface $listenerAcceptor
     *
     * @return $this
     */
    public function provideListeners(\YoastSEO_Vendor\League\Event\ListenerAcceptorInterface $listenerAcceptor);
}
