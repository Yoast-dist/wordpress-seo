(window.yoastWebpackJsonp=window.yoastWebpackJsonp||[]).push([[17],{1:function(e,t){e.exports=window.lodash},243:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isGutenbergDataAvailable=void 0;var a=i(1);t.isGutenbergDataAvailable=function(){return!(0,a.isNil)(window.wp)&&!(0,a.isNil)(wp.data)&&!(0,a.isNil)(wp.data.select("core/editor"))&&(0,a.isFunction)(wp.data.select("core/editor").getEditedPostAttribute)}},44:function(e,t){var i,a,n="",o=function(e){e=e||"polite";var t=document.createElement("div");t.id="a11y-speak-"+e,t.className="a11y-speak-region";return t.setAttribute("style","clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true"),document.querySelector("body").appendChild(t),t};!function(e){if("complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll)return e();document.addEventListener("DOMContentLoaded",e)}(function(){i=document.getElementById("a11y-speak-polite"),a=document.getElementById("a11y-speak-assertive"),null===i&&(i=o("polite")),null===a&&(a=o("assertive"))});e.exports=function(e,t){!function(){for(var e=document.querySelectorAll(".a11y-speak-region"),t=0;t<e.length;t++)e[t].textContent=""}(),e=e.replace(/<[^<>]+>/g," "),n===e&&(e+=" "),n=e,a&&"assertive"===t?a.textContent=e:i&&(i.textContent=e)}},453:function(e,t,i){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(i(44)),n=i(243);!function(e){var t,i,o,r=function(e){this._app=e,this.featuredImage=null,this.pluginName="addFeaturedImagePlugin",this.registerPlugin(),this.registerModifications()};function s(){e("#yst_opengraph_image_warning").remove(),i.removeClass("yoast-opengraph-image-notice")}r.prototype.setFeaturedImage=function(e){this.featuredImage=e,this._app.pluginReloaded(this.pluginName)},r.prototype.removeFeaturedImage=function(){this.setFeaturedImage(null)},r.prototype.registerPlugin=function(){this._app.registerPlugin(this.pluginName,{status:"ready"})},r.prototype.registerModifications=function(){this._app.registerModification("content",this.addImageToContent.bind(this),this.pluginName,10)},r.prototype.addImageToContent=function(e){return null!==this.featuredImage&&(e+=this.featuredImage),e},e(document).ready(function(){var d=wp.media.featuredImage.frame();if("undefined"!=typeof YoastSEO&&(t=new r(YoastSEO.app),i=e("#postimagediv"),o=i.find(".hndle"),d.on("select",function(){var n,r,u;!function(t){var n=t.state().get("selection").first().toJSON();n.width<200||n.height<200?0===e("#yst_opengraph_image_warning").length&&(e('<div id="yst_opengraph_image_warning" class="notice notice-error notice-alt"><p>'+wpseoFeaturedImageL10n.featured_image_notice+"</p></div>").insertAfter(o),i.addClass("yoast-opengraph-image-notice"),(0,a.default)(wpseoFeaturedImageL10n.featured_image_notice,"assertive")):s()}(d),u=(r=d.state().get("selection").first()).get("alt"),n='<img src="'+r.get("url")+'" width="'+r.get("width")+'" height="'+r.get("height")+'" alt="'+u+'"/>',t.setFeaturedImage(n)}),i.on("click","#remove-post-thumbnail",function(){t.removeFeaturedImage(),s()}),void 0!==e("#set-post-thumbnail > img").prop("src")&&t.setFeaturedImage(e("#set-post-thumbnail ").html()),(0,n.isGutenbergDataAvailable)())){var u=void 0,p=void 0;wp.data.subscribe(function(){var e=wp.data.select("core/editor").getEditedPostAttribute("featured_media");if(function(e){return"number"==typeof e&&e>0}(e)&&void 0!==(u=wp.data.select("core").getMedia(e))&&u!==p){p=u;var i='<img src="'+u.source_url+'" alt="'+u.alt_text+'" >';t.setFeaturedImage(i)}})}})}(jQuery),window.yst_removeOpengraphWarning=function(){console.error("yst_removeOpengraphWarning is deprecated since Yoast SEO 10.1.")}}},[[453,0]]]);