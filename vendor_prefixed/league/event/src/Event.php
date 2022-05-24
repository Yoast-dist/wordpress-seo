<?php

namespace YoastSEO_Vendor\League\Event;

class Event extends \YoastSEO_Vendor\League\Event\AbstractEvent
{
    /**
     * The event name.
     *
     * @var string
     */
    protected $name;
    /**
     * Create a new event instance.
     *
     * @param string $name
     */
    public function __construct($name)
    {
        $this->name = $name;
    }
    /**
     * @inheritdoc
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Create a new event instance.
     *
     * @param string $name
     *
     * @return static
     */
    public static function named($name)
    {
        return new static($name);
    }
}
