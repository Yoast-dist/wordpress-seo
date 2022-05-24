<?php

namespace YoastSEO_Vendor;

\class_exists(\YoastSEO_Vendor\Lcobucci\JWT\Token\Plain::class, \false) || \class_alias(\YoastSEO_Vendor\Lcobucci\JWT\Token::class, \YoastSEO_Vendor\Lcobucci\JWT\Token\Plain::class);
\class_exists(\YoastSEO_Vendor\Lcobucci\JWT\Token\Signature::class, \false) || \class_alias(\YoastSEO_Vendor\Lcobucci\JWT\Signature::class, \YoastSEO_Vendor\Lcobucci\JWT\Token\Signature::class);
