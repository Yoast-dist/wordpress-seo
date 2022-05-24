<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Token;

use YoastSEO_Vendor\Lcobucci\JWT\Signature as SignatureImpl;
use function class_alias;
\class_exists(\YoastSEO_Vendor\Lcobucci\JWT\Token\Signature::class, \false) || \class_alias(\YoastSEO_Vendor\Lcobucci\JWT\Signature::class, \YoastSEO_Vendor\Lcobucci\JWT\Token\Signature::class);
