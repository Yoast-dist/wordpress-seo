<?php

namespace YoastSEO_Vendor\League\Event;

abstract class AbstractListener implements \YoastSEO_Vendor\League\Event\ListenerInterface
{
    /**
     * @inheritdoc
     */
    public function isListener($listener)
    {
        return $this === $listener;
    }
}
