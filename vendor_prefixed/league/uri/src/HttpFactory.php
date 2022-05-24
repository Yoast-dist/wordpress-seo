<?php

/**
 * League.Uri (https://uri.thephpleague.com)
 *
 * (c) Ignace Nyamagana Butera <nyamsprod@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare (strict_types=1);
namespace YoastSEO_Vendor\League\Uri;

use YoastSEO_Vendor\Psr\Http\Message\UriFactoryInterface;
use YoastSEO_Vendor\Psr\Http\Message\UriInterface;
final class HttpFactory implements \YoastSEO_Vendor\Psr\Http\Message\UriFactoryInterface
{
    public function createUri(string $uri = '') : \YoastSEO_Vendor\Psr\Http\Message\UriInterface
    {
        return \YoastSEO_Vendor\League\Uri\Http::createFromString($uri);
    }
}
