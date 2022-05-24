<?php

namespace YoastSEO_Vendor\League\Event;

class BufferedEmitter extends \YoastSEO_Vendor\League\Event\Emitter
{
    /**
     * @var EventInterface[]
     */
    protected $bufferedEvents = [];
    /**
     * @inheritdoc
     */
    public function emit($event)
    {
        $this->bufferedEvents[] = $event;
        return $event;
    }
    /**
     * @inheritdoc
     */
    public function emitBatch(array $events)
    {
        foreach ($events as $event) {
            $this->bufferedEvents[] = $event;
        }
        return $events;
    }
    /**
     * Emit the buffered events.
     *
     * @return array
     */
    public function emitBufferedEvents()
    {
        $result = [];
        while ($event = \array_shift($this->bufferedEvents)) {
            $result[] = parent::emit($event);
        }
        return $result;
    }
}
