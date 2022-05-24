<?php

namespace YoastSEO_Vendor\League\Event;

interface GeneratorInterface
{
    /**
     * Release all the added events.
     *
     * @return EventInterface[]
     */
    public function releaseEvents();
}
