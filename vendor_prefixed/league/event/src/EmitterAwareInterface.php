<?php

namespace YoastSEO_Vendor\League\Event;

interface EmitterAwareInterface
{
    /**
     * Set the Emitter.
     *
     * @param EmitterInterface $emitter
     *
     * @return $this
     */
    public function setEmitter(\YoastSEO_Vendor\League\Event\EmitterInterface $emitter = null);
    /**
     * Get the Emitter.
     *
     * @return EmitterInterface
     */
    public function getEmitter();
}
