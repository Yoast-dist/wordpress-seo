<?php

namespace YoastSEO_Vendor\Lcobucci\JWT\Signer;

final class None extends \YoastSEO_Vendor\Lcobucci\JWT\Signer\BaseSigner
{
    public function getAlgorithmId()
    {
        return 'none';
    }
    public function createHash($payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        return '';
    }
    public function doVerify($expected, $payload, \YoastSEO_Vendor\Lcobucci\JWT\Signer\Key $key)
    {
        return $expected === '';
    }
}
