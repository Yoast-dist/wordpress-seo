<?php

namespace YoastSEO_Vendor\League\Event;

trait EmitterAwareTrait
{
    /**
     * The emitter instance.
     *
     * @var EmitterInterface|null
     */
    protected $emitter;
    /**
     * Set the Emitter.
     *
     * @param EmitterInterface|null $emitter
     *
     * @return $this
     */
    public function setEmitter(\YoastSEO_Vendor\League\Event\EmitterInterface $emitter = null)
    {
        $this->emitter = $emitter;
        return $this;
    }
    /**
     * Get the Emitter.
     *
     * @return EmitterInterface
     */
    public function getEmitter()
    {
        if (!$this->emitter) {
            $this->emitter = new \YoastSEO_Vendor\League\Event\Emitter();
        }
        return $this->emitter;
    }
}
