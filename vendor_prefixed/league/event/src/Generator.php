<?php

namespace YoastSEO_Vendor\League\Event;

class Generator implements \YoastSEO_Vendor\League\Event\GeneratorInterface
{
    use GeneratorTrait {
        addEvent as public;
    }
}
