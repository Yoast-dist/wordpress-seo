(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[2],{679:function(t,e,n){"use strict";!function(t,e){window.wpseoApi={get:function(t,e,n,o){this.request("GET",t,e,n,o)},post:function(t,e,n,o){this.request("POST",t,e,n,o)},put:function(t,e,n,o){this.request("PUT",t,e,n,o)},patch:function(t,e,n,o){this.request("PATCH",t,e,n,o)},delete:function(t,e,n,o){this.request("DELETE",t,e,n,o)},request:function(n,o,i,s,u){t.isFunction(i)&&void 0===u&&(u=s,s=i,i={}),"POST"!==n&&"GET"!==n&&(i._method=n,n="POST"),t.ajax({url:e.root+"yoast/v1/"+o,method:n,beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",e.nonce)},data:i}).done(s).fail(u)}}}(jQuery,wpApiSettings)}},[[679,0]]]);