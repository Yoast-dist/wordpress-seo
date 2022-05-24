<?php

namespace YoastSEO_Vendor\League\Event;

class ListenerAcceptor implements \YoastSEO_Vendor\League\Event\ListenerAcceptorInterface
{
    /**
     * The emitter instance.
     *
     * @var EmitterInterface|null
     */
    protected $emitter;
    /**
     * Constructor
     *
     * @param EmitterInterface $emitter
     */
    public function __construct(\YoastSEO_Vendor\League\Event\EmitterInterface $emitter)
    {
        $this->emitter = $emitter;
    }
    /**
     * @inheritdoc
     */
    public function addListener($event, $listener, $priority = self::P_NORMAL)
    {
        $this->emitter->addListener($event, $listener, $priority);
        return $this;
    }
    /**
     * @inheritdoc
     */
    public function addOneTimeListener($event, $listener, $priority = self::P_NORMAL)
    {
        $this->emitter->addOneTimeListener($event, $listener, $priority);
        return $this;
    }
}
