
<!DOCTYPE html>
<html class="html" lang="en"itemscope="itemscope" itemtype="https://schema.org/WebPage">
<head><script>if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script><script>(()=>{class RocketLazyLoadScripts{constructor(){this.v="1.2.6",this.triggerEvents=["keydown","mousedown","mousemove","touchmove","touchstart","touchend","wheel"],this.userEventHandler=this.t.bind(this),this.touchStartHandler=this.i.bind(this),this.touchMoveHandler=this.o.bind(this),this.touchEndHandler=this.h.bind(this),this.clickHandler=this.u.bind(this),this.interceptedClicks=[],this.interceptedClickListeners=[],this.l(this),window.addEventListener("pageshow",(t=>{this.persisted=t.persisted,this.everythingLoaded&&this.m()})),this.CSPIssue=sessionStorage.getItem("rocketCSPIssue"),document.addEventListener("securitypolicyviolation",(t=>{this.CSPIssue||"script-src-elem"!==t.violatedDirective||"data"!==t.blockedURI||(this.CSPIssue=!0,sessionStorage.setItem("rocketCSPIssue",!0))})),document.addEventListener("DOMContentLoaded",(()=>{this.k()})),this.delayedScripts={normal:[],async:[],defer:[]},this.trash=[],this.allJQueries=[]}p(t){document.hidden?t.t():(this.triggerEvents.forEach((e=>window.addEventListener(e,t.userEventHandler,{passive:!0}))),window.addEventListener("touchstart",t.touchStartHandler,{passive:!0}),window.addEventListener("mousedown",t.touchStartHandler),document.addEventListener("visibilitychange",t.userEventHandler))}_(){this.triggerEvents.forEach((t=>window.removeEventListener(t,this.userEventHandler,{passive:!0}))),document.removeEventListener("visibilitychange",this.userEventHandler)}i(t){"HTML"!==t.target.tagName&&(window.addEventListener("touchend",this.touchEndHandler),window.addEventListener("mouseup",this.touchEndHandler),window.addEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.addEventListener("mousemove",this.touchMoveHandler),t.target.addEventListener("click",this.clickHandler),this.L(t.target,!0),this.S(t.target,"onclick","rocket-onclick"),this.C())}o(t){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler),t.target.removeEventListener("click",this.clickHandler),this.L(t.target,!1),this.S(t.target,"rocket-onclick","onclick"),this.M()}h(){window.removeEventListener("touchend",this.touchEndHandler),window.removeEventListener("mouseup",this.touchEndHandler),window.removeEventListener("touchmove",this.touchMoveHandler,{passive:!0}),window.removeEventListener("mousemove",this.touchMoveHandler)}u(t){t.target.removeEventListener("click",this.clickHandler),this.L(t.target,!1),this.S(t.target,"rocket-onclick","onclick"),this.interceptedClicks.push(t),t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),this.M()}O(){window.removeEventListener("touchstart",this.touchStartHandler,{passive:!0}),window.removeEventListener("mousedown",this.touchStartHandler),this.interceptedClicks.forEach((t=>{t.target.dispatchEvent(new MouseEvent("click",{view:t.view,bubbles:!0,cancelable:!0}))}))}l(t){EventTarget.prototype.addEventListenerWPRocketBase=EventTarget.prototype.addEventListener,EventTarget.prototype.addEventListener=function(e,i,o){"click"!==e||t.windowLoaded||i===t.clickHandler||t.interceptedClickListeners.push({target:this,func:i,options:o}),(this||window).addEventListenerWPRocketBase(e,i,o)}}L(t,e){this.interceptedClickListeners.forEach((i=>{i.target===t&&(e?t.removeEventListener("click",i.func,i.options):t.addEventListener("click",i.func,i.options))})),t.parentNode!==document.documentElement&&this.L(t.parentNode,e)}D(){return new Promise((t=>{this.P?this.M=t:t()}))}C(){this.P=!0}M(){this.P=!1}S(t,e,i){t.hasAttribute&&t.hasAttribute(e)&&(event.target.setAttribute(i,event.target.getAttribute(e)),event.target.removeAttribute(e))}t(){this._(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this.R.bind(this)):this.R()}k(){let t=[];document.querySelectorAll("script[type=rocketlazyloadscript][data-rocket-src]").forEach((e=>{let i=e.getAttribute("data-rocket-src");if(i&&!i.startsWith("data:")){0===i.indexOf("//")&&(i=location.protocol+i);try{const o=new URL(i).origin;o!==location.origin&&t.push({src:o,crossOrigin:e.crossOrigin||"module"===e.getAttribute("data-rocket-type")})}catch(t){}}})),t=[...new Map(t.map((t=>[JSON.stringify(t),t]))).values()],this.T(t,"preconnect")}async R(){this.lastBreath=Date.now(),this.j(this),this.F(this),this.I(),this.W(),this.q(),await this.A(this.delayedScripts.normal),await this.A(this.delayedScripts.defer),await this.A(this.delayedScripts.async);try{await this.U(),await this.H(this),await this.J()}catch(t){console.error(t)}window.dispatchEvent(new Event("rocket-allScriptsLoaded")),this.everythingLoaded=!0,this.D().then((()=>{this.O()})),this.N()}W(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((t=>{t.hasAttribute("data-rocket-src")?t.hasAttribute("async")&&!1!==t.async?this.delayedScripts.async.push(t):t.hasAttribute("defer")&&!1!==t.defer||"module"===t.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(t):this.delayedScripts.normal.push(t):this.delayedScripts.normal.push(t)}))}async B(t){if(await this.G(),!0!==t.noModule||!("noModule"in HTMLScriptElement.prototype))return new Promise((e=>{let i;function o(){(i||t).setAttribute("data-rocket-status","executed"),e()}try{if(navigator.userAgent.indexOf("Firefox/")>0||""===navigator.vendor||this.CSPIssue)i=document.createElement("script"),[...t.attributes].forEach((t=>{let e=t.nodeName;"type"!==e&&("data-rocket-type"===e&&(e="type"),"data-rocket-src"===e&&(e="src"),i.setAttribute(e,t.nodeValue))})),t.text&&(i.text=t.text),i.hasAttribute("src")?(i.addEventListener("load",o),i.addEventListener("error",(function(){i.setAttribute("data-rocket-status","failed-network"),e()})),setTimeout((()=>{i.isConnected||e()}),1)):(i.text=t.text,o()),t.parentNode.replaceChild(i,t);else{const i=t.getAttribute("data-rocket-type"),s=t.getAttribute("data-rocket-src");i?(t.type=i,t.removeAttribute("data-rocket-type")):t.removeAttribute("type"),t.addEventListener("load",o),t.addEventListener("error",(i=>{this.CSPIssue&&i.target.src.startsWith("data:")?(console.log("WPRocket: data-uri blocked by CSP -> fallback"),t.removeAttribute("src"),this.B(t).then(e)):(t.setAttribute("data-rocket-status","failed-network"),e())})),s?(t.removeAttribute("data-rocket-src"),t.src=s):t.src="data:text/javascript;base64,"+window.btoa(unescape(encodeURIComponent(t.text)))}}catch(i){t.setAttribute("data-rocket-status","failed-transform"),e()}}));t.setAttribute("data-rocket-status","skipped")}async A(t){const e=t.shift();return e&&e.isConnected?(await this.B(e),this.A(t)):Promise.resolve()}q(){this.T([...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async],"preload")}T(t,e){var i=document.createDocumentFragment();t.forEach((t=>{const o=t.getAttribute&&t.getAttribute("data-rocket-src")||t.src;if(o&&!o.startsWith("data:")){const s=document.createElement("link");s.href=o,s.rel=e,"preconnect"!==e&&(s.as="script"),t.getAttribute&&"module"===t.getAttribute("data-rocket-type")&&(s.crossOrigin=!0),t.crossOrigin&&(s.crossOrigin=t.crossOrigin),t.integrity&&(s.integrity=t.integrity),i.appendChild(s),this.trash.push(s)}})),document.head.appendChild(i)}j(t){let e={};function i(i,o){return e[o].eventsToRewrite.indexOf(i)>=0&&!t.everythingLoaded?"rocket-"+i:i}function o(t,o){!function(t){e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=i(arguments[0],t),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=i(arguments[0],t),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(o)}function s(e,i){let o=e[i];e[i]=null,Object.defineProperty(e,i,{get:()=>o||function(){},set(s){t.everythingLoaded?o=s:e["rocket"+i]=o=s}})}o(document,"DOMContentLoaded"),o(window,"DOMContentLoaded"),o(window,"load"),o(window,"pageshow"),o(document,"readystatechange"),s(document,"onreadystatechange"),s(window,"onload"),s(window,"onpageshow");try{Object.defineProperty(document,"readyState",{get:()=>t.rocketReadyState,set(e){t.rocketReadyState=e},configurable:!0}),document.readyState="loading"}catch(t){console.log("WPRocket DJE readyState conflict, bypassing")}}F(t){let e;function i(e){return t.everythingLoaded?e:e.split(" ").map((t=>"load"===t||0===t.indexOf("load.")?"rocket-jquery-load":t)).join(" ")}function o(o){function s(t){const e=o.fn[t];o.fn[t]=o.fn.init.prototype[t]=function(){return this[0]===window&&("string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=i(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach((t=>{const e=arguments[0][t];delete arguments[0][t],arguments[0][i(t)]=e}))),e.apply(this,arguments),this}}o&&o.fn&&!t.allJQueries.includes(o)&&(o.fn.ready=o.fn.init.prototype.ready=function(e){return t.domReadyFired?e.bind(document)(o):document.addEventListener("rocket-DOMContentLoaded",(()=>e.bind(document)(o))),o([])},s("on"),s("one"),t.allJQueries.push(o)),e=o}o(window.jQuery),Object.defineProperty(window,"jQuery",{get:()=>e,set(t){o(t)}})}async H(t){const e=document.querySelector("script[data-webpack]");e&&(await async function(){return new Promise((t=>{e.addEventListener("load",t),e.addEventListener("error",t)}))}(),await t.K(),await t.H(t))}async U(){this.domReadyFired=!0;try{document.readyState="interactive"}catch(t){}await this.G(),document.dispatchEvent(new Event("rocket-readystatechange")),await this.G(),document.rocketonreadystatechange&&document.rocketonreadystatechange(),await this.G(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this.G(),window.dispatchEvent(new Event("rocket-DOMContentLoaded"))}async J(){try{document.readyState="complete"}catch(t){}await this.G(),document.dispatchEvent(new Event("rocket-readystatechange")),await this.G(),document.rocketonreadystatechange&&document.rocketonreadystatechange(),await this.G(),window.dispatchEvent(new Event("rocket-load")),await this.G(),window.rocketonload&&window.rocketonload(),await this.G(),this.allJQueries.forEach((t=>t(window).trigger("rocket-jquery-load"))),await this.G();const t=new Event("rocket-pageshow");t.persisted=this.persisted,window.dispatchEvent(t),await this.G(),window.rocketonpageshow&&window.rocketonpageshow({persisted:this.persisted}),this.windowLoaded=!0}m(){document.onreadystatechange&&document.onreadystatechange(),window.onload&&window.onload(),window.onpageshow&&window.onpageshow({persisted:this.persisted})}I(){const t=new Map;document.write=document.writeln=function(e){const i=document.currentScript;i||console.error("WPRocket unable to document.write this: "+e);const o=document.createRange(),s=i.parentElement;let n=t.get(i);void 0===n&&(n=i.nextSibling,t.set(i,n));const c=document.createDocumentFragment();o.setStart(c,0),c.appendChild(o.createContextualFragment(e)),s.insertBefore(c,n)}}async G(){Date.now()-this.lastBreath>45&&(await this.K(),this.lastBreath=Date.now())}async K(){return document.hidden?new Promise((t=>setTimeout(t))):new Promise((t=>requestAnimationFrame(t)))}N(){this.trash.forEach((t=>t.remove()))}static run(){const t=new RocketLazyLoadScripts;t.p(t)}}RocketLazyLoadScripts.run()})();</script><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<!--">-->
	<link rel="profile" href="http://gmpg.org/xfn/11">
    <meta name=“robots” content=“index,follow”/>
    
    
    
	<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<!-- Hubbub v.1.34.1 https://morehubbub.com/ -->
<meta property="og:locale" content="en" />
<meta property="og:type" content="article" />
<meta property="og:title" content="next level website development" />
<meta property="og:description" content="Services Happy Clients Packages Contact us Services Happy Clients Packages Contact Us +14158303899 infopackages@cloudanalogy.com Next Level WordPress Website Development Services: Making Your Website Your Strongest Marketing Tool No more battles &amp; hassles for creating WOW" />
<meta property="og:url" content="https://www.cloudanalogy.com/next-level-website-development/" />
<meta property="og:site_name" content="Cloud Analogy" />
<meta property="og:updated_time" content="2024-09-05T00:11:43+00:00" />
<meta property="article:published_time" content="2024-06-14T02:48:59+00:00" />
<meta property="article:modified_time" content="2024-09-05T00:11:43+00:00" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="next level website development" />
<meta name="twitter:description" content="Services Happy Clients Packages Contact us Services Happy Clients Packages Contact Us +14158303899 infopackages@cloudanalogy.com Next Level WordPress Website Development Services: Making Your Website Your Strongest Marketing Tool No more battles &amp; hassles for creating WOW" />
<meta class="flipboard-article" content="Services Happy Clients Packages Contact us Services Happy Clients Packages Contact Us +14158303899 infopackages@cloudanalogy.com Next Level WordPress Website Development Services: Making Your Website Your Strongest Marketing Tool No more battles &amp; hassles for creating WOW" />
<!-- Hubbub v.1.34.1 https://morehubbub.com/ -->
<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- This site is optimized with the Yoast SEO plugin v23.0 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>next level website development - Cloud Analogy</title><link rel="preload" data-rocket-preload as="image" href="https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1.jpg" fetchpriority="high">
	<link rel="canonical" href="https://www.cloudanalogy.com/next-level-website-development/" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="14 minutes" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://www.cloudanalogy.com/next-level-website-development/","url":"https://www.cloudanalogy.com/next-level-website-development/","name":"next level website development - Cloud Analogy","isPartOf":{"@id":"https://www.cloudanalogy.com/#website"},"primaryImageOfPage":{"@id":"https://www.cloudanalogy.com/next-level-website-development/#primaryimage"},"image":{"@id":"https://www.cloudanalogy.com/next-level-website-development/#primaryimage"},"thumbnailUrl":"https://www.cloudanalogy.com/wp-content/uploads/2024/05/1000-width-cloud-analogy-logo-1.png","datePublished":"2024-06-14T09:48:59+00:00","dateModified":"2024-09-05T07:11:43+00:00","breadcrumb":{"@id":"https://www.cloudanalogy.com/next-level-website-development/#breadcrumb"},"inLanguage":"en","potentialAction":[{"@type":"ReadAction","target":["https://www.cloudanalogy.com/next-level-website-development/"]}]},{"@type":"ImageObject","inLanguage":"en","@id":"https://www.cloudanalogy.com/next-level-website-development/#primaryimage","url":"https://www.cloudanalogy.com/wp-content/uploads/2024/05/1000-width-cloud-analogy-logo-1.png","contentUrl":"https://www.cloudanalogy.com/wp-content/uploads/2024/05/1000-width-cloud-analogy-logo-1.png","width":298,"height":54},{"@type":"BreadcrumbList","@id":"https://www.cloudanalogy.com/next-level-website-development/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.cloudanalogy.com/"},{"@type":"ListItem","position":2,"name":"next level website development"}]},{"@type":"WebSite","@id":"https://www.cloudanalogy.com/#website","url":"https://www.cloudanalogy.com/","name":"Cloud Analogy","description":"Salesforce Certified Consultants &amp; Developers in USA","publisher":{"@id":"https://www.cloudanalogy.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.cloudanalogy.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en"},{"@type":"Organization","@id":"https://www.cloudanalogy.com/#organization","name":"Cloud Analogy","url":"https://www.cloudanalogy.com/","logo":{"@type":"ImageObject","inLanguage":"en","@id":"https://www.cloudanalogy.com/#/schema/logo/image/","url":"https://www.cloudanalogy.com/wp-content/uploads/2020/07/cropped-cropped-CA_logo-120-x-80_80fa8a97375e87977bca0ff88f5c6e9a.png","contentUrl":"https://www.cloudanalogy.com/wp-content/uploads/2020/07/cropped-cropped-CA_logo-120-x-80_80fa8a97375e87977bca0ff88f5c6e9a.png","width":120,"height":79,"caption":"Cloud Analogy"},"image":{"@id":"https://www.cloudanalogy.com/#/schema/logo/image/"}}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel="alternate" type="application/rss+xml" title="Cloud Analogy &raquo; Feed" href="https://www.cloudanalogy.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Cloud Analogy &raquo; Comments Feed" href="https://www.cloudanalogy.com/comments/feed/" />
<link data-minify="1" rel='stylesheet' id='premium-addons-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/premium-addons-for-elementor/assets/frontend/min-css/premium-addons.min.css?ver=1728035237&wpr_t=1729010843' media='all' />
<style id='wp-emoji-styles-inline-css'>

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
<style id='safe-svg-svg-icon-style-inline-css'>
.safe-svg-cover{text-align:center}.safe-svg-cover .safe-svg-inside{display:inline-block;max-width:100%}.safe-svg-cover svg{height:100%;max-height:100%;max-width:100%;width:100%}

</style>
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='global-styles-inline-css'>
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='pafe-extension-style-free-css' href='https://www.cloudanalogy.com/wp-content/plugins/piotnet-addons-for-elementor/assets/css/minify/extension.min.css?ver=2.4.29' media='all' />
<link data-minify="1" rel='stylesheet' id='dashicons-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-includes/css/dashicons.min.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='post-views-counter-frontend-css' href='https://www.cloudanalogy.com/wp-content/plugins/post-views-counter/css/frontend.min.css?ver=1.4.7' media='all' />
<link data-minify="1" rel='stylesheet' id='dpsp-frontend-style-pro-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/social-pug/assets/dist/style-frontend-pro.css?ver=1728035237' media='all' />
<style id='dpsp-frontend-style-pro-inline-css'>

				@media screen and ( max-width : 720px ) {
					.dpsp-content-wrapper.dpsp-hide-on-mobile,
					.dpsp-share-text.dpsp-hide-on-mobile {
						display: none;
					}
					.dpsp-has-spacing .dpsp-networks-btns-wrapper li {
						margin:0 2% 10px 0;
					}
					.dpsp-network-btn.dpsp-has-label:not(.dpsp-has-count) {
						max-height: 40px;
						padding: 0;
						justify-content: center;
					}
					.dpsp-content-wrapper.dpsp-size-small .dpsp-network-btn.dpsp-has-label:not(.dpsp-has-count){
						max-height: 32px;
					}
					.dpsp-content-wrapper.dpsp-size-large .dpsp-network-btn.dpsp-has-label:not(.dpsp-has-count){
						max-height: 46px;
					}
				}
			
			@media screen and ( max-width : 720px ) {
				aside#dpsp-floating-sidebar.dpsp-hide-on-mobile.opened {
					display: none;
				}
			}
			
</style>
<link data-minify="1" rel='stylesheet' id='wpos-slick-style-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/wp-responsive-recent-post-slider/assets/css/slick.css?ver=1728035237&wpr_t=1729010843' media='all' />
<link data-minify="1" rel='stylesheet' id='wppsac-public-style-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/wp-responsive-recent-post-slider/assets/css/recent-post-style.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='eae-css-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/css/eae.min.css?ver=1.13.6&wpr_t=1729010843' media='all' />
<link data-minify="1" rel='stylesheet' id='eae-peel-css-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/lib/peel/peel.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='vegas-css-css' href='https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/lib/vegas/vegas.min.css?ver=2.4.0' media='all' />
<link rel='stylesheet' id='elementor-frontend-css' href='https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.22.3' media='all' />
<link rel='stylesheet' id='elementor-post-8975-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/uploads/elementor/css/post-8975.css?ver=1722935941&wpr_t=1729010843' media='all' />
<link rel='stylesheet' id='eael-general-css' href='https://www.cloudanalogy.com/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/css/view/general.min.css?ver=5.9.25' media='all' />
<link data-minify="1" rel='stylesheet' id='eael-13721-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/essential-addons-elementor/eael-13721.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='elementor-post-13721-css' href='https://www.cloudanalogy.com/wp-content/uploads/elementor/css/post-13721.css?ver=1722387356' media='all' />
<link data-minify="1" rel='stylesheet' id='font-awesome-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/themes/oceanwp/assets/fonts/fontawesome/css/all.min.css?ver=1728035237' media='all' />
<link data-minify="1" rel='stylesheet' id='simple-line-icons-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/themes/oceanwp/assets/css/third/simple-line-icons.min.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='oceanwp-style-css' href='https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/css/style.min.css?ver=1.5.32.1543908685' media='all' />
<link rel='stylesheet' id='oceanwp-google-font-raleway-css' href='//fonts.googleapis.com/css?family=Raleway%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800%2C900%2C100i%2C200i%2C300i%2C400i%2C500i%2C600i%2C700i%2C800i%2C900i&#038;subset=latin&#038;display=swap&#038;ver=6.6.1' media='all' />
<link data-minify="1" rel='stylesheet' id='elementor-icons-ekiticons-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=1728035237' media='all' />
<link data-minify="1" rel='stylesheet' id='qlwapp-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/wp-whatsapp-chat/build/frontend/css/style.css?ver=1728035237' media='all' />
<link data-minify="1" rel='stylesheet' id='elementor-icons-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=1728035237' media='all' />
<style id='elementor-icons-inline-css'>

		.elementor-add-new-section .elementor-add-templately-promo-button{
            background-color: #5d4fff;
            background-image: var(--wpr-bg-84cee983-18ae-4e9d-9118-94eac7640e6c);
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
        }
        
		.elementor-add-new-section .elementor-add-templately-promo-button > i{
            height: 12px;
        }
        
        body .elementor-add-new-section .elementor-add-section-area-button {
            margin-left: 0;
        }

		.elementor-add-new-section .elementor-add-templately-promo-button{
            background-color: #5d4fff;
            background-image: var(--wpr-bg-84cee983-18ae-4e9d-9118-94eac7640e6c);
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
        }
        
		.elementor-add-new-section .elementor-add-templately-promo-button > i{
            height: 12px;
        }
        
        body .elementor-add-new-section .elementor-add-section-area-button {
            margin-left: 0;
        }
</style>
<link data-minify="1" rel='stylesheet' id='swiper-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='elementor-post-17094-css' href='https://www.cloudanalogy.com/wp-content/uploads/elementor/css/post-17094.css?ver=1722387356' media='all' />
<link data-minify="1" rel='stylesheet' id='font-awesome-5-all-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='font-awesome-4-shim-css' href='https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=1.0' media='all' />
<link rel='stylesheet' id='elementor-global-css' href='https://www.cloudanalogy.com/wp-content/uploads/elementor/css/global.css?ver=1722387359' media='all' />
<link rel='stylesheet' id='elementor-post-40228-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/uploads/elementor/css/post-40228.css?ver=1725520307&wpr_t=1729010843' media='all' />
<link data-minify="1" rel='stylesheet' id='popup-maker-site-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/pum/pum-site-styles.css?ver=1728035237' media='all' />
<link rel='stylesheet' id='elementor-post-33567-css' href='https://www.cloudanalogy.com/wp-content/uploads/elementor/css/post-33567.css?ver=1722387356' media='all' />
<link data-minify="1" rel='stylesheet' id='ekit-widget-styles-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=1728035237&wpr_t=1729010843' media='all' />
<link data-minify="1" rel='stylesheet' id='ekit-responsive-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css?ver=1728035237' media='all' />
<link data-minify="1" rel='stylesheet' id='moove_gdpr_frontend-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/gdpr-cookie-compliance/dist/styles/gdpr-main.css?ver=1728035237' media='all' />
<style id='moove_gdpr_frontend-inline-css'>
#moove_gdpr_cookie_modal,#moove_gdpr_cookie_info_bar,.gdpr_cookie_settings_shortcode_content{font-family:Nunito,sans-serif}#moove_gdpr_save_popup_settings_button{background-color:#373737;color:#fff}#moove_gdpr_save_popup_settings_button:hover{background-color:#000}#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton,#moove_gdpr_cookie_info_bar .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton{background-color:#0c4da2}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green{background-color:#0c4da2;border-color:#0c4da2}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder a.mgbutton:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-footer-content .moove-gdpr-button-holder button.mgbutton:hover,.gdpr_cookie_settings_shortcode_content .gdpr-shr-button.button-green:hover{background-color:#fff;color:#0c4da2}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon{background-color:#0c4da2;border:1px solid #0c4da2}#moove_gdpr_cookie_info_bar span.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar span.change-settings-button:focus,#moove_gdpr_cookie_info_bar button.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar button.change-settings-button:focus{-webkit-box-shadow:0 0 1px 3px #0c4da2;-moz-box-shadow:0 0 1px 3px #0c4da2;box-shadow:0 0 1px 3px #0c4da2}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close i:hover,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close span.gdpr-icon:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button{color:#0c4da2}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li.menu-item-selected button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a span.gdpr-icon,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button span.gdpr-icon{color:inherit}#moove_gdpr_cookie_modal .gdpr-acc-link{line-height:0;font-size:0;color:transparent;position:absolute}#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-close:hover i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li button i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-modal-left-content #moove-gdpr-menu li a i,#moove_gdpr_cookie_modal .moove-gdpr-modal-content .moove-gdpr-tab-main .moove-gdpr-tab-main-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.change-settings-button:hover,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:hover,#moove_gdpr_cookie_info_bar span[data-href]>u.change-settings-button,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button.mgbutton:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content a:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content span.change-settings-button.focus-g,span.change-settings-button:focus,button.change-settings-button.focus-g,button.change-settings-button:focus,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button.focus-g,#moove_gdpr_cookie_info_bar.moove-gdpr-dark-scheme .moove-gdpr-info-bar-container .moove-gdpr-info-bar-content u.change-settings-button:focus{color:#0c4da2}#moove_gdpr_cookie_modal.gdpr_lightbox-hide{display:none}
</style>
<link data-minify="1" rel='stylesheet' id='oe-widgets-style-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/ocean-extra/assets/css/widgets.css?ver=1728035237&wpr_t=1729010843' media='all' />
<link data-minify="1" rel='stylesheet' id='oceanwp-custom-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/oceanwp/custom-style.css?ver=1728035237' media='all' />
<style id='rocket-lazyload-inline-css'>
.rll-youtube-player{position:relative;padding-bottom:56.23%;height:0;overflow:hidden;max-width:100%;}.rll-youtube-player:focus-within{outline: 2px solid currentColor;outline-offset: 5px;}.rll-youtube-player iframe{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:0 0}.rll-youtube-player img{bottom:0;display:block;left:0;margin:auto;max-width:100%;width:100%;position:absolute;right:0;top:0;border:none;height:auto;-webkit-transition:.4s all;-moz-transition:.4s all;transition:.4s all}.rll-youtube-player img:hover{-webkit-filter:brightness(75%)}.rll-youtube-player .play{height:100%;width:100%;left:0;top:0;position:absolute;background:var(--wpr-bg-ac81dfe8-6bf5-4a57-a5b8-440a71022d0a) no-repeat center;background-color: transparent !important;cursor:pointer;border:none;}.wp-embed-responsive .wp-has-aspect-ratio .rll-youtube-player{position:absolute;padding-bottom:0;width:100%;height:100%;top:0;bottom:0;left:0;right:0}
</style>
<link rel='stylesheet' id='google-fonts-1-css' href='https://fonts.googleapis.com/css?family=Raleway%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRubik%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CInter%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto&#038;ver=6.6.1' media='all' />
<link rel='stylesheet' id='elementor-icons-shared-0-css' href='https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3' media='all' />
<link data-minify="1" rel='stylesheet' id='elementor-icons-fa-solid-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=1728035237' media='all' />
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin><script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/piotnet-addons-for-elementor/assets/js/minify/extension.min.js?ver=2.4.29" id="pafe-extension-free-js" defer></script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/js/iconHelper.js?ver=1728035238" id="eae-iconHelper-js" defer></script>
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.cloudanalogy.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.6.1" />
<link rel='shortlink' href='https://www.cloudanalogy.com/?p=40228' />
<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://www.cloudanalogy.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.cloudanalogy.com%2Fnext-level-website-development%2F" />
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://www.cloudanalogy.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.cloudanalogy.com%2Fnext-level-website-development%2F&#038;format=xml" />
<style type='text/css'> .ae_data .elementor-editor-element-setting {
            display:none !important;
            }
            </style><!-- start Simple Custom CSS and JS -->
<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
jQuery(document).ready(function($){
    // Initially, show only the first div
    $(".av-ani1").show();
    
    // After 2000 milliseconds (2 seconds), hide the first div and show the second div
    setTimeout(function(){
        $(".av-ani1").slideUp();
        $(".av-ani2").slideDown();
    }, 4000);
    
    // After another 2000 milliseconds (2 seconds), hide the second div and show the third div
    setTimeout(function(){
         $(".av-ani2").slideUp();
        $(".av-ani3").slideDown();
    }, 8000);
});






jQuery(document).ready(function( $ ){
  
  $('.js-example-basic-multiple').select2();
  
 function LoopForever() {
    $('#ca-slide img').css('opacity', '0.5');
    setTimeout( function() { 
        $('#ca-slide img').css('opacity', '1');
    },1000);
  
   $('#fb-slide img').css('opacity', '0.5');
    setTimeout( function() { 
        $('#fb-slide img').css('opacity', '1');
      $('#ca-slide img').css('opacity', '0.5');
    }, 6000);
  
  $('#pg-slide img').css('opacity', '0.5');
    setTimeout( function() { 
        $('#pg-slide img').css('opacity', '1');
      $('#ca-slide img').css('opacity', '0.5');
       $('#fb-slide img').css('opacity', '0.5');
    }, 10000);
  
 }
  LoopForever()
self.setInterval(function(){LoopForever()},14000)
});


jQuery(document).ready(function( $ ){
 function clickNextTab() {
  var $activeTab = $(".us-estm-tabs .eael-tabs-nav .eael-tab-item-trigger.active");
  var $nextTab = $activeTab.next();
  
  if ($nextTab.length == 0) {
    $nextTab = $(".us-estm-tabs .eael-tabs-nav .eael-tab-item-trigger:first");
  }
  
  $nextTab.click();
  
  setTimeout(clickNextTab, 5000); // Change the delay as per your requirement
}

$(document).ready(function() {
  setTimeout(clickNextTab, 5000); // Change the delay as per your requirement
});
  
 });



// jQuery(document).ready(function( $ ){
//  function clickNextTab2() {
//   var $activeTab2 = $(".homeev-main .eael-tabs-nav .eael-tab-item-trigger.active");
//   var $nextTab2 = $activeTab2.next();
  
//   if ($nextTab2.length == 0) {
//     $nextTab2 = $(".homeev-main .eael-tabs-nav .eael-tab-item-trigger:first");
//   }
  
//   $nextTab2.click();
  
//   setTimeout(clickNextTab2, 8000); // Change the delay as per your requirement
// }

// $(document).ready(function() {
//   setTimeout(clickNextTab2, 8000); // Change the delay as per your requirement
// });
  
//  });



// jQuery(document).ready(function( $ ){
//   if ($('.top-section').length > 0) {
//         $('.below-section').css('visibility', 'visible'); // Show demo class sections
//     $('.page-id-31632 .site-footer').css('visibility', 'visible'); 
//       } else {
//         $('.below-section').css('visibility', 'hidden'); // Hide demo class sections
//         $('.page-id-31632 .site-footer').css('visibility', 'hidden');
//       }
//   });


 jQuery(document).ready(function($){
       $(document).on('click','.dum-form > input',function(){
          var element = jQuery('.dm-form-main textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            document.getElementById('captcha_errorin').innerHTML = "Captcha Completed";
	            return true;
	        } else {
	           
	             document.getElementById('captcha_errorin').innerHTML = "You can't leave Captcha Code empty";
	            return false;
	        } 
       }); 
    });











});</script>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {


 jQuery(document).ready(function($) {
  // Toggle menu display on hamburger icon click
  $('.lphamburger-container').click(function() {
    $('#lpmenu').slideToggle();
  });

  // Toggle icon between hamburger and close icon
  var icon = $('.lphamburger-container i');
  $('.lphamburger-container').on('click', function() {
    icon.toggleClass('fa-bars fa-times');
  });

  // Close menu and change icon back to hamburger when menu item is clicked
  $('#lpmenu a').click(function() {
    $('#lpmenu').slideUp();
    icon.removeClass('fa-times').addClass('fa-bars');
  });
});










});</script>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
jQuery(document).ready(function($){
       $(document).on('click','.rvm-course .caSubmit > input',function(){
         
          var element = jQuery('.rvm-course textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-course #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-course #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-course .caSubmit > button',function(){
         
          var element = jQuery('.rvm-course textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-course #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-course #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });


jQuery(document).ready(function($){
       $(document).on('click','.rvm-zoho .caSubmit > input',function(){
         
          var element = jQuery('.rvm-zoho textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-zoho #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-zoho #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-zoho-pkg .caSubmit > input',function(){
         
          var element = jQuery('.rvm-zoho-pkg textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-zoho-pkg #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-zoho-pkg #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-zoho-fsm .caSubmit > input',function(){
         
          var element = jQuery('.rvm-zoho-fsm textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-zoho-fsm #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-zoho-fsm #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-zoho-desk .caSubmit > input',function(){
         
          var element = jQuery('.rvm-zoho-desk textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-zoho-desk #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-zoho-desk #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-zoho-people .caSubmit > input',function(){
         
          var element = jQuery('.rvm-zoho-people textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-zoho-people #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-zoho-people #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-zoho-writer .caSubmit > input',function(){
         
          var element = jQuery('.rvm-zoho-writer textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-zoho-writer #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-zoho-writer #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-course-sap .caSubmit > button',function(){
         
          var element = jQuery('.rvm-course-sap textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-course-sap #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-course-sap #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });


jQuery(document).ready(function($){
       $(document).on('click','.rvm-vanif .caSubmit > input',function(){
         
          var element = jQuery('.rvm-vanif textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-vanif #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-vanif #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-crmamc .caSubmit > input',function(){
         
          var element = jQuery('.rvm-crmamc textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-crmamc #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-crmamc #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });

jQuery(document).ready(function($){
       $(document).on('click','.rvm-cpmpop .caSubmit > input',function(){
         
          var element = jQuery('.rvm-cpmpop textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-cpmpop #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-cpmpop #captcha_errorinn').text ("Captcha should not left blank");
	            return false;
	        } 
       }); 
    });




 jQuery(document).ready(function(){
	       
    	    const utm_source = getQueryParam("utm_source");
            if(utm_source!=undefined){
                jQuery('#00N5w00000SFQtX').val(utm_source);
            }
    	    
	        function getQueryParam(paramName) {
              const queryString = window.location.search;
              const urlParams = new URLSearchParams(queryString);
              return urlParams.get(paramName);
            }
	        
	    })


setTimeout(function(){
jQuery('#hm-drop input.mat-input').on('focusout', function() {
    if(jQuery(this).val() != ''){
        jQuery(this).siblings('label').css('top','-23px');    
    }else{
        jQuery(this).siblings('label').css('top','0px');
    }
});
	
	
jQuery(document).ready(function($) {
	jQuery('#hm-drop input.mat-input').on('focusin', function() {
		jQuery(this).siblings('label').css('top','-23px');    
	});
	},500);
});
    





jQuery(function($){	 
  
  $('#df-meeting').click(function(){
   // console.log("noifro");
    $("#popmake-26044 .pum-close").trigger("click");
    setTimeout(() => {
$(".banner_book a")[0].click();
}, 500);
   
})
  
//    $('#ca-slide img').css('opacity', '0.5');
//     setTimeout( function() { 
//         $('#ca-slide img').css('opacity', '1');
//     }, self.setInterval(function(){LoopForever()},3000););
  
//    $('#fb-slide img').css('opacity', '0.5');
//     setTimeout( function() { 
//         $('#fb-slide img').css('opacity', '1');
//       $('#ca-slide img').css('opacity', '0.5');
//     }, 4000);
  
//   $('#pg-slide img').css('opacity', '0.5');
//     setTimeout( function() { 
//         $('#pg-slide img').css('opacity', '1');
//       $('#ca-slide img').css('opacity', '0.5');
//        $('#fb-slide img').css('opacity', '0.5');
//     }, 6000);
  
  
  $("#00N5w00000SEDDy").val(window.location);
  
$('#pc_email').attr('disabled', 'disabled');
  $('#pc_name').attr('disabled', 'disabled');
  $('#pc_dob').attr('disabled', 'disabled');
  $('#pc_phone').attr('disabled', 'disabled');
  $('#pc_upload').attr('disabled', 'disabled');
//   $('#pc_submit').hide();
  
  $('#pc2_email').attr('disabled', 'disabled');
  $('#pc2_name').attr('disabled', 'disabled');
  $('#pc2_dob').attr('disabled', 'disabled');
  $('#pc2_phone').attr('disabled', 'disabled');
  $('#pc2_upload').attr('disabled', 'disabled');
//   $('#pc2_submit').hide();
  
  $('#your-qualification').on('change', function() {
    var GetValue = $('#your-qualification').val();
    if(GetValue === "Graduate" || GetValue === "Post Graduate" ){
      	$('#pc_email').removeAttr("disabled");
        $('#pc_name').removeAttr("disabled");
        $('#pc_dob').removeAttr("disabled");
        $('#pc_phone').removeAttr("disabled"); 
        $('#pc_upload').removeAttr("disabled");
//       	$('#pc_submit').show();
      
      	$('#pc2_email').removeAttr("disabled");
        $('#pc2_name').removeAttr("disabled");
        $('#pc2_dob').removeAttr("disabled");
        $('#pc2_phone').removeAttr("disabled"); 
        $('#pc2_upload').removeAttr("disabled");
//       	$('#pc2_submit').show();
//       	$('.prerequisite_form').show();
    }else{
//       	$('.prerequisite_form').hide();
      	$('.prerequisite_form').attr('disabled', 'disabled');
        $('#pc_email').attr('disabled', 'disabled');
        $('#pc_name').attr('disabled', 'disabled');
        $('#pc_dob').attr('disabled', 'disabled');
        $('#pc_phone').attr('disabled', 'disabled');
//         $('#pc_submit').hide(); 
      
      	$('#pc2_email').attr('disabled', 'disabled');
        $('#pc2_name').attr('disabled', 'disabled');
        $('#pc2_dob').attr('disabled', 'disabled');
        $('#pc2_phone').attr('disabled', 'disabled');
        $('#pc2_upload').attr('disabled', 'disabled');
//         $('#pc2_submit').hide();
    }
  });
  });
 
  //404 PAGE
// (function($) { 
// document.addEventListener( 'wpcf7mailsent', function( event ) {
//   location = (window.location);
// }, false );
// }(jQuery));
  
 
  (function($) { 
document.addEventListener( 'wpcf7mailsent', function( event ) {
	if(event.detail.contactFormId == '28223') {
		location = 'https://cloudanalogy.com/singapore-thank-you/';
		
		
    }else{
		 location = (window.location);	
	}
}, false );
}(jQuery));
  



jQuery(function($){	
 $( ".download_ebook_btn" ).click(function(  ) {
  var ebooka= $(this).parents('.wpcf7').siblings('.downloadlink'); 
  var link_id = ebooka.attr('id');   
   setTimeout(function(){
    var abc=    $('.wpcf7-mail-sent-ok').html();
     if(typeof abc !== "undefined"){  
    document.getElementById(link_id).click();
     }
    }, 5000);
 });
});

jQuery(function($){
  $("#category_tab_col li").click(function () {
   var id_of_clickthis = $(this).attr('id'); 
     $("#category_tab_col li").removeClass("active");
    $(this).addClass("active");
     $(".member_hai").removeClass("show_this_list");
     $("."+id_of_clickthis).addClass("show_this_list");
	
    
   
  });

});
jQuery(function($){
  $("#button_reason_coll span").click(function () {
   var id_of_click = $(this).attr('id'); 
     $("#button_reason_coll span").removeClass("active_res_btn");
    $(this).addClass("active_res_btn");
     $(".descp_sim").addClass("hide_res_descrip");
     $("."+id_of_click).removeClass("hide_res_descrip");
    
   
  });
   $(".techno").click(function () {
     
        $(this).addClass("active_nav");
      $(".services").removeClass("active_nav");
    $("#techno").removeClass("hide_sec");
       $("#services").addClass("hide_sec");
  });
});

jQuery(function($){
$(document).ready(function () {

         $('.client-single').on('click', function (event) {
            event.preventDefault();

            var active = $(this).hasClass('active');

            var parent = $(this).parents('.testi-wrap');

            if (!active) {
                var activeBlock = parent.find('.client-single.active');

                var currentPos = $(this).attr('data-position');

                var newPos = activeBlock.attr('data-position');

                activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
                activeBlock.attr('data-position', currentPos);

                $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
                $(this).attr('data-position', newPos);

            }
        });
   
   }(jQuery));
});
jQuery(function($){
  $(".services").click(function () {
   
    $(this).addClass("active_nav");
      $(".techno").removeClass("active_nav");
    $("#services").removeClass("hide_sec");
       $("#techno").addClass("hide_sec");
  });
   $(".techno").click(function () {
     
        $(this).addClass("active_nav");
      $(".services").removeClass("active_nav");
    $("#techno").removeClass("hide_sec");
       $("#services").addClass("hide_sec");
  });
});


jQuery(function($){	
  var pathArray = window.location.search.split('=');
  if(pathArray[1] == "Akshay"){
 		 $("#00Nf20000036FYg").val("Akshay Dhiman");
	}
  else if(pathArray[1] == "Deepali"){
 		 $("#00Nf20000036FYg").val("Deepali Kulshrestha");
	}
   else if(pathArray[1] == "Ajay"){
 		 $("#00Nf20000036FYg").val("Ajay Dubedi");
	}
   else if(pathArray[1] == "Suraj"){
 		 $("#00Nf20000036FYg").val("Suraj Tripathi");
	}
   else if(pathArray[1] == "sachin"){
 		 $("#00Nf20000036FYg").val("Sachin Arora");
	}
  else if(pathArray[1] == "nitish"){
 		 $("#00Nf20000036FYg").val("Nitish Bhardawaj");
	}
  else if(pathArray[1] == "ritika"){
 		 $("#00Nf20000036FYg").val("Ritika Pathak Dubedi");
	}
  else{
  $("#00Nf20000036FYg").val("Ajay Dubedi");
  }
   $("#email").keyup(function (){ 
       var reg1 = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
		var element = $("#email");
		var its_val = element.val();     
     		if (!reg1.test(its_val)) {
             	   isValid = false;
             		 $('.email_man').show().html('This is not a email');        
              }
            else {
          			$("ul li.menu_9").addClass("active").removeClass("not_active");  
                  $('.email_man').hide(); 
            }
  });
  
  $("#msform_new").submit(function (){ 
   var abc= emailvaliadte();
    return abc;
  });
  
  function emailvaliadte(){	    
  var reg1 = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
		var element = $("#email");
		var its_val = element.val();
    	var haveid = "menu_9";
   		 if (its_val != "") {    
           if (!reg1.test(its_val)) {
                isValid = false;
              $('.email_man').show().html('This is not a email');
              clickableli(haveid);
              return false;
            }
            else {
          $("ul li.menu_9").addClass("active").removeClass("not_active");   
            return true;          
            }
    	}
    else{
       $('.email_man').show().html('Email is mandatory');
          clickableli(haveid);
          return false;
    }
  }
  
  	jQuery("#menu_1:visible").ready(function () {
			var getheight1 = $('#menu_1').height();
			var curheight1 = parseInt(getheight1 + 130);
			$(".fielsetcontainer").height(curheight1 + 'px');
	});

	$(".menu_1").click(function () {
		var classhave = "menu_1";
		clickableli(classhave);
	});

	$(".menu_2").click(function () {
		var classhave = "menu_2";
		clickableli(classhave);
	});
	$(".menu_3").click(function () {
		var classhave = "menu_3";
		clickableli(classhave);
	});
	$(".menu_4").click(function () {
		var classhave = "menu_4";
		clickableli(classhave);
	});
	$(".menu_5").click(function () {
		var classhave = "menu_5";
		clickableli(classhave);
	});
	$(".menu_6").click(function () {
		var classhave = "menu_6";
		clickableli(classhave);
	});
	$(".menu_7").click(function () {
		var classhave = "menu_7";
		clickableli(classhave);
	});
	$(".menu_8").click(function () {
		var classhave = "menu_8";
		clickableli(classhave);
	});
	$(".menu_9").click(function () {
		var classhave = "menu_9";
		clickableli(classhave);
	});
	$(".menu_10").click(function () {
		var classhave = "menu_10";
		clickableli(classhave);
	});


	function clickableli(thisid) {
		var visibleid = $("fieldset:visible").attr("id");	
		if (visibleid != thisid) {
			if (animating) return false;
			animating = true;
			current_fs = $("fieldset:visible");
			previous_fs = $("#" + thisid);
				var getheight = previous_fs.height();
				var curheight = parseInt(getheight + 130);
				$(".fielsetcontainer").height(curheight + 'px');
			
			previous_fs.show();			
			current_fs.animate({ opacity: 0 }, {
				step: function (now, mx) {
					scale = 0.8 + (1 - now) * 0.2;
					left = ((1 - now) * 50) + "%";
					opacity = 1 - now;
					current_fs.css({ 'left': 0 });
					previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
				},
				duration: 1500,
				complete: function () {
					current_fs.hide();
					animating = false;
				},				
				easing: 'easeOutQuint'
			});
		}
		else {
			return false;
		}
		$("li").removeClass("current_active");
		$("."+thisid).addClass("current_active");
	}


	function checkforstring(element, its_val) {
		var regName1 = /^[a-zA-Z]+$/;;
		var abc = element.siblings('.label_placeholder').html();
		if (!regName1.test(its_val)) {
			element.siblings('.error_msg').show().html(abc + " should be alphabet");
			element.addClass("not_validate").removeClass("validate");
		}
		else {
			element.siblings('.error_msg').hide();
			element.addClass("validate").removeClass("not_validate");
		}
	}

 	 $("#first_name").keyup(function () {
		var element = $(this);
		var its_val = element.val();
		$(".noselected").hide("slow");
		$(".ques_ans_menu_9").show("slow");
		$(".firstnamehead").show();
		$(".first_name_answer").show();
		$(".first_name_answer").html(its_val);
		$("#first_name").val(its_val);
		checkforstring(element, its_val);		
	});
  
	$("#last_name_show").keyup(function () {
		var element = $(this);
		var its_val = element.val();
		$(".noselected").hide("slow");
		$(".ques_ans_menu_9").show("slow");
		$(".lastnamehead").show();
		$(".last_name_answer").show();
		$(".last_name_answer").html(its_val);
		$("#last_name").val(its_val);
		checkforstring(element, its_val);		
	});

	$("#email").keyup(function () {
		var element = $(this);
		var its_val = element.val();
		$(".noselected").hide("slow");
		$(".ques_ans_menu_9").show("slow");
		$(".emailhead").show();
		$(".email_answer").show();
		$(".email_answer").html(its_val);
	});
	$("#email,#phone").focusout(function(){
      if($(this).val() != ''){
        $(this).siblings('label').css({'top':'-20px','color':'#2196f3','font-size':'14px'});
      }
      
    })

		$("#company_show").keyup(function () {	
		var element = $(this);
		var its_val = element.val();
		$(".noselected").hide("slow");
		$(".ques_ans_menu_9").show("slow");
		$(".comapnyhead").show();
		$(".company_answer").show();
		$(".company_answer").html(its_val);
		$("#company").val(its_val);		
	});


  $('.msform_new input[type=radio]').click(function () {     
       if ($(window).width() >= 600 && $(window).width() <= 1400){	
        $('html, body').animate({
	 scrollTop: $("#toscrolltop").offset().top+200
       }, 1000);
	}      
        else if ($(window).width() >= 1400){	
             $('html, body').animate({
	 scrollTop: $("#toscrolltop").offset().top
                }, 1000);
	}
   

  });
    $('#progressbar_new li').click(function () {
if ($(window).width() >= 600 && $(window).width() <= 1400){	
        $('html, body').animate({
	 scrollTop: $("#toscrolltop").offset().top+200
       }, 1000);
	}      
        else if ($(window).width() >= 1400){	
             $('html, body').animate({
	 scrollTop: $("#toscrolltop").offset().top
                }, 1000);
	}
  });
  

	$('input[type=radio]').click(function () {
		$(".noselected").hide("slow");
		var got = $(this).val();
		var field_set_id = $(this).parents("fieldset").attr("id");
		$("ul li." + field_set_id).addClass("active").removeClass("not_active");   
		$(this).parent().siblings("input[type=hidden]").val(got);
		$(this).parent().siblings(".next").prop('disabled', false);
		var got_que= $(this).parent().siblings("h3").html();
		$(".ques_ans_" + field_set_id).show("slow");
		$(".question_" + field_set_id).html(got_que);
		$(".answer_" + field_set_id).html(got);
    
	});


	var current_fs, next_fs, previous_fs; 
	var left, opacity, scale; 
	var animating; 
	$(".next").click(function () {
		if (animating) return false;
		animating = true;
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();

			var getheight = next_fs.height();
			var curheight = parseInt(getheight + 130);
			$(".fielsetcontainer").height(curheight + 'px');
		

		var got = $(this).siblings().children("input:checked").val();
		$(this).siblings("input[type=hidden]").val(got);
		next_fs.show();
		$("#progressbar_new li").removeClass("current_active");
		$("#progressbar_new li").eq($("fieldset").index(next_fs)).addClass("current_active");
		current_fs.animate({ opacity: 0 }, {
			step: function (now, mx) {
				scale = 1 - (1 - now) * 0.2;
				left = (now * 50) + "%";
				opacity = 1 - now;
				current_fs.css({ 'transform': 'scale(' + scale + ')' });
				next_fs.css({ 'left': 0, 'opacity': opacity });
			},
			duration: 1500,
			complete: function () {
				current_fs.hide();
				animating = false;
			},
			easing: 'easeOutQuint'
		});
	});

	$(".previous").click(function () {
		if (animating) return false;
		animating = true;
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
	
			var getheight = previous_fs.height();
			var curheight = parseInt(getheight + 130);
			$(".fielsetcontainer").height(curheight + 'px');
		
		previous_fs.show();
		$("#progressbar_new li").removeClass("current_active")
		$("#progressbar_new li").eq($("fieldset").index(previous_fs)).addClass("current_active");
		current_fs.animate({ opacity: 0 }, {
			step: function (now, mx) {
				scale = 0.8 + (1 - now) * 0.2;
				left = ((1 - now) * 50) + "%";
				opacity = 1 - now;
				current_fs.css({ 'left': 0 });
				previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
			},
			duration: 1200,
			complete: function () {
				current_fs.hide();
				animating = false;
			},
			easing: 'easeOutQuint'
		});
	});
      
      var getname1 ="Akshay";
  appendButton(getname1);
  
  var getname2 ="Deepali";
  appendButton(getname2);
  
  var getname3 ="Ajay";
  appendButton(getname3);
  
    
  var getname4 ="Suraj";
  appendButton(getname4);
  
  var getname5 ="sachin";
  appendButton(getname5);
  
    var getname6 ="Nitish";
  appendButton(getname6);
  
    var getname7 ="ritika-pathak1";
  appendButton(getname7);


  function appendButton(getname){
  var $newdiv1 = $( "<div class='hire-wrapper-title'><a href='https://cloudanalogy.com/hire-us/?hire-expert="+getname+"' id='"+getname+"'><button class='hireus' type='button'>Hire Me</button></a></div>" ); 
	$(".author-main").find('img[title|='+getname+']').after( $newdiv1);
}
    
      });
	  
	  var $j = jQuery.noConflict();

    $j(function() {

        $j('ul.tabs li').click(function() {
            var tab_id = $j(this).attr('data-tab');

            $j('ul.tabs li').removeClass('current');
            $j('.tab-content').removeClass('current');

            $j(this).addClass('current');
            $j("#" + tab_id).addClass('current');
        })

    })

    function selectFunction(salesforce) {
        document.getElementById("result").value = salesforce;
    }

 var $j = jQuery.noConflict();   
$j(function(){
    $j('input[type="radio"]').click(function(){
      
        var inputValue = $j(this).attr("class");
        //alert('data is'+inputValue);
        var targetBox = $j("." + inputValue);
        $j(".box").not(targetBox).hide();
        $j(targetBox).show();
        $j('.box').attr("id","popout");
      
    });
});






document.addEventListener( 'wpcf7mailsent', function( event ) {
   if ( '13194' == event.detail.contactFormId ) {
    location = 'https://cloudanalogy.com/success/';
    }
}, false );






jQuery(document).ready(function($) {
  $('img[title]').each(function() { $(this).removeAttr('title'); });

});




});</script>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<style>
.page-id-26132 .page-header, .page-id-30780 .page-header, .page-id-26132 #site-header, .page-id-26132 #footer, .page-id-27565 .page-header, .page-id-28402 .page-header, .page-id-29115 .page-header, 
.page-id-29901 .page-header, .page-id-31632 .page-header, .page-id-34000 .page-header, .page-id-34680 .page-header, .page-id-34815 .page-header, .page-id-34965 .page-header, .page-id-35236 .page-header, .page-id-35399 .page-header, .page-id-36042 .page-header, .page-id-36246 .page-header, .page-id-36454 .page-header, .page-header{
  display:none;
}

.page-id-35236 #site-header, .page-id-35236 #footer, .page-id-35236 .elementor-slideshow__title, .page-id-34965 #site-header, .page-id-34965 #footer, .page-id-36042 #site-header, .page-id-36042 #footer, .page-id-36246 #site-header, .page-id-36246 #footer, .page-id-34815 #site-header, .page-id-34815 #footer, .page-id-35399 #site-header, .page-id-35399 #footer, .page-id-36819 #site-header, .page-id-36819 #footer, .page-id-38611 #site-header, .page-id-38611 #footer , .page-id-39235 #site-header, .page-id-39235 #footer, .page-id-37772 #site-header, .page-id-37772 #footer, .page-id-39543 #site-header, .page-id-39543 #footer, .page-id-40151 #site-header, .page-id-40151 #footer, .page-id-40228 #site-header, .page-id-40228 #footer, .page-id-40558 #site-header, .page-id-40558 #footer, .page-id-40916 #site-header, .page-id-40916 #footer, .page-id-41032 #site-header, .page-id-41032 #footer, .page-id-41521 #site-header, .page-id-41521 #footer{
	display:none;
}

.df-clndly a{
	font-family: "Inter", Sans-serif;
    font-size: 20px;
    font-weight: 600;
    background-color: #1571CC;
    color: white;
    padding: 12px 25px;
    border-radius: 4px;
	border: 1px solid #1571CC;
}


.df-clndly a:hover, .df-clndly a:focus{
	background-color: #FFFFFF;
}


.col-calendly .calendly-inline-widget iframe{
	border-radius:10px;
}

.vs-cld-btn a{
	display: flex;
    align-items: center;
    border: 2px solid #F8B333;
    border-radius: 35px;
    background: #FD9635;
	text-align:center;
	box-shadow: 0px 0px 10px 0px #ECA72C;
}

.vs-cld-btn a p{
	margin: 0px;
    background: white;
    color: #EA6E30;
    padding: 8px 16px;
    border: 2px solid #F8B333;
    border-radius: 35px;
    font-family: "Rubik", Sans-serif;
    font-size: 25px !important;
    font-weight: 600;
}

.vs-cld-btn .vs-clnd-img{
	color: white;
    font-size: 30px;
    padding: 6px 12px 8px 18px;
}

.vs-cld-btn a:hover{
	border: 2px solid #31b4ff !important;
	 background: #1980DF !important;
	box-shadow: 0px 0px 10px 0px #31b4ff !important;
	transform: scale(1.05);
}

.vs-cld-btn a:hover p{
	 border: 2px solid #18A8FB !important;
	 color: #25A7FB !important;
}

.vs-cld-btn.lf-vs-cld-btn p{
	font-size:20px !important;
}



.clnd-imgi{
	margin-right:5px !important;
}

.hub-val-col{
	padding:0px !important;
}

.hub-check label{
        position:relative;
        font-weight: 400;
    font-size: 16px;
    }

#hubspotPackagePG .hub-check{
	margin-bottom:0px;
}
    
   #hubspotPackagePG .hub-check .inner-sli input{
        margin-top:14px !important;
		border: 1px solid #bbb !important;
    position: relative;
    }

 #hubspotPackagePG .inner-sli input[type=checkbox]:checked:before{
	position: absolute;
    top: 0;
    right: -1px;
    color: #ECA72C;
}
    
    .sl-item{
        display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    }
    
    .hubcrmp .rebran-ph input{
        border: 1px solid grey !important;
    border-radius: 4px !important;
    padding-top: 0px !important;
    min-height: 43px;
    } 
    


.rebran-email label{
	top: 10px !important;
}


.loader{
	position: absolute;
    top: 40%;
	left:42%;
	width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: orange;
  animation: l2 1s infinite linear;
}


.floader{
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: orange;
	position: absolute;
    top: 40%;
  animation: l2 1s infinite linear;
	left:42%;
}

@keyframes l2 {to{transform: rotate(1turn)}}


.ldr-main, .fldr-main{
	text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: aliceblue;
    z-index: 9;
    opacity: 0.6;
    display: flex;
    justify-content: center;
	border-radius:8px;
	display:none;
	padding: 20px;
}

.eo-text{
	font-family: "Rubik", Sans-serif;
    font-weight: 500;
    color: green;
    line-height: 1.2em;
}

.vo-msg{
	margin-top: 20px;
    color: red;
}

.ldr-msg{
	color: red;
    margin-top: 10px;
}

.rebarn-form-wig .g-recaptcha{
	margin-top:25px;
}

.otp-main{
	text-align:center;
}

.otp-main input{
	width: 200px;
    border: 0px !important;
    border-bottom: 1.5px solid rgba(48, 41, 47, 0.5) !important;
    border-radius: 0px !important;
    padding: 10px 0px 0px 0px !important;
	text-align:center;
}

.otp-main #verifyOtp{
	font-size: 16px;
    font-weight: 700;
    background-color: #ECA72C;
    border-style: solid;
    border-width: 0px 1px 1px 1px;
    border-color: #ECA72C;
    border-radius: 35px 35px 35px 35px;
    box-shadow: 0px 0px 5px 0px #ECA72C;
    padding: 10px 25px 10px 25px;
    text-transform: capitalize;
    letter-spacing: normal;
    width: 145px;
    margin-top: 20px;
    color: white;
}

.rebran-sbt input {
    font-size: 16px;
    font-weight: 700;
    background-color: #ECA72C;
    border-style: solid;
    border-width: 0px 1px 1px 1px;
    border-color: #ECA72C;
    border-radius: 35px 35px 35px 35px;
    box-shadow: 0px 0px 5px 0px #ECA72C;
    padding: 12px 25px 12px 25px;
    text-transform: capitalize;
    letter-spacing: normal;
    width: 100%;
    margin-bottom: 10px;
}

.rebran-sbt input:hover, .rebran-sbt input:focus{
    color: #ECA72C;
    background-color: #FFFFFF;
}


.page-id-40793 p, .page-id-40793 .elementor-widget-text-editor ul li, .page-id-40793 .elementor-widget-text-editor ul li{
	font-size:17px !important;
}


.calms-tabs .elementor-tab-content{
	padding:0px;
}

.calms-tabs .elementor-tab-title{
	width:50%;
	text-align:center;
	padding-bottom: 5px !important;
	padding-top: 0px !important;
}

.calms-tabs .elementor-tab-title.elementor-active{
	border-bottom: 2px solid #0960AB !important;
	padding-bottom: 5px !important;
	padding-top: 0px !important;
}

.calms-tabs .elementor-tabs-wrapper{
	margin-bottom:10px !important;
}


#reb-caro .swiper-navigation-button{
		display:block !important;
		position: absolute;
    top: -20px;
    transform: translateY(0px) !important;
	}


.page-id-40793 .elementor-widget-text-editor b{
	font-size: 20px !important;
}

.nn-btn a{
	width: 240px !important;
    padding: 13px 25px !important;
}

.nn-btn2 a{
	width: 240px !important;
	display:block;
}


.cdp-col .elementor-widget-wrap{
	background-size: 100% 100% !important;
}

.re-brand-carousel.crmdcont .elementskit-profile-info{
	min-height: 190px;
}

.crdi-list img{
	height:45px;
}








.re-brand-carousel .swiper-button-next:after, .re-brand-carousel .swiper-button-prev:after{
	display:none;
}

.ysb-text .elementor-widget-container{
	background-size: 100% 100% !important;
}

.rebral-vt .swiper-pagination{
	bottom:-50px !important;
}


.bggtmon1 .elementor-widget-container{
	background-size: cover;
    background-repeat: no-repeat;
   background-position: center right;
}


.bggtmon .elementor-widget-container{
	background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}


.bggtmon .elementor-widget-container p, .bggtmon1 .elementor-widget-container p{
	padding: 20px 20px;
}



.rebral-vt .swiper {
    overflow: visible;
    overflow-x: clip;
}

.swo-carousel .swiper-button-next:after, .swo-carousel .swiper-button-prev:after{
	display:none;
}


.sdwfrm .elementor-widget-wrap{
    box-shadow: 0px 0px 9px 5px rgba(21.000000000000018, 113.0000000000002, 204, 0.25);
	border-radius: 10px;
    border-top: 4px solid #1571CC;
}

.page-id-34000 .vaa-test .us-estm-tabs .eael-tab-top-icon{
	width:130px;
}

.page-id-37772 .phcountry #dis-intl-text{
	bottom:12px !important;
}

.cmc-scarousel .elementskit-author-name{
	padding-bottom:5px;
	min-height:60px;
}

.re-brand-carousel.cmc-scarousel .elementskit-profile-info{
	min-height: 211px;
}

.re-brand-carousel.dev-scarousel .elementskit-profile-info{
	min-height: 170px;
}

.clnd-hb{
	text-align:right;
}


.clnd-hb2 a{
	font-family: "Inter", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-color: #1571CC;
	padding:12px 24px;
	border-radius:3px;
	color:white !important;
}


.clnd-hb a{
	font-family: "Inter", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    fill: #353535;
    color: #353535;
    background-color: #FFFFFF;
	padding:12px 24px;
	border-radius:3px;
}


.clnd-sty a{
	font-family: "Rubik", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    background-color: #ECA72C;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #ECA72C;
    border-radius: 35px 35px 35px 35px;
    box-shadow: 0px 0px 10px 0px #ECA72C;
    padding: 12px 25px 12px 25px;
	color:white;
}

.clnd-styt a{
	font-family: "Rubik", Sans-serif;
    font-size: 16px;
    font-weight: 600;
    fill: #544B52;
    color: #544B52;
    background-color: #FFFFFF;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #544B52;
    border-radius: 35px 35px 35px 35px;
    box-shadow: 0px 0px 10px 0px rgba(83.99999999999996, 74.99999999999997, 81.99999999999997, 0.36);
    padding: 12px 25px 12px 25px;
}


.clnd-styt a:hover, .clnd-styt a:focus{
	color: #ECA72C;
    background-color: #FFFFFF;
    border-color: #ECA72C;
}


.clnd-sty a:hover, .clnd-sty a:focus{
	color: #ECA72C !important;
    background-color: #FFFFFF !important;
}


.clnd-btn2 a{
	font-family: "Inter", Sans-serif;
    font-size: 16px;
    font-weight: 700;
    fill: #353535;
    color: #353535;
    background-color: #FFFFFF;
    border-radius: 5px 5px 5px 5px;
	padding: 10px 25px;
}


/* landing pages hamberger menu */

#lpmenu{
	width: 300px;
    position: absolute;
    z-index: 99;
    top: -20px;
    right: -10px;
}


.lpnav {
  background-color: #679EB9;
  width: 100%;
  position: relative;
  
}

.lpnav ul li {
  list-style-type: none;
}

.lpnav ul#lpmenu {
  display: none;
}
.lpnav ul#lpmenu li a {
  width: 100%;
  display: block;
  background-color: #F6F7F9;
  font-size: 16px;
    padding: 10px 10px;
  transition: background 0.2s;
  text-decoration: none;
	font-family: "Poppins", Sans-serif;
    color: #30292F;
}
.lpnav ul#lpmenu a:hover {
  background-color: #e2e4e9;
}

.lphamburger-container {
  width: 38px;
  height: 38px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: -15px;
  z-index: 100;
  font-size: 1.5em;
  color: black;
}

/* hamberger css END */



.phcountry #valid-msg{
	color:green;
	font-family: 'Poppins';
}

.phcountry #error-msg{
	color:red;
	font-family: 'Poppins';
}

.phcountry #dis-intl-text{
	color:red;
	font-size:16px;
	position:relative;
	bottom:-10px;
	font-family: 'Poppins';
}


.us-evn-col-rz{
	border-radius:0px !important;
	box-shadow:none !important;
}


.va-cater .incater{
	font-family: "Inter", Sans-serif;
    font-weight: 400 !important;
    border: 0px solid white !important;
    border-radius: 30px !important;
    padding: 10px 15px !important;
}



.vaa-wstabs .wk-adv-tabs-nav .no-nav-desc:nth-child(1) a{
	background-color: #FFE0E0 !important;
}

.vaa-wstabs .wk-adv-tabs-nav .no-nav-desc:nth-child(2) a{
	background-color: #EEEEFF !important;
}

.vaa-wstabs .wk-adv-tabs-nav .no-nav-desc:nth-child(3) a{
	background-color: #FFE0E0 !important;
}

.vaa-wstabs .wk-adv-tabs-nav .no-nav-desc:nth-child(4) a{
	background-color: #FBEAFE !important;
}

.vaa-wstabs .wk-adv-tabs-nav .no-nav-desc:nth-child(5) a{
	background-color: #DFFCFF !important;
}

.vaa-wstabs .wk-adv-tabs-nav ul .no-nav-desc .active{
	background-color: #ECA72C !important;
	color:white !important;
	font-weight:500;
}

.vaa-wstabs .wk-tabs-content-wrap{
	margin-top:15px;
}

.vaa-wstabs .wk-adv-tabs-nav ul .no-nav-desc .active .wk-adv-tab-title-text{
	color:white !important;
}




.zh-skew .elementor-widget-container{
	background-size: 100% 100% !important;
}

.zoh-re .swiper-pagination-bullets{
	bottom: -50px !important;
}


.zrm-incater img{
	width: 30px;
    margin-right: 10px;
}

.zrm-incater .incater{
	border-radius:12px !important;
	display: flex;
    align-items: center;
}

.zrm-incater .zho-pcl{
	background: transparent !important;
    border: 0px solid white !important;
}

.zcrm-po .elementor-widget-wrap {
  transition: transform 0.7s !important; 
}

.re-brand-carousel .elementskit-commentor-content img{
	transition: 0.4s !important;
}

.zcrm-po:hover .elementor-widget-wrap{
	background-color: #1571CC !important;
	transform: scale(1.1);
    z-index: 9;
}

.zcrm-po:hover .elementor-heading-title, .zcrm-po:hover .elementor-widget-text-editor, .zcrm-po:hover .elementor-icon-list-text, .zcrm-po:hover .elementor-icon-list-icon i{
	color:white !important;
}

.zcrm-po:hover .elementor-divider-separator{
	border-bottom: 1px solid white !important;
}

.zcrm-po:hover .revam-brp-list li:not(:last-child) {
    border-bottom: 1px solid white !important;
}


.rebran-clients{
	background:white;
}

.page-id-36819 .us-evn-col{
	border-radius: 0px;
    box-shadow: none;
}

.phcountry form select:focus:invalid, .phcountry form select{
	color: rgba(48, 41, 47, 0.5);
    font-family: 'poppins';
    font-weight: 400;
    font-size: 14px;
}

.phcountry ::placeholder{
	color: rgba(48, 41, 47, 0.5);
    font-family: "Poppins", Sans-serif !important;
    font-weight: 400;
    font-size: 14px;
	opacity:1;
}


.dm-swead{
	color: #ECA72C;
	font-family: 'Seaweed Script', 'Sans-serif'; 
	-webkit-text-stroke-width: 0.5px;
    stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
    stroke: #000;"
}

.wsa-span{
	color: white;
    background: #1571CC;
    border-radius: 50%;
    text-align: center;
    height: 65px;
    display: flex;
    width: 65px;
    justify-content: center;
    align-items: center;
    margin-bottom: -28px;
	font-family: 'poppins';
    font-weight: 700;
}

.bbinc-list .elementor-icon-box-title{
	margin-top:0px !important;
}


.rebral-vt .swiper-container, .zoh-re .swiper{
	overflow: visible;
    overflow-x: clip;
}

.zoh-re .swiper .swiper-slide-next + .swiper-slide{
	 transform: scale(1.7, 1.7);
    z-index: 9;
}

.zoh-re .swiper .swiper-slide-next{
	transform: scale(1.5, 1.4);
}

.zoh-re .swiper .swiper-slide-next + .swiper-slide + .swiper-slide{
	transform: scale(1.5, 1.4);
    z-index: 1;
}

.rebral-vt .swiper-slide-next{
	transform: scale(1.4, 1.4);
    z-index: 9;
}


.rebpkg-trans{
	transition: 0.3s;
}

.rebpkg-trans:hover{
	transform:scale(1.05);
}

.reb-menu ul li{
	padding-right: 6px !important;
    padding-left: 6px !important;
	transition: 0.3s;
}

.reb-menu ul li:hover{
	transform:scale(1.1);
}

.reb-menu ul li:hover .elementor-icon-list-text{
	color:#1571CC !important;
}

.incater{
	transition: 0.5s;
	font-family: 'Poppins';
    font-weight: 600 !important;
}

.incater:hover{
	box-shadow: 0px 1px 8px 0 rgb(125 201 213 / 65%);
    transform: scale(1.1);
}

.wdko-list .elementor-icon-list-text{
	display: flex;
    align-items: baseline;
	margin-left:-25px;
}

.wdko-list .ins-pct{
	height: 50px;
    width: 50px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
	color: #353535;
    font-weight: 700;
    font-size: 18px;
}

.wdko-list .innerpct1{
	background: rgba(21, 113, 204, 0.2);
    border: 1px solid rgba(21, 113, 204, 1);
}

.wdko-list .innerpct2{
	background: rgba(56, 226, 222, 0.2);
    border: 1px solid #38E2DE;
}

.wdko-list .innerpct3{
	background: rgba(40, 186, 108, 0.2);
    border: 1px solid #28BA6C;
}

.wdko-list .innerpct4{
	background: rgba(208, 160, 236, 0.2);
    border: 1px solid #D0A0EC;
}

.wdko-list .innerpct5{
	background: rgba(255, 162, 90, 0.2);
    border: 1px solid #FFA25A;
}

.wdko-list .innerpct6{
	background: rgba(21, 113, 204, 0.2);
    border: 1px solid #1571CC;
}

.wdko-list .elementor-icon-list-text{
	background: white;
}


.per-dmis-main .elementor-icon-list-text{
	display:flex;
	align-items: center;
}

.per-dmis-main .per-dmis{
	background: antiquewhite;
    height: 35px;
    display: flex;
    width: 35px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
}


.pat-line .elementor-icon-list-text{
	width:100%;
}

a:focus{
	border:0px solid white;
	outline:0px solid white !important;
}

.rebran-ne .rebran-name, .rebran-ne .rebran-email{
	width:50%;
}

.rebran-innerf .rebran-ne{
	display: flex;
    gap: 0px 10px;
}

.rebran-ph .iti{
	width: 100%;
}

.iti__flag-container:hover .iti__selected-flag{
	background-color: transparent !important;
}

.rebran-ne input{
	border:0px !important;
	border-bottom:1.5px solid rgba(48, 41, 47, 0.5) !important;
	border-radius:0px !important;
	padding: 10px 0px 0px 0px !important;
}

.rebran-innerf label{
	font-weight: 500 !important;
	font-size:16px !important;
	left:0;
	margin-top:10px;
	color:#30292F !important;
	font-family: 'Poppins';
    
}

.rebran-ph input{
	border:0px !important;
	border-bottom:1.5px solid rgba(48, 41, 47, 0.5) !important;
	border-radius:0px !important;
	padding-top:10px !important;
	padding-bottom:0px !important;
}

.rebran-innerf textarea{
	padding: 10px 0px 0px 0px !important;
	min-height:30px !important;
	border-bottom:1.5px solid rgba(48, 41, 47, 0.5) !important;
}

.rebran-pd input, .rebran-pd select{
	border:0px !important;
	border-bottom:1.5px solid rgba(48, 41, 47, 0.5) !important;
	border-radius:0px !important;
	padding: 10px 0px 0px 0px !important;
}

.rebran-sbt button{
	font-size: 16px;
    font-weight: 700;
    background-color: #ECA72C;
    border-style: solid;
    border-width: 1px 1px 1px 1px;
    border-color: #ECA72C;
    border-radius: 35px 35px 35px 35px;
    box-shadow: 0px 0px 5px 0px #ECA72C;
    padding: 12px 25px 12px 25px;
	text-transform: capitalize;
    letter-spacing: normal;
	width: 100%;
    margin-bottom: 10px;
}

.rebran-innerf .iti__flag-container{
	margin-bottom: -10px;
}

.rebran-sbt button:hover, .rebran-sbt button:focus{
	color: #ECA72C;
    background-color: #FFFFFF;
}

.rebran-sbt{
	margin-top:35px;
	padding: 0px 5px;
}



/* .mat-input:invalid ~ label {
    top: -20px;
    font-size: 14px;
    color: #2196f3;
} */

.rebarn-form-wig label{
	position:relative !important;
	
}

.re-brand-carousel .elementskit-profile-info {
	min-height:145px;
}

.re-brand-carousel.pmarkcarousel .elementskit-profile-info{
	min-height: 170px;
}


.us-connect-main .select2-hidden-accessible{
	height:auto !important;
}

.us-connect-main .select2-selection{
	display:flex !important;
}

.us-connect-main .select2-search{
	width:100%;
}


.page-id-37060 #site-header, .page-id-37060 #footer{
	display:none;
}


.reb-cd-icon{
	transition: transform 0.7s ease;
	transition: all .7s ease;
}

.reb-cd-icon:hover .elementor-image-box-img{
	transform: scale(1.3) translateZ(0);
}


.ancr-rebran img{
	-webkit-animation: admove2 1s infinite  alternate;
    animation: admove2 1s infinite  alternate;
}


@-webkit-keyframes admove2 {
    0% { transform: translateX(0); }
    100% { transform: translateX(10px);}
}


.pnt-rebran img{
	-webkit-animation: admove3 2s infinite  alternate;
    animation: admove3 2s infinite  alternate;
}

@-webkit-keyframes admove3 {
    0% { transform: rotateZ(20deg); }
    100% { transform: rotateZ(-15deg);}
}



.revam-brp-list li:not(:last-child) {
   border-bottom:1px solid black;
}


.rebran-clients{
	box-shadow: 0px 1px 20px 0 rgb(0 149 255 / 39%);
    padding: 0px 20px;
    border-radius: 5px;
	margin-top: 15px;
}

.rebran-clients .elementskit-testimonial_card{
	padding:0px;
}

.rebran-clients .swiper-button-prev{
	left: 20px !important;
}

.rebran-clients .swiper-button-next{
	right: unset !important;
	left: 100px !important;
}

.rebran-colt1{
	text-align: left;
    padding-right: 20px;
}

.rebran-colt3{
	text-align: left;
    padding-left: 20px;
}


.trip-ndc .eae-layout-center .eae-timeline-item:nth-child(odd) .eae-tl-item-title, .trip-ndc .eae-layout-center .eae-timeline-item:nth-child(odd) .eae-tl-content-innner{
	text-align:right;
}

.tagen-tab .eael-tabs-nav ul{
	width: 200px;
    margin: auto;
	gap: 0 10px;
}

.tagen-tab .eael-tabs-nav ul li{
	border-radius: 25px !important;
}


.re-brand-carousel .swiper-button-prev{
	position: absolute;
    right: 50px !important;
    left: unset !important;
}


.insb-text{
	width: 22px;
    height: 22px;
    background: #1571CC;
    position: absolute;
    top: 20px;
    right: 10px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
}

.re-brand-carousel .elementskit-single-testimonial-slider:hover{
	overflow:visible;
}

.re-brand-carousel .elementskit-single-testimonial-slider:hover .insb-text{
	top:unset;
	right:unset;
	bottom: 38px;
    left: 26px;
    border: 1px solid #1571CC;
    background: white;
    color: #1571CC;
    width: 40px;
    height: 40px;
    font-size: 25px;
}


.re-brand-carousel .elementskit-single-testimonial-slider:hover{
	background-color: #1571CC;
	border-radius: 6px 6px 6px 160px !important;
}

.re-brand-carousel .elementskit-single-testimonial-slider:hover .elementskit-author-name, .re-brand-carousel .elementskit-single-testimonial-slider:hover .elementskit-author-des{
	color:#ffffff !important;
}

.re-brand-carousel .elementskit-single-testimonial-slider:hover .elementskit-commentor-content img{
	border-radius: 0 0 0 150px;
}

.re-brand-carousel .elementskit-single-testimonial-slider:hover .elementskit-author-name{
    border-bottom: 1px solid #ffffff !important;
}

.re-brand-carousel .elementskit-commentor-content{
	position:static;
	margin-bottom: 0px;
}

.re-brand-carousel .elementskit-author-name{
	margin-bottom: 10px !important;
    border-bottom: 1px solid #1571CC;
	padding-bottom:5px;
}

.incater-main{
	display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
	
}

.incater-main .incater{
	padding: 8px 12px;
    background: aliceblue;
    border: 1px solid green;
	border-radius: 5px;
	font-size: 16px;
    font-weight: 600;
}

.bxstop{
	display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
}

.bxstop h2{
	margin:0;
	color: #353535;
    font-weight: 600;
}

.bxstop p{
	color: #353535;
    margin-top: 4px;
}

.bxstop span{
	padding: 10px 12px 0px 12px;
    border-radius: 5px;
}

.bxs1{
	border: 1px solid #1571cc;
	background: #d7e6ff47;
}

.bxs2{
	border: 1px solid #38E2DE;
	background: rgba(225, 255, 239, 0.2);
}

.bxs3{
	border: 1px solid #28BA6C;
	background: rgba(225, 255, 239, 0.2);
}

.bxs4{
	border: 1px solid #D0A0EC;
	background: rgba(244, 225, 255, 0.2);
}

.bxstop span:not(:last-child) {
    margin-right: 30px;
}


.vde-tabs .elementor-tabs-wrapper{
	box-shadow: rgba(74, 153, 211, 0.2) 0px 13px 27px -5px, rgba(74, 153, 211, 0.2) 0px 8px 16px -8px;
	border-radius:10px;
}

.vde-tabs .elementor-tab-title{
	text-align:center;
		opacity: 0.6;
}

.vde-tabs .elementor-tab-title.elementor-active{
	opacity:1;
}

.vde-tabs .elementor-tab-title img{
	margin-bottom:10px;
}

.nevn-pkg{
	pointer-events:none;
}

.pkginners-col{
	height:180px;
}

.pkginners-col .elementor-container{
	height: 100%;
    align-items: center;
}


.textare_bar textarea {
  resize: none;
  overflow: hidden;
	height:50px;
  min-height: 50px;
  max-height: 150px;
}



.pmboxes .ekit-header-info, .pmboxes2 .ekit-header-info{
	justify-content: center;
}

.pmboxes .ekit-wid-con .ekit-header-info>li:not(:last-child), .pmboxes2 .ekit-wid-con .ekit-header-info>li:not(:last-child) {
    margin-right: 30px;
}

.pmboxes .ekit-header-info li:nth-child(1){
	background: rgba(215, 230, 255, 0.2);
    border: 1px solid #1571CC;
    border-radius: 5px;
}

.pmboxes .ekit-header-info li:nth-child(2){
	background: rgba(171, 255, 253, 0.2);
    border: 1px solid #38E2DE;
    border-radius: 5px;
}

.pmboxes .ekit-header-info li:nth-child(3){
	background: rgba(225, 255, 239, 0.2);
    border: 1px solid #28BA6C;
    border-radius: 5px;
}

.pmboxes .ekit-header-info li:nth-child(4){
	background: rgba(244, 225, 255, 0.2);
    border: 1px solid #D0A0EC;
    border-radius: 5px;
}

.pmboxes2 .ekit-header-info li:nth-child(1){
	background: rgba(255, 228, 207, 0.2);
    border: 1px solid #FFA25A;
    border-radius: 5px;
}

.pmboxes2 .ekit-header-info li:nth-child(2){
	background: rgba(215, 230, 255, 0.2);
    border: 1px solid #1571CC;
    border-radius: 5px;
}

.pmboxes2 .ekit-header-info li:nth-child(3){
	background: rgba(225, 255, 239, 0.2);
    border: 1px solid #28BA6C;
    border-radius: 5px;
}

.pmform .newsf-page .mat-input{
	border: 1px solid grey !important;
    border-radius: 4px !important;
}

.pmform .sub-btn{
	background-color: #1571CC !important;
	border-radius: 5px;
}


#popmake-29748 img{
	border-radius:5px;
	width:100%;
}


.vaa-test .us-estm-tabs .eael-tab-top-icon{
	width: 270px;
	left: 50%;
    transform: translateX(-50%);
}

.vaa-test .us-estm-tabs .eael-advance-tabs .eael-tabs-nav img{
   width: 90px !important;
    height: 90px !important;
    object-fit: cover;
    border: 3px solid white;
}

.vaa-test .us-estm-tabs .eael-tab-item-trigger{
	margin-left:-25px !important;
}


.ows-ani-carousel .elementor-swiper-button-prev{
	left: 88% !important;
    width: 50px;
    transform: translateY(-130px) !important;
}


.ows-ani-carousel .elementor-swiper-button-next{
	width: 50px;
    transform: translateY(-130px) !important;
}

.ows-ani-carousel .elementor-swiper-button i{
	padding: 10px;
    background-color: aliceblue !important;
    border-radius: 50%;
  
}


.swo-carousel .elementskit-single-testimonial-slider{
	border-left: 2px solid #1571CC;
}


.av-ani1, .av-ani2, .av-ani3 {
        display: none;
    }




.caf-form .pjt-for{
	width:1px;
}


.page-id-11320 .pjt-for{
	margin-bottom:-80px;
}


.zpkg-slider .slick-dots{
	margin-top:20px !important;
}


.zpk-testimonial .swiper-pagination-bullets{
	bottom:-15px;
}


.zpkg-slider .premium-carousel-template .elementor-top-column{
	min-height:700px;
}

.pjt-for{
	visibility:hidden;
	margin-bottom:-58px;
}


.zpkg-slider .premium-carousel-template .elementor-widget-button{
	position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
}


.footer-hand-icon span.elementor-icon-list-text{
	padding-left:0px !important;
}


#popmake-35625, #popmake-35635, #popmake-35631{
	padding:0px;
	border:0px;
}


 

.stlzoho{
	width: 100%;
    border-radius: 50px !important;
}

.bsr-zoho{
	border-radius:40px !important;
}

.zohobam{
	width: 180px !important;
    font-family: 'Montserrat' !important;
    font-weight: 700 !important;
    text-transform: capitalize !important;
    font-size: 17px !important;
    letter-spacing: normal !important;
    padding: 12px !important;
    background-color: white !important;
    color: #194F91 !important;
    margin-bottom: 10px !important;
    border-radius: 35px;
}

.us-connect-main .g-recaptcha{
	margin-top:10px;
}

#pop-glid.crb-form input, #pop-glid.crb-form textarea, #pop-glid.crb-form select{
	 border: 1px solid grey !important;
    border-radius: 4px !important;
}


#popmake-35370 .crb-form input, #popmake-35370 .crb-form textarea, #popmake-35370 .crb-form select, #popmake-35512 .crb-form input, #popmake-35512 .crb-form textarea, #popmake-35512 .crb-form select {
    border: 1px solid grey !important;
    border-radius: 4px !important;
}


#popmake-35851 .crb-form input, #popmake-35851 .crb-form textarea, #popmake-35851 .crb-form select{
	border: 1px solid grey !important;
    border-radius: 4px !important;
}

#popmake-35857 .crb-form input, #popmake-35857 .crb-form textarea, #popmake-35857 .crb-form select{
	border: 1px solid grey !important;
    border-radius: 4px !important;
}

#popmake-35861 .crb-form input, #popmake-35861 .crb-form textarea, #popmake-35861 .crb-form select{
	border: 1px solid grey !important;
    border-radius: 4px !important;
}


#popmake-35865 .crb-form input, #popmake-35865 .crb-form textarea, #popmake-35865 .crb-form select{
	border: 1px solid grey !important;
    border-radius: 4px !important;
}

#popmake-35869 .crb-form input, #popmake-35869 .crb-form textarea, #popmake-35869 .crb-form select{
	border: 1px solid grey !important;
    border-radius: 4px !important;
}


#popmake-21501 .sub-btn{
	width: 200px !important;
    border-radius: 15px !important;
    background-color: #3a71cc !important;
}



#popmake-35370, #popmake-35512, #popmake-35851, #popmake-35857, #popmake-35861, #popmake-35865, #popmake-35869, #popmake-36209, #popmake-36385, #popmake-36981{
	border:0px;
}


#popmake-35370 .crb-form, #popmake-35512 .crb-form{
	margin-top: -30px;
    margin-bottom: -28px;
}


.custom_form_ button{
	width: 100%;
    border-radius: 50px;
}

.custom_form_ h2{
	font-size:18px;
	margin-top:0px;
}

.custom_form_ .col-md-6 {
    margin-left: -7px !important;
}


.web-lang .us-evn-col{
	box-shadow:none;
	border-radius:0px;
}



.ota-wd .gallery-item .wp-caption-text{
	background: transparent !important;
    color: white !important;
    font-style: normal !important;
}




.page-id-34965 .us-estm-tabs .eael-advance-tabs .eael-tabs-nav img, .page-id-35236 .us-estm-tabs .eael-advance-tabs .eael-tabs-nav img{
   width: 90px !important;
    height: 90px !important;
    object-fit: cover;
    border: 3px solid white;
}


.page-id-34965 .us-estm-tabs .eael-tab-top-icon, .page-id-35236 .us-estm-tabs .eael-tab-top-icon{
	width: 270px;
	left: 50%;
    transform: translateX(-50%);
}

.page-id-34965 .us-estm-tabs .eael-tab-item-trigger, .page-id-35236 .us-estm-tabs .eael-tab-item-trigger{
	margin-left:-25px !important;
}

.page-id-34965 .us-estm-tabs .eael-tab-item-trigger img, .page-id-35236 .us-estm-tabs .eael-tab-item-trigger img{
	margin-left:-30px !important;
}


.ss-capart .elementor-counter-number-prefix{
	display: none;
}

.ss-capart .elementor-counter-title{
	text-align:left;
	border-bottom:1px solid white;
}

.ss-hform{
	background: #78B9EB;
    padding: 5px 22px 0px 22px;
    border-radius: 5px;
}

.ss-hform .ssmd1{
	padding-right: 5px;
}

.ss-hform .ssmd2{
	padding-left: 5px;
}

.ss-hform input, .ss-hform textarea, .ss-hform select{
	border-radius:5px !important;
}

.ss-hform .sub-btn{
	background-color: #1571CC !important;
}

.ss-hform .sfnew-btn{
	margin-bottom:-10px;
}



.page-id-34965 .crb-form input, .page-id-34965 .crb-form textarea, .page-id-34965 .crb-form select{
	border: 1px solid grey !important;
    border-radius: 4px !important;

}


.br-imgs .elementor-widget-wrap div, .br-imgs .elementor-widget-wrap img{
	height:100%;
}

.top-crb .elementor-container{
	justify-content:end;
}





.swo-carousel .elementskit-commentor-image img{
	border-radius:0px !important;
}

.swo-carousel .elementskit-single-testimonial-slider{
	padding: 12px !important;
    margin-right: 10px;
    margin-left: 10px;
    box-shadow: 1px 8px 15px 0px rgba(74, 153.0000000000001, 211, 0.2);
    border-radius:4px;
}

.swo-carousel .swiper-wrapper{
	padding-top: 10px;
    padding-bottom: 26px;
}



.swo-carousel .swiper-navigation-button .icon{
	padding: 10px;
    background: aliceblue;
    border-radius: 50%;
    color: #1571CC;
}




.trip-ndc .eae-tl-item-content::before{
	display:none;
}

.trip-ndc .eae-tl-content{
	padding:0;
}

.trip-ndc .eae-tl-item-content{
	background: #f4f4f400;
}

.trip-ndc .eae-tl-item-title{
	margin-top:0px;
}

.trip-ndc .eae-timline-progress-bar{
	border-right: 2px dashed #404040b8;
	width:0px !important;
}

.trip-ndc .eae-icon-item_icon.eae-icon{
	padding:10px !important;
}


.trip-ndc .eae-timeline-item:nth-child(3) .eae-icon-item_icon.eae-icon-view-stacked{
   background-color:#B31B54 !important;
}

.trip-ndc .eae-timeline-item:nth-child(4) .eae-icon-item_icon.eae-icon-view-stacked, .trip-ndc .eae-timeline-item:nth-child(5) .eae-icon-item_icon.eae-icon-view-stacked{
   background-color:#009DDC !important;
}


.trip-ndc .eae-timeline-item:nth-child(odd) .eae-tl-item-content{
 text-align: right;
}

.trip-ndc .eae-timeline-item:nth-child(odd) .eae-tl-content-innner img{
	margin-left: auto;
}


.css-case-study .elementor-widget-image-box{
	padding:10px;
}


.usa-popmain a:focus{
	color: #23527c00 !important;
}


.pum-open-overlay{
  overflow:scroll !important;
}

.success-test .swiper-slide img{
	width:353px;
		height:199px;
}

.fnn-updt .elementor-container{
	justify-content:space-evenly;
}


/* #popmake-29748 .pum-close{
  right: 10px;
    top: 18%;
} */


.success-case .swiper{
	overflow: visible; 
    overflow-x: clip;
}

.success-case .swiper .swiper-slide-next{
	transform: scale(1.6,1.4);
    z-index: 9;
}

.success-case .swiper i{
	background: #FFFFFF;
    padding: 4px;
    border-radius: 50%;
}

.success-case .elementor-swiper-button{
	top:58% !important;
}

.success-case .elementor-swiper-button-prev{
	left:-5px !important;
}

.success-case .elementor-swiper-button-next{
	right:-5px !important;
}




.success-case .swiper i:before{
	color:#1571CC !important;
}


 .select2-container{
/*   height: 39px; */
    display: block;
}

.select2-results__option--selectable{
  background-color: #ffffff !important;
    color: #222121 !important;
  border-radius:5px;
}

.select2-results__option--selected{
  background-color: #5897fb !important;
    color: white !important;
}


.ca-hhr{
  cursor: unset;
}


 .info_graphics .eael-grid-post-holder, .news_insights .eael-grid-post-holder{
  position:relative;
}

.info_graphics .eael-entry-content a, .news_insights .eael-grid-post-holder .eael-grid-post-excerpt a{
  position: absolute;
    bottom: 15px;
    width: 92%;
    left: 4%;
  color:#FFFFFF !important;
} 



.cl-tes-jv .wk-margin-medium-top{
  margin-bottom: 15px;
    align-items: center;
}

.cl-tes-jv .wk-margin-medium-top li a{
  height:7px !important;
  width:7px !important;
  background: #D8D8D8 !important;
    width: 15px !important;
    height: 15px !important;
    border: 4px solid white !important;
}

.cl-tes-jv .wk-margin-medium-top .wk-active a{
  background: #1571CC !important;
    border: 4px solid white !important;
    outline: 1px solid #1571CC !important;
    width: 15px !important;
    height: 15px !important;
  transition: unset !important;
}

.cl-tes-jv .wk-slidenav{
  box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.16);
}

.cl-tes-jv .wk-flex-center .wk-card:hover{
  box-shadow: 5px 8px 11px rgb(74 153 211 / 30%);
}


.fnn-updt .elementor-row{
  justify-content:space-evenly;
}

.jgal-img .gallery-item img{
    height: 40px;
    width: auto;
    object-fit: contain;
}


.mon-head .elementor-heading-title{
  position:relative;
}

.mon-head .elementor-heading-title img{
  position: absolute;
    top: 12px;
    right: -50px;
    width: 360px;
}

.mon-counter .elementor-counter-number-prefix {
    display: none;
}

.mon-counter .elementor-counter-title {
    text-align: left;
}

.mon-colt{
 box-shadow: 6px 0px 20px 0px rgba(74, 153.0000000000001, 211, 0.2);
    border-radius: 0px;
}

.mon-colt .elementor-element-populated{
   border-radius: 0px !important;
}




.us-evn-col2{
  overflow: hidden;
}

.aiml-counter .elementor-counter-title{
  text-align:left;
}

.aiml-counter .elementor-counter-number-prefix{
  display: none;
}


#popmake-31743{
  padding: 0;
    border: 4px solid #00428E;
    border-radius: 10px;
}

.newsf-page .mat-input{
  background: white;
    border: 0px solid white !important;
  font-size: 16px;
}


.newsf-page .textare_bar textarea{
  height: 100px;
    min-height: 100px;
}

.newsf-page .sfnew-btn{
  text-align:center !important;
}

.newsf-page .group{
  margin-bottom: 20px;
}

.newsf-page .sfnew-btn input[type="submit"]{
  width:150px;
}

/* .below-section{
visibility:hidden;
}

.page-id-31632 .site-footer{
  visibility:hidden;
} */

.btm-linecc, .btm-linecc2, .btm-linecc3, .btm-linecc5{
  position:relative;
  z-index:99;
}

.btm-linecc::before{
  content: '';
    width: 100%;
    height: 11px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #D0E3F5;
    transform: scaleX(1);
    z-index: -1;
    border-radius: 10px;
}

.btm-linecc2::before{
  content: '';
    width: 100%;
    height: 11px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #4B92D9;
    transform: scaleX(1.1);
    z-index: -1;
    border-radius: 10px;
}

.btm-linecc3::before{
  content: '';
    width: 100%;
    height: 11px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #484848;
    transform: scaleX(1);
    z-index: -1;
    border-radius: 10px;
}

.btm-linecc5::before{
   content: '';
    width: 100%;
    height: 11px;
    position: absolute;
    bottom: 0px;
    left: 0px;
   background: #aed1f3;
    transform: scaleX(1);
    z-index:-1;
    border-radius: 10px;
}



.drmin-inq select{
  background: white;
    border-radius: 30px;
    height: 37px;
    min-height: 33px;
 color: #555555de;
}

.homeev-main{
  margin-top:-10px !important;
}

.homeev-main .eael-advance-tabs .eael-tabs-content>div.active{
  padding:0px !important;
}

.homeev-main .eael-tabs-nav{
  display:none;
}

.us-connect-main textarea{
  background-color: white !important;
    border: 1px solid #aaa !important;
    border-radius: 5px !important;
}


.us-connect-main .select2 textarea{
   background-color: transparent !important;
    border: 0px solid #aaa !important;
    border-radius: 0px !important;
}


.page-id-29115 #pum-29748, .page-id-8299 #pum-29748{
  display:none !important;
}


.ev-here-time .eae-tl-content{
  width: 100% !important;
}

.ev-here-time .eae-timeline-item:nth-child(even) .eae-tl-item-content{
  margin-left: 80px;
}

.ev-here-time .eae-timeline-item:nth-child(odd) .eae-tl-item-content{
  margin-right: 80px;
}

.ev-here-time .eae-timeline-item:nth-child(even) .eae-tl-item-meta-wrapper{
  position: relative;
}

.ev-here-time .eae-timeline-item:nth-child(odd) .eae-tl-item-meta-wrapper{
  position: relative;
}


.ev-here-time .eae-timeline-item:nth-child(even) .eae-tl-item-meta{
  position: absolute;
    right: -120px;
    top: 15px;
}

.ev-here-time .eae-timeline-item:nth-child(odd) .eae-tl-item-meta{
  position: absolute;
    left: -120px;
    top: 15px;
}


.ev-here-time .eae-tl-item-meta::after{
  content: '';
  background:var(--wpr-bg-f7888f02-70c3-4002-924a-c6f2350af8fa);
 width: 20px;
    height: 20px;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
   top: -25px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}



.ev-here-time .eae-timeline-item:nth-child(odd) .eae-tl-content-wrapper .eae-tl-item-content{
  text-align: right !important;
}

.ev-here-time .eae-timeline-item {
    padding-bottom: 0px !important;
}

.ev-here-time .eae-timeline-item .eae-tl-content-innner{
  line-height: 20px !important;
  margin-top: -8px;
}

.ev-here-time .eae-tl-item-meta{
  text-align: center;
}

.ev-here-time .eae-timline-progress-bar{
  top: 45px !important;
    bottom: 40px !important;
}


.us-connect-main{
  margin-top: -160px;
}

.us-headt{
  margin-bottom: -145px;
  margin-top: 35px;
}


.us-connect-main .select2-search{
  margin-left:-20px;
}


#section-usa-form-id .us-headt{
  margin-bottom: 0px;
  margin-top: 0px;
}

#section-usa-form-id .us-connect-main {
    margin-top: 0;
}

.us-connect-main textarea{
  min-height:20px; 
}


.us-connect-main .select2-selection--multiple.select2-selection--clearable {
    padding-right: 28px;
    padding-left: 25px;
}


.us-connect-main .select2-selection{
 
    margin-bottom: 15px;
    border-radius: 30px !important;
  position: relative;
}

.us-connect-main .select2-selection .select2-search__field{
  margin-left: 12px !important;
}

.us-connect-main .select2-container{
  width : 100% !important
}

.us-connect-main .select2-selection__rendered{
  position: relative;
}


.section-usa-form{
  background: #1571CC;
    padding: 5px 20px 20px 20px;
    border-radius: 20px;
}


.us-connect-main ::placeholder{
  opacity: 1 !important
}

#popmake-29748 {
 border: 0px solid #000000;
    box-shadow: none;
    background-color: rgb(255 255 255 / 0%);
	padding:0px;
}


#pum-29763.pum-active .theme-21493{
  display: block !important;
}

#pum-29763 .popmake-close{
  position: absolute;
    top: 0px;
    right: 0;
}


#pum-29763 .pum-container{
  border: 0px solid #000000;
  padding: 18px 3%;
  background-color: #1571CC;
  border-radius: 30px;
}

.us-connect-main input[type="text"], .us-connect-main input[type="tel"], .us-connect-main input[type="email"]{
  background: #FFFFFF;
    border-radius: 30px;
    margin-bottom: 10px;
  min-height: 30px;
  padding: 4px 12px;
}

.us-connect-main select[multiple]{
  background: white;
    margin-bottom: 10px;
    border-radius: 4px;
}

.us-connect-main select option{
  padding: 5px 1px;
}


.us-connect-main .usa-para-evn{
  color: white;
    font-family: 'Montserrat';
    font-weight: 500;
   
}

.us-headt h3{
  font-family: 'Montserrat';
    color: white;
    font-weight: 400;
    font-size: 22px;
}


.us-headt h4{
  font-family: 'Montserrat';
    color: white;
    font-weight: 700;
    font-size: 22px;
    margin-top: -7px;
    margin-bottom: 15px;
}

.usa-mtnow{
  float: right;
  margin-top: 10px;
}

.usa-mtnow input{
  width: 180px !important;
    font-family: 'Montserrat';
    font-weight: 700;
    text-transform: capitalize;
    font-size: 17px;
    letter-spacing: normal;
    padding: 12px;
    background: white;
    color: #194F91;
  margin-bottom:10px;
}

.usa-mtnow input:hover{
  background-color: white !important;
    color: #194F91 !important;
}


.agn-tab-main .elementor-tab-title a{
  background: transparent;
    padding: 8px 16px;
    border-radius: 30px;
    border: 1px solid #1571CC;
}


.agn-tab-main .elementor-tab-title.elementor-active a{
   background: rgba(21, 113, 204, 0.31) !important;
}

.agn-tab-main .elementor-tab-desktop-title {
    padding: 20px 5px !important;
}

.us-agenda-tabs .eae-timline-progress-bar {
    background: #F3F3F3 !important;
}


.us-agenda-tabs .eae-icon-wrap::before {
    content: '';
    width: 3px;
    height: 80px;
    background: #1571CC;
    position: absolute;
    bottom: 50%;
    transform: translate(-1px, -50%);
}


.us-agenda-tabs .eae-tl-item-content {
  padding: 0;
}

.us-agenda-tabs .eae-tl-item-title{
  margin-top: 0;
}

.us-agenda-tabs .eae-tl-item-image {
    width: 45% !important;
}

.us-agenda-tabs .eae-tl-item-content{
  border: 1px solid #D9D9D9;
    border-radius: 8px;
  background: #ffffff;
}


.us-agenda-tabs .eae-timeline-item:nth-child(even) .eae-tl-content-wrapper .eae-tl-item-content{
  flex-direction: row-reverse !important;
  text-align: right !important;
}

#agn-id .eae-timeline-item:nth-child(odd):not(.custom-image-style-yes) .eae-tl-item-content {
    flex-direction: row !important;
}

.us-agenda-tabs .eae-timeline-item:nth-child(even) .eae-tl-item-meta-wrapper .eae-tl-item-meta{
  position: absolute;
    top: -23px;
    right: 0;
}

.us-agenda-tabs .eae-timeline-item:nth-child(odd) .eae-tl-item-meta-wrapper .eae-tl-item-meta{
  position: absolute;
    top: -23px;
    left: 0;
}


.us-estm-tabs .eael-tab-content-item .elementor-top-section{
  padding: 0 !important
}



.us-estm-tabs .eael-tabs-nav{
  margin-top: 50px;
    margin-right: -25px;
}

.us-estm-tabs .eael-tabs-content{
  box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.12);
}

.us-estm-tabs .eael-tab-content-item{
  padding: 0 !important;
}


.us-evn-col{
  overflow: hidden;
    border-radius: 10px;
  box-shadow: 0px 50px 50px 0px rgba(0, 0, 0, 0.12);
}


.us-evn-col .elementor-widget-wrap{
  overflow: hidden;
    border-radius: 10px;
}


.us-estm-tabs .eael-tab-top-icon{
  width: 97%;
    margin: auto !important;
	margin-left:2px !important;
}

.us-estm-tabs .eael-tab-item-trigger{
  display: inline-block;
/*   margin-left: -25px !important; */
}

.us-estm-tabs .eael-tab-item-trigger img{
  border-radius: 50%;
}


.us-estm-tabs .eael-tab-item-trigger.active{
  z-index: 99 !important;
}



.us-estm-tabs .eael-tab-item-trigger:nth-child(13) {
 z-index: 3;
}


.us-estm-tabs .eael-tab-item-trigger:nth-child(12) {
 z-index: 4;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(11) {
 z-index: 5;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(10) {
 z-index: 6;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(9) {
 z-index: 7;
}


.us-estm-tabs .eael-tab-item-trigger:nth-child(8) {
 z-index: 8;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(7) {
 z-index: 9;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(6) {
 z-index: 10;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(5) {
 z-index: 11;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(4) {
 z-index: 12;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(3) {
 z-index: 13;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(2) {
 z-index: 14;
}

.us-estm-tabs .eael-tab-item-trigger:nth-child(1) {
 z-index: 15;
}





.us-estm-tabs .eael-advance-tabs{
  display: flex;
    flex-direction: column;
}

.us-estm-tabs .eael-tabs-content{
   order: -1;
}


.sft-employer .flipbox-content p{
    font-size: 13px !important;
    margin-top: -25px;
}


.page-id-28032 .navigation .search-toggle-li::after{
  display:none;
}

#popmake-28441{
  padding:0px !important;
  border:0px solid white !important;
  border-radius: 20px;
}

.banner-singa img{
  border-radius: 18px;
  width:100%;
}


.sgp-bam a{
  border-radius: 25px;
  color: #fff;
  box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #0ba9ca, 0 0 30px #0ba9ca,
    0 0 40px #0ba9ca, 0 0 50px #0ba9ca;
  -webkit-animation: blink 0.7s infinite alternate;
  animation: blink 0.7s infinite alternate;
}

@-webkit-keyframes blink {
  100% {
    box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ba9ca,
      0 0 70px #0ba9ca, 0 0 80px #0ba9ca;
  }
}

@keyframes blink {
  100% {
    box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ba9ca,
      0 0 70px #0ba9ca, 0 0 80px #0ba9ca;
  }
}





.singa-opp input[type="text"]{
  border: 1px solid #FFFFFF !important;
    border-radius: 8px !important;
    padding: 0 15px !important;
    margin-bottom: 10px;
    min-height: 35px !important;
  color:white !important;
}

.singa-opp input[type="number"]{
  border: 1px solid #FFFFFF !important;
    border-radius: 8px !important;
    padding: 0 15px !important;
    margin-bottom: 10px;
    min-height: 35px !important;
  color:white !important;
}

.singa-opp input[type="email"]{
  border: 1px solid #FFFFFF !important;
    border-radius: 8px !important;
    padding: 0 15px !important;
    margin-bottom: 10px;
    min-height: 35px !important;
  color:white !important;
}

.singa-opp ::placeholder{
  color:white !important;
    
}

.singa-opp select{
  border-radius:8px;
  min-height: 35px !important;
  color: white !important;
}

.singa-opp select option{
  color: #000000;
}


.singa-opp input[type="submit"]{
 background: white;
    color: #194F91;
    border-radius: 8px;
    padding: 10px 10px;
  text-transform: capitalize;
    font-size: 14px;
    letter-spacing: 0em;
  border: 1px solid white;
}

.singa-opp input[type="submit"]:hover{
  background: #0B7CAC !important;
    color: white !important;
   border: 1px solid #0B7CAC !important;
}

.singa-opp textarea{
  border: 1px solid #FFFFFF !important;
    border-radius: 8px !important;
    padding: 10px 15px !important;
    margin-bottom: 10px;
    min-height: 90px !important;
    color: white !important;
    height: 90px;
  margin-top:10px;
}


.cs-infos{
  display:none;
}


.page-id-28032 .page-header{
  display:none;
}


.dropdown-menu li .sub-menu li.menu-item .menu-link:hover{
  padding-right: 32px;
}


.keka-career iframe{
  height:600px;
}

.upwork-img svg{
  width: 38px;
    background: #35a3e8;
    border-radius: 50%;
    padding: 7px;
}

.upwork-img svg:hover{
   background: #48588D;
}


/* .navigation .search-toggle-li::after{
  content:''; 
 position: absolute;
    z-index: 99;
    left: 30px;
    top: 0px;
  background:url('/wp-content/uploads/2022/10/Asset-1-8.png');
  height: 100px;
    width: 70px;
    background-repeat: no-repeat;
  background-size: 70px 100px;
}
 */


.df-banner .cd-headline.push b.is-hidden{
  animation: push-out 1s !important;
}

.df-banner .cd-headline.push b.is-visible{
  animation: push-in 1s !important;
}

.df-banner .cd-headline.push b.is-hidden img{
  margin-top:500px !important;
}

 @keyframes push-in {
    0% { transform: translateX(-20%)  }
   
} 


.df-wtl label{
  display:none;
}

.df-wtl .bar, .df-wtl .highlight{
  display:none;
}


.df-pnow .elementor-widget-text-editor{
  width:80%;
}

.df-pnow .elementor-widget-button{
  width:20%;
}

.df-wtl input{
  box-shadow: 0px 3px 6px #00000029;
border: 1px solid #FFFFFF !important;
border-radius: 6px !important;
  font-family:'poppins' !important;
  color:white !important;
}

.df-wtl textarea{
  box-shadow: 0px 3px 6px #00000029;
border: 1px solid #FFFFFF !important;
border-radius: 6px !important;
  min-height: 100px !important;
   font-family:'poppins' !important;
  color:white !important;
  font-size:14px;
  font-weight:400;
  padding: 10px 12px 10px 10px;
}


.df-wtl input[type="submit"]{
  background-color: #00A1E0 !important;
  border: 1px solid #00A1E0 !important;
  font-family:'poppins' !important;
  text-transform:capitalize !important;
  padding: 10px !important;
    font-size: 15px;
    font-weight: 400;
}

.df-wtl .group{
  margin-bottom:15px;
}


.df-wtl ::placeholder{
  color:white !important;
  opacity:1 !important;
  font-family:'poppins' !important
    font-size:14px;
}


.dfextend-counter .elementor-widget-image{
  width: 35%;
    text-align: right;
}

.dfextend-counter .elementor-widget-counter{
  width: 65%;
    text-align: left;
}


.meet-box .elementor-widget-container{
  height:180px;
}


.meet-box .eael-infobox{
  position: absolute;
    top: 51%;
    transform: translateY(-50%);
  padding: 0 10%;
}


.dfextend-counter .elementor-counter-title{
  text-align:left;
  margin-left:20px;
  line-height:1.5;
}

.dfextend-counter .elementor-counter-number-prefix{
  display:none;
}

.dfextend-counter .elementor-counter-number{
  margin-left:20px;
}


.df-awards h2 span{
  box-shadow: 0px 3px 6px #00000029;
    background: white;
    padding: 0px 10px;
}

.df-cl .elementor-text-editor span{
  border: 2px dashed #194F91;
    border-radius: 10px;
    padding: 12px 40px 40px 40px;
}

.df-header-from{
  display: flex;
    justify-content: center;
    gap: 12px;
}

.df-header-from .wpcf7-spinner{
  display:none;
}

.df-header-from .your-email{
  width:30%;
}

.df-header-from .number{
  width:30%;
}

.df-header-from ::placeholder{
  color:#404040 !important;
  opacity:1 !important;
}

.df-header-from input[type="email"], .df-header-from input[type="number"]{
  box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #404040;
    border-radius: 10px;
    font-family: 'poppins';
    color: #404040;
}

.df-header-from input[type="submit"] {
    width: 160px;
    border-radius: 6px;
  background: #404040 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 6px #00000029;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 300;
    font-family: 'poppins';
}


.df-opportunity-form ::placeholder{
  color:#404040 !important;
  opacity:1 !important;
}

.df-opportunity-form input[type="email"], .df-opportunity-form input[type="number"], .df-opportunity-form input[type="text"]{
  box-shadow: 0px 3px 6px #00000029;
    border: 3px solid #404040;
    border-radius: 10px;
    font-family: 'poppins';
    color: #404040;
  margin-bottom:20px;
}

.df-opportunity-form input[type="submit"] {
    border-radius: 6px;
  background: #404040 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 6px #00000029;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 300;
    font-family: 'poppins';
}



#popmake-26044{
  padding:0px !important;
  border:0px solid white !important;
}

/* @keyframes push-in {
  0%    { opacity: 0; transform:translatex(0) !important; }
  60%   { opacity: 1; transform:translatex(-10%) !important;}
  100%  { opacity: 1; transform:translatex(100%) !important;}
}

@keyframes push-out {
  0%    { opacity: 1; transform:translatex(0) !important; }
  60%   { opacity: 0; transform:translatex(-110%) !important; }
  100%  { opacity: 0; transform:translatex(-100%) !important; }
} */

.df-banner{
  overflow:hidden;
}

.df-banner .cd-words-wrapper b img{
  width:410px;
}

.df-banner .cd-words-wrapper b img{
  max-width:95%;
}

.df-ani-text .cd-words-wrapper b{
  font-weight:500 !important;
}

.page-id-24611 .page-header{
  display:none;
}


.fb-star{
  position:relative;
}


#wpcf7-f24723-p24611-o2 input[type="submit"]{
  padding:12px !important
}


.aus-slider .n2-ss-slide{
    height:650px !important;
  }

.page-id-24611{
  font-family:'nexa bold' !important;
}

.oea-icon{
  display:none;
}

.oea-images img:hover.elementor-element-populated .oea-icon{
  display:block !important;
}

.oea-images img:hover ~ .oea-icon {
  display: block !important;
}


.aus-slider .nextend-bullet-bar{
    margin-top:-70px;
  }

.bop-icons .elementor-icon-box-title{
  margin-top:0px;
}


.page-id-24611 #site-header{
  display:none;
}

.page-id-24611 .site-footer{
 display:none;
}


#pum-24486{
   background-color: rgb(255 255 255 / 60%) !important;

}

#popmake-24486{
  padding: 0px;
    border-radius: 25px;
 
}

#aus-popup{
  opacity:0;
}


.page-id-22952 .page-header,.page-id-23645 header.page-header{
  display:none;
}


.adc-form{
  padding: 10px 20px 0px 20px;
    background: white;
    border-radius: 10px;
}

.adc-form .group{
  margin-bottom:30px;
}

.adc-form .text-left{
  text-align:center;
}

.adc-form .sub-btn{
  padding: 15px 10px !important;
}


.adc-form label{
  font-weight:500;
}


.adc-form .mat-input{
  border: 1px solid #b7b0b0 !important;
}

.adc-form input[type="submit"] {
    width: 115px;
    border-radius: 5px;
    background-color: #3a71cc !important;
}


.mtm-text .elementor-icon-list-item::before{
  content: '';
    background: var(--wpr-bg-723bea6c-c149-434c-bbd4-4e667bd25ff0);
    position: absolute;
    top: 43%;
    left: -25px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 15px;
    transform: translatey(-50%);
}



.caf-form form{
  display:flex;
}

.caf-form form input[type="number"]{
  max-width:65%;
  color:white;
}

.caf-form form input[type="submit"]{
  width:30%;
  border-radius: 0px;
    margin-left: -5px;
}

.caf-form form input::placeholder{
  color:white;
}

/* SAP Services page CSS Start */

.sap-head span, .sap-head2 span{
  position:relative;
  font-weight:700;
}

.sap-head span::after{
   position: absolute;
    content: '';
    height: 10px;
    bottom: 1px;
    right: -5%;
    width: 110%;
    background: #1571CC;
    opacity: 0.3;
    border-radius: 10px;
}

.sap-head2 span::after{
   position: absolute;
    content: '';
    height: 10px;
    bottom: 1px;
    right: -3%;
    width: 105%;
    background: #FFFFFF;
    opacity: 0.3;
    border-radius: 10px;
}

.sap-tabs .elementor-tab-title svg{
  position: absolute;
    top: 50%;
    left: 14px;
    width: 35px;
  transform: translateY(-50%);
}

.sap-tabs .elementor-tab-title.elementor-active svg path{
  fill: #1571CC;
}

.sap-tabs .elementor-tab-title svg path{
  fill: #FFFFFF;
}


.sap-tabs .elementor-tabs-content-wrapper{
 background:transparent !important;
  border:none !important;
}

.sap-tabs .elementor-tab-title{
  padding: 18px 10px 18px 60px!important;
  background: #383737;
  border-radius:8px;
  margin-bottom:10px;
}



.sap-tabs .elementor-active{
 border-left: 4px solid #1571CC !important;
}



.sap-tabs .elementor-tab-title:after{
  border-width: 0px !important;
   border: 0px solid white !important;
}

.sap-tabs .elementor-tab-title:before{
  border-width: 0px !important;
   border: 0px solid white !important;
}


.sap-tabs .elementor-tab-content{
   border: 0px solid white !important;
  padding: 0px 20px 20px 30px;
    margin-top: -8px;
}

.page-id-21883 .page-header{
  display:none;
}

.sap-sol .elementor-widget-wrap{
  display:contents !important;
}

.sap-sol img{
  border-radius:5px;
}

.osap-img2 img{
  margin-top: 100px;
    margin-left: 5px;
}

.left-icon .elementor-image-box-img{
  position: absolute;
    top: 50%;
    right: -47px;
  width:95px !important;
   transform: translateY(-50%);
}

.middle-icon .elementor-image-box-img{
  position: absolute;
    top: -60px;
    right: 90px;
  width:95px !important;
}

.right-icon .elementor-image-box-img{
  position: absolute;
    top: 50%;
    left: -47px;
    width: 95px !important;
  transform: translateY(-50%);
}
















/* SAP Services page CSS END */



.cd-headline.loading-bar .cd-words-wrapper::after{
  height:10px !important;
  border-radius:10px;
  background:#1571CC5E !important;
  bottom:14px !important;
}


.textbottomline1 .elementor-divider-separator{
  border-radius:8px !important;
}

.wpcf7 form.invalid .wpcf7-response-output{
  color:white;
}

.wpcf7 form.sent .wpcf7-response-output{
  color:white;
}


#searchform-dropdown label{
  pointer-events: auto;
}


/*New home page popup css*/

#popmake-21501 .elementor-divider-separator, #popmake-22884 .elementor-divider-separator{
  border-top: var(--divider-border-width) var(--divider-border-style) #3a71cc;
}

#popmake-21501 .elementor-heading-title, #popmake-22884 .elementor-heading-title{
  color: #3a71cc;
}

#popmake-21501 .bar, #popmake-22884 .bar{
  display:none;
}

#popmake-21501 .elementor-21675 .elementor-element.elementor-element-f3ea2b5, #popmake-22884 .elementor-21675 .elementor-element.elementor-element-f3ea2b5{
  padding:0% !important;
}


#popmake-21501 section, #popmake-22884 section{
  width:100% !important;
  left:0px !important;
}

#popmake-21501 label, #popmake-22884 label{
  left: 15px;
}


#pum-21501, #pum-22884{background-color: rgba(0, 0, 0, 0.2) !important;}

#popmake-22884{
	padding: 10px 15px 5px 15px;
border-radius: 15px;
}


#popmake-21501{
	padding: 10px 10px 0px 10px;
	border-radius: 15px;
}


#popmake-21501 .pum-close, #popmake-22884 .pum-close{
  height: 40px !important;
    width: 40px !important;
  right: -15px !important;
    top: -15px !important;
  border-radius: 50% !important;
  background-color: #3A71CC !important;
}


#popmake-21501 .fas, #popmake-22884 .fas{font-size: 25px !important;}

#popmake-21501 .mat-input, #popmake-22884 .mat-input{
  border: 1px solid lightgrey !important;
  border-radius:30px !important;
  font-size: 16px;
    padding: 6px 20px;
}

#popmake-21501 .text-left, #popmake-22884 .text-left {
    text-align: center;
    border-radius: 2px;
}

#popmake-21501 input[type="submit"], #popmake-22884 input[type="submit"] {
    width: 200px;
    border-radius: 15px;
    background-color: #3a71cc !important;
}

.git-head-text{
  color: #3a71cc;
  margin-top:10px;
}

.gitpop-ftext p{
  color: black;
    font-size: 14px !important;
    margin-top: 35px;
  margin-bottom: 0px;
}


#popmake-21501, #popmake-22884{
  background: var(--wpr-bg-b8119a02-444c-4cd1-82c3-0d8e1048f943) !important;
  background-size:cover !important;
  background-position:center center !important;
  background-repeat:no-repeat !important;
}

#popmake-21501 .group{
  margin-bottom:25px !important;
}


#popmake-22884 .group{
  margin-bottom:0px !important;
}



#popmake-21501 .git-pop-fslt, #popmake-22884 .git-pop-fslt{
  margin-top:-20px;
}

.git-head-text-span{
  position:relative;
}

 .git-head-text-span:before {
    content: " ";
    display: block;
    background: #C5DBF2;
    height: 8px;
    width: 115px;
    position: absolute;
    bottom: 6px;
    right: -6px;
    border-radius: 10px;
    z-index: -1;
}

#popmake-21501 .mat-input:focus, #popmake-22884 .mat-input:focus{
  border:1px solid #3A71CC !important;
}

#popmake-21501 form textarea, #popmake-22884 form textarea{
  min-height: 110px !important;
}

#popmake-21501 form, #popmake-22884 form{
  margin-top:-15px;
}

@media only screen and (min-width: 1024px){
.pum-container.pum-responsive.pum-responsive-medium {
    margin-left: -25% !important;
    width: 45% !important;
  }
}


/*New home page popup css END*/



/* popup form css start*/

.popup-form1{
   background-image: var(--wpr-bg-27d82b73-4107-41ec-85a5-7eede32646b8);
    padding: 6% 10% 3% 10%;
    border-radius: 15px;
  background-repeat:no-repeat;
  background-position:center center;
  background-size: 100% 100%;
  border-radius: 20px;
}

.form1-htext{
  text-align:center;
}

.form1-htext .htext1{
  color: white;
    font-size: 25px !important;
    font-weight: 600;
}

.form1-htext .htext2{color: #251660;
    font-size: 35px !important;
    font-weight: 600;
  margin-top: -10px;
}



.form1-htext .htext3{
  color: black;
    font-size: 25px !important;
    font-weight: 600;
    margin-top: 30px;
  margin-bottom: 28px;
}


.popup-form1 ::-webkit-input-placeholder{
  color:#FFFFFF !important;
}

.popup-form1 .popup-form1-name input, .popup-form1 .popup-form1-email input, .popup-form1 .popup-form1-availability input{
  border: 0px solid #ddd !important;
  padding: 4px 40px 4px 12px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3) !important;
  margin-bottom: 4px;
  color:white;
}

.popup-form1-name{
  position:relative;
}

.popup-form1-name .your-name:after{
  content:url('/wp-content/uploads/2022/01/name.png');
  position:absolute;
  top:0;
  right:15px; 
}

.popup-form1-email{
  position:relative;
}

.popup-form1-email .your-email:after{
  content:url('/wp-content/uploads/2022/01/email.png');
  position:absolute;
  top:0;
  right:15px; 
}




.popup-form1 input[type="submit"]{
  border-radius: 5px;
    margin-top: 17px;
  background-color: #251660;
  padding: 11px 20px;
  font-size:15px;
}


.fbottom-text{
  text-align:center;
  margin-top: 20px;
}

.fbottom-text p{
color: white;
    font-size: 16px !important;
}


.popup-form1 input[type="date"]{
   color-scheme: dark;
  padding: 4px 12px 4px 12px;
}

/* popup form css start*/





.page-id-19364 .page-header{
  display:none;
}

.textbottomline .elementor-divider-separator{
  border-radius:15px;
}

.awce-carousel .eicon-chevron-left:before{
  background:#FFFFFF;
  padding:5px;
  border-radius:50%;
  margin-left: -45px;
}

.awce-carousel .eicon-chevron-right:before{
  background:#FFFFFF;
  padding:5px;
  border-radius:50%;
  margin-right: -50px;
}

.wwo-cards .gallery-item img {
    width: 55px;
}

.wwo-cards .gallery-caption{
  background-color:transparent;
  padding: 8px 0px;
}

.wwo-cards .elementor-image-box-content{
  text-align:left;
}


.wwo-cards .elementor-element-populated{
  box-shadow: 5px 15px 35px rgb(74 153 211 / 40%);
    border-radius: 10px;
}

.indus-boxes{
  margin-right: 10px;
    margin-left: 10px;
  transition:0.6s;
}

.indus-boxes:hover{
  box-shadow: 4px 10px 25px rgb(74 153 211 / 40%);
    border-radius: 10px;
}


.nbrands-carousel .eicon-chevron-left{
  margin-top: -21px;
    margin-left: -30px;
}

.nbrands-carousel .eicon-chevron-left:before{
  background:#FFFFFF;
  padding:5px;
  border-radius:50%;
 
}

.nbrands-carousel .eicon-chevron-right{
  margin-top: -21px;
    margin-right: -16px;
}

.nbrands-carousel .eicon-chevron-right:before{
  background:#FFFFFF;
  padding:5px;
  border-radius:50%;
 
}

.cabusiness-box .elementor-icon {
    position: absolute;
    top: -25px;
    right: 35px;
}

.cabusiness-col .elementor-widget-wrap{
  display: grid !important;
 grid-template-columns: 48% 48%;
  gap: 10% 4%;
}

.castandfor img{
  margin-top:20px;
}

.castandfor{
   box-shadow: 4px 10px 25px rgb(74 153 211 / 40%);
    border-radius: 10px;
}

.standfor-vcol .elementor-element-populated{
  transform: rotate(
-90deg);
  
    position: absolute;
    top: -10em;
    left: -44%;
}

.case-study-ncarousel .wk-position-medium{
  margin: 60px -20px 0px -20px;
}

.case-study-ncarousel .wk-slidenav svg{
  stroke:#1571CC !important;
}


.case-study-ncarousel .wk-card .wk-card-body p {
    font-size: 15px !important;
    margin-top: -5px;
}

.nca-news-carousel .wppsac-post-date span{
  display:none;
}


.nca-news-carousel .wppsac-post-carousel button.slick-prev{
  height:40px;
  width:40px;
  border-radius:50% !important;
  background: #FFFFFF var(--wpr-bg-b8f11e60-c572-4f7f-a344-0ab48c06b84a) center center no-repeat !important;
    background-size: 10px !important;
    outline: none !important;
  box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.16);
  left:-18px !important;
}


.nca-news-carousel .wppsac-post-carousel button.slick-next{
  height:40px;
  width:40px;
  border-radius:50% !important;
  background: #FFFFFF var(--wpr-bg-7656a5b0-f9d7-4faa-a0f3-6e50f3b0c274) center center no-repeat !important;
    background-size: 10px !important;
    outline: none !important;
  box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.16);
  right:-18px !important;
}

.nca-news-carousel .slick-track .slick-active{
  transition:0.6s;
  border-radius:5px;
}

/*.nca-news-carousel .slick-track .slick-active:hover{
  box-shadow: 4px 10px 15px rgb(74 153 211 / 40%);
}*/


.nca-news-carousel .wppsac-post-content-position{
  padding:10px 20px !important;
}

.nca-news-carousel .slick-list {
  padding:25px 0px;
}

.nca-news-carousel .slick-dots .slick-active button:before{
  color:#1571CC !important;
}

.nca-news-carousel .slick-dots li button{
   background: #D8D8D8 !important;
  width:15px !important;
  height:15px !important;
  border: 4px solid white !important;
 
}

.nca-news-carousel .slick-dots li.slick-active button {
    background: #1571CC !important;
  border: 4px solid white !important;
  outline:1px solid #1571CC !important;
}

.nca-news-carousel .wppsac-post-title a {
  font-size:18px !important;
  line-height:20px !important;
}

.nca-news-carousel .wppsac-post-date{
  font-size: 14px;
    color: #898989;
}

.nca-news-carousel .wppsac-post-image-bg{
  height:240px !important;
  object-fit:cover !important;
  width:100%;
}

/*.slick-track .slick-active:nth-child(2){
  border: 2px solid grey !important;
}*/

.ca-animated-vbtn .wk-video-popup-wrapper a{
   animation: linear infinite alternate;
  animation-name: run;
  animation-duration: 2s;
 
}

@-webkit-keyframes run {
    0% {
      left: 0;
      transform: translateX(20px);
    }
   100% {
      left: 20px;
      transform: translateX(-20px);
    }
}



.ca-animated-vbtn .play-btn.style-3::after{
  opacity: 0.8;
    border-radius: 5px;
}


.nfooter-col .elementor-image-box-img img{
  margin-left:-15px !important;
}

.nfooter-col .elementor-image-box-description{
  font-size:14px !important;
}

.nfooter-imgcol .elementor-widget-wrap{
  display: grid !important;
    grid-template-columns: 48% 48%;
    gap: 5% 3%;
}


.nfooter-imgcol .elementor-widget:not(:last-child){
  margin-bottom:0px;
}


.nfooter-imgcol .elementor-image img{
  height:110px !important;
}

.businesscol-count .premium-counter-icon svg{
    position: absolute;
    top: -25px;
    right: 35px;
  padding: 10px;
    background: white;
    border-radius: 5px;
  width: 50px !important;
    height: 50px !important;
  
}


.businesscol-count .elementor-widget-wrap{
  display: grid !important;
 grid-template-columns: 48% 48%;
  gap: 10% 4%;
}


.businesscol-ilist .elementor-icon-box-title{
  margin-top:-24px !important;
}


.wppsac-carousel-slides:hover{
  box-shadow: 5px 8px 11px rgb(74 153 211 / 30%);
}

@media only screen and (max-width: 1023px){
	.success-case .swiper .swiper-slide-next {
    transform: scale(1) !important;
   
}

	
}

@media only screen and (max-width: 768px) {
  #sidr-id-searchform-dropdown label{
    pointer-events:auto;
  }
  
  #sidr-id-searchform-dropdown span{
    visibility:hidden;
  }
  
 
  
   #sidr-id-searchform-dropdown{
    display:block !important;
    position: absolute;
    width: 100%;
	   margin-top:10px;
	   padding:0 10px;
  }
  
  .awce-carousel .eicon-chevron-right:before{
    margin-right:0px;
  }
  
   .awce-carousel .eicon-chevron-left:before{
    margin-left:0px;
  }
  
  .nbrands-carousel .eicon-chevron-left{
    margin-left:0px;
  }
  
  .nbrands-carousel .eicon-chevron-right{
    margin-right:0px;
  }
  
  .standfor-tabcol .elementor-row{
    justify-content:center;
  }
  
  .standfor-vcol .elementor-element-populated{
    left:-47%;
  }
  
  .case-study-ncarousel .wk-position-medium {
    margin: 60px -50px 0px -50px;
}
  
  
  .nca-news-carousel .wppsac-post-carousel button.slick-prev{
    left:0px !important;
  }
  
  .nca-news-carousel .wppsac-post-carousel button.slick-next{
    right:0px !important;
  }
	
	.page-template .calendly-overlay .calendly-popup{
		top:75px !important;
	}
  
  
}

@media only screen and (max-width: 767px){
	
	.nn-btn2 a{
		margin:auto;
	}
	
	.zpkg-slider .premium-carousel-template .elementor-top-column{
	min-height:none !important;
}
	
	
	.zpkg-slider .premium-carousel-template .elementor-widget-button{
		position: relative !important;
    bottom: unset !important;
    left: 50%;
    transform: translateX(-50%);
	}
	
	
	
	.trip-ndc .eae-timeline-item:nth-child(odd) .eae-tl-item-content{
 text-align: left !important;
}

.trip-ndc .eae-timeline-item:nth-child(odd) .eae-tl-content-innner img{
	margin-left: unset !important;
}
	
	#popmake-29748{
		width:90% !important;
	}
  
  .us-estm-tabs .eael-tab-top-icon{
    width:90%;
	  flex-wrap: nowrap !important;
  }
  
  .jgal-img .elementor-image-gallery .gallery{
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10% 0;
    margin-bottom: 25px;
  }
  
  .mon-head .elementor-heading-title img{
    display:none;
  }
  
  .us-estm-tabs .eael-advance-tabs .eael-tabs-nav > ul li img {
    width: 95px !important;
}
  
  .ev-here-time .eae-tl-item-meta-inner{
    display: inline-block;
    position: relative;
  }
  
  
  .ev-here-time .eae-tl-item-meta-inner::after{
  content: '';
  background:var(--wpr-bg-fd834c24-921b-4e77-81d7-6ffb5b9e3b57);
 width: 20px;
    height: 20px;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
   top: -25px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
  
  
  .ev-here-time .eae-timeline-item:nth-child(even) .eae-tl-item-content{
  margin-left: 0px !important;
}

.ev-here-time .eae-timeline-item:nth-child(odd) .eae-tl-item-content{
  margin-right: 0px !important;
}
  
  .agn-tab-main .eae-tl-item-title{
    font-size: 16px !important;
  }
  
  .agn-tab-main .eae-tl-item-image img{
    height:auto !important;
  }
  
  .agn-tab-main .eae-tl-item-image{
    margin: auto !important
  }
  

  .us-agenda-tabs .eae-icon-wrap::before{
    height: 50px !important;
    transform: translate(-1px, -87%) !important;
  }
  
  
  .us-estm-tabs .eael-tabs-nav{
    zoom: 70%;
  }
  
  .sft-employer{
    margin-left: 50%;
    transform: translateX(-50%);
  }
  
  .ext-dicon img{
    width:65px !important;
  }
  
  .df-pnow .elementor-widget-text-editor{
    width:100%
  }
  
  .df-pnow .elementor-widget-button{
    width:100%;
  }
  
  
  .df-pnow .elementor-widget-wrap{
    display:block;
  }
  
  .df-banner .cd-words-wrapper b img {
    max-width: 75% !important;
}
  
  .df-banner .cd-words-wrapper{
    text-align:center !important;
  }
	
	#tcar-rmhide .swiper-navigation-button{
		display:block !important;
	}
	
	.brnti .elementor-widget-wrap{
		display: grid !important;
    grid-template-columns: 48% 48%;
    gap: 0 10px;
	}
  
}


@media only screen and (max-width: 991px){
	
	.ss-hform .ssmd1{
	padding-right: 15px;
}

.ss-hform .ssmd2{
	padding-left: 15px;
}
	
	.swiper-navigation-button{
		display:none;
	}
	
	.re-brand-carousel .swiper-navigation-button{
		display:block !important;
	}
	
	.ows-ani-carousel .elementor-swiper-button{
		display:none !important;
	}
	
}


@media only screen and (max-width: 600px) {
	
	.vs-cld-btn .vs-clnd-img{
		font-size: 18px !important;
    padding: 6px 8px 8px 12px !important;
	}
	
	.vs-cld-btn a p{
		font-size:16px !important;
	}
	
	
	.vs-cld-btn.lf-vs-cld-btn p {
    font-size: 16px !important;
}
	
	
	.sl-item{
		display:block !important;
	}
	
	.clnd-sty a{
		font-size:14px !important;
	}
	
	
	.us-estm-tabs .eael-tab-top-icon{
		width: 94%;
		display: flex;
    flex-wrap: wrap !important;
    justify-content: center;
	}
	
	.us-estm-tabs .eael-tab-item-trigger{
		width: calc(16% - 1px);
	}
	
  
/*   #popmake-29748 .pum-close{
 right: -7px !important;
    top: 16% !important;
} */
  
  #popmake-29748{
    padding:0px;
  }

  
  .info_graphics .eael-grid-post-excerpt p, .news_insights .eael-grid-post-holder .eael-grid-post-excerpt p{
    margin-bottom:50px !important;
  }
  
  .chat-address{
    left: 50% !important;
    transform: translatex(-50%) !important;
  }
  
  .aus-slider .n2-ss-slide{
    height:auto !important;
  }
  
  #wpcf7-f24723-p24611-o2{
    padding: 5px 12px 5px 12px !important;
  }
  
  
  .ttstack .elementor-row{
  display: grid !important;
    grid-template-columns: 50% 50%;
    gap: 0% 0%;
}
  
  .elementor-element-042c562 .sap-head2 span::after{
    width:145px !important;
  }
  
  .page-id-22952 .rc-anchor-normal{
  width: 276px !important;
}
  
   .page-id-22952 .rc-anchor-logo-portrait {
     margin: 10px 0 0 0px !important;
  }
  
  .page-id-22952 .rc-anchor-normal .rc-anchor-pt{
    margin: 2px 40px 0 0 !important;
  }
  
  .galleryid-22952{
  display: grid;
    grid-template-columns: 50% 50%;
    gap: 0% 0%;
}
  
  .caf-form form input[type="number"]{
    max-width:100% !important;
  }
  
  .caf-form form input[type="submit"]{
    width:100% !important;
    margin-left:0px !important;
  }
  
  .caf-form form{
    display:block !important
  }
  
  .sap-tabs .elementor-tab-content{
    padding:20px 0px 20px 0px !important;
  }
  
  .sap-tabs .elementor-tab-mobile-title.elementor-active{
    background:white !important;
  }
  
  .sap-tabs .elementor-tab-title{
    position:relative !important;
  }
  
  .sap-service-include .elementor-widget-wrap{
    display:inline-block !important;
  }
  
  
  .middle-icon .elementor-image-box-img{  
    top: 50% !important;
    right: -47px !important;
    transform: translateY(-50%);
  }
  
  
  .sap-service-include .left-icon{
    width:90% !important;
  position:relative !important;
   top: auto !important;
     left:auto !important;
    margin-top:10px !important;
    margin-bottom:10px !important;
}
  
  .sap-service-include .right-icon{
    width:90% !important;
  position:relative !important;
    top: auto !important;
     right:-10% !important;
    margin-top:10px !important;
    margin-bottom:10px !important;
}
  
  .sap-service-include .middle-icon{
    width:90% !important;
  position:relative !important;
    top: auto !important;
     left:auto !important;
    margin-top:10px !important;
    margin-bottom:10px !important;
   
}
  
  .cd-headline.loading-bar .cd-words-wrapper::after{
  bottom:8px !important;
}
  
  .nfooter-col .elementor-image-box-img img{
  margin-left:0px !important;
}
  
  .wwo-cards .elementor-image-box-content {
    text-align: center;
}
  
  .business-nlist .elementor-icon-list-item:not(:last-child):after{
    width:100% !important;
  }
  
  
  .wwo-cards .elementor-image-gallery .gallery{
  display: grid !important;
   grid-template-columns: 50% 50%;
    gap: 2% 0%;
}
  
  
}


@media only screen and (min-width: 992px) and (max-width: 1024px) {
  
  .elementor-element-8d380f5 .elementor-counter-title{
    line-height: 2.5em !important;
  }
  
  #sidr-id-searchform-dropdown label{
    pointer-events:auto;
  }
  
  #sidr-id-searchform-dropdown span{
    visibility:hidden;
  }
  
   #sidr-id-searchform-dropdown input{
    margin-top:-25px !important
  }
  
   #sidr-id-searchform-dropdown{
    display:block !important;
    position: absolute;
    width: 99%;
  }
  
  .textbottomline1 .elementor-widget-container{
    margin: -47px 354px 0px 0px !important;
  }
  
  
  .standfor-tabcol .elementor-row {
   
    justify-content: center;
}
  
  .standfor-vcol .elementor-element-populated{
    left: -47%;
  }
  
  .wsf3 .elementor-widget-container{
    padding: 50px 5px 50px 5px !important;
}
  
  .wsf2 .elementor-widget-container{
    padding: 50px 5px 50px 5px !important;
}
  
   .wsf1 .elementor-widget-container{
    padding: 40px 5px 40px 5px !important;
}
  
  .nca-news-carousel .wppsac-post-carousel button.slick-next{
    right: -5px !important;
  }
  
  .nca-news-carousel .wppsac-post-carousel button.slick-prev{
    left: -5px !important;
  }
  
  .nbrands-carousel .eicon-chevron-left{
    margin-left:0px;
  }
  
  .nbrands-carousel .eicon-chevron-right{
    margin-right:0px;
  }
  
  .case-study-ncarousel .wk-position-medium {
    margin: 60px -35px 0px -35px;
}
  
  .awce-carousel .eicon-chevron-right:before{
    margin-right:-5px;
  }
  
  .awce-carousel .eicon-chevron-left:before{
    margin-left:-5px;
  }
  
  #sidr-id-searchform-dropdown{
    display:block !important;
  }
    
}

@media screen and (min-width: 1500px){
  
  .aus-slider .n2-ss-slide{
    height:800px !important;
  } 
  
  
}


@media only screen and (min-width: 1081px) and (max-width: 1120px){
  
  .navigation .search-toggle-li::after{
    background-size: 50px 75px !important;
  }
  
}


@media only screen and (min-width: 1200px) and (max-width: 1355px){
  
  #site-header-inner{
    width:1060px !important;
  }
  
}

@media only screen and (min-width: 1024px) and (max-width: 1300px){
  #popmake-28441{
    margin-left: -34% !important;
    width: 70% !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px){
  .us-agenda-tabs .eae-icon-wrap::before{
    transform: translate(-1px, -28%) !important;
  }
}


@media only screen and (min-width: 768px) and (max-width: 992px){
	
	#popmake-29748{
		width:60% !important;
	}
	
}



@media screen and (max-width: 1023px){
	
	.rebral-vt .swiper-pagination {
    bottom: -4px !important;
}
	
	.rebral-vt .swiper-slide-next{
	transform: scale(1, 1) !important;
 
}
	
	.zoh-re .swiper .swiper-slide-next + .swiper-slide{
	transform: scale(1, 1) !important;
   
}

.zoh-re .swiper .swiper-slide-next{
	transform: scale(1, 1) !important;
}

.zoh-re .swiper .swiper-slide-next + .swiper-slide + .swiper-slide{
	transform: scale(1, 1) !important;
   
}
	
	.zoh-re .swiper-pagination-bullets {
    bottom: 0px !important;
}
	
	
}




@media screen and (max-width: 767px){
	
	.calms-tabs .elementor-tab-mobile-title{
		display:none !important;
	}
	
	.calms-tabs .elementor-tabs-wrapper{
		display:flex !important;
	}
	
	.sdwfrm{
		padding-right:5px;
		padding-left:5px;
	}
	
	.clnd-sty, .clnd-hb{
		text-align:center;
	}
	
	.rebran-colt1{
		padding-right:0px !important;
	}
	
	.rebran-ne{
		display:block !important;
	}
	
	.rebran-ne .rebran-name, .rebran-ne .rebran-email{
	width:100%;
}
	
	.rebran-colt1{
		text-align: center;
		margin-bottom: 10px;
	}
	
	
	.pmboxes .ekit-header-info, .pmboxes2 .ekit-header-info{
		display: block !important;
	}
	
	.pmboxes .ekit-header-info li, .pmboxes2 .ekit-header-info li{
		margin:0 !important;
		margin-top:10px !important;
	}
	
	.bxstop{
		flex-wrap: wrap;
	}
	.bxstop span{
		width: 100%;
    margin: 0px !important;
    margin-top: 10px !important;
	}
	
	#reb-caro .swiper-navigation-button{
		display:block !important;
		position: absolute;
    top: -20px;
    transform: translateY(0px) !important;
	}
	
	
}

@media screen and (max-width: 1080px){
	
	#sidr-id-searchform-dropdown{
		display:block !important;
	}
	
	#sidr-id-searchform-dropdown .sidr-class-apbct_special_field{
		display:none !important;
	}
	
	
}











</style>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<style>
.page-template-webinar-details .ca-6.par_ p span {
    color: white!important;
      font-size: 18px!important;
}  
  
.popup-wrap
{
    position: relative;
    border-radius: 7px !important;
    overflow: hidden;
}
#paytabs_express {
    display: none;
    left: 0;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    right: 0;
    top: 2%;
    width: 400px;
    z-index: 10000;
}
/* This is for the positioning of the Close Link */
#popupBoxClose {
    font-size:20px;  
    line-height:15px;  
    right:5px;  
    top:5px;  
    position:absolute;  
    color:#6fa5e2;  
    font-weight:500;      
}
#fadediv
{
    width: 100%; height: 100%; opacity: 0.3; background-color: black;
}
.open_popup
{
    border:none;
    z-index: 100000000;
    font-size:12px;
    font-weight:700;
    text-decoration:none;
    border-radius:5px;
    color:#fff;
    text-transform:uppercase;
    display:block;
    background-image: var(--wpr-bg-615a0105-9a39-4b3f-8291-cc12a74c947b) !important;
    background-repeat: no-repeat;
    width:150px; height:30px;
    cursor:pointer;
    background-color:transparent;
    text-indent: -999999px;
    white-space: nowrap;
}
.close_
{
    background-image: var(--wpr-bg-1e92e4a5-6b90-465d-8f9d-cd234d746666) !important;
    width: 11px; height: 11px; position: absolute; z-index: 1000; top: 7px; right: 6px; cursor: pointer;
}
#overlay{
    position:fixed; top:0; left:0; background:rgba(0,0,0,0.7); z-index:9996; width:100%; height:100%; display:block;  
}


.open_popup_express
{
    border:none;
    z-index: 100000000;
    font-size:12px;
    font-weight:700;
    text-decoration:none;
    border-radius:5px;
    color:#fff;
    text-transform:uppercase;
    display:block;
    background-image: var(--wpr-bg-3f1e8251-a9d8-4394-b9b1-7960464921b9) !important;
    background-repeat: no-repeat;
    width:150px; height:30px;
    cursor:pointer;
    background-color:transparent;
    text-indent: -999999px;
    white-space: nowrap;
}

#overlay2{
    position:fixed; top:0; left:0; background:rgba(0,0,0,0.7); z-index:9996; width:100%; height:100%; display:block;  
}

#paytabs_express_v2 {
    display: none;
    left: 0;
    margin: 0 auto;
    padding: 0;
    position: absolute;
    right: 0;
    top: 2%;
    width: 400px;
    z-index: 10000;
}

.PT_open_popup,.PT_open_iframe
{
    border:none;
    z-index: 100000000;
    font-size:12px;
    font-weight:700;
    text-decoration:none;
    border-radius:5px;
    color:#fff;
    text-transform:uppercase;
    display:block;

    background-repeat: no-repeat;
    width:150px; height:30px;
    cursor:pointer;
    background-color:transparent;
    text-indent: -999999px;
    white-space: nowrap;
}
#ar_button
{
    background-image: var(--wpr-bg-d45d4079-fe79-48a6-9225-943eea94cd66);
}
#en_button
{
    background-image: var(--wpr-bg-3f3553b2-07bb-4074-88c2-8fe78a165e58);
}
#ar_agnipay_button
{
    background-image: var(--wpr-bg-0c03a238-7778-49f9-a184-63a029c252ad);
}
#en_agnipay_button
{
    background-image: var(--wpr-bg-db5af890-82b5-4ad9-a748-353d92ffdd46);
}
#PT_overlay{
    position:fixed; top:0; left:0; background:rgba(0,0,0,0.7); z-index:9996; width:100%; height:100%; display:block;  
}

.PT_popup-wrap
{
    position: relative;
    border-radius: 7px !important;
    overflow: hidden;
}

.iframe_wrap {
    height:auto;
    background:#fff;
    color:#000;
    cursor:pointer;
}
.hidden_iframe {
    height:0px;
    -webkit-transition:height, 0.5s linear;
    -moz-transition: height, 0.5s linear;
    -ms-transition: height, 0.5s linear;
    -o-transition: height, 0.5s linear;
    transition: height, 0.5s linear;
}
.hidden_iframe.open {
    height:100%;
    width:100%;
    -webkit-transition:height, 0.5s linear;
    -moz-transition: height, 0.5s linear;
    -ms-transition: height, 0.5s linear;
    -o-transition: height, 0.5s linear;
    transition: height, 0.5s linear;
}
.popup-wrap{
    text-align:center;
    margin:0 auto ;
    -webkit-box-shadow: 1px 1px 5px 4px rgba(50, 50, 50, 0.63);
    -moz-box-shadow:    1px 1px 5px 4px rgba(50, 50, 50, 0.63);
    box-shadow:         1px 1px 5px 4px rgba(50, 50, 50, 0.63);
    position:relative; 
    z-index:10;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333333;
    background-color: #fff;
}
.login-wrap{
	background:#fff;
	display:inline-block;
	width:100%;
	/*margin-left:-3px;*/
	vertical-align:top;
	border-radius:7px;
	overflow:hidden;
}

a {
    color: blue;
    text-decoration: none !important;
}

.showchat{
  display:block !important;
}

#linkedinchat{
    position: fixed;
    bottom: 40px;
    right: 15px;
    z-index: 9999;
    width: 250px;
  
    text-align: center;

	}
#linkedinchat img{
  
    border: 2px solid #337ab7;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.12);
  
}
#linkedinchat i{
  font-size: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.grecaptcha-badge {
    bottom: 120px !important;
}
p.asktoexpert {
    background: #222;
    color: #fff;
    font-size: 18px !important;
    font-weight: 900;
    padding: 5px;
    margin-top: 5px;
    border-radius: 4px;
}
span.accordminus {
 font-size: 26px;
    right: 1px;
    background: rgb(34, 34, 34);
    height: 25px;
    width: 25px;
    line-height: 24px;
    color: rgb(255, 255, 255);
    position: absolute;
    top: -29px;
    border-radius: 50%;

}
span.accordplus {
 font-size: 26px;
    right: 1px;
    background: rgb(34, 34, 34);
    height: 25px;
    width: 25px;
    line-height: 24px;
    color: rgb(255, 255, 255);
    position: absolute;
    top: -29px;
    border-radius: 50%;
}
/*internship page csss*/

.row-int label {
    position: relative !important;
    top: 0;
    left: 0;
    color: #222;
}

.row-int {
    display: flex;
    width: 100%;
}

.col-6-int {
    padding: 10px;
    width: 50%;
}
.col-12-int {
    width: 100%;
    padding: 10px;
}
span.req-int {
    color: #c30101;
}
span.whatap-act {
    font-size: 12px;
    color: #c30101;
}
a.get_linkedin {
    color: #165EA4 !important;
}
.cont-int {
    background: #ffffff82;
    padding: 1%;
    box-shadow: 0 3px 6px rgb(0 0 0 / 2%), 0 3px 6px rgb(0 0 0 / 5%);
}
@media only screen and (max-width: 767px) {
  .row-int {
   display: block !important;
  }
  .col-6-int{
   width: 100% !important;
  }
}
/*end*/

#nitish,#ritika{
    width: 100%;
    text-align: center;
    display: inline-block;
}

.hireus{
    margin-top: 20px;
    border-radius: 30px;
    display: inline-block;
    padding: 10px 30px;
    border: none;
    background: #2D467B;
    color: white;
    font-size: 16px;
  transition-duration: 0.3s;
  transition-property: transform;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.hireus:hover {
  transform: scale(1.1);
}
#captcha_error_hire{
float: left;
    color: red;
}
fieldset#menu_10{
min-height:230px;
}

.cotainer_bank::-webkit-scrollbar-track
{
	background-color: #F5F5F5;
}

.cotainer_bank::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

.cotainer_bank::-webkit-scrollbar-thumb
{
	background-color: #1B73CC;	
  border-radius:30px;
}
.book{
  position: absolute;
    bottom: -100px;
    background-color: #63a2cb;
    left: 50%;
    transform: translateX(-50%);
      width: 190px !important;
}
.row-new{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.ca-new-12{
  width: 100%;
}
.ca-new-2{
width:15%;

}
.ca-new-10{
  width:85%;
  
}
div.question_noselected {
  text-align: center;
  font-size: 20px;
  color: red;
  margin-bottom: 20px;
}


.quesanscon {
  padding: 7px;
}
.ques_ans_menu_1,.ques_ans_menu_2,.ques_ans_menu_3,.ques_ans_menu_4,.ques_ans_menu_5,
.ques_ans_menu_6,.ques_ans_menu_7,.ques_ans_menu_8,.ques_ans_menu_9,.ques_ans_menu_10,
.firstnamehead,.first_name_answer,.lastnamehead,.last_name_answer,.emailhead,
.email_answer,.comapnyhead,.company_answer,.mobilehead,.mobile_answer,.skypehead,.skype_answer,.timehead,.time_answer{
  display:none;
}
.cotainer_bank {
  padding: 2% 4%;
  overflow-y: scroll;
  max-height: 283px;
}

div.question {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: brown;
}
div.answer {
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding: 0;
}

h2.summary {
  background-color: #009AE2;
         padding: 5px;
      text-align: center;
      margin: 0;
      color:#fff;
  }


.fielsetcontainer {
 height: 310px;
  float: left;
  width: 65%;
  margin: 3% 0;
}
.summary_container {
     border-radius: 4px;
  float: left;
  width: 35%;
  margin: 3% 0;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .09);

    
}


#msform_new input[type=radio] {
  margin: 4px 0 0;
  margin-top: 1px;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
  height: 0;
}
#msform_new .checkbox,#msform_new .radio {
position: absolute;
    display: block !important;
    cursor: pointer;
    width: 100% !important;
    height: 70% !important;
  opacity:0;
}

.radio_btn_new_heading {  
    background: #009AE2;
    display: inline-block;
    font-weight: 600;
    padding: 10px 0px 10px 50px;
    cursor: pointer;
    color: #fff;
    font-size: 16px !important;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}


input.radio:empty ~ .radio_btn_new_heading:before {
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  content: '';
  width: 2.4em;
  background:#1B73CC;
  border-radius: 4px 0 0 4px;
  line-height: 40px;
  color: #000;
}

input.radio:checked ~ .radio_btn_new_heading:before { 
    content: '\2713';
    text-indent: .8em;
    color: #FFF;
    cursor: pointer; 
  background:green;
}





#msform_new .row {
  margin: 0!important;
}

.error_msg {
  display: none;
  color: red;
  float: left;
  font-size: 12px;
  position: initial;
}

#msform_new .next:disabled, #msform_new .submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}



#msform_new fieldset h3 {
  text-align: left;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 0;
}

/* floating form start */

.floating-form {
  width: 50%;
  float: left;
}

/****  floating-Lable style start ****/

.floating-label {
  position: relative;
  margin-bottom: 20px;
  padding: 10px 21px 10px 0px;
}

.floating-input, .floating-select {
  font-size: 14px;
  padding: 4px 4px;
  display: block;
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #757575;
}

.floating-input:focus, .floating-select:focus {
  outline: none;
  border-bottom: 2px solid #5264AE;
}

.floating-form .label_placeholder {
  color: #999;
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.floating-input:focus~.label_placeholder, .floating-input:not(:placeholder-shown)~.label_placeholder {
  top: -18px;
  font-size: 14px;
  color: #5264AE;
}

.floating-select:focus~.label_placeholder, .floating-select:not([value=""]):valid~.label_placeholder {
  top: -18px;
  font-size: 14px;
  color: #5264AE;
}

/* active state */

.floating-input:focus~.bar:before, .floating-input:focus~.bar:after, .floating-select:focus~.bar:before, .floating-select:focus~.bar:after {
  width: 50%;
}

.floating-textarea {
  min-height: 30px;
  max-height: 260px;
  overflow: hidden;
  overflow-x: hidden;
}

/* highlighter */

.highlight {
  position: absolute;
  height: 50%;
  width: 100%;
  top: 15%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

/* active state */

.floating-input:focus~.highlight, .floating-select:focus~.highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* animation */

@-webkit-keyframes inputHighlighter {
  from {
    background: #5264AE;
  }
  to {
    width: 0;
    background: transparent;
  }
}

@-moz-keyframes inputHighlighter {
  from {
    background: #5264AE;
  }
  to {
    width: 0;
    background: transparent;
  }
}

@keyframes inputHighlighter {
  from {
    background: #5264AE;
  }
  to {
    width: 0;
    background: transparent;
  }
}

/****  floating-Lable style end ****/

/***   daniel - Fork me friend - style   ***/

.floating-credit {
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #aaa;
  font-size: 13px;
  font-family: arial, sans-serif;
}

.floating-credit a {
  text-decoration: none;
  color: #000000;
  font-weight: bold;
}

.floating-credit a:hover {
  border-bottom: 1px dotted #f8f8f8;
}

.floating-heading {
  position: fixed;
  color: #aaa;
  font-size: 20px;
  font-family: arial, sans-serif;
}

/***  daniel - Fork me friend - style  ***/

/* end */

#msform_new .previous {
  background-color: #c8ced1!important;
  color: #000!important;
  position: absolute;
  left: 0;
  bottom: -100px;
}

#msform_new .next, #msform_new .submit {
  background-image: -webkit-linear-gradient( 0deg, rgb(212, 103, 23) 0%, rgb(203, 34, 57) 50%, rgb(128, 25, 105) 100%)!important;
  position: absolute;
  right: 0;
  bottom: -100px;
}

#wrapper_new_section select {
  display: inline-block;
  min-height: 40px;
  width: 100%;
  font-size: 14px;
  line-height: 1.8;
  padding: 6px 12px;
  vertical-align: middle;
  background-color: transparent;
  color: #333;
  border: 1px solid #ddd;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

#wrapper_new_section input[type="text"], #wrapper_new_section input[type="email"] {
  width: 100%;
  border-radius: 0px!important;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee8e8;
  font-family: raleway;
}

.ca-new-6 {
  width: 50%;
  float: left;
  text-align: left;
  position: relative;
}



#msform_new input {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2C3E50;
  font-size: 13px;
}

.radio_btn_new_heading {
  position: relative;
  width: 93%; 
  top: -2px;
  
}

.career_head_new {
  margin: 0 auto;
  text-align: center;
}

#wrapper_new_section {
 border-radius: 10px;
  padding: 3%;
  margin: auto;
  background-color: #fff;
}

.menu_1:before {
  background-image: var(--wpr-bg-e9b10d27-3345-4ef7-a8e9-107ee739a259);
 
}

.menu_2:before {
  background-image: var(--wpr-bg-40e7f70a-17cf-4cad-ba1e-1c26090830da);
}

.menu_3:before {
  background-image: var(--wpr-bg-a9a299e7-48ef-4f26-8bf9-d2d0a8a47dd2);
}

.menu_4:before {
  background-image: var(--wpr-bg-7011e407-040f-43e0-9196-10f1786659b3);
}

.menu_5:before {
  background-image: var(--wpr-bg-b673482c-0088-4056-8bf0-c4339220ea91);
 background-size: 40px !important;
}

.menu_6:before {
  background-image: var(--wpr-bg-56c3b81d-9358-465d-bc88-612fcee0dfbf);
  background-size: 30px !important;
}

.menu_7:before {
  background-image: var(--wpr-bg-41645649-4bac-4d2c-abb4-ed8ae648921e);
  
}

.menu_8:before {
  background-image: var(--wpr-bg-105e4f12-eea0-4e58-99da-860038e0966f);
 background-size: 35px !important;
}

.menu_9:before {
  background-image: var(--wpr-bg-df385021-f488-4dd4-be80-725ae3c4d8f9);
  background-size: 42px !important;
}

.menu_10:before {
  background-image: var(--wpr-bg-1a6f26d8-8a93-46c8-af76-07620f6f27c7);
}

/*form styles*/

#msform_new {
  text-align: center;
  position: relative;
}

#msform_new fieldset {
  background: white;
  border: 0 none;
  border-radius: 4px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .09);
  padding: 3%; 
  box-sizing: border-box;
  width: 94%;  
  position: absolute;
}

/*Hide all except first fieldset*/

#msform_new fieldset:not(:first-of-type) {
  display: none;
}

/*inputs*/

/*buttons*/

#msform_new .action-button {
  width: 150px;
  font-weight: bold;
  color: #fff;
  border: 0 none;
  border-radius: 1px;
  cursor: pointer;
  padding: 17px 5px;
  border-radius: 5px;
  text-transform: uppercase;
}

#msform_new .previous:hover, #msform_new .previous:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #c8ced1;
}

#msform_new .next:hover, #msform_new .next:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px rgb(128, 25, 105);
}

/*headings*/

.fs-title {
  font-size: 16px;
  text-transform: uppercase;
  color: #63a2cb;
  margin-bottom: 10px;
}

.fs-subtitle {
  font-weight: normal;
  font-size: 14px;
  color: #666;
  
  margin-bottom: 20px;
}

/*progressbar_new*/

#progressbar_new {
  overflow: hidden;
  padding: 0;
  margin: 0;
}

#progressbar_new li {
  list-style-type: none;
  text-transform: uppercase;
  font-size: 12px;
  width: 10%;
  float: left;
  position: relative;
  color: rgba(0, 0, 0, .85);
  font-weight: 500;
  margin-top: 15px;
  text-align: center;
  cursor: pointer;
}

#progressbar_new li:before {
  display: block;
  content: " ";
  margin: 20px auto;
  text-align: center;
  height: 85px;
  width: 85px;
  padding: 15%;
  border-radius: 50px;
  background-color: #CCCCCC;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .25);
  background-size: 50px;
  background-repeat: no-repeat;
  background-position: center;
}

/*progressbar_new connectors*/

#progressbar_new li:after {
  display: none;
  content: '';
  width: 39%;
  height: 2px;
  position: absolute;
  left: -20%;
  top: 43px;
  
  /*put it behind the numbers*/
}

#progressbar_new li:first-child:after {
  /*connector not needed before the first step*/
  content: none;
}

/*marking active/completed steps green*/

/*The number of the step and the connector before it = green*/

#progressbar_new li.active:before, #progressbar_new li.active:after {
  background-color: #1B73CC;
}

.help-block {
  font-size: 0.8em;
  color: #7c7c7c;
  text-align: left;
  margin-bottom: 0.5em;
}
#progressbar_new li.current_active:before{
  background-color: #D3601A !important;
}

/*media query*/
@media only screen and (max-width: 1400px) {
 .ca-new-2{
width:20%;

}
.ca-new-10{
  width:80%;
  
}
}


@media only screen and (min-width: 1200px) {
  #wrapper_new_section {
   height: auto;
  }
}
@media only screen and (max-width: 1200px) {
#wrapper_new_section {
    height: auto;
}
#progressbar_new li:before{
    height: 65px;
    width: 65px;
    background-size: 35px;
}
.fielsetcontainer,.summary_container,#msform_new fieldset {
    width: 100%;
}
  .ca-new-2 {
    width: 8%;
}
.ca-new-10 {
    width: 92%;
}

}
@media only screen and (max-width: 980px) {
  .ca-new-6 {
    width: 100%;
    float: left;
    text-align: left;
    position: relative;
}
.fielsetcontainer {
     height: 455px;
}
.ca-new-2 {
    width: 10%;
}
.ca-new-10 {
    width: 90%;
}
}
@media only screen and (max-width: 1024px) {
 ul#progressbar_new {
    display: none;
}
}


@media only screen and (max-width: 767px) {
  .ca-new-6 {
    width: 100%;
    float: right;
  }
}

@media only screen and (max-width: 600px) {
  h2.summary {
    font-size: 24px !important;
}
  #toscrolltop .elementor-element-populated {
    padding: 10px 4px !important;
}
  .fielsetcontainer {
      height: 495px;
}
#msform_new .book{
width:100%;
    bottom: -122px;
}
  .radio_btn_new_heading {
    font-size: 14px;
  }
  #msform_new fieldset h3 {
    font-size: 22px;
  } 
  .floating-form {
    width: 100%;
  }
  .thankyou_new {
    font-size: 26px;
  }
  #msform_new .previous,#msform_new .next,#msform_new .submit{
    width: 150px;
    padding: 15px 5px;
     bottom: -65px;
  }
  .ca-new-2 {
    width: 25%;
}
  .ca-new-10 {
    width: 75%;
}
}


@media only screen and (max-width: 376px) {
  .ca-new-10 {
    width: 70%;
}
   .ca-new-2 {
    width: 30%;
}
   .fielsetcontainer {
    height: 520px;
}
 
 #msform_new .previous,#msform_new .next,#msform_new .submit{
    width: 100px;
  }

 

}

@media only screen and (max-width: 325px) {
  #wrapper_new_section {
    padding: 5%;
  }
  .fielsetcontainer {
    height: 560px;
}
}
@media only screen and (max-width: 600px) {
.dpsp-networks-btns-wrapper.dpsp-networks-btns-sidebar .dpsp-network-btn {
    width: 28px !important;
    min-width: 28px !important;
    overflow: hidden;
    padding: 0 12px !important;
}
}

@media only screen and (max-width: 340px) {
.dpsp-networks-btns-wrapper.dpsp-networks-btns-sidebar .dpsp-network-btn {
    width: 26px !important;
    min-width: 26px !important;
    padding: 0 10px !important;
}
}


@media only screen and (max-width: 600px) {
.wpmslider-viewport {
    height: 655px !important;
    overflow-y: scroll !important;
    border: 1px solid;
}
   .live_btn {
display: grid;
    padding: 0px 10px;
}
}

@media only screen and (max-width: 1080px) {
#site-logo #site-logo-inner a img, #site-header.center-header #site-navigation-wrap .middle-site-logo a img {
    max-width: 225px !important;
}
}
</style>
<!-- end Simple Custom CSS and JS -->
<!-- start Simple Custom CSS and JS -->
<meta name="facebook-domain-verification" content="b3uybv4t0ch4e13gvpna8d6x64afgt" />


<!-- Google Tag Manager -->
<script type="rocketlazyloadscript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5889ZB2');</script>
<!-- End Google Tag Manager -->

<!-- Global site tag (gtag.js) - Google Ads: 494390506 -->
<script type="rocketlazyloadscript" async data-rocket-src="https://www.googletagmanager.com/gtag/js?id=AW-494390506"></script>
<script type="rocketlazyloadscript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-494390506');
</script>



<script type="rocketlazyloadscript">
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('CN6RREJC77U0CFAO0U70');
  ttq.page();
}(window, document, 'ttq');
</script>








<!-- end Simple Custom CSS and JS -->

<link data-minify="1" rel='stylesheet' id='5568-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/custom-css-js/5568.css?ver=1728035237' media='all' />

<link data-minify="1" rel='stylesheet' id='5428-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/custom-css-js/5428.css?ver=1728035237' media='all' />

<link data-minify="1" rel='stylesheet' id='5340-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/custom-css-js/5340.css?ver=1728035237' media='all' />

<link data-minify="1" rel='stylesheet' id='3921-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/custom-css-js/3921.css?ver=1728035237' media='all' />

<link data-minify="1" rel='stylesheet' id='746-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/custom-css-js/746.css?ver=1728035237&wpr_t=1729010843' media='all' />

<link data-minify="1" rel='stylesheet' id='126-css' href='https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/custom-css-js/126.css?ver=1728035237&wpr_t=1729010843' media='all' />
<meta name="hubbub-info" description="Hubbub 1.34.1"><meta name="generator" content="Elementor 3.22.3; features: e_optimized_assets_loading, additional_custom_breakpoints; settings: css_print_method-external, google_font-enabled, font_display-auto">
<link rel="icon" href="https://www.cloudanalogy.com/wp-content/uploads/2018/12/ca-new-logo-blue-500x500-150x150.png" sizes="32x32" />
<link rel="icon" href="https://www.cloudanalogy.com/wp-content/uploads/2018/12/ca-new-logo-blue-500x500-300x300.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.cloudanalogy.com/wp-content/uploads/2018/12/ca-new-logo-blue-500x500-300x300.png" />
<meta name="msapplication-TileImage" content="https://www.cloudanalogy.com/wp-content/uploads/2018/12/ca-new-logo-blue-500x500-300x300.png" />
			<style>
				:root {
				--qlwapp-scheme-font-family:inherit;--qlwapp-scheme-font-size:18px;--qlwapp-scheme-icon-size:60px;--qlwapp-scheme-icon-font-size:24px;				}
			</style>
			<noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript>    
<style id="wpr-lazyload-bg-container"></style><style id="wpr-lazyload-bg-exclusion">.elementor-40228 .elementor-element.elementor-element-89c6418:not(.elementor-motion-effects-element-type-background), .elementor-40228 .elementor-element.elementor-element-89c6418 > .elementor-motion-effects-container > .elementor-motion-effects-layer{--wpr-bg-6c47fc76-6270-4969-b28c-8149055aaa84: url('https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1.jpg');}.elementor-40228 .elementor-element.elementor-element-484d35d:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-40228 .elementor-element.elementor-element-484d35d > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{--wpr-bg-378b1656-ff4e-4087-8bbb-16a7538edf4d: url('https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37006.png');}</style>
<noscript>
<style id="wpr-lazyload-bg-nostyle">.premium-atext__reveal .premium-atext__text{--wpr-bg-dbd8dc71-7e98-4f28-9ccb-c5b24a1da702: url('https://raw.githubusercontent.com/WebDevSimplified/css-challenges/master/Animated%20Text%20Reveal/reveal_background.jpg');}.slick-loading .slick-list{--wpr-bg-e0f61524-5ab7-4e9f-bcf2-0a2f5c5b5558: url('https://www.cloudanalogy.com/wp-content/plugins/wp-responsive-recent-post-slider/assets/images/ajax-loader.gif');}[data-element_type="eae-evergreen-timer.skin4"] .digit-separator{--wpr-bg-392379f2-3c2a-4971-a599-cd1469bb8a24: url('https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/digit-sep-svg.svg');}[data-element_type="eae-evergreen-timer.skin4"] .digit{--wpr-bg-ad537700-f1ce-48c8-ac26-7f7e1f47301a: url('https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/digits-svg-alpha.svg');}.elementor-8975 .elementor-element.elementor-element-fd03638 .eae-flip-box-front{--wpr-bg-aedd7bcb-77e0-4c20-b398-d184381c38dc: url('https://www.cloudanalogy.com/wp-content/uploads/2019/03/image_2023_02_01T07_50_50_919Z.png');}.elementor-8975 .elementor-element.elementor-element-fd03638 .eae-flip-box-front{--wpr-bg-f59319ad-24e0-484c-b8bc-354f970f14f1: url('https://www.cloudanalogy.com/wp-content/uploads/2019/03/Gold_85x88-1.png');}.elementor-8975 .elementor-element.elementor-element-fa97662 .eae-flip-box-front{--wpr-bg-a17f3563-c254-4088-8029-577d387f170a: url('https://www.cloudanalogy.com/wp-content/uploads/2019/03/image_2023_02_01T07_50_50_919Z.png');}.elementor-8975 .elementor-element.elementor-element-9269f8f .eae-flip-box-front{--wpr-bg-648a15d8-a47e-4772-bfdc-f51fb1b79875: url('https://www.cloudanalogy.com/wp-content/uploads/2019/03/Gold_85x88-1.png');}.elementor-8975 .elementor-element.elementor-element-68e786e .eae-flip-box-front{--wpr-bg-d1525271-8fdc-4756-8a1e-f6d55fe8454d: url('https://www.cloudanalogy.com/wp-content/uploads/2019/03/image_2023_02_01T07_50_50_919Z.png');}.elementor-40228 .elementor-element.elementor-element-d310462 > .elementor-element-populated >  .elementor-background-overlay{--wpr-bg-2f3be902-e16a-4d48-88ea-87f422b3f51e: url('https://www.cloudanalogy.com/wp-content/uploads/2024/05/Mask-group-33-2-1.png');}table.dataTable thead .sorting{--wpr-bg-3714aada-7672-407c-8f0e-f8684d60bd33: url('https://www.cloudanalogy.com/wp-content/plugins/elementskit-lite/widgets/init/assets/img/arrow.png');}table.dataTable thead .sorting_asc{--wpr-bg-d27d3a51-f9d1-487b-b33e-61b18d316d8d: url('https://www.cloudanalogy.com/wp-content/plugins/elementskit-lite/widgets/init/assets/img/sort_asc.png');}table.dataTable thead .sorting_desc{--wpr-bg-bfb2e574-a80c-4cce-891e-e100eccc3b24: url('https://www.cloudanalogy.com/wp-content/plugins/elementskit-lite/widgets/init/assets/img/sort_desc.png');}table.dataTable thead .sorting_asc_disabled{--wpr-bg-638136d2-fd61-4cc8-b847-e8d2e5f075f4: url('https://www.cloudanalogy.com/wp-content/plugins/elementskit-lite/widgets/init/assets/img/sort_asc_disabled.png');}.oceanwp-instagram-bar .instagram-logo{--wpr-bg-8a9ccdcb-0568-4c17-b3e3-5eb60858cd84: url('https://www.cloudanalogy.com/wp-content/plugins/ocean-extra/assets/img/instagram-logo.png');}p.flickr_stream_wrap a{--wpr-bg-e80679b5-d757-4840-b0c7-44b34d18b638: url('https://www.cloudanalogy.com/wp-content/plugins/ocean-extra/assets/img/flickr.png');}.img-scroll{--wpr-bg-5c90e907-38bc-44c2-bdaa-25c0df957a27: url('https://www.cloudanalogy.com/wp-content/uploads/2019/01/pintags.png');}.css-video-block::after{--wpr-bg-490e2a74-6a79-4500-a2c5-0518b4c83d06: url('https://www.cloudanalogy.com/wp-content/uploads/2019/04/corner.png');}.css-video-block-odd::after{--wpr-bg-fb3a2a76-4913-4fe6-a65b-c452af26c02f: url('https://www.cloudanalogy.com/wp-content/uploads/2019/04/corner.png');}.css-video-block-odd::after{--wpr-bg-2ca1cd46-df9b-4f89-a913-0474068998c7: url('https://www.cloudanalogy.com/wp-content/uploads/2019/04/corner.png');}section.css-video-block::after{--wpr-bg-f208294d-2193-4a19-8503-c33eb5a1d565: url('https://www.cloudanalogy.com/wp-content/uploads/2019/04/corner.png');}#outer-wrap .page-header{--wpr-bg-28d54f5d-cecd-4895-bb57-481fbcd821fa: url('https://www.cloudanalogy.com/wp-content/uploads/2019/01/about-header-2.jpg');}.infographics-template-default #outer-wrap .page-header,.news-template-default #outer-wrap .page-header{--wpr-bg-78f02a41-e8dc-4346-96cf-1c280fbc86af: url('https://www.cloudanalogy.com/wp-content/uploads/2019/11/bg-4-1-min-1.png');}#salesforce-service-sec1{--wpr-bg-a3fb695e-1298-4bc0-983e-f533e1bc7379: url('https://www.cloudanalogy.com/wp-content/uploads/2019/02/bg-overlay-1.jpg');}#salesforce-section2{--wpr-bg-9c18ce95-6a6b-40d4-8bb7-1e55bde2e0e7: url('https://www.cloudanalogy.com/wp-content/uploads/2019/02/bg-overlay-2.jpg');}.about-development-process-img1::after,.about-development-process-img3::after{--wpr-bg-94472318-687b-49e7-8a01-a347450b838d: url('https://www.cloudanalogy.com/wp-content/uploads/2019/01/right_arrow.png');}.about-development-process-img2::before{--wpr-bg-954c2a97-35c1-47c4-90be-8838ca4a439f: url('https://www.cloudanalogy.com/wp-content/uploads/2019/01/left_arrow.png');}.calendly-overlay .calendly-popup-close{--wpr-bg-7052f4b1-e5b2-4619-8986-20434080d5b4: url('https://www.cloudanalogy.com/assets/external/close-icon.svg');}.iti__flag{--wpr-bg-8b2d0b33-14fe-4558-b406-1b075e9d7c97: url('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/../img/flags.png');}.iti__flag{--wpr-bg-73238e79-b594-419f-aa85-8e6731a0aca0: url('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/../img/flags@2x.png');}.elementor-add-new-section .elementor-add-templately-promo-button{--wpr-bg-84cee983-18ae-4e9d-9118-94eac7640e6c: url('https://www.cloudanalogy.com/wp-content/plugins/essential-addons-for-elementor-lite/assets/admin/images/templately/logo-icon.svg');}.elementor-add-new-section .elementor-add-templately-promo-button{--wpr-bg-94c2b453-f600-474f-9bb8-1fcd72771eb1: url('https://www.cloudanalogy.com/wp-content/plugins/essential-addons-for-elementor-lite/assets/admin/images/templately/logo-icon.svg');}.rll-youtube-player .play{--wpr-bg-ac81dfe8-6bf5-4a57-a5b8-440a71022d0a: url('https://www.cloudanalogy.com/wp-content/plugins/wp-rocket/assets/img/youtube.png');}.ev-here-time .eae-tl-item-meta::after{--wpr-bg-f7888f02-70c3-4002-924a-c6f2350af8fa: url('https://www.cloudanalogy.com/wp-content/uploads/2023/04/Vector.png');}.mtm-text .elementor-icon-list-item::before{--wpr-bg-723bea6c-c149-434c-bbd4-4e667bd25ff0: url('https://www.cloudanalogy.com/wp-content/uploads/2022/06/Mask-group-5.png');}#popmake-21501, #popmake-22884{--wpr-bg-b8119a02-444c-4cd1-82c3-0d8e1048f943: url('https://www.cloudanalogy.com/wp-content/uploads/2022/01/popnew12.png');}.nca-news-carousel .wppsac-post-carousel button.slick-prev{--wpr-bg-b8f11e60-c572-4f7f-a344-0ab48c06b84a: url('https://www.cloudanalogy.com/wp-content/uploads/2022/01/Line-1.png');}.nca-news-carousel .wppsac-post-carousel button.slick-next{--wpr-bg-7656a5b0-f9d7-4faa-a0f3-6e50f3b0c274: url('https://www.cloudanalogy.com/wp-content/uploads/2022/01/Line-2.png');}.ev-here-time .eae-tl-item-meta-inner::after{--wpr-bg-fd834c24-921b-4e77-81d7-6ffb5b9e3b57: url('https://www.cloudanalogy.com/wp-content/uploads/2023/04/Vector.png');}.popup-form1{--wpr-bg-27d82b73-4107-41ec-85a5-7eede32646b8: url('https://www.cloudanalogy.com/wp-content/uploads/2022/01/FB-1.png');}.open_popup{--wpr-bg-615a0105-9a39-4b3f-8291-cc12a74c947b: url('https://www.cloudanalogy.com/../images/checkout.png');}.close_{--wpr-bg-1e92e4a5-6b90-465d-8f9d-cd234d746666: url('https://www.cloudanalogy.com/../images/close.png');}.open_popup_express{--wpr-bg-3f1e8251-a9d8-4394-b9b1-7960464921b9: url('https://www.cloudanalogy.com/wp-content/uploads/2019/08/checkout.png');}#ar_button{--wpr-bg-d45d4079-fe79-48a6-9225-943eea94cd66: url('https://www.cloudanalogy.com/../images/checkout_ar.png');}#en_button{--wpr-bg-3f3553b2-07bb-4074-88c2-8fe78a165e58: url('https://www.cloudanalogy.com/wp-content/uploads/2019/08/checkout.png');}#ar_agnipay_button{--wpr-bg-0c03a238-7778-49f9-a184-63a029c252ad: url('https://www.cloudanalogy.com/../images/buynow_ar.png');}#en_agnipay_button{--wpr-bg-db5af890-82b5-4ad9-a748-353d92ffdd46: url('https://www.cloudanalogy.com/../images/buynow.png');}.menu_1:before{--wpr-bg-e9b10d27-3345-4ef7-a8e9-107ee739a259: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu1.svg');}.menu_2:before{--wpr-bg-40e7f70a-17cf-4cad-ba1e-1c26090830da: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu2.svg');}.menu_3:before{--wpr-bg-a9a299e7-48ef-4f26-8bf9-d2d0a8a47dd2: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu3.svg');}.menu_4:before{--wpr-bg-7011e407-040f-43e0-9196-10f1786659b3: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-4.svg');}.menu_5:before{--wpr-bg-b673482c-0088-4056-8bf0-c4339220ea91: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-5.svg');}.menu_6:before{--wpr-bg-56c3b81d-9358-465d-bc88-612fcee0dfbf: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-6.svg');}.menu_7:before{--wpr-bg-41645649-4bac-4d2c-abb4-ed8ae648921e: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-7.svg');}.menu_8:before{--wpr-bg-105e4f12-eea0-4e58-99da-860038e0966f: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-8.svg');}.menu_9:before{--wpr-bg-df385021-f488-4dd4-be80-725ae3c4d8f9: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-9.svg');}.menu_10:before{--wpr-bg-1a6f26d8-8a93-46c8-af76-07620f6f27c7: url('https://www.cloudanalogy.com/wp-content/uploads/2020/01/menu-10.svg');}</style>
</noscript>
<script type="application/javascript">const rocket_pairs = [{"selector":".premium-atext__reveal .premium-atext__text","style":".premium-atext__reveal .premium-atext__text{--wpr-bg-dbd8dc71-7e98-4f28-9ccb-c5b24a1da702: url('https:\/\/raw.githubusercontent.com\/WebDevSimplified\/css-challenges\/master\/Animated%20Text%20Reveal\/reveal_background.jpg');}","hash":"dbd8dc71-7e98-4f28-9ccb-c5b24a1da702","url":"https:\/\/raw.githubusercontent.com\/WebDevSimplified\/css-challenges\/master\/Animated%20Text%20Reveal\/reveal_background.jpg"},{"selector":".slick-loading .slick-list","style":".slick-loading .slick-list{--wpr-bg-e0f61524-5ab7-4e9f-bcf2-0a2f5c5b5558: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/wp-responsive-recent-post-slider\/assets\/images\/ajax-loader.gif');}","hash":"e0f61524-5ab7-4e9f-bcf2-0a2f5c5b5558","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/wp-responsive-recent-post-slider\/assets\/images\/ajax-loader.gif"},{"selector":"[data-element_type=\"eae-evergreen-timer.skin4\"] .digit-separator","style":"[data-element_type=\"eae-evergreen-timer.skin4\"] .digit-separator{--wpr-bg-392379f2-3c2a-4971-a599-cd1469bb8a24: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/addon-elements-for-elementor-page-builder\/assets\/digit-sep-svg.svg');}","hash":"392379f2-3c2a-4971-a599-cd1469bb8a24","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/addon-elements-for-elementor-page-builder\/assets\/digit-sep-svg.svg"},{"selector":"[data-element_type=\"eae-evergreen-timer.skin4\"] .digit","style":"[data-element_type=\"eae-evergreen-timer.skin4\"] .digit{--wpr-bg-ad537700-f1ce-48c8-ac26-7f7e1f47301a: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/addon-elements-for-elementor-page-builder\/assets\/digits-svg-alpha.svg');}","hash":"ad537700-f1ce-48c8-ac26-7f7e1f47301a","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/addon-elements-for-elementor-page-builder\/assets\/digits-svg-alpha.svg"},{"selector":".elementor-8975 .elementor-element.elementor-element-fd03638 .eae-flip-box-front","style":".elementor-8975 .elementor-element.elementor-element-fd03638 .eae-flip-box-front{--wpr-bg-aedd7bcb-77e0-4c20-b398-d184381c38dc: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/image_2023_02_01T07_50_50_919Z.png');}","hash":"aedd7bcb-77e0-4c20-b398-d184381c38dc","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/image_2023_02_01T07_50_50_919Z.png"},{"selector":".elementor-8975 .elementor-element.elementor-element-fd03638 .eae-flip-box-front","style":".elementor-8975 .elementor-element.elementor-element-fd03638 .eae-flip-box-front{--wpr-bg-f59319ad-24e0-484c-b8bc-354f970f14f1: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/Gold_85x88-1.png');}","hash":"f59319ad-24e0-484c-b8bc-354f970f14f1","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/Gold_85x88-1.png"},{"selector":".elementor-8975 .elementor-element.elementor-element-fa97662 .eae-flip-box-front","style":".elementor-8975 .elementor-element.elementor-element-fa97662 .eae-flip-box-front{--wpr-bg-a17f3563-c254-4088-8029-577d387f170a: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/image_2023_02_01T07_50_50_919Z.png');}","hash":"a17f3563-c254-4088-8029-577d387f170a","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/image_2023_02_01T07_50_50_919Z.png"},{"selector":".elementor-8975 .elementor-element.elementor-element-9269f8f .eae-flip-box-front","style":".elementor-8975 .elementor-element.elementor-element-9269f8f .eae-flip-box-front{--wpr-bg-648a15d8-a47e-4772-bfdc-f51fb1b79875: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/Gold_85x88-1.png');}","hash":"648a15d8-a47e-4772-bfdc-f51fb1b79875","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/Gold_85x88-1.png"},{"selector":".elementor-8975 .elementor-element.elementor-element-68e786e .eae-flip-box-front","style":".elementor-8975 .elementor-element.elementor-element-68e786e .eae-flip-box-front{--wpr-bg-d1525271-8fdc-4756-8a1e-f6d55fe8454d: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/image_2023_02_01T07_50_50_919Z.png');}","hash":"d1525271-8fdc-4756-8a1e-f6d55fe8454d","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/03\/image_2023_02_01T07_50_50_919Z.png"},{"selector":".elementor-40228 .elementor-element.elementor-element-d310462 > .elementor-element-populated >  .elementor-background-overlay","style":".elementor-40228 .elementor-element.elementor-element-d310462 > .elementor-element-populated >  .elementor-background-overlay{--wpr-bg-2f3be902-e16a-4d48-88ea-87f422b3f51e: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2024\/05\/Mask-group-33-2-1.png');}","hash":"2f3be902-e16a-4d48-88ea-87f422b3f51e","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2024\/05\/Mask-group-33-2-1.png"},{"selector":"table.dataTable thead .sorting","style":"table.dataTable thead .sorting{--wpr-bg-3714aada-7672-407c-8f0e-f8684d60bd33: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/arrow.png');}","hash":"3714aada-7672-407c-8f0e-f8684d60bd33","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/arrow.png"},{"selector":"table.dataTable thead .sorting_asc","style":"table.dataTable thead .sorting_asc{--wpr-bg-d27d3a51-f9d1-487b-b33e-61b18d316d8d: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/sort_asc.png');}","hash":"d27d3a51-f9d1-487b-b33e-61b18d316d8d","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/sort_asc.png"},{"selector":"table.dataTable thead .sorting_desc","style":"table.dataTable thead .sorting_desc{--wpr-bg-bfb2e574-a80c-4cce-891e-e100eccc3b24: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/sort_desc.png');}","hash":"bfb2e574-a80c-4cce-891e-e100eccc3b24","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/sort_desc.png"},{"selector":"table.dataTable thead .sorting_asc_disabled","style":"table.dataTable thead .sorting_asc_disabled{--wpr-bg-638136d2-fd61-4cc8-b847-e8d2e5f075f4: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/sort_asc_disabled.png');}","hash":"638136d2-fd61-4cc8-b847-e8d2e5f075f4","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementskit-lite\/widgets\/init\/assets\/img\/sort_asc_disabled.png"},{"selector":".oceanwp-instagram-bar .instagram-logo","style":".oceanwp-instagram-bar .instagram-logo{--wpr-bg-8a9ccdcb-0568-4c17-b3e3-5eb60858cd84: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/ocean-extra\/assets\/img\/instagram-logo.png');}","hash":"8a9ccdcb-0568-4c17-b3e3-5eb60858cd84","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/ocean-extra\/assets\/img\/instagram-logo.png"},{"selector":"p.flickr_stream_wrap a","style":"p.flickr_stream_wrap a{--wpr-bg-e80679b5-d757-4840-b0c7-44b34d18b638: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/ocean-extra\/assets\/img\/flickr.png');}","hash":"e80679b5-d757-4840-b0c7-44b34d18b638","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/ocean-extra\/assets\/img\/flickr.png"},{"selector":".img-scroll","style":".img-scroll{--wpr-bg-5c90e907-38bc-44c2-bdaa-25c0df957a27: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/pintags.png');}","hash":"5c90e907-38bc-44c2-bdaa-25c0df957a27","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/pintags.png"},{"selector":".css-video-block","style":".css-video-block::after{--wpr-bg-490e2a74-6a79-4500-a2c5-0518b4c83d06: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png');}","hash":"490e2a74-6a79-4500-a2c5-0518b4c83d06","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png"},{"selector":".css-video-block-odd","style":".css-video-block-odd::after{--wpr-bg-fb3a2a76-4913-4fe6-a65b-c452af26c02f: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png');}","hash":"fb3a2a76-4913-4fe6-a65b-c452af26c02f","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png"},{"selector":".css-video-block-odd","style":".css-video-block-odd::after{--wpr-bg-2ca1cd46-df9b-4f89-a913-0474068998c7: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png');}","hash":"2ca1cd46-df9b-4f89-a913-0474068998c7","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png"},{"selector":"section.css-video-block","style":"section.css-video-block::after{--wpr-bg-f208294d-2193-4a19-8503-c33eb5a1d565: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png');}","hash":"f208294d-2193-4a19-8503-c33eb5a1d565","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/04\/corner.png"},{"selector":"#outer-wrap .page-header","style":"#outer-wrap .page-header{--wpr-bg-28d54f5d-cecd-4895-bb57-481fbcd821fa: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/about-header-2.jpg');}","hash":"28d54f5d-cecd-4895-bb57-481fbcd821fa","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/about-header-2.jpg"},{"selector":".infographics-template-default #outer-wrap .page-header,.news-template-default #outer-wrap .page-header","style":".infographics-template-default #outer-wrap .page-header,.news-template-default #outer-wrap .page-header{--wpr-bg-78f02a41-e8dc-4346-96cf-1c280fbc86af: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/11\/bg-4-1-min-1.png');}","hash":"78f02a41-e8dc-4346-96cf-1c280fbc86af","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/11\/bg-4-1-min-1.png"},{"selector":"#salesforce-service-sec1","style":"#salesforce-service-sec1{--wpr-bg-a3fb695e-1298-4bc0-983e-f533e1bc7379: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/02\/bg-overlay-1.jpg');}","hash":"a3fb695e-1298-4bc0-983e-f533e1bc7379","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/02\/bg-overlay-1.jpg"},{"selector":"#salesforce-section2","style":"#salesforce-section2{--wpr-bg-9c18ce95-6a6b-40d4-8bb7-1e55bde2e0e7: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/02\/bg-overlay-2.jpg');}","hash":"9c18ce95-6a6b-40d4-8bb7-1e55bde2e0e7","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/02\/bg-overlay-2.jpg"},{"selector":".about-development-process-img1,.about-development-process-img3","style":".about-development-process-img1::after,.about-development-process-img3::after{--wpr-bg-94472318-687b-49e7-8a01-a347450b838d: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/right_arrow.png');}","hash":"94472318-687b-49e7-8a01-a347450b838d","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/right_arrow.png"},{"selector":".about-development-process-img2","style":".about-development-process-img2::before{--wpr-bg-954c2a97-35c1-47c4-90be-8838ca4a439f: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/left_arrow.png');}","hash":"954c2a97-35c1-47c4-90be-8838ca4a439f","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/01\/left_arrow.png"},{"selector":".calendly-overlay .calendly-popup-close","style":".calendly-overlay .calendly-popup-close{--wpr-bg-7052f4b1-e5b2-4619-8986-20434080d5b4: url('https:\/\/www.cloudanalogy.com\/assets\/external\/close-icon.svg');}","hash":"7052f4b1-e5b2-4619-8986-20434080d5b4","url":"https:\/\/www.cloudanalogy.com\/assets\/external\/close-icon.svg"},{"selector":".iti__flag","style":".iti__flag{--wpr-bg-8b2d0b33-14fe-4558-b406-1b075e9d7c97: url('https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/intl-tel-input\/17.0.8\/css\/..\/img\/flags.png');}","hash":"8b2d0b33-14fe-4558-b406-1b075e9d7c97","url":"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/intl-tel-input\/17.0.8\/css\/..\/img\/flags.png"},{"selector":".iti__flag","style":".iti__flag{--wpr-bg-73238e79-b594-419f-aa85-8e6731a0aca0: url('https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/intl-tel-input\/17.0.8\/css\/..\/img\/flags@2x.png');}","hash":"73238e79-b594-419f-aa85-8e6731a0aca0","url":"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/intl-tel-input\/17.0.8\/css\/..\/img\/flags@2x.png"},{"selector":".elementor-add-new-section .elementor-add-templately-promo-button","style":".elementor-add-new-section .elementor-add-templately-promo-button{--wpr-bg-84cee983-18ae-4e9d-9118-94eac7640e6c: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/essential-addons-for-elementor-lite\/assets\/admin\/images\/templately\/logo-icon.svg');}","hash":"84cee983-18ae-4e9d-9118-94eac7640e6c","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/essential-addons-for-elementor-lite\/assets\/admin\/images\/templately\/logo-icon.svg"},{"selector":".elementor-add-new-section .elementor-add-templately-promo-button","style":".elementor-add-new-section .elementor-add-templately-promo-button{--wpr-bg-94c2b453-f600-474f-9bb8-1fcd72771eb1: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/essential-addons-for-elementor-lite\/assets\/admin\/images\/templately\/logo-icon.svg');}","hash":"94c2b453-f600-474f-9bb8-1fcd72771eb1","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/essential-addons-for-elementor-lite\/assets\/admin\/images\/templately\/logo-icon.svg"},{"selector":".rll-youtube-player .play","style":".rll-youtube-player .play{--wpr-bg-ac81dfe8-6bf5-4a57-a5b8-440a71022d0a: url('https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/wp-rocket\/assets\/img\/youtube.png');}","hash":"ac81dfe8-6bf5-4a57-a5b8-440a71022d0a","url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/wp-rocket\/assets\/img\/youtube.png"},{"selector":".ev-here-time .eae-tl-item-meta","style":".ev-here-time .eae-tl-item-meta::after{--wpr-bg-f7888f02-70c3-4002-924a-c6f2350af8fa: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2023\/04\/Vector.png');}","hash":"f7888f02-70c3-4002-924a-c6f2350af8fa","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2023\/04\/Vector.png"},{"selector":".mtm-text .elementor-icon-list-item","style":".mtm-text .elementor-icon-list-item::before{--wpr-bg-723bea6c-c149-434c-bbd4-4e667bd25ff0: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/06\/Mask-group-5.png');}","hash":"723bea6c-c149-434c-bbd4-4e667bd25ff0","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/06\/Mask-group-5.png"},{"selector":"#popmake-21501, #popmake-22884","style":"#popmake-21501, #popmake-22884{--wpr-bg-b8119a02-444c-4cd1-82c3-0d8e1048f943: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/popnew12.png');}","hash":"b8119a02-444c-4cd1-82c3-0d8e1048f943","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/popnew12.png"},{"selector":".nca-news-carousel .wppsac-post-carousel button.slick-prev","style":".nca-news-carousel .wppsac-post-carousel button.slick-prev{--wpr-bg-b8f11e60-c572-4f7f-a344-0ab48c06b84a: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/Line-1.png');}","hash":"b8f11e60-c572-4f7f-a344-0ab48c06b84a","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/Line-1.png"},{"selector":".nca-news-carousel .wppsac-post-carousel button.slick-next","style":".nca-news-carousel .wppsac-post-carousel button.slick-next{--wpr-bg-7656a5b0-f9d7-4faa-a0f3-6e50f3b0c274: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/Line-2.png');}","hash":"7656a5b0-f9d7-4faa-a0f3-6e50f3b0c274","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/Line-2.png"},{"selector":".ev-here-time .eae-tl-item-meta-inner","style":".ev-here-time .eae-tl-item-meta-inner::after{--wpr-bg-fd834c24-921b-4e77-81d7-6ffb5b9e3b57: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2023\/04\/Vector.png');}","hash":"fd834c24-921b-4e77-81d7-6ffb5b9e3b57","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2023\/04\/Vector.png"},{"selector":".popup-form1","style":".popup-form1{--wpr-bg-27d82b73-4107-41ec-85a5-7eede32646b8: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/FB-1.png');}","hash":"27d82b73-4107-41ec-85a5-7eede32646b8","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2022\/01\/FB-1.png"},{"selector":".open_popup","style":".open_popup{--wpr-bg-615a0105-9a39-4b3f-8291-cc12a74c947b: url('https:\/\/www.cloudanalogy.com\/..\/images\/checkout.png');}","hash":"615a0105-9a39-4b3f-8291-cc12a74c947b","url":"https:\/\/www.cloudanalogy.com\/..\/images\/checkout.png"},{"selector":".close_","style":".close_{--wpr-bg-1e92e4a5-6b90-465d-8f9d-cd234d746666: url('https:\/\/www.cloudanalogy.com\/..\/images\/close.png');}","hash":"1e92e4a5-6b90-465d-8f9d-cd234d746666","url":"https:\/\/www.cloudanalogy.com\/..\/images\/close.png"},{"selector":".open_popup_express","style":".open_popup_express{--wpr-bg-3f1e8251-a9d8-4394-b9b1-7960464921b9: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/08\/checkout.png');}","hash":"3f1e8251-a9d8-4394-b9b1-7960464921b9","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/08\/checkout.png"},{"selector":"#ar_button","style":"#ar_button{--wpr-bg-d45d4079-fe79-48a6-9225-943eea94cd66: url('https:\/\/www.cloudanalogy.com\/..\/images\/checkout_ar.png');}","hash":"d45d4079-fe79-48a6-9225-943eea94cd66","url":"https:\/\/www.cloudanalogy.com\/..\/images\/checkout_ar.png"},{"selector":"#en_button","style":"#en_button{--wpr-bg-3f3553b2-07bb-4074-88c2-8fe78a165e58: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/08\/checkout.png');}","hash":"3f3553b2-07bb-4074-88c2-8fe78a165e58","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2019\/08\/checkout.png"},{"selector":"#ar_agnipay_button","style":"#ar_agnipay_button{--wpr-bg-0c03a238-7778-49f9-a184-63a029c252ad: url('https:\/\/www.cloudanalogy.com\/..\/images\/buynow_ar.png');}","hash":"0c03a238-7778-49f9-a184-63a029c252ad","url":"https:\/\/www.cloudanalogy.com\/..\/images\/buynow_ar.png"},{"selector":"#en_agnipay_button","style":"#en_agnipay_button{--wpr-bg-db5af890-82b5-4ad9-a748-353d92ffdd46: url('https:\/\/www.cloudanalogy.com\/..\/images\/buynow.png');}","hash":"db5af890-82b5-4ad9-a748-353d92ffdd46","url":"https:\/\/www.cloudanalogy.com\/..\/images\/buynow.png"},{"selector":".menu_1","style":".menu_1:before{--wpr-bg-e9b10d27-3345-4ef7-a8e9-107ee739a259: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu1.svg');}","hash":"e9b10d27-3345-4ef7-a8e9-107ee739a259","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu1.svg"},{"selector":".menu_2","style":".menu_2:before{--wpr-bg-40e7f70a-17cf-4cad-ba1e-1c26090830da: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu2.svg');}","hash":"40e7f70a-17cf-4cad-ba1e-1c26090830da","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu2.svg"},{"selector":".menu_3","style":".menu_3:before{--wpr-bg-a9a299e7-48ef-4f26-8bf9-d2d0a8a47dd2: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu3.svg');}","hash":"a9a299e7-48ef-4f26-8bf9-d2d0a8a47dd2","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu3.svg"},{"selector":".menu_4","style":".menu_4:before{--wpr-bg-7011e407-040f-43e0-9196-10f1786659b3: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-4.svg');}","hash":"7011e407-040f-43e0-9196-10f1786659b3","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-4.svg"},{"selector":".menu_5","style":".menu_5:before{--wpr-bg-b673482c-0088-4056-8bf0-c4339220ea91: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-5.svg');}","hash":"b673482c-0088-4056-8bf0-c4339220ea91","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-5.svg"},{"selector":".menu_6","style":".menu_6:before{--wpr-bg-56c3b81d-9358-465d-bc88-612fcee0dfbf: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-6.svg');}","hash":"56c3b81d-9358-465d-bc88-612fcee0dfbf","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-6.svg"},{"selector":".menu_7","style":".menu_7:before{--wpr-bg-41645649-4bac-4d2c-abb4-ed8ae648921e: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-7.svg');}","hash":"41645649-4bac-4d2c-abb4-ed8ae648921e","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-7.svg"},{"selector":".menu_8","style":".menu_8:before{--wpr-bg-105e4f12-eea0-4e58-99da-860038e0966f: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-8.svg');}","hash":"105e4f12-eea0-4e58-99da-860038e0966f","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-8.svg"},{"selector":".menu_9","style":".menu_9:before{--wpr-bg-df385021-f488-4dd4-be80-725ae3c4d8f9: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-9.svg');}","hash":"df385021-f488-4dd4-be80-725ae3c4d8f9","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-9.svg"},{"selector":".menu_10","style":".menu_10:before{--wpr-bg-1a6f26d8-8a93-46c8-af76-07620f6f27c7: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-10.svg');}","hash":"1a6f26d8-8a93-46c8-af76-07620f6f27c7","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2020\/01\/menu-10.svg"}]; const rocket_excluded_pairs = [{"selector":".elementor-40228 .elementor-element.elementor-element-89c6418:not(.elementor-motion-effects-element-type-background), .elementor-40228 .elementor-element.elementor-element-89c6418 > .elementor-motion-effects-container > .elementor-motion-effects-layer","style":".elementor-40228 .elementor-element.elementor-element-89c6418:not(.elementor-motion-effects-element-type-background), .elementor-40228 .elementor-element.elementor-element-89c6418 > .elementor-motion-effects-container > .elementor-motion-effects-layer{--wpr-bg-6c47fc76-6270-4969-b28c-8149055aaa84: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2024\/06\/Group-37068-1-1.jpg');}","hash":"6c47fc76-6270-4969-b28c-8149055aaa84","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2024\/06\/Group-37068-1-1.jpg"},{"selector":".elementor-40228 .elementor-element.elementor-element-484d35d:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-40228 .elementor-element.elementor-element-484d35d > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer","style":".elementor-40228 .elementor-element.elementor-element-484d35d:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-40228 .elementor-element.elementor-element-484d35d > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{--wpr-bg-378b1656-ff4e-4087-8bbb-16a7538edf4d: url('https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2024\/06\/Group-37006.png');}","hash":"378b1656-ff4e-4087-8bbb-16a7538edf4d","url":"https:\/\/www.cloudanalogy.com\/wp-content\/uploads\/2024\/06\/Group-37006.png"}];</script></head>

<body class="page-template page-template-elementor_header_footer page page-id-40228 wp-custom-logo wp-embed-responsive oceanwp-theme sidebar-mobile content-full-width content-max-width has-breadcrumbs has-blog-grid elementor-default elementor-template-full-width elementor-kit-17094 elementor-page elementor-page-40228">
    
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5889ZB2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

	
	<div id="outer-wrap" class="site clr">

		
		<div id="wrap" class="clr">

			
			
<header id="site-header" class="minimal-header clr" data-height="74" itemscope="itemscope" itemtype="https://schema.org/WPHeader" role="banner">

	
					
			<div id="site-header-inner" class="clr container">

				
				

<div id="site-logo" class="clr has-responsive-logo" itemscope itemtype="https://schema.org/Brand" >

	
	<div id="site-logo-inner" class="clr">

		<a href="https://www.cloudanalogy.com/" class="custom-logo-link" rel="home"><img width="120" height="79" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2079'%3E%3C/svg%3E" class="custom-logo" alt="Cloud Analogy" decoding="async" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2020/07/cropped-cropped-CA_logo-120-x-80_80fa8a97375e87977bca0ff88f5c6e9a.png" /><noscript><img width="120" height="79" src="https://www.cloudanalogy.com/wp-content/uploads/2020/07/cropped-cropped-CA_logo-120-x-80_80fa8a97375e87977bca0ff88f5c6e9a.png" class="custom-logo" alt="Cloud Analogy" decoding="async" /></noscript></a><a href="https://www.cloudanalogy.com/" class="responsive-logo-link" rel="home"><img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E" class="responsive-logo" width="" height="" alt="" data-lazy-src="https://cloudanalogy.com/wp-content/uploads/2020/11/logo-ca-mobile@2x.png" /><noscript><img src="https://cloudanalogy.com/wp-content/uploads/2020/11/logo-ca-mobile@2x.png" class="responsive-logo" width="" height="" alt="" /></noscript></a>
	</div><!-- #site-logo-inner -->

	
	
</div><!-- #site-logo -->

			<div id="site-navigation-wrap" class="clr">
			
			
			
			<nav id="site-navigation" class="navigation main-navigation clr" itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement" role="navigation" >

				<ul id="menu-first_menu" class="main-menu dropdown-menu sf-menu"><li id="menu-item-12968" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12968"><a href="https://cloudanalogy.com/" class="menu-link"><span class="text-wrap">Home</span></a></li><li id="menu-item-3519" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3519 nav-no-click"><a href="#" class="menu-link"><span class="text-wrap">Company<i class="nav-arrow fa fa-angle-down" aria-hidden="true" role="img"></i></span></a>
<ul class="sub-menu">
	<li id="menu-item-15898" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15898"><a href="https://www.cloudanalogy.com/team/" class="menu-link"><span class="text-wrap">Our Team</span></a></li>	<li id="menu-item-10234" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10234"><a href="https://www.cloudanalogy.com/customer-success-stories/" class="menu-link"><span class="text-wrap">Customer Success Stories</span></a></li>	<li id="menu-item-11928" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11928"><a href="https://www.cloudanalogy.com/awards/" class="menu-link"><span class="text-wrap">Awards</span></a></li>	<li id="menu-item-12950" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12950"><a href="https://www.cloudanalogy.com/about-us-2/" class="menu-link"><span class="text-wrap">About Us</span></a></li></ul>
</li><li id="menu-item-3520" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3520 megamenu-li full-mega"><a class="menu-link"><span class="text-wrap">Services<i class="nav-arrow fa fa-angle-down" aria-hidden="true" role="img"></i></span></a>
<ul class="megamenu col-5 sub-menu">
	<li id="menu-item-3521" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3521 nav-no-click"><a href="#" class="menu-link"><span class="text-wrap">CRM Services<i class="nav-arrow fa fa-angle-right" aria-hidden="true" role="img"></i></span></a>
	<ul class="sub-menu">
		<li id="menu-item-10325" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10325"><a href="https://www.cloudanalogy.com/salesforce-admin-developer-support/" class="menu-link"><span class="text-wrap">Salesforce admin &#038; Developer Support</span></a></li>		<li id="menu-item-9365" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9365"><a href="https://www.cloudanalogy.com/salesforce-app-development/" class="menu-link"><span class="text-wrap">Salesforce App Development</span></a></li>		<li id="menu-item-3500" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3500"><a href="https://www.cloudanalogy.com/salesforce-consulting-services/" class="menu-link"><span class="text-wrap">Salesforce Consulting Services</span></a></li>		<li id="menu-item-3499" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3499"><a href="https://www.cloudanalogy.com/salesforce-communities-sites/" class="menu-link"><span class="text-wrap">Salesforce Communities Sites</span></a></li>		<li id="menu-item-3502" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3502"><a href="https://www.cloudanalogy.com/salesforce-data-migration/" class="menu-link"><span class="text-wrap">Salesforce Data Migration</span></a></li>		<li id="menu-item-3507" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3507"><a href="https://www.cloudanalogy.com/salesforce-lightning/" class="menu-link"><span class="text-wrap">Salesforce Lightning</span></a></li>		<li id="menu-item-3506" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3506"><a href="https://www.cloudanalogy.com/salesforce-integration/" class="menu-link"><span class="text-wrap">Salesforce Integration</span></a></li>		<li id="menu-item-3505" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3505"><a href="https://www.cloudanalogy.com/salesforce-implementation/" class="menu-link"><span class="text-wrap">Salesforce Implementation Services</span></a></li>		<li id="menu-item-3510" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3510"><a href="https://www.cloudanalogy.com/salesforce1-mobile-application/" class="menu-link"><span class="text-wrap">Salesforce1 Mobile</span></a></li>		<li id="menu-item-9827" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9827"><a href="https://www.cloudanalogy.com/appexchange-app-development/" class="menu-link"><span class="text-wrap">AppExchange App Development</span></a></li>		<li id="menu-item-10166" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10166"><a href="https://www.cloudanalogy.com/salesforce-release-management/" class="menu-link"><span class="text-wrap">Salesforce Release Management</span></a></li>	</ul>
</li>	<li id="menu-item-3522" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3522 nav-no-click"><a href="#" class="menu-link"><span class="text-wrap">Salesforce Clouds<i class="nav-arrow fa fa-angle-right" aria-hidden="true" role="img"></i></span></a>
	<ul class="sub-menu">
		<li id="menu-item-3496" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3496"><a href="https://www.cloudanalogy.com/sales-cloud/" class="menu-link"><span class="text-wrap">Sales Cloud</span></a></li>		<li id="menu-item-3511" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3511"><a href="https://www.cloudanalogy.com/salesforce-service-cloud/" class="menu-link"><span class="text-wrap">Service Cloud</span></a></li>		<li id="menu-item-3490" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3490"><a href="https://www.cloudanalogy.com/marketing-cloud/" class="menu-link"><span class="text-wrap">Marketing Cloud</span></a></li>		<li id="menu-item-3476" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3476"><a href="https://www.cloudanalogy.com/commerce-cloud/" class="menu-link"><span class="text-wrap">Commerce Cloud</span></a></li>		<li id="menu-item-3477" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3477"><a href="https://www.cloudanalogy.com/community-cloud/" class="menu-link"><span class="text-wrap">Community Cloud</span></a></li>		<li id="menu-item-14970" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14970"><a href="https://www.cloudanalogy.com/health-cloud/" class="menu-link"><span class="text-wrap">Health Cloud</span></a></li>		<li id="menu-item-15046" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15046"><a href="https://www.cloudanalogy.com/manufacturing-cloud/" class="menu-link"><span class="text-wrap">Manufacturing Cloud</span></a></li>		<li id="menu-item-15085" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15085"><a href="https://www.cloudanalogy.com/financial-services-cloud/" class="menu-link"><span class="text-wrap">Financial Services Cloud</span></a></li>		<li id="menu-item-15225" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15225"><a href="https://www.cloudanalogy.com/philanthropy-cloud/" class="menu-link"><span class="text-wrap">Philanthropy Cloud</span></a></li>		<li id="menu-item-15443" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15443"><a href="https://www.cloudanalogy.com/government-cloud/" class="menu-link"><span class="text-wrap">Government Cloud</span></a></li>		<li id="menu-item-15477" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15477"><a href="https://www.cloudanalogy.com/nonprofit-cloud/" class="menu-link"><span class="text-wrap">Nonprofit Cloud</span></a></li>		<li id="menu-item-15897" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15897"><a href="https://www.cloudanalogy.com/sustainability-cloud/" class="menu-link"><span class="text-wrap">Sustainability Cloud</span></a></li>		<li id="menu-item-16028" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16028"><a href="https://www.cloudanalogy.com/education-cloud/" class="menu-link"><span class="text-wrap">Education Cloud</span></a></li>	</ul>
</li>	<li id="menu-item-3523" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-3523 nav-no-click"><a href="#" class="menu-link"><span class="text-wrap">Extended Services<i class="nav-arrow fa fa-angle-right" aria-hidden="true" role="img"></i></span></a>
	<ul class="sub-menu">
		<li id="menu-item-3508" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3508"><a href="https://www.cloudanalogy.com/salesforce-pardot/" class="menu-link"><span class="text-wrap">Salesforce Pardot</span></a></li>		<li id="menu-item-3501" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3501"><a href="https://www.cloudanalogy.com/salesforce-cpq/" class="menu-link"><span class="text-wrap">Salesforce CPQ</span></a></li>		<li id="menu-item-11654" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11654"><a href="https://www.cloudanalogy.com/salesforce-einstein-development/" class="menu-link"><span class="text-wrap">Salesforce Einstein Development</span></a></li>		<li id="menu-item-14114" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-14114"><a href="https://www.cloudanalogy.com/zoho-crm-consultancy-services/" class="menu-link"><span class="text-wrap">Zoho CRM Consultancy Services</span></a></li>		<li id="menu-item-15160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15160"><a href="https://www.cloudanalogy.com/zendesk-crm-services/" class="menu-link"><span class="text-wrap">Zendesk CRM Services</span></a></li>		<li id="menu-item-15378" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15378"><a href="https://www.cloudanalogy.com/salesforce-crm-use-cases-for-roles/" class="menu-link"><span class="text-wrap">Salesforce CRM Use Cases For Roles</span></a></li>		<li id="menu-item-15634" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15634"><a href="https://www.cloudanalogy.com/hubspot-crm-implementation/" class="menu-link"><span class="text-wrap">HubSpot CRM Implementation</span></a></li>		<li id="menu-item-24000" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-24000"><a href="https://www.cloudanalogy.com/software-testing/" class="menu-link"><span class="text-wrap">software testing</span></a></li>	</ul>
</li>	<li id="menu-item-8825" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-8825 nav-no-click"><a href="#" class="menu-link"><span class="text-wrap">Web Development<i class="nav-arrow fa fa-angle-right" aria-hidden="true" role="img"></i></span></a>
	<ul class="sub-menu">
		<li id="menu-item-3518" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3518"><a href="https://www.cloudanalogy.com/wordpress-development/" class="menu-link"><span class="text-wrap">WordPress Development</span></a></li>		<li id="menu-item-3516" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3516"><a href="https://www.cloudanalogy.com/java-development/" class="menu-link"><span class="text-wrap">Java Development</span></a></li>		<li id="menu-item-3517" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3517"><a href="https://www.cloudanalogy.com/php-development/" class="menu-link"><span class="text-wrap">PHP Development</span></a></li>		<li id="menu-item-3494" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3494"><a href="https://www.cloudanalogy.com/python-development/" class="menu-link"><span class="text-wrap">Python Development</span></a></li>		<li id="menu-item-11656" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11656"><a href="https://www.cloudanalogy.com/blockchain-development/" class="menu-link"><span class="text-wrap">Blockchain Development</span></a></li>		<li id="menu-item-11655" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11655"><a href="https://www.cloudanalogy.com/mulesoft-development/" class="menu-link"><span class="text-wrap">Mulesoft Development</span></a></li>		<li id="menu-item-11653" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11653"><a href="https://www.cloudanalogy.com/dell-boomi-development/" class="menu-link"><span class="text-wrap">Dell Boomi Development</span></a></li>		<li id="menu-item-3483" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3483"><a href="https://www.cloudanalogy.com/field-service-lightning/" class="menu-link"><span class="text-wrap">Salesforce Field Service</span></a></li>		<li id="menu-item-10327" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10327"><a href="https://www.cloudanalogy.com/salesforce-dx/" class="menu-link"><span class="text-wrap">Salesforce DX</span></a></li>		<li id="menu-item-34912" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34912"><a href="https://www.cloudanalogy.com/digital-marketing-services/" class="menu-link"><span class="text-wrap">Digital Marketing Services</span></a></li>	</ul>
</li>	<li id="menu-item-9411" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-9411 nav-no-click"><a href="#" class="menu-link"><span class="text-wrap">Full Stack &#038; Mobile App<i class="nav-arrow fa fa-angle-right" aria-hidden="true" role="img"></i></span></a>
	<ul class="sub-menu">
		<li id="menu-item-9412" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9412"><a href="https://www.cloudanalogy.com/angular-js-development/" class="menu-link"><span class="text-wrap">AngularJs</span></a></li>		<li id="menu-item-9413" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9413"><a href="https://www.cloudanalogy.com/node-js-development/" class="menu-link"><span class="text-wrap">NodeJS</span></a></li>		<li id="menu-item-9414" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9414"><a href="https://www.cloudanalogy.com/react-js-development/" class="menu-link"><span class="text-wrap">ReactJS</span></a></li>		<li id="menu-item-3491" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3491"><a href="https://www.cloudanalogy.com/mobile-app-development/" class="menu-link"><span class="text-wrap">Mobile App Development</span></a></li>		<li id="menu-item-3471" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3471"><a href="https://www.cloudanalogy.com/android-app-development/" class="menu-link"><span class="text-wrap">Android app</span></a></li>		<li id="menu-item-3479" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3479"><a href="https://www.cloudanalogy.com/cross-platform-app-development/" class="menu-link"><span class="text-wrap">Cross Platform App</span></a></li>		<li id="menu-item-3489" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3489"><a href="https://www.cloudanalogy.com/ios-app-development/" class="menu-link"><span class="text-wrap">iOS App</span></a></li>		<li id="menu-item-9416" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9416"><a href="https://www.cloudanalogy.com/flutter-app-development/" class="menu-link"><span class="text-wrap">Flutter App Development</span></a></li>		<li id="menu-item-11657" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11657"><a href="https://www.cloudanalogy.com/devops-development/" class="menu-link"><span class="text-wrap">DevOps Development</span></a></li>		<li id="menu-item-35057" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35057"><a href="https://ai.cloudanalogy.com/" class="menu-link"><span class="text-wrap">Artificial Intelligence And Machine Learning</span></a></li>	</ul>
</li></ul>
</li><li id="menu-item-10435" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-10435"><a href="#" class="menu-link"><span class="text-wrap">Industries<i class="nav-arrow fa fa-angle-down" aria-hidden="true" role="img"></i></span></a>
<ul class="sub-menu">
	<li id="menu-item-3484" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3484"><a href="https://www.cloudanalogy.com/healthcare/" class="menu-link"><span class="text-wrap">Healthcare</span></a></li>	<li id="menu-item-3473" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3473"><a href="https://www.cloudanalogy.com/banking-financial-services-and-insurance/" class="menu-link"><span class="text-wrap">Banking services and insurance</span></a></li>	<li id="menu-item-3495" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3495"><a href="https://www.cloudanalogy.com/real-estate/" class="menu-link"><span class="text-wrap">Real estate</span></a></li>	<li id="menu-item-10164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10164"><a href="https://www.cloudanalogy.com/ecommerce/" class="menu-link"><span class="text-wrap">eCommerce</span></a></li>	<li id="menu-item-10165" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10165"><a href="https://www.cloudanalogy.com/education/" class="menu-link"><span class="text-wrap">Education</span></a></li></ul>
</li><li id="menu-item-35804" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-35804"><a href="https://www.cloudanalogy.com/packages/" class="menu-link"><span class="text-wrap">Packages</span></a></li><li id="menu-item-13184" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-13184"><a href="#" class="menu-link"><span class="text-wrap">Insights<i class="nav-arrow fa fa-angle-down" aria-hidden="true" role="img"></i></span></a>
<ul class="sub-menu">
	<li id="menu-item-13350" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13350"><a href="https://www.cloudanalogy.com/infographics/" class="menu-link"><span class="text-wrap">Infographics</span></a></li>	<li id="menu-item-13186" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13186"><a href="https://www.cloudanalogy.com/casestudy/" class="menu-link"><span class="text-wrap">Case Studies</span></a></li>	<li id="menu-item-13187" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13187"><a href="https://www.cloudanalogy.com/webinar/" class="menu-link"><span class="text-wrap">Webinars</span></a></li>	<li id="menu-item-13270" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13270"><a href="https://www.cloudanalogy.com/pressrelease/" class="menu-link"><span class="text-wrap">Press Release</span></a></li>	<li id="menu-item-13589" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13589"><a href="https://www.cloudanalogy.com/news/" class="menu-link"><span class="text-wrap">News</span></a></li>	<li id="menu-item-16026" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16026"><a href="https://www.cloudanalogy.com/ebooks/" class="menu-link"><span class="text-wrap">e-Book</span></a></li></ul>
</li><li id="menu-item-12649" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12649"><a href="https://blog.cloudanalogy.com" class="menu-link"><span class="text-wrap">Blog</span></a></li><li id="menu-item-31328" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-31328"><a href="#" class="menu-link"><span class="text-wrap">Events<i class="nav-arrow fa fa-angle-down" aria-hidden="true" role="img"></i></span></a>
<ul class="sub-menu">
	<li id="menu-item-34086" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-34086"><a href="https://www.cloudanalogy.com/global-event/" class="menu-link"><span class="text-wrap">Global Event</span></a></li>	<li id="menu-item-42080" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42080"><a href="https://www.cloudanalogy.com/dreamforce-2024/" class="menu-link"><span class="text-wrap">Dreamforce 2024</span></a></li></ul>
</li><li id="menu-item-13263" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-13263"><a href="https://cloudanalogy.com/contact/" class="menu-link"><span class="text-wrap">Contact Us</span></a></li><li class="search-toggle-li" ><a href="https://www.cloudanalogy.com/#" class="site-search-toggle search-dropdown-toggle"><span class="screen-reader-text">Toggle website search</span><i class=" icon-magnifier" aria-hidden="true" role="img"></i></a></li></ul>
<div id="searchform-dropdown" class="header-searchform-wrap clr" >
	
<form aria-label="Search this website" role="search" method="get" class="searchform" action="https://www.cloudanalogy.com/">	
	<input aria-label="Insert search query" type="search" id="ocean-search-form-1" class="field" autocomplete="off" placeholder="Search" name="s">
		</form>
</div><!-- #searchform-dropdown -->

			</nav><!-- #site-navigation -->

			
			
					</div><!-- #site-navigation-wrap -->
			
		
	
				
	
	<div class="oceanwp-mobile-menu-icon clr mobile-right">

		
		
		
		<a href="https://www.cloudanalogy.com/#mobile-menu-toggle" class="mobile-menu"  aria-label="Mobile Menu">
							<i class="fa fa-bars" aria-hidden="true"></i>
								<span class="oceanwp-text"> </span>
				<span class="oceanwp-close-text">Close</span>
						</a>

		
		
		
	</div><!-- #oceanwp-mobile-menu-navbar -->

	

			</div><!-- #site-header-inner -->

			
			
			
		
		
</header><!-- #site-header -->


						
			<main id="main" class="site-main clr" >

				

<header class="page-header">

	
	<div class="container clr page-header-inner">

		
			<h1 class="page-header-title clr" itemprop="headline">next level website development</h1>

			
		
		<nav role="navigation" aria-label="Breadcrumbs" class="site-breadcrumbs clr position-"><ol class="trail-items" itemscope itemtype="http://schema.org/BreadcrumbList"><meta name="numberOfItems" content="2" /><meta name="itemListOrder" content="Ascending" /><li class="trail-item trail-begin" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><a href="https://www.cloudanalogy.com" rel="home" aria-label="Home" itemprop="item"><span itemprop="name"><i class=" icon-home" aria-hidden="true" role="img"></i><span class="breadcrumb-home has-icon">Home</span></span></a><span class="breadcrumb-sep">></span><meta itemprop="position" content="1" /></li><li class="trail-item trail-end" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"><span itemprop="name"><a href="https://www.cloudanalogy.com/next-level-website-development/">next level website development</a></span><meta itemprop="position" content="2" /></li></ol></nav>
	</div><!-- .page-header-inner -->

	
	
</header><!-- .page-header -->

		<div data-elementor-type="wp-page" data-elementor-id="40228" class="elementor elementor-40228">
						<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-00dd147 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="00dd147" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-df88518" data-id="df88518" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-d803680 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d803680" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-314a406" data-id="314a406" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-ce7bde4 elementor-widget elementor-widget-image" data-id="ce7bde4" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img decoding="async" width="298" height="54" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20298%2054'%3E%3C/svg%3E" class="attachment-full size-full wp-image-37088" alt="" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/1000-width-cloud-analogy-logo-1.png" /><noscript><img decoding="async" width="298" height="54" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/1000-width-cloud-analogy-logo-1.png" class="attachment-full size-full wp-image-37088" alt="" /></noscript>													</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-879a00f" data-id="879a00f" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-dc82c5b elementor-icon-list--layout-inline elementor-tablet-align-center reb-menu elementor-hidden-mobile elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="dc82c5b" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items elementor-inline-items">
							<li class="elementor-icon-list-item elementor-inline-item">
											<a href="#wpserve">

											<span class="elementor-icon-list-text">Services</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="#wpclt">

											<span class="elementor-icon-list-text">Happy Clients</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="#wppkgs">

											<span class="elementor-icon-list-text">Packages</span>
											</a>
									</li>
								<li class="elementor-icon-list-item elementor-inline-item">
											<a href="#cmc-cts">

											<span class="elementor-icon-list-text">Contact us</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-f1701b8 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-html" data-id="f1701b8" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<nav class="lpnav">
  <div class="lphamburger-container">
    <i class="fas fa-bars"></i>
  </div>
  <ul id="lpmenu">
    <li><a href="#wpserve">Services</a></li>
    <li><a href="#wpclt">Happy Clients</a></li>
    <li><a href="#wppkgs">Packages</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</nav>

		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-90209d7" data-id="90209d7" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-0daf036 elementor-tablet-align-center elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0daf036" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="tel:+14158303899" target="_blank">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-phone-alt"></i>						</span>
										<span class="elementor-icon-list-text">+14158303899</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="mailto:infopackages@cloudanalogy.com" target="_blank">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="icon icon-envelope"></i>						</span>
										<span class="elementor-icon-list-text">infopackages@cloudanalogy.com</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-89c6418 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="89c6418" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-484d35d" data-id="484d35d" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-f6e8bcf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f6e8bcf" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-84179c7 elementor-invisible" data-id="84179c7" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-7b51077 elementor-widget elementor-widget-heading" data-id="7b51077" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Next Level WordPress Website Development Services:<br> <span style="color:#1571CC;">Making Your Website Your Strongest Marketing Tool</span></h2>		</div>
				</div>
				<div class="elementor-element elementor-element-2521273 elementor-widget elementor-widget-text-editor" data-id="2521273" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p><strong>No more battles &amp; hassles for creating WOW websites with Cloud Analogy!</strong></p>						</div>
				</div>
				<div class="elementor-element elementor-element-231b14b elementor-widget elementor-widget-text-editor" data-id="231b14b" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Our unparalleled <span style="font-weight: 500;">wordpress </span> website development services will give your brand the boost it needs with sleek designs, seamless functionality, the latest SEO techniques, and a touch of magic.</p>						</div>
				</div>
				<div class="elementor-element elementor-element-a7a6204 clnd-styt elementor-widget__width-auto elementor-widget elementor-widget-html" data-id="a7a6204" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<!-- Calendly link widget begin -->
<link data-minify="1" href="https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.css?ver=1728035238&wpr_t=1729010843" rel="stylesheet">
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.js?ver=1728035238" data-rocket-type="text/javascript" async></script>
<a id="clpWdev" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/infopackages/website-development'});return false;"><i class="fa fa-calendar clnd-imgi" aria-hidden="true"></i>Book a Free Consultation</a>
<!-- Calendly link widget end -->		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6900a5d" data-id="6900a5d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-26a33be elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="26a33be" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img fetchpriority="high" decoding="async" width="1019" height="1128" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1.jpg" class="attachment-full size-full wp-image-40239" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1.jpg 1019w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1-271x300.jpg 271w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1-925x1024.jpg 925w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/Group-37068-1-1-768x850.jpg 768w" sizes="(max-width: 1019px) 100vw, 1019px" />													</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-c5fcdf7 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="c5fcdf7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0053995" data-id="0053995" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-6ec5e95 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="6ec5e95" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2c86148" data-id="2c86148" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-4d717e1 elementor-position-top elementor-widget elementor-widget-image-box" data-id="4d717e1" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40243" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-4.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-4-75x75.png 75w" data-lazy-sizes="(max-width: 100px) 100vw, 100px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-4.png" /><noscript><img loading="lazy" decoding="async" width="100" height="100" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-4.png" class="attachment-full size-full wp-image-40243" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-4.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-4-75x75.png 75w" sizes="(max-width: 100px) 100vw, 100px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">40%</h3><p class="elementor-image-box-description"> 
Client Repeat Rate</p></div></div>		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7468582" data-id="7468582" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2daef82 elementor-position-top elementor-widget elementor-widget-image-box" data-id="2daef82" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="120" height="120" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40245" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-6.png 120w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-6-75x75.png 75w" data-lazy-sizes="(max-width: 120px) 100vw, 120px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-6.png" /><noscript><img loading="lazy" decoding="async" width="120" height="120" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-6.png" class="attachment-full size-full wp-image-40245" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-6.png 120w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-6-75x75.png 75w" sizes="(max-width: 120px) 100vw, 120px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">60% </h3><p class="elementor-image-box-description">
Client Revenue Growth via Websites</p></div></div>		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8bfba9a" data-id="8bfba9a" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-3231b12 elementor-position-top elementor-widget elementor-widget-image-box" data-id="3231b12" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="120" height="120" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40246" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-2.png 120w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-2-75x75.png 75w" data-lazy-sizes="(max-width: 120px) 100vw, 120px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-2.png" /><noscript><img loading="lazy" decoding="async" width="120" height="120" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-2.png" class="attachment-full size-full wp-image-40246" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-2.png 120w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-2-75x75.png 75w" sizes="(max-width: 120px) 100vw, 120px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">500+</h3><p class="elementor-image-box-description">
Top Brands Served</p></div></div>		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-e0e695b elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e0e695b" data-element_type="section" id="wpclt" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-48f66eb" data-id="48f66eb" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-c1d54ed elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c1d54ed" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5806f3a" data-id="5806f3a" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-f530fad elementor-widget elementor-widget-heading" data-id="f530fad" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Happy Customers Speak Out: Why They Love Our WordPress Development Services!</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-4bfd6bc zoh-re elementor-pagination-position-outside elementor-invisible elementor-widget elementor-widget-image-carousel" data-id="4bfd6bc" data-element_type="widget" data-settings="{&quot;navigation&quot;:&quot;dots&quot;,&quot;image_spacing_custom&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;image_spacing_custom_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;slides_to_show&quot;:&quot;5&quot;,&quot;autoplay_speed&quot;:3000,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;infinite&quot;:&quot;yes&quot;,&quot;speed&quot;:500,&quot;image_spacing_custom_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image-carousel.default">
				<div class="elementor-widget-container">
			            <div class="elementor-image-carousel-wrapper swiper" dir="ltr">
                <div class="elementor-image-carousel swiper-wrapper" aria-live="off">
										<div class="swiper-slide"><a data-elementor-open-lightbox="no" href="https://www.youtube.com/watch?v=mjJMkgSVSpk&list=PL-sRc4lVXrN4Ir9mMeC5f2DT4bsNU2_xn&index=17" target="_blank"><figure class="swiper-slide-inner"><img width="426" height="250" decoding="async" class="swiper-slide-image" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20426%20250'%3E%3C/svg%3E" alt="Rob-Siegmann 3 (2) (1)" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-3-2-1.png" /><noscript><img width="426" height="250" decoding="async" class="swiper-slide-image" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-3-2-1.png" alt="Rob-Siegmann 3 (2) (1)" /></noscript></figure></a></div><div class="swiper-slide"><a data-elementor-open-lightbox="no" href="https://www.youtube.com/watch?v=vKh63ySmPPo&list=PL-sRc4lVXrN4Ir9mMeC5f2DT4bsNU2_xn&index=21" target="_blank"><figure class="swiper-slide-inner"><img width="523" height="304" decoding="async" class="swiper-slide-image" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20523%20304'%3E%3C/svg%3E" alt="Rob-Siegmann 2 (2) (1)" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-2-2-1.png" /><noscript><img width="523" height="304" decoding="async" class="swiper-slide-image" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-2-2-1.png" alt="Rob-Siegmann 2 (2) (1)" /></noscript></figure></a></div><div class="swiper-slide"><a data-elementor-open-lightbox="no" href="https://www.youtube.com/watch?v=Tc876i4t3EQ&list=PL-sRc4lVXrN4Ir9mMeC5f2DT4bsNU2_xn&index=16" target="_blank"><figure class="swiper-slide-inner"><img width="632" height="365" decoding="async" class="swiper-slide-image" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20632%20365'%3E%3C/svg%3E" alt="Rob-Siegmann 1 (2) (1)" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-1-2-1.png" /><noscript><img width="632" height="365" decoding="async" class="swiper-slide-image" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-1-2-1.png" alt="Rob-Siegmann 1 (2) (1)" /></noscript></figure></a></div><div class="swiper-slide"><a data-elementor-open-lightbox="no" href="https://www.youtube.com/watch?v=enLoHGBzo9w" target="_blank"><figure class="swiper-slide-inner"><img width="426" height="250" decoding="async" class="swiper-slide-image" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20426%20250'%3E%3C/svg%3E" alt="Rob-Siegmann 4 (2) (1)" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-4-2-1.png" /><noscript><img width="426" height="250" decoding="async" class="swiper-slide-image" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-4-2-1.png" alt="Rob-Siegmann 4 (2) (1)" /></noscript></figure></a></div><div class="swiper-slide"><a data-elementor-open-lightbox="no" href="https://www.youtube.com/watch?v=Hli8j4CmGvQ" target="_blank"><figure class="swiper-slide-inner"><img width="523" height="304" decoding="async" class="swiper-slide-image" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20523%20304'%3E%3C/svg%3E" alt="Rob-Siegmann 5 (3) (1)" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-5-3-1.png" /><noscript><img width="523" height="304" decoding="async" class="swiper-slide-image" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Rob-Siegmann-5-3-1.png" alt="Rob-Siegmann 5 (3) (1)" /></noscript></figure></a></div>                </div>
									                        <div class="swiper-pagination"></div>
														            </div>
					</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-d836c4b elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="d836c4b" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b74d1da" data-id="b74d1da" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-274e9c9 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="274e9c9" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b540044" data-id="b540044" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-846a922 elementor-widget elementor-widget-heading" data-id="846a922" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Your website, Your language Empowering businesses with stunning web development solutions</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-80e76b9 elementor-widget elementor-widget-text-editor" data-id="80e76b9" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p><strong>Explore What We Can Achieve Together</strong></p>						</div>
				</div>
				<div class="elementor-element elementor-element-6cd966b elementor-widget elementor-widget-html" data-id="6cd966b" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<div class="incater-main">
<span class="incater" style="background:#fdf6ea; border:1px solid #ECA72C; color:#B27E21;">Responsive Website </span>

<span class="incater" style="background:rgba(233, 79, 55, 0.1); border:1px solid #E94F37; color:#B23D2A;">Website & Brand Identity </span>
<span class="incater" style="background:rgba(21, 113, 204, 0.1); border:1px solid #1571CC; color:#1263B2;">WordPress Website</span>
<span class="incater" style="background:rgba(163, 44, 236, 0.1); border:1px solid #A32CEC; color:#7B21B2;">CMS Web Development</span>
<span class="incater" style="background:rgba(219, 22, 152, 0.1); border:1px solid #B2127C; color:#B2127C;">Website Redesign</span>

<span class="incater" style="background:rgba(55, 233, 105, 0.1); border:1px solid #2AB250; color:#2AB250;">eCommerce Development</span>

</div>


		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-96ee7d1 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="96ee7d1" data-element_type="section" id="wppkgs" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8e42582" data-id="8e42582" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-6a9354e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6a9354e" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8074cec" data-id="8074cec" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-8bb7a4c elementor-widget elementor-widget-heading" data-id="8bb7a4c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Empowering businesses With Top-Notch WordPress Development Packages</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-51b8d2b elementor-widget elementor-widget-text-editor" data-id="51b8d2b" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p><span style="font-weight: 500;">Our packages for WordPress development offer all-inclusive solutions covering content management, security, compliance, performance optimization, and beyond, ensuring hassle-free wordpress website management.</span></p>						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-950bae9 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="950bae9" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-83cdb68 rebpkg-trans" data-id="83cdb68" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-27c8ac6 elementor-widget elementor-widget-heading" data-id="27c8ac6" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Basic Package</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-0335f50 elementor-widget elementor-widget-heading" data-id="0335f50" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">$499</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-80b47f6 revam-brp-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="80b47f6" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Tech</strong> WordPress</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-c5c0567 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="c5c0567" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-b012e0e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b012e0e" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Service Involved</strong></span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Development</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Content Writing</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Design Update</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-07de2dd elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="07de2dd" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-cc99b4f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="cc99b4f" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Featured</strong></span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- E-commerce (10-15 products)</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- No of pages - 4 to 6</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-7e7b070 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="7e7b070" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-43aa8f4 elementor-align-right elementor-widget__width-auto elementor-absolute wd-bvm elementor-widget elementor-widget-button" data-id="43aa8f4" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">View More >></span>
					</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-51802bf rebpkg-trans" data-id="51802bf" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-d4c0775 elementor-widget elementor-widget-heading" data-id="d4c0775" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Intermediate Package</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-4070378 elementor-widget elementor-widget-heading" data-id="4070378" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">$799</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-45e1b9a revam-brp-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="45e1b9a" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Tech</strong> WordPress</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-8d5e5d1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="8d5e5d1" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-e2279a5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="e2279a5" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Service Involved</strong></span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Basic Customization </span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Logo Design </span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Brand Guidelines</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-3294cf2 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="3294cf2" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-b0c64e0 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b0c64e0" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Featured</strong></span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- E-commerce (10-15 products)</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- No of pages - 4 to 6</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-696313d elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="696313d" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-b668c8d elementor-align-right elementor-widget__width-auto elementor-absolute wd-ivm elementor-widget elementor-widget-button" data-id="b668c8d" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">View More >></span>
					</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-24426c2 rebpkg-trans" data-id="24426c2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-f92c815 elementor-widget elementor-widget-heading" data-id="f92c815" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Advanced Package</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-533c1b1 elementor-widget elementor-widget-heading" data-id="533c1b1" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">$999</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-883cd84 revam-brp-list elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="883cd84" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Tech</strong> WordPress</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-8bbd04a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="8bbd04a" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-8afac11 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="8afac11" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Service Involved</strong></span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Intermediate Customization</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Custom Graphic</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- Default Plugin</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-f42de7e elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="f42de7e" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-657a303 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="657a303" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text"><strong>Featured</strong></span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- E-commerce (10-15 products)</span>
									</li>
								<li class="elementor-icon-list-item">
										<span class="elementor-icon-list-text">- No of pages - 4 to 6</span>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-66b549e elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="66b549e" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-d33127a elementor-align-right elementor-widget__width-auto elementor-absolute wd-avm elementor-widget elementor-widget-button" data-id="d33127a" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm" href="#">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">View More >></span>
					</span>
					</a>
		</div>
				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-1c4c148 elementor-section-full_width web-lang elementor-section-height-default elementor-section-height-default" data-id="1c4c148" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a9a287e" data-id="a9a287e" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-2a5e273 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2a5e273" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d90dbab" data-id="d90dbab" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-5da8ca9 clnd-sty elementor-widget__width-auto elementor-widget elementor-widget-html" data-id="5da8ca9" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<!-- Calendly link widget begin -->
<link data-minify="1" href="https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.css?ver=1728035238&wpr_t=1729010843" rel="stylesheet">
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.js?ver=1728035238" data-rocket-type="text/javascript" async></script>
<a id="clpWdev" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/infopackages/website-development'});return false;"><i class="fa fa-calendar clnd-imgi" aria-hidden="true"></i>Book a Free Consultation
</a>
<!-- Calendly link widget end -->		</div>
				</div>
				<div class="elementor-element elementor-element-5e1a795 elementor-widget elementor-widget-heading" data-id="5e1a795" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Work served by us to our Client</h2>		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-df3134f elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="df3134f" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fa03aab" data-id="fa03aab" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-583692f elementor-widget elementor-widget-image" data-id="583692f" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Brew landing page 1 (1)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzU1OTEsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0JyZXctbGFuZGluZy1wYWdlLTEtMS5wbmcifQ%3D%3D">
							<img decoding="async" width="330" height="558" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20330%20558'%3E%3C/svg%3E" class="attachment-full size-full wp-image-35591" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1-177x300.png 177w" data-lazy-sizes="(max-width: 330px) 100vw, 330px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1.png" /><noscript><img loading="lazy" decoding="async" width="330" height="558" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1.png" class="attachment-full size-full wp-image-35591" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Brew-landing-page-1-1-177x300.png 177w" sizes="(max-width: 330px) 100vw, 330px" /></noscript>								</a>
													</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c36058c" data-id="c36058c" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-6a1b8be elementor-widget elementor-widget-image" data-id="6a1b8be" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="home page design 1 (1)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzU1OTUsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2hvbWUtcGFnZS1kZXNpZ24tMS0xLnBuZyJ9">
							<img decoding="async" width="330" height="558" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20330%20558'%3E%3C/svg%3E" class="attachment-full size-full wp-image-35595" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1-177x300.png 177w" data-lazy-sizes="(max-width: 330px) 100vw, 330px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1.png" /><noscript><img loading="lazy" decoding="async" width="330" height="558" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1.png" class="attachment-full size-full wp-image-35595" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/home-page-design-1-1-177x300.png 177w" sizes="(max-width: 330px) 100vw, 330px" /></noscript>								</a>
													</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-dcb32ae" data-id="dcb32ae" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-f0c8e48 elementor-widget elementor-widget-image" data-id="f0c8e48" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Clinic 27 Home Page 1 (1)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzU1OTcsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0NsaW5pYy0yNy1Ib21lLVBhZ2UtMS0xLnBuZyJ9">
							<img decoding="async" width="331" height="558" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20331%20558'%3E%3C/svg%3E" class="attachment-full size-full wp-image-35597" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1.png 331w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1-178x300.png 178w" data-lazy-sizes="(max-width: 331px) 100vw, 331px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1.png" /><noscript><img loading="lazy" decoding="async" width="331" height="558" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1.png" class="attachment-full size-full wp-image-35597" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1.png 331w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Clinic-27-Home-Page-1-1-178x300.png 178w" sizes="(max-width: 331px) 100vw, 331px" /></noscript>								</a>
													</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-4322aed elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="4322aed" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5cff43d" data-id="5cff43d" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-1c9a520 elementor-widget elementor-widget-image" data-id="1c9a520" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Easy Settle Landing Page 1 1 (1)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzU1OTgsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0Vhc3ktU2V0dGxlLUxhbmRpbmctUGFnZS0xLTEtMS5wbmcifQ%3D%3D">
							<img decoding="async" width="330" height="558" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20330%20558'%3E%3C/svg%3E" class="attachment-full size-full wp-image-35598" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1-177x300.png 177w" data-lazy-sizes="(max-width: 330px) 100vw, 330px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1.png" /><noscript><img loading="lazy" decoding="async" width="330" height="558" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1.png" class="attachment-full size-full wp-image-35598" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Easy-Settle-Landing-Page-1-1-1-177x300.png 177w" sizes="(max-width: 330px) 100vw, 330px" /></noscript>								</a>
													</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7ed4207" data-id="7ed4207" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-1cc9f6f elementor-widget elementor-widget-image" data-id="1cc9f6f" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="Design Solution Lab - Home Page 1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzU1OTksInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0Rlc2lnbi1Tb2x1dGlvbi1MYWItSG9tZS1QYWdlLTEucG5nIn0%3D">
							<img decoding="async" width="330" height="558" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20330%20558'%3E%3C/svg%3E" class="attachment-full size-full wp-image-35599" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1-177x300.png 177w" data-lazy-sizes="(max-width: 330px) 100vw, 330px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1.png" /><noscript><img loading="lazy" decoding="async" width="330" height="558" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1.png" class="attachment-full size-full wp-image-35599" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/Design-Solution-Lab-Home-Page-1-177x300.png 177w" sizes="(max-width: 330px) 100vw, 330px" /></noscript>								</a>
													</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-eb82df1" data-id="eb82df1" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-83a458e elementor-widget elementor-widget-image" data-id="83a458e" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="More Green Solar Landing Page 1 (1)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzU2MDAsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL01vcmUtR3JlZW4tU29sYXItTGFuZGluZy1QYWdlLTEtMS5wbmcifQ%3D%3D">
							<img decoding="async" width="330" height="558" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20330%20558'%3E%3C/svg%3E" class="attachment-full size-full wp-image-35600" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1-177x300.png 177w" data-lazy-sizes="(max-width: 330px) 100vw, 330px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1.png" /><noscript><img loading="lazy" decoding="async" width="330" height="558" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1.png" class="attachment-full size-full wp-image-35600" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1.png 330w, https://www.cloudanalogy.com/wp-content/uploads/2024/03/More-Green-Solar-Landing-Page-1-1-177x300.png 177w" sizes="(max-width: 330px) 100vw, 330px" /></noscript>								</a>
													</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-c2b71f0 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="c2b71f0" data-element_type="section" id="wpserve" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-03a2712" data-id="03a2712" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-3fed85f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3fed85f" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5467dcd" data-id="5467dcd" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-d33b957 elementor-widget elementor-widget-heading" data-id="d33b957" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">What Sets Us Apart</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-63ae79c elementor-widget elementor-widget-text-editor" data-id="63ae79c" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>At Cloud Analogy, we live by the rules that every web development project is unique, and every project deserves a tailored &amp; unique approach that aligns with the client&#8217;s vision and goals.</p>						</div>
				</div>
				<div class="elementor-element elementor-element-773fb97 elementor-widget elementor-widget-text-editor" data-id="773fb97" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p><strong>Here&#8217;s how we make magic happen:</strong></p>						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-30f78b0 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="30f78b0" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-65833c6" data-id="65833c6" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-c868d13 re-brand-carousel dev-scarousel elementor-widget elementor-widget-elementskit-testimonial" data-id="c868d13" data-element_type="widget" id="reb-caro" data-widget_type="elementskit-testimonial.default">
				<div class="elementor-widget-container">
			<div class="ekit-wid-con" ><div  class="elementskit-testimonial-slider ekit_testimonial_style_6 arrow_inside " data-config="{&quot;rtl&quot;:false,&quot;arrows&quot;:true,&quot;dots&quot;:false,&quot;pauseOnHover&quot;:true,&quot;autoplay&quot;:false,&quot;speed&quot;:1000,&quot;slidesPerGroup&quot;:1,&quot;slidesPerView&quot;:3,&quot;loop&quot;:true,&quot;spaceBetween&quot;:15,&quot;breakpoints&quot;:{&quot;320&quot;:{&quot;slidesPerView&quot;:1,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;768&quot;:{&quot;slidesPerView&quot;:2,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:10},&quot;1024&quot;:{&quot;slidesPerView&quot;:3,&quot;slidesPerGroup&quot;:1,&quot;spaceBetween&quot;:15}}}">
	<div class="ekit-main-swiper swiper">
		<div class="swiper-wrapper">
							<div class="swiper-slide">
					<div class="swiper-slide-inner">
						<div class="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-three  elementor-repeater-item-9e30cbb" >
														<div class="elementskit-watermark-icon elementskit-icon-content ">
															</div>
														
															<div class="elementskit-profile-info">
																		<strong class="elementskit-author-name">Requirement Analysis</strong>
																											<span class="elementskit-author-des">We start by deeply understanding your business objectives, target audience, and unique requirements to develop a customized strategy.</span>
																	</div>
							
															<div class="elementskit-commentor-content">
																		<p><img width="453" height="334" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20453%20334'%3E%3C/svg%3E" data-lazy-src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-18-1.png" /><noscript><img width="453" height="334" decoding="async" src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-18-1.png" /></noscript></p>
								</div>
													</div>
					</div>
				</div>
							<div class="swiper-slide">
					<div class="swiper-slide-inner">
						<div class="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-three  elementor-repeater-item-6b786b0" >
														<div class="elementskit-watermark-icon elementskit-icon-content ">
															</div>
														
															<div class="elementskit-profile-info">
																		<strong class="elementskit-author-name">Design and Development</strong>
																											<span class="elementskit-author-des">Our expert team leverages the latest tools and technologies to design and develop visually stunning, user-friendly websites that resonate with your brand identity.</span>
																	</div>
							
															<div class="elementskit-commentor-content">
																		<p><img width="453" height="334" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20453%20334'%3E%3C/svg%3E" data-lazy-src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-20-1.png" /><noscript><img width="453" height="334" decoding="async" src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-20-1.png" /></noscript></p>
								</div>
													</div>
					</div>
				</div>
							<div class="swiper-slide">
					<div class="swiper-slide-inner">
						<div class="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-three  elementor-repeater-item-391125d" >
														<div class="elementskit-watermark-icon elementskit-icon-content ">
															</div>
														
															<div class="elementskit-profile-info">
																		<strong class="elementskit-author-name">Testing and Quality Assurance</strong>
																											<span class="elementskit-author-des">We conduct rigorous testing across various devices and browsers to ensure seamless functionality and optimal performance.</span>
																	</div>
							
															<div class="elementskit-commentor-content">
																		<p><img width="453" height="334" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20453%20334'%3E%3C/svg%3E" data-lazy-src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-19-1.png" /><noscript><img width="453" height="334" decoding="async" src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-19-1.png" /></noscript></p>
								</div>
													</div>
					</div>
				</div>
							<div class="swiper-slide">
					<div class="swiper-slide-inner">
						<div class="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-three  elementor-repeater-item-427048d" >
														<div class="elementskit-watermark-icon elementskit-icon-content ">
															</div>
														
															<div class="elementskit-profile-info">
																		<strong class="elementskit-author-name">Deployment and Launch</strong>
																											<span class="elementskit-author-des">Once the website is thoroughly tested and approved, we facilitate a smooth deployment process, ensuring a seamless transition to the live environment.</span>
																	</div>
							
															<div class="elementskit-commentor-content">
																		<p><img width="453" height="334" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20453%20334'%3E%3C/svg%3E" data-lazy-src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-21-1.png" /><noscript><img width="453" height="334" decoding="async" src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-21-1.png" /></noscript></p>
								</div>
													</div>
					</div>
				</div>
							<div class="swiper-slide">
					<div class="swiper-slide-inner">
						<div class="elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-three  elementor-repeater-item-31c3dbb" >
														<div class="elementskit-watermark-icon elementskit-icon-content ">
															</div>
														
															<div class="elementskit-profile-info">
																		<strong class="elementskit-author-name">Continuous Improvement</strong>
																											<span class="elementskit-author-des">Our commitment to excellence extends beyond the launch phase, as we provide ongoing support and optimization to ensure your website remains competitive and relevant in the ever-evolving digital landscape.</span>
																	</div>
							
															<div class="elementskit-commentor-content">
																		<p><img width="454" height="334" decoding="async" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20454%20334'%3E%3C/svg%3E" data-lazy-src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-22-1.png" /><noscript><img width="454" height="334" decoding="async" src="/wp-content/uploads/2024/06/diverse-people-thinking-planning-marketing-brand-concept-1-22-1.png" /></noscript></p>
								</div>
													</div>
					</div>
				</div>
					</div>

		
					<div class="swiper-navigation-button swiper-button-prev"><i class="icon icon-arrow-left"></i></div>
			<div class="swiper-navigation-button swiper-button-next"><i class="icon icon-arrow-right"></i></div>
			</div>
</div>
</div>		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-d05ad4e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="d05ad4e" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-83bfea2" data-id="83bfea2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-3ca7ecd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3ca7ecd" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-eda5b2a" data-id="eda5b2a" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-13f8894 elementor-widget elementor-widget-heading" data-id="13f8894" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Our Technology Arsenal</h2>		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-37df4cf elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="37df4cf" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4d2723b" data-id="4d2723b" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-9bdf41c elementor-widget elementor-widget-heading" data-id="9bdf41c" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Frontend</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-2370bde elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="2370bde" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-07934d7 jgal-img ota-wd gallery-spacing-custom elementor-widget elementor-widget-image-gallery" data-id="07934d7" data-element_type="widget" data-widget_type="image-gallery.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-gallery">
			<div id='gallery-1' class='gallery galleryid-40228 gallery-columns-4 gallery-size-full'><figure class='gallery-item'>
			<div class='gallery-icon portrait'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="07934d7" data-elementor-lightbox-title="Layer_1 (5)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyODUsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0xheWVyXzEtNS5wbmciLCJzbGlkZXNob3ciOiIwNzkzNGQ3In0%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-5.png'><img decoding="async" width="40" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35285" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-5.png" /><noscript><img loading="lazy" decoding="async" width="40" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-5.png" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35285" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-1-35285'>
				HTML5
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon portrait'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="07934d7" data-elementor-lightbox-title="Layer_1 (6)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyODYsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0xheWVyXzEtNi5wbmciLCJzbGlkZXNob3ciOiIwNzkzNGQ3In0%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-6.png'><img decoding="async" width="40" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35286" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-6.png" /><noscript><img loading="lazy" decoding="async" width="40" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-6.png" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35286" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-1-35286'>
				CSS3
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon landscape'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="07934d7" data-elementor-lightbox-title="image 49" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyODcsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2ltYWdlLTQ5LnBuZyIsInNsaWRlc2hvdyI6IjA3OTM0ZDcifQ%3D%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-49.png'><img decoding="async" width="56" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2056%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35287" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-49.png" /><noscript><img loading="lazy" decoding="async" width="56" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-49.png" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35287" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-1-35287'>
				Javascript
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon landscape'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="07934d7" data-elementor-lightbox-title="image 49 (1)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyODgsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2ltYWdlLTQ5LTEucG5nIiwic2xpZGVzaG93IjoiMDc5MzRkNyJ9" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-49-1.png'><img decoding="async" width="63" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2063%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35288" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-49-1.png" /><noscript><img loading="lazy" decoding="async" width="63" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-49-1.png" class="attachment-full size-full" alt="" aria-describedby="gallery-1-35288" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-1-35288'>
				React JS
				</figcaption></figure>
		</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ccd76bd" data-id="ccd76bd" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-17ce45b elementor-widget elementor-widget-heading" data-id="17ce45b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Backend</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-acf23ce elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="acf23ce" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-bd42620 jgal-img ota-wd gallery-spacing-custom elementor-widget elementor-widget-image-gallery" data-id="bd42620" data-element_type="widget" data-widget_type="image-gallery.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-gallery">
			<div id='gallery-2' class='gallery galleryid-40228 gallery-columns-3 gallery-size-full'><figure class='gallery-item'>
			<div class='gallery-icon landscape'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="bd42620" data-elementor-lightbox-title="Layer_1 (7)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyOTMsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0xheWVyXzEtNy5wbmciLCJzbGlkZXNob3ciOiJiZDQyNjIwIn0%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-7.png'><img decoding="async" width="55" height="34" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2055%2034'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-2-35293" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-7.png" /><noscript><img loading="lazy" decoding="async" width="55" height="34" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-7.png" class="attachment-full size-full" alt="" aria-describedby="gallery-2-35293" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-2-35293'>
				Node.js
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon landscape'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="bd42620" data-elementor-lightbox-title="58481791cef1014c0b5e4994 1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyOTUsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcLzU4NDgxNzkxY2VmMTAxNGMwYjVlNDk5NC0xLnBuZyIsInNsaWRlc2hvdyI6ImJkNDI2MjAifQ%3D%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/58481791cef1014c0b5e4994-1.png'><img decoding="async" width="105" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20105%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-2-35295" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/58481791cef1014c0b5e4994-1.png" /><noscript><img loading="lazy" decoding="async" width="105" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/58481791cef1014c0b5e4994-1.png" class="attachment-full size-full" alt="" aria-describedby="gallery-2-35295" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-2-35295'>
				PHP
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon portrait'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="bd42620" data-elementor-lightbox-title="pngwing 1" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUyOTgsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL3BuZ3dpbmctMS5wbmciLCJzbGlkZXNob3ciOiJiZDQyNjIwIn0%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/pngwing-1.png'><img decoding="async" width="55" height="57" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2055%2057'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-2-35298" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/pngwing-1.png" /><noscript><img loading="lazy" decoding="async" width="55" height="57" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/pngwing-1.png" class="attachment-full size-full" alt="" aria-describedby="gallery-2-35298" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-2-35298'>
				Laravel
				</figcaption></figure>
		</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-65c1494" data-id="65c1494" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-fb53e09 elementor-widget elementor-widget-heading" data-id="fb53e09" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Database</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-7020e5d elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="7020e5d" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-5e6839a jgal-img ota-wd gallery-spacing-custom elementor-widget elementor-widget-image-gallery" data-id="5e6839a" data-element_type="widget" data-widget_type="image-gallery.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-gallery">
			<div id='gallery-3' class='gallery galleryid-40228 gallery-columns-3 gallery-size-full'><figure class='gallery-item'>
			<div class='gallery-icon landscape'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="5e6839a" data-elementor-lightbox-title="Layer_1 (10)" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUzMzIsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL0xheWVyXzEtMTAucG5nIiwic2xpZGVzaG93IjoiNWU2ODM5YSJ9" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-10.png'><img decoding="async" width="55" height="29" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2055%2029'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-3-35332" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-10.png" /><noscript><img loading="lazy" decoding="async" width="55" height="29" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Layer_1-10.png" class="attachment-full size-full" alt="" aria-describedby="gallery-3-35332" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-3-35332'>
				MYSQL
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon portrait'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="5e6839a" data-elementor-lightbox-title="image 53" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUzMzMsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2ltYWdlLTUzLnBuZyIsInNsaWRlc2hvdyI6IjVlNjgzOWEifQ%3D%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-53.png'><img decoding="async" width="26" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2026%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-3-35333" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-53.png" /><noscript><img loading="lazy" decoding="async" width="26" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-53.png" class="attachment-full size-full" alt="" aria-describedby="gallery-3-35333" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-3-35333'>
				MongoDB
				</figcaption></figure><figure class='gallery-item'>
			<div class='gallery-icon portrait'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="5e6839a" data-elementor-lightbox-title="image 54" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUzMzQsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2ltYWdlLTU0LnBuZyIsInNsaWRlc2hvdyI6IjVlNjgzOWEifQ%3D%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-54.png'><img decoding="async" width="55" height="57" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2055%2057'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-3-35334" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-54.png" /><noscript><img loading="lazy" decoding="async" width="55" height="57" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-54.png" class="attachment-full size-full" alt="" aria-describedby="gallery-3-35334" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-3-35334'>
				Javascript
				</figcaption></figure>
		</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-3187e88" data-id="3187e88" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-c8d58a6 elementor-widget elementor-widget-heading" data-id="c8d58a6" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">CMS</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-d9e0624 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="d9e0624" data-element_type="widget" data-widget_type="divider.default">
				<div class="elementor-widget-container">
					<div class="elementor-divider">
			<span class="elementor-divider-separator">
						</span>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-9055cf0 jgal-img ota-wd gallery-spacing-custom elementor-widget elementor-widget-image-gallery" data-id="9055cf0" data-element_type="widget" data-widget_type="image-gallery.default">
				<div class="elementor-widget-container">
					<div class="elementor-image-gallery">
			<div id='gallery-4' class='gallery galleryid-40228 gallery-columns-1 gallery-size-full'><figure class='gallery-item'>
			<div class='gallery-icon landscape'>
				<a data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="9055cf0" data-elementor-lightbox-title="image 55" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MzUzMzUsInVybCI6Imh0dHBzOlwvXC93d3cuY2xvdWRhbmFsb2d5LmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL2ltYWdlLTU1LnBuZyIsInNsaWRlc2hvdyI6IjkwNTVjZjAifQ%3D%3D" href='https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-55.png'><img decoding="async" width="55" height="55" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2055%2055'%3E%3C/svg%3E" class="attachment-full size-full" alt="" aria-describedby="gallery-4-35335" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-55.png" /><noscript><img loading="lazy" decoding="async" width="55" height="55" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/image-55.png" class="attachment-full size-full" alt="" aria-describedby="gallery-4-35335" /></noscript></a>
			</div>
				<figcaption class='wp-caption-text gallery-caption' id='gallery-4-35335'>
				Wordpress
				</figcaption></figure>
		</div>
		</div>
				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-dfaf638 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="dfaf638" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-efbd81e" data-id="efbd81e" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-fc79ff9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="fc79ff9" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-034a262" data-id="034a262" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-b78ffe9 elementor-widget elementor-widget-heading" data-id="b78ffe9" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Why Cloud Analogy Is Your Go-To WordPress Website Development Agency
</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-345dd9a elementor-widget elementor-widget-text-editor" data-id="345dd9a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>When You Want a website that&#8217;s grand, <strong>Cloud Analogy</strong> Is The Name that&#8217;s in demand.</p>						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-56a8cbc elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="56a8cbc" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-04f779c us-evn-col us-evn-col-rz" data-id="04f779c" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-febf095 elementor-position-top elementor-position-top elementor-widget elementor-widget-image-box" data-id="febf095" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40270" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-5.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-5-75x75.png 75w" data-lazy-sizes="(max-width: 100px) 100vw, 100px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-5.png" /><noscript><img loading="lazy" decoding="async" width="100" height="100" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-5.png" class="attachment-full size-full wp-image-40270" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-5.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-93-5-75x75.png 75w" sizes="(max-width: 100px) 100vw, 100px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Proven Track Record</h3><p class="elementor-image-box-description">Exceptional results delivered across diverse industries, earning a reputation for excellence and reliability.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-a21be0b elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-html" data-id="a21be0b" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<span class="wsa-span">01</span>		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-4e84a02 us-evn-col us-evn-col-rz" data-id="4e84a02" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-d648da7 elementor-position-top elementor-position-top elementor-widget elementor-widget-image-box" data-id="d648da7" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40271" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-7.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-7-75x75.png 75w" data-lazy-sizes="(max-width: 100px) 100vw, 100px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-7.png" /><noscript><img loading="lazy" decoding="async" width="100" height="100" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-7.png" class="attachment-full size-full wp-image-40271" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-7.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-94-7-75x75.png 75w" sizes="(max-width: 100px) 100vw, 100px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Client-Centric Approach</h3><p class="elementor-image-box-description">Client satisfaction is prioritised above everything else, exceeding expectations with tailored solutions.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-f73926d elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-html" data-id="f73926d" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<span class="wsa-span">02</span>		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-84fa3f4 us-evn-col us-evn-col-rz" data-id="84fa3f4" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-fbccb11 elementor-position-top elementor-position-top elementor-widget elementor-widget-image-box" data-id="fbccb11" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40272" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-3.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-3-75x75.png 75w" data-lazy-sizes="(max-width: 100px) 100vw, 100px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-3.png" /><noscript><img loading="lazy" decoding="async" width="100" height="100" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-3.png" class="attachment-full size-full wp-image-40272" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-3.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-3-75x75.png 75w" sizes="(max-width: 100px) 100vw, 100px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Innovation and Creativity</h3><p class="elementor-image-box-description">Our team developers keep upgrading themselves with the latest tools & technologies, delivering cutting-edge solutions to outshine the competition.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-551f1a5 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-html" data-id="551f1a5" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<span class="wsa-span">03</span>		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-7e07eba us-evn-col us-evn-col-rz" data-id="7e07eba" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-7ac6fca elementor-position-top elementor-position-top elementor-widget elementor-widget-image-box" data-id="7ac6fca" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="100" height="100" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40273" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-4.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-4-75x75.png 75w" data-lazy-sizes="(max-width: 100px) 100vw, 100px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-4.png" /><noscript><img loading="lazy" decoding="async" width="100" height="100" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-4.png" class="attachment-full size-full wp-image-40273" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-4.png 100w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-4-75x75.png 75w" sizes="(max-width: 100px) 100vw, 100px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Transparency and Accountability</h3><p class="elementor-image-box-description">Commitment to transparency and accountability, keeping clients informed and promises delivered.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-5b7a1ab elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-html" data-id="5b7a1ab" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<span class="wsa-span">04</span>		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-20cb1fa us-evn-col us-evn-col-rz" data-id="20cb1fa" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-e995b19 elementor-position-top elementor-position-top elementor-widget elementor-widget-image-box" data-id="e995b19" data-element_type="widget" data-widget_type="image-box.default">
				<div class="elementor-widget-container">
			<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img decoding="async" width="94" height="94" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2094%2094'%3E%3C/svg%3E" class="attachment-full size-full wp-image-40274" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-5.png 94w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-5-75x75.png 75w" data-lazy-sizes="(max-width: 94px) 100vw, 94px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-5.png" /><noscript><img loading="lazy" decoding="async" width="94" height="94" src="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-5.png" class="attachment-full size-full wp-image-40274" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-5.png 94w, https://www.cloudanalogy.com/wp-content/uploads/2024/06/image-95-5-75x75.png 75w" sizes="(max-width: 94px) 100vw, 94px" /></noscript></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Long-Term Partnership</h3><p class="elementor-image-box-description">Every client relationship is a long-term partnership for us, providing ongoing support for sustained success.</p></div></div>		</div>
				</div>
				<div class="elementor-element elementor-element-f577b07 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-html" data-id="f577b07" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<span class="wsa-span">05</span>		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-20df860 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="20df860" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d310462" data-id="d310462" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
					<div class="elementor-background-overlay"></div>
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-54c4e74 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="54c4e74" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e5aa66c elementor-invisible" data-id="e5aa66c" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInLeft&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-b5544e0 elementor-widget elementor-widget-heading" data-id="b5544e0" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Beyond the code, we breathe life into every project with professionalism, creativity, and the utmost quality.</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-8ba7bdb elementor-widget elementor-widget-text-editor" data-id="8ba7bdb" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p><span style="font-weight: 500;">Ready to make a difference with Great WordPress Website Design?</span></p>						</div>
				</div>
				<div class="elementor-element elementor-element-d3f3659 clnd-sty elementor-widget elementor-widget-html" data-id="d3f3659" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<!-- Calendly link widget begin -->
<link data-minify="1" href="https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.css?ver=1728035238&wpr_t=1729010843" rel="stylesheet">
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.js?ver=1728035238" data-rocket-type="text/javascript" async></script>
<a id="clpWdev" href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/infopackages/website-development'});return false;"><i class="fa fa-calendar clnd-imgi" aria-hidden="true"></i>Book a Free Consultation </a>
<!-- Calendly link widget end -->		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-67e563a elementor-invisible" data-id="67e563a" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInRight&quot;}">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-7279565 elementor-widget elementor-widget-image" data-id="7279565" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img decoding="async" width="577" height="482" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20577%20482'%3E%3C/svg%3E" class="attachment-full size-full wp-image-37448" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Group-36941-1.png 577w, https://www.cloudanalogy.com/wp-content/uploads/2024/05/Group-36941-1-300x251.png 300w" data-lazy-sizes="(max-width: 577px) 100vw, 577px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Group-36941-1.png" /><noscript><img loading="lazy" decoding="async" width="577" height="482" src="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Group-36941-1.png" class="attachment-full size-full wp-image-37448" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2024/05/Group-36941-1.png 577w, https://www.cloudanalogy.com/wp-content/uploads/2024/05/Group-36941-1-300x251.png 300w" sizes="(max-width: 577px) 100vw, 577px" /></noscript>													</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-819404f elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="819404f" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f4cf8c4" data-id="f4cf8c4" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-a2f073a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a2f073a" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e782856" data-id="e782856" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-bb73c7f elementor-widget elementor-widget-text-editor" data-id="bb73c7f" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Copyright © 2015-2024 cloudanalogy.com, Inc. All rights reserved.</p>						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				</div>
		 
<style>

@keyframes fadeInUp {
from {
transform: translate3d(0,60px,0)
}

to {
transform: translate3d(0,0,0);
opacity: 1
}
}

@-webkit-keyframes fadeInUp {
from {
transform: translate3d(0,60px,0)
}

to {
transform: translate3d(0,0,0);
opacity: 1
}
}





#popup img{
animation-duration: 1.3s;
animation-fill-mode: both;
-webkit-animation-duration: 1.3s;
-webkit-animation-fill-mode: both;
opacity: 0;
animation-name: fadeInUp;
-webkit-animation-name: fadeInUp;
}

#cookie-consent{
display: none;
padding:10px;

}
#cookie-consent.show{
display: block;
}


#popup {
position: fixed;
width: 100%;
height: -webkit-fill-available;
top: 0;
left: 0;
z-index: 999999;
}


.pop-up {
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
height: 100VH;

}
#popup .content {
align-self: center;
width: 50%;
position: relative;
}
#popup img {
    animation-duration: 1.3s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1.3s;
    -webkit-animation-fill-mode: both;
    transition-delay: 8s;
    transition-delay: 8s;
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
    -webkit-box-shadow:  #646161 0px 0px 8px 3px;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:     #646161 0px 0px 8px 3px;  /* Firefox 3.5 - 3.6 */
  box-shadow:         #646161 0px 0px 8px 3px;
}
.close11{
    width: 35px;
    height: 35px;
    font-size: 16px;
    line-height: 19px;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    right: -25px !important;
    background: #98979b;
    color: #000;
    padding: 7px;
    border: 1px solid #464646;
    font-weight: 700;
    z-index: 9999;
}
#close-welcome:hover {
    cursor: pointer;
}

/ POP UP close button /


</style>

        </main><!-- #main -->

        
        
        
            
<footer id="footer" class="site-footer" itemscope="itemscope" itemtype="https://schema.org/WPFooter" role="contentinfo">

	
	<div id="footer-inner" class="clr">

		

<div id="footer-widgets" class="oceanwp-row clr">

	
	<div class="footer-widgets-inner container">

				<div data-elementor-type="wp-post" data-elementor-id="8975" class="elementor elementor-8975">
						<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-59611df9 elementor-section-stretched elementor-section-full_width  img-box-shadow footer-image-shadow elementor-section-height-default elementor-section-height-default" data-id="59611df9" data-element_type="section" id="footer-main" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-62c64439" data-id="62c64439" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-b65b4e8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b65b4e8" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-596a5b0" data-id="596a5b0" data-element_type="column">
			<div class="elementor-widget-wrap">
							</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5db4156" data-id="5db4156" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-4623f08 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-shortcode" data-id="4623f08" data-element_type="widget" data-widget_type="shortcode.default">
				<div class="elementor-widget-container">
					<div class="elementor-shortcode">
<div class="wpcf7 no-js" id="wpcf7-f14310-o1" lang="en-US" dir="ltr">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/next-level-website-development/#wpcf7-f14310-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<div style="display: none;">
<input type="hidden" name="_wpcf7" value="14310" />
<input type="hidden" name="_wpcf7_version" value="5.9.6" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f14310-o1" />
<input type="hidden" name="_wpcf7_container_post" value="0" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
<input type="hidden" name="_wpcf7_recaptcha_response" value="" />
</div>
<div class="carow">
	<div class="ca-call-9">
		<p><span class="wpcf7-form-control-wrap" data-name="tel-804"><input class="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number call_request" aria-required="true" aria-invalid="false" placeholder="Enter Phone Number" value="" type="number" name="tel-804" /></span>
		</p>
	</div>
	<div class="ca-call-3">
		<p><input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Request A Call" />
		</p>
	</div>
</div><input type='hidden' class='wpcf7-pum' value='{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}' /><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-2fadded caf-form elementor-widget elementor-widget-html" data-id="2fadded" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<!--  ----------------------------------------------------------------------  -->

<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: Please add the following <FORM> element to your page.             -->
<!--  ----------------------------------------------------------------------  -->

<form action='https://forms.zohopublic.in/bangalore/form/REQUESTACALL/formperma/g9LX8HZfl5Z3k2UTKAneSdruTyAGp1S6DpqGiZNMQzs/htmlRecords/submit' name='form' id='ft-canum' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
<input type="hidden" name="zf_referrer_name" value=""><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
<input type="hidden" name="zf_redirect_url" value="https://cloudanalogy.com/success"><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
<input type="hidden" name="zc_gad" value="">

 <div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown" checktype="c1">
<option value="-Select-">-Select-</option>
<option selected="true" value="CA">CA</option>
<option value="FB">FB</option>
<option value="PG">PG</option>
</select>
</div>
</div>

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail" mailto:value="sf@cloudanalogy.io">      -->
<!--  ----------------------------------------------------------------------  -->

<label for="phone"></label>


<input type="number" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled=false maxlength="20" value="" fieldType=11 id="international_PhoneNumber_countrycode" placeholder="Enter Phone Number" onkeydown="javascript: return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) ? true : !isNaN(Number(event.key)) && event.code!=='Space'" required /><br>

<input  type="hidden" name="SingleLine" value="Request A Call" fieldType=1 maxlength="255" placeholder="" /><br>


<button type="submit">Request A Call</button>
</form>

		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a0f9d37" data-id="a0f9d37" data-element_type="column">
			<div class="elementor-widget-wrap">
							</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-57ff1115 fnn-updt elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="57ff1115" data-element_type="section">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-185292ab" data-id="185292ab" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-2a145bbf elementor-hidden-phone elementor-widget elementor-widget-heading" data-id="2a145bbf" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">Team</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-1b8174e footer-hand-icon elementor-align-right elementor-tablet-align-right elementor-hidden-phone elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1b8174e" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.ajaydubedi.com/" target="_blank">

											<span class="elementor-icon-list-text">Ajay</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.sachinsf.com" target="_blank">

											<span class="elementor-icon-list-text">Sachin</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.stripathi.com" target="_blank">

											<span class="elementor-icon-list-text">Suraj</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-fffdf00 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile" data-id="fffdf00" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-72a7ef3 elementor-hidden-phone elementor-widget elementor-widget-heading" data-id="72a7ef3" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">Products</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-7bbdbde footer-hand-icon elementor-align-right elementor-tablet-align-right elementor-hidden-phone elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="7bbdbde" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.pintagsapp.com" target="_blank">

											<span class="elementor-icon-list-text">Pintags</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://appexchange.salesforce.com/appxListingDetail?listingId=a0N30000000q5DvEAI" target="_blank">

											<span class="elementor-icon-list-text">Drag n Drop</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://appexchange.salesforce.com/listingDetail?listingId=a0N3000000DzbXfEAJ" target="_blank">

											<span class="elementor-icon-list-text">Multiutility</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000ErGObUAN" target="_blank">

											<span class="elementor-icon-list-text">Task & Notes</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-4c776ee2" data-id="4c776ee2" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-f7bff1a elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-heading" data-id="f7bff1a" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Team</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-39129de elementor-align-right elementor-tablet-align-right elementor-mobile-align-center footer-hand-icon elementor-hidden-desktop elementor-hidden-tablet elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="39129de" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.ajaydubedi.com/" target="_blank">

											<span class="elementor-icon-list-text">Ajay</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.sachinsf.com" target="_blank">

											<span class="elementor-icon-list-text">Sachin</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.stripathi.com" target="_blank">

											<span class="elementor-icon-list-text">Suraj</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
				<div class="elementor-element elementor-element-2178c457 elementor-widget elementor-widget-image" data-id="2178c457" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://pledge1percent.org/" target="_blank">
							<img width="679" height="720" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20679%20720'%3E%3C/svg%3E" class="attachment-full size-full wp-image-14457" alt="" data-lazy-srcset="https://www.cloudanalogy.com/wp-content/uploads/2019/03/1-pledge.png 679w, https://www.cloudanalogy.com/wp-content/uploads/2019/03/1-pledge-283x300.png 283w" data-lazy-sizes="(max-width: 679px) 100vw, 679px" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2019/03/1-pledge.png" /><noscript><img width="679" height="720" src="https://www.cloudanalogy.com/wp-content/uploads/2019/03/1-pledge.png" class="attachment-full size-full wp-image-14457" alt="" srcset="https://www.cloudanalogy.com/wp-content/uploads/2019/03/1-pledge.png 679w, https://www.cloudanalogy.com/wp-content/uploads/2019/03/1-pledge-283x300.png 283w" sizes="(max-width: 679px) 100vw, 679px" /></noscript>								</a>
													</div>
				</div>
				<div class="elementor-element elementor-element-9742096 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-shortcode" data-id="9742096" data-element_type="widget" data-widget_type="shortcode.default">
				<div class="elementor-widget-container">
					<div class="elementor-shortcode">[banner_let:1]</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-57c9b182 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile" data-id="57c9b182" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-524204fb elementor-widget elementor-widget-heading" data-id="524204fb" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">Packages </h3>		</div>
				</div>
				<div class="elementor-element elementor-element-78002ac4 footer-hand-icon elementor-align-left elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="78002ac4" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.salesforcecare.com" target="_blank">

											<span class="elementor-icon-list-text">Salesforcecare</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.salesforcexpert.com" target="_blank">

											<span class="elementor-icon-list-text">Salesforcexpert</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.salesforcewise.com" target="_blank">

											<span class="elementor-icon-list-text">Salesforcewise</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://www.oursalesforcedev.com" target="_blank">

											<span class="elementor-icon-list-text">OurSalesforcedev</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-72d8108" data-id="72d8108" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-ba66d2b elementor-widget elementor-widget-heading" data-id="ba66d2b" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h3 class="elementor-heading-title elementor-size-default">Quick Links</h3>		</div>
				</div>
				<div class="elementor-element elementor-element-f7c5a87 footer-hand-icon elementor-align-left elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="f7c5a87" data-element_type="widget" data-widget_type="icon-list.default">
				<div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							<li class="elementor-icon-list-item">
											<a href="https://www.cloudanalogy.com/products/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Products</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://cloudanalogy.com/career/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Career</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/privacy-policy" target="_blank">

											<span class="elementor-icon-list-text">Privacy policy</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/refund-policy">

											<span class="elementor-icon-list-text">Refund Policy</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/terms-condition">

											<span class="elementor-icon-list-text">Terms & Conditions</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3000000CX0uTEAT">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">AppExchange</span>
											</a>
									</li>
								<li class="elementor-icon-list-item">
											<a href="/campaign-bridge/privacy-policy/">

												<span class="elementor-icon-list-icon">
							<i aria-hidden="true" class="fas fa-check"></i>						</span>
										<span class="elementor-icon-list-text">Solutions</span>
											</a>
									</li>
						</ul>
				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-5fdee66e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5fdee66e" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4dde12b9" data-id="4dde12b9" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-444d15fb elementor-widget elementor-widget-image" data-id="444d15fb" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
														<a href="https://appexchange.salesforce.com/appxConsultingListingDetail?listingId=a0N3000000CX0uTEAT">
							<img width="75" height="80" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2075%2080'%3E%3C/svg%3E" class="attachment-full size-full wp-image-13835" alt="" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2019/03/01.png" /><noscript><img width="75" height="80" src="https://www.cloudanalogy.com/wp-content/uploads/2019/03/01.png" class="attachment-full size-full wp-image-13835" alt="" /></noscript>								</a>
													</div>
				</div>
				<div class="elementor-element elementor-element-fd03638 eae-fb-animate-horizontal sft-employer elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-wts-flipbox" data-id="fd03638" data-element_type="widget" data-widget_type="wts-flipbox.default">
				<div class="elementor-widget-container">
					<div class="eae-flip-box-wrapper">
			<div class="eae-flip-box-inner" onclick="">

				<div class="eae-flip-box-front">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
											</div>
				</div>

				<div class="eae-flip-box-back">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
													<p>
								Salesforce Gold Partner							</p>
						
											</div>
				</div>

			</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-fa97662 eae-fb-animate-horizontal sft-employer elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-wts-flipbox" data-id="fa97662" data-element_type="widget" data-widget_type="wts-flipbox.default">
				<div class="elementor-widget-container">
					<div class="eae-flip-box-wrapper">
			<div class="eae-flip-box-inner" onclick="">

				<div class="eae-flip-box-front">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
											</div>
				</div>

				<div class="eae-flip-box-back">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
													<p>
								Salesforce talent alliance employer							</p>
						
											</div>
				</div>

			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-34da56fc" data-id="34da56fc" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-4efec245 elementor-widget elementor-widget-html" data-id="4efec245" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<link data-minify="1" rel="stylesheet" href="https://www.cloudanalogy.com/wp-content/cache/min/1/ajax/libs/font-awesome/6.4.2/css/brands.min.css?ver=1728035237" crossorigin="anonymous" referrerpolicy="no-referrer" />

<p class="footer-follow-main">
   
    <a href="https://www.facebook.com/cloudanalogy/" target="_blank" class="footer-follow-link">
				<i class="fa fa-facebook" aria-hidden="true"></i>
    </a>
    <a href="https://twitter.com/cloudanalogy" target="_blank" class="footer-follow-link">
				<i class="fa-brands fa-x-twitter" style="padding:9px; top:-12px; display:inline-block;"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" style="fill: white;"/></svg></i>
    </a>
   
  
    <a href="https://www.linkedin.com/company/cloudanalogy" target="_blank" class="footer-follow-link">
				<i class="fa fa-linkedin-square" aria-hidden="true"></i>
    </a>
    <a href="https://stackoverflow.com/users/946765/ajay-dubedi" target="_blank" class="footer-follow-link">
                <i class="fa fa-stack-overflow" aria-hidden="true"></i>
    </a>
    <a href="https://www.youtube.com/channel/UCf0FnuGyYNRbxJzqicyAFlA" target="_blank" class="footer-follow-link">
				<i class="fa fa-youtube-play" aria-hidden="true"></i>
    </a>
    <a href="https://in.pinterest.com/cloudanalogy0925/" target="_blank" class="footer-follow-link">
				<i class="fa fa-pinterest" aria-hidden="true"></i>
    </a>
    <a href="skype:cloud.analogy?chat" target="_blank" class="footer-follow-link">
				<i class="fa fa-skype" aria-hidden="true"></i>
    </a>
    <a href="tel:+15166651885" target="_blank" class="footer-follow-link">
				<i class="fa fa-phone-square" aria-hidden="true"></i>
    </a>
    <a href="#" onclick="Calendly.showPopupWidget('https://calendly.com/salesforceup');return false;" class="footer-follow-link">
				<i class="fa fa-calendar" aria-hidden="true"></i>
    </a>
    <a href="https://cloudanalogy.keka.com/" target="_blank" class="footer-follow-link">
				<i class="fa fa-user-circle" aria-hidden="true"></i>
    </a>
    <a href="https://www.instagram.com/cloud_analogy/?utm_medium=copy_link" target="_blank" class="footer-follow-link">
				<i class="fa fa-instagram" aria-hidden="true"></i>
    </a>
    <a class="upwork-img" href="https://www.upwork.com/o/companies/~0121701a3860ffc654/" target="_blank" rel="noopener noreferrer"><?xml version="1.0" ?><svg viewBox="0 0 56.7 56.7" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 56.7 56.7"><path d="M42.4 17.7c-5.3 0-9.3 3.5-10.9 9-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3V14.7H4.3v14.7c0 6.1 4.9 11 10.9 11s10.9-4.9 10.9-11v-2.5c1.1 2.2 2.5 4.6 4 6.7l-3.5 16.3h5.7L34.7 38c2.2 1.4 4.7 2.2 7.7 2.2 6.1 0 11.1-5 11.1-11.4 0-6.1-5-11.1-11.1-11.1zm0 16.9c-2.2 0-4.5-1-6.3-2.5l.6-2.2v-.1c.4-2.4 1.7-6.4 5.8-6.4 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.8 5.6-5.7 5.6z" fill="#ffffff" class="fill-000000"></path></svg></a>
</p>

    		</div>
				</div>
					</div>
		</div>
				<div class="has_eae_slider elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-53c6f4d3" data-id="53c6f4d3" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-9269f8f eae-fb-animate-horizontal sft-employer elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-wts-flipbox" data-id="9269f8f" data-element_type="widget" data-widget_type="wts-flipbox.default">
				<div class="elementor-widget-container">
					<div class="eae-flip-box-wrapper">
			<div class="eae-flip-box-inner" onclick="">

				<div class="eae-flip-box-front">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
											</div>
				</div>

				<div class="eae-flip-box-back">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
													<p>
								Salesforce Gold Partner							</p>
						
											</div>
				</div>

			</div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-68e786e eae-fb-animate-horizontal sft-employer elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-wts-flipbox" data-id="68e786e" data-element_type="widget" data-widget_type="wts-flipbox.default">
				<div class="elementor-widget-container">
					<div class="eae-flip-box-wrapper">
			<div class="eae-flip-box-inner" onclick="">

				<div class="eae-flip-box-front">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
											</div>
				</div>

				<div class="eae-flip-box-back">
					<div class="flipbox-content">
													<div class="icon-wrapper eae-fb-icon-view-default eae-fb-icon-shape-">
															</div>
						
						
													<p>
								Salesforce talent alliance employer							</p>
						
											</div>
				</div>

			</div>
		</div>
				</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				</div>
		
	</div><!-- .container -->

	
</div><!-- #footer-widgets -->



<div id="footer-bottom" class="clr no-footer-nav">

	
	<div id="footer-bottom-inner" class="container clr">

		
		
			<div id="copyright" class="clr" role="contentinfo">
				Copyright © 2015-2024 cloudanalogy.com, Inc. All rights reserved.			</div><!-- #copyright -->

			
	</div><!-- #footer-bottom-inner -->

	
</div><!-- #footer-bottom -->


	</div><!-- #footer-inner -->

	
</footer><!-- #footer -->
            
        
                        
    </div><!-- #wrap -->

    
</div><!-- #outer-wrap -->



<a aria-label="Scroll to the top of the page" href="#" id="scroll-top" class="scroll-top-left"><i class=" fa fa-angle-up" aria-hidden="true" role="img"></i></a>



<div id="sidr-close">
	<a href="https://www.cloudanalogy.com/#sidr-menu-close" class="toggle-sidr-close" aria-label="Close mobile menu">
		<i class="icon icon-close" aria-hidden="true"></i><span class="close-text">Close Menu</span>
	</a>
</div>

    
    

<div id="mv-grow-data" data-settings='{&quot;floatingSidebar&quot;:{&quot;stopSelector&quot;:false},&quot;general&quot;:{&quot;contentSelector&quot;:false,&quot;show_count&quot;:{&quot;content&quot;:false,&quot;sidebar&quot;:false},&quot;isTrellis&quot;:false},&quot;post&quot;:null,&quot;shareCounts&quot;:{&quot;facebook&quot;:0,&quot;pinterest&quot;:1,&quot;reddit&quot;:0,&quot;twitter&quot;:0},&quot;shouldRun&quot;:true,&quot;buttonSVG&quot;:{&quot;share&quot;:{&quot;height&quot;:32,&quot;width&quot;:26,&quot;paths&quot;:[&quot;M20.8 20.8q1.984 0 3.392 1.376t1.408 3.424q0 1.984-1.408 3.392t-3.392 1.408-3.392-1.408-1.408-3.392q0-0.192 0.032-0.448t0.032-0.384l-8.32-4.992q-1.344 1.024-2.944 1.024-1.984 0-3.392-1.408t-1.408-3.392 1.408-3.392 3.392-1.408q1.728 0 2.944 0.96l8.32-4.992q0-0.128-0.032-0.384t-0.032-0.384q0-1.984 1.408-3.392t3.392-1.408 3.392 1.376 1.408 3.424q0 1.984-1.408 3.392t-3.392 1.408q-1.664 0-2.88-1.024l-8.384 4.992q0.064 0.256 0.064 0.832 0 0.512-0.064 0.768l8.384 4.992q1.152-0.96 2.88-0.96z&quot;]},&quot;facebook&quot;:{&quot;height&quot;:32,&quot;width&quot;:18,&quot;paths&quot;:[&quot;M17.12 0.224v4.704h-2.784q-1.536 0-2.080 0.64t-0.544 1.92v3.392h5.248l-0.704 5.28h-4.544v13.568h-5.472v-13.568h-4.544v-5.28h4.544v-3.904q0-3.328 1.856-5.152t4.96-1.824q2.624 0 4.064 0.224z&quot;]},&quot;twitter&quot;:{&quot;height&quot;:30,&quot;width&quot;:32,&quot;paths&quot;:[&quot;M30.3 29.7L18.5 12.4l0 0L29.2 0h-3.6l-8.7 10.1L10 0H0.6l11.1 16.1l0 0L0 29.7h3.6l9.7-11.2L21 29.7H30.3z M8.6 2.7 L25.2 27h-2.8L5.7 2.7H8.6z&quot;]},&quot;pinterest&quot;:{&quot;height&quot;:32,&quot;width&quot;:23,&quot;paths&quot;:[&quot;M0 10.656q0-1.92 0.672-3.616t1.856-2.976 2.72-2.208 3.296-1.408 3.616-0.448q2.816 0 5.248 1.184t3.936 3.456 1.504 5.12q0 1.728-0.32 3.36t-1.088 3.168-1.792 2.656-2.56 1.856-3.392 0.672q-1.216 0-2.4-0.576t-1.728-1.568q-0.16 0.704-0.48 2.016t-0.448 1.696-0.352 1.28-0.48 1.248-0.544 1.12-0.832 1.408-1.12 1.536l-0.224 0.096-0.16-0.192q-0.288-2.816-0.288-3.36 0-1.632 0.384-3.68t1.184-5.152 0.928-3.616q-0.576-1.152-0.576-3.008 0-1.504 0.928-2.784t2.368-1.312q1.088 0 1.696 0.736t0.608 1.824q0 1.184-0.768 3.392t-0.8 3.36q0 1.12 0.8 1.856t1.952 0.736q0.992 0 1.824-0.448t1.408-1.216 0.992-1.696 0.672-1.952 0.352-1.984 0.128-1.792q0-3.072-1.952-4.8t-5.12-1.728q-3.552 0-5.952 2.304t-2.4 5.856q0 0.8 0.224 1.536t0.48 1.152 0.48 0.832 0.224 0.544q0 0.48-0.256 1.28t-0.672 0.8q-0.032 0-0.288-0.032-0.928-0.288-1.632-0.992t-1.088-1.696-0.576-1.92-0.192-1.92z&quot;]},&quot;linkedin&quot;:{&quot;height&quot;:32,&quot;width&quot;:27,&quot;paths&quot;:[&quot;M6.24 11.168v17.696h-5.888v-17.696h5.888zM6.624 5.696q0 1.312-0.928 2.176t-2.4 0.864h-0.032q-1.472 0-2.368-0.864t-0.896-2.176 0.928-2.176 2.4-0.864 2.368 0.864 0.928 2.176zM27.424 18.72v10.144h-5.856v-9.472q0-1.888-0.736-2.944t-2.272-1.056q-1.12 0-1.856 0.608t-1.152 1.536q-0.192 0.544-0.192 1.44v9.888h-5.888q0.032-7.136 0.032-11.552t0-5.28l-0.032-0.864h5.888v2.56h-0.032q0.352-0.576 0.736-0.992t0.992-0.928 1.568-0.768 2.048-0.288q3.040 0 4.896 2.016t1.856 5.952z&quot;]},&quot;email&quot;:{&quot;height&quot;:32,&quot;width&quot;:28,&quot;paths&quot;:[&quot;M18.56 17.408l8.256 8.544h-25.248l8.288-8.448 4.32 4.064zM2.016 6.048h24.32l-12.16 11.584zM20.128 15.936l8.224-7.744v16.256zM0 24.448v-16.256l8.288 7.776z&quot;]}}}'></div><div id="pum-36385" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:36385,&quot;slug&quot;:&quot;crm-amc-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.crms-serve&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-36385" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div id="pop-glid" class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="crm-amc" class="rvm-crmamc" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="Email" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" placeholder="Company" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA CRM And AMC Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-36209" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:36209,&quot;slug&quot;:&quot;video-and-animation-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.vid-ani&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-36209" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div id="pop-glid" class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="ani-vform" class="rvm-vanif" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="Email" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" placeholder="Company" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Video And Animation Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35370" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35370,&quot;slug&quot;:&quot;nxt-level-website-development&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.nl-webform&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35370" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="webdev" class="rvm-course" action='https://forms.zohopublic.in/bangalore/form/WebDevelopment/formperma/ikNpVNJC-EWufY-jmYXhfu4P4eZryvQwe77PNk0pWPQ/htmlRecords/submit' name='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
<input type="hidden" name="zf_referrer_name" value=""><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input type="hidden" name="zf_redirect_url" value="https://cloudanalogy.com/success"><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input type="hidden" name="zc_gad" value=""></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input type="text" class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" fieldType=7 placeholder="Full Name" required oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input type="hidden" maxlength="255" name="Name_Last" fieldType=7 placeholder="" value="--" />
</div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input type="email" class="mat-input" maxlength="255" name="Email" value="" fieldType=9 placeholder="Email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input type="text" class="mat-input" pattern="[0-9]{1,15}" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled=false maxlength="15" value="" fieldType=11 id="international_PhoneNumber_countrycode" placeholder="Phone" required oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input  type="text" class="mat-input" name="SingleLine" value="" fieldType=1 maxlength="255" placeholder="Company" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" required oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select name="Dropdown" class="mat-input" required oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="true" value="">Country</option><option value="&Aring;land&#x20;Islands">&Aring;land Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American&#x20;Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua&#x20;and&#x20;Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore&#x20;and&#x20;Cartier&#x20;Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas&#x20;Da&#x20;India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia&#x20;and&#x20;Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet&#x20;Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British&#x20;Indian&#x20;Ocean&#x20;Territory">British Indian Ocean Territory</option><option value="British&#x20;Virgin&#x20;Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina&#x20;Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape&#x20;Verde">Cape Verde</option><option value="Caribbean&#x20;Netherlands">Caribbean Netherlands</option><option value="Cayman&#x20;Islands">Cayman Islands</option><option value="Central&#x20;African&#x20;Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas&#x20;Island">Christmas Island</option><option value="Clipperton&#x20;Island">Clipperton Island</option><option value="Cocos&#x20;&#x28;Keeling&#x29;&#x20;Islands">Cocos &#x28;Keeling&#x29; Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook&#x20;Islands">Cook Islands</option><option value="Coral&#x20;Sea&#x20;Islands">Coral Sea Islands</option><option value="Costa&#x20;Rica">Costa Rica</option><option value="Cote&#x20;D&#x27;Ivoire">Cote D&#x27;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cura&ccedil;ao">Cura&ccedil;ao</option><option value="Cyprus">Cyprus</option><option value="Czech&#x20;Republic">Czech Republic</option><option value="Democratic&#x20;Republic&#x20;of&#x20;the&#x20;Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican&#x20;Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El&#x20;Salvador">El Salvador</option><option value="Equatorial&#x20;Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa&#x20;Island">Europa Island</option><option value="Falkland&#x20;Islands&#x20;&#x28;Islas&#x20;Malvinas&#x29;">Falkland Islands &#x28;Islas Malvinas&#x29;</option><option value="Faroe&#x20;Islands">Faroe Islands</option><option value="Federated&#x20;States&#x20;of&#x20;Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French&#x20;Guiana">French Guiana</option><option value="French&#x20;Polynesia">French Polynesia</option><option value="French&#x20;Southern&#x20;and&#x20;Antarctic&#x20;Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza&#x20;Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso&#x20;Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard&#x20;Island&#x20;and&#x20;Mcdonald&#x20;Islands">Heard Island and Mcdonald Islands</option><option value="Holy&#x20;See&#x20;&#x28;Vatican&#x20;City&#x29;">Holy See &#x28;Vatican City&#x29;</option><option value="Honduras">Honduras</option><option value="Hong&#x20;Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle&#x20;of&#x20;Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan&#x20;Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan&#x20;De&#x20;Nova&#x20;Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall&#x20;Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa&#x20;Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands&#x20;Antilles">Netherlands Antilles</option><option value="New&#x20;Caledonia">New Caledonia</option><option value="New&#x20;Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk&#x20;Island">Norfolk Island</option><option value="North&#x20;Korea">North Korea</option><option value="Northern&#x20;Mariana&#x20;Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua&#x20;New&#x20;Guinea">Papua New Guinea</option><option value="Paracel&#x20;Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn&#x20;Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto&#x20;Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic&#x20;of&#x20;the&#x20;Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint&#x20;Barth&Atilde;&copy;lemy">Saint Barth&Atilde;&copy;lemy</option><option value="Saint&#x20;Helena">Saint Helena</option><option value="Saint&#x20;Kitts&#x20;and&#x20;Nevis">Saint Kitts and Nevis</option><option value="Saint&#x20;Lucia">Saint Lucia</option><option value="Saint&#x20;Martin">Saint Martin</option><option value="Saint&#x20;Pierre&#x20;and&#x20;Miquelon">Saint Pierre and Miquelon</option><option value="Saint&#x20;Vincent&#x20;and&#x20;the&#x20;Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San&#x20;Marino">San Marino</option><option value="Sao&#x20;Tome&#x20;and&#x20;Principe">Sao Tome and Principe</option><option value="Saudi&#x20;Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra&#x20;Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint&#x20;Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon&#x20;Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South&#x20;Africa">South Africa</option><option value="South&#x20;Georgia&#x20;and&#x20;the&#x20;South&#x20;Sandwich&#x20;Islands">South Georgia and the South Sandwich Islands</option><option value="South&#x20;Korea">South Korea</option><option value="South&#x20;Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly&#x20;Islands">Spratly Islands</option><option value="Sri&#x20;Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The&#x20;Bahamas">The Bahamas</option><option value="The&#x20;Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad&#x20;and&#x20;Tobago">Trinidad and Tobago</option><option value="Tromelin&#x20;Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks&#x20;and&#x20;Caicos&#x20;Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United&#x20;Arab&#x20;Emirates">United Arab Emirates</option><option value="United&#x20;Kingdom">United Kingdom</option><option value="United&#x20;States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin&#x20;Islands">Virgin Islands</option><option value="Wake&#x20;Island">Wake Island</option><option value="Wallis&#x20;and&#x20;Futuna">Wallis and Futuna</option><option value="West&#x20;Bank">West Bank</option><option value="Western&#x20;Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group">
    <select name="Dropdown1" class="mat-input" required><option selected="true" value="">Packages</option><option value="Silver&#x2f;Alpha">Silver&#x2f;Alpha</option><option value="Gold&#x2f;Beta">Gold&#x2f;Beta</option><option value="Platinum">Platinum</option></select>
</div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" name="MultiLine" maxlength="65535" placeholder="Description" required oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<p><input  type="hidden" name="SingleLine1" fieldType=1 maxlength="255" placeholder="" value="CA Next Level Web Development Page" /></p>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
<p><input id="00N5w00000SFQtX" name="SingleLine2" value="" fieldType=1 maxlength="255" type="hidden" />
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><button class="btn sub-btn" type="submit">Submit</button>
</div>
</div>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35869" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35869,&quot;slug&quot;:&quot;zoho-crm-zoho-form-zoho-writer-zoho-books-package-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.zcrmwriter-select&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35869" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="zohopkg" class="rvm-zoho-writer" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" placeholder="Email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" placeholder="Company" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="-Select-">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input nevn-pkg" name="Dropdown1" required=""><option value="-Select-">-Select-</option><option selected="selected" value="Zoho CRM + ZOHO FORM + ZOHO WRITER + ZOHO BOOKS">Zoho CRM + ZOHO FORM + ZOHO WRITER + ZOHO BOOKS</option></select></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Zoho Package Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35865" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35865,&quot;slug&quot;:&quot;zoho-crm-zoho-people-recruit-package-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.zcrmpeople-select&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35865" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="zohopkg" class="rvm-zoho-people" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="Email" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" placeholder="Company" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="-Select-">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input nevn-pkg" name="Dropdown1" required=""><option value="-Select-">-Select-</option><option selected="selected" value="Zoho CRM + ZOHO People/Recruit">Zoho CRM + ZOHO People/Recruit</option></select></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('');" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Zoho Package Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35861" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35861,&quot;slug&quot;:&quot;zoho-crmzoho-desk-package-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.zcrmdesk-select&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35861" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="zohopkg" class="rvm-zoho-desk" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="Email" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" placeholder="Company" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input nevn-pkg" name="Dropdown1" required=""><option value="-Select-">-Select-</option><option selected="selected" value="ZOHO CRM + ZOHO DESK">ZOHO CRM + ZOHO DESK</option></select></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('');" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Zoho Package Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35857" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35857,&quot;slug&quot;:&quot;zoho-fsm-package-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.zfsm-select&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35857" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="zohopkg" class="rvm-zoho-fsm" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" placeholder="Email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" placeholder="Company" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input nevn-pkg" name="Dropdown1" required=""><option value="-Select-">-Select-</option><option selected="selected" value="ZOHO FSM">ZOHO FSM</option></select></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Zoho Package Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35851" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35851,&quot;slug&quot;:&quot;zoho-crm-package-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.zcrm-select&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35851" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="zohopkg" class="rvm-zoho-pkg" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" placeholder="Email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" placeholder="Company" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input nevn-pkg" name="Dropdown1" required=""><option value="-Select-">-Select-</option><option selected="selected" value="Zoho CRM">Zoho CRM</option></select></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group"><select class="zf-form-sBox" name="Dropdown2"><option value="-Select-">-Select-</option><option selected="selected" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select></div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Zoho Package Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35512" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35512,&quot;slug&quot;:&quot;zoho-package-popup&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.zpackage&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;small&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35512" class="pum-container popmake theme-21493 pum-responsive pum-responsive-small responsive size-small">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="crb-form">
<div class="pos-rel newsf-page">
<p><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="zohopkg" class="rvm-zoho" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/BookAMeeting/formperma/5lo3bRnvw0-wwk4L4YYB1cO4SxWQTFRAHQznHbe5cFY/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6 ssmd1">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Full Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/><br />
<input maxlength="255" name="Name_Last" type="hidden" value="--" /></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" type="email" value="" placeholder="Email" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd1">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-6 ssmd2">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine1" required="" type="text" value="" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" placeholder="Company" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></div>
</div>
<div class="col-md-12">
<div class="group"><select class="mat-input" name="Dropdown" required="" oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')"><option selected="selected" value="">Country</option><option value="Åland Islands">Åland Islands</option><option value="Afghanistan">Afghanistan</option><option value="Akrotiri">Akrotiri</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Ashmore and Cartier Islands">Ashmore and Cartier Islands</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Bassas Da India">Bassas Da India</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burma">Burma</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Caribbean Netherlands">Caribbean Netherlands</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Clipperton Island">Clipperton Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Cook Islands">Cook Islands</option><option value="Coral Sea Islands">Coral Sea Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire">Cote D&#8217;Ivoire</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Curaçao">Curaçao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option><option value="Denmark">Denmark</option><option value="Dhekelia">Dhekelia</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Europa Island">Europa Island</option><option value="Falkland Islands (Islas Malvinas)">Falkland Islands (Islas Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Federated States of Micronesia">Federated States of Micronesia</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern and Antarctic Lands">French Southern and Antarctic Lands</option><option value="Gabon">Gabon</option><option value="Gaza Strip">Gaza Strip</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Glorioso Islands">Glorioso Islands</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-bissau">Guinea-bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option><option value="Holy See (Vatican City)">Holy See (Vatican City)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Jan Mayen">Jan Mayen</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Juan De Nova Island">Juan De Nova Island</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kosovo">Kosovo</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Laos">Laos</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libya">Libya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Navassa Island">Navassa Island</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestine">Palestine</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paracel Islands">Paracel Islands</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Islands">Pitcairn Islands</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Republic of the Congo">Republic of the Congo</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russia">Russia</option><option value="Rwanda">Rwanda</option><option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option><option value="Saint Helena">Saint Helena</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint Lucia">Saint Lucia</option><option value="Saint Martin">Saint Martin</option><option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten">Sint Maarten</option><option value="Slovakia">Slovakia</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain">Spain</option><option value="Spratly Islands">Spratly Islands</option><option value="Sri Lanka">Sri Lanka</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syria">Syria</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="The Bahamas">The Bahamas</option><option value="The Gambia">The Gambia</option><option value="Timor-leste">Timor-leste</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tromelin Island">Tromelin Island</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Virgin Islands">Virgin Islands</option><option value="Wake Island">Wake Island</option><option value="Wallis and Futuna">Wallis and Futuna</option><option value="West Bank">West Bank</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select></div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Description" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></div>
</div>
<div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1"><option value="-Select-">-Select-</option><option selected="true" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><input class="btn sub-btn" name="Submit" type="submit" /></div>
</div>
<p><input maxlength="255" name="SingleLine" type="hidden" value="CA Zoho Package Page" placeholder="" /></p>
</div>
</form>
</div>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-22884" class="pum pum-overlay pum-theme-21492 pum-theme-default-theme popmake-overlay click_open" data-popmake="{&quot;id&quot;:22884,&quot;slug&quot;:&quot;sap-popup&quot;,&quot;theme_id&quot;:21492,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.git-sap-popup&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;medium&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;fas fa-times&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-22884" class="pum-container popmake theme-21492 pum-responsive pum-responsive-medium responsive size-medium">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<div class="pos-rel"><script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script></p>
<form id="sf-test" class="rvm-course-sap" accept-charset="UTF-8" action="https://forms.zohopublic.in/bangalore/form/ContactUsNow/formperma/pwLossZ2M8_oUrnKp5HR27TDaCvo83Np6lWJPowRO5k/htmlRecords/submit" enctype="multipart/form-data" method="POST" name="form"><input name="zf_referrer_name" type="hidden" value="" /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field --><br />
<input name="zf_redirect_url" type="hidden" value="https://cloudanalogy.com/success/" /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field --><br />
<input name="zc_gad" type="hidden" value="" /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM --></p>
<div class="row">
<div class="col-md-6">
<div class="group"><input class="mat-input" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" required="" type="text" placeholder="Name" oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/></p>
<p><label></label></div>
<p><input maxlength="255" name="Name_Last" type="hidden" value="--" placeholder="" /></p>
</div>
<div class="col-md-6">
<div class="group"><input class="mat-input" maxlength="255" name="Email" required="" type="email" value="" placeholder="Email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/></p>
<p><label></label></div>
</div>
<div class="col-md-6">
<div class="group"><input id="international_PhoneNumber_countrycode" class="mat-input" maxlength="15" name="PhoneNumber_countrycode" pattern="[0-9]{1,15}" required="" type="text" value="" placeholder="Phone" oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/></p>
<p><label></label></div>
</div>
<div class="col-md-6">
<div class="group"><input class="mat-input" maxlength="255" name="SingleLine" required="" type="text" value="" placeholder="Company" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/></p>
<p><label></label></div>
</div>
<div class="col-md-12">
<div class="group textare_bar"><textarea class="cus-textarea mat-input" maxlength="65535" name="MultiLine" required="" placeholder="Message" oninput="this.setCustomValidity('')" title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea></p>
<p><label></label></div>
<div class="col-md-12 pjt-for">
<div class="group"><select class="zf-form-sBox" name="Dropdown"><option value="-Select-">-Select-</option><option selected="selected" value="CA">CA</option><option value="FB">FB</option><option value="PG">PG</option></select></div>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
<div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
<p id="captcha_errorinn" style="color: red;">
</div>
</div>
<p><input maxlength="255" name="SingleLine2" type="hidden" value="" placeholder="" /><br />
<input maxlength="255" name="SingleLine1" type="hidden" value="Software Testing Page" placeholder="" /></p>
<div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><button class="btn sub-btn" type="submit">Submit</button></div>
</div>
</div>
</form>
</div>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			<i class="fas fa-times"></i>			</button>
		
	</div>

</div>
<div id="pum-35635" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35635,&quot;slug&quot;:&quot;web-dev-advanced-view-more&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;extra_selectors&quot;:&quot;.wd-avm&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;medium&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35635" class="pum-container popmake theme-21493 pum-responsive pum-responsive-medium responsive size-medium">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<p><img decoding="async" class="img-fluid" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%200'%3E%3C/svg%3E" alt="" width="100%" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Platinum-Package.jpg" /><noscript><img decoding="async" class="img-fluid" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Platinum-Package.jpg" alt="" width="100%" /></noscript></p>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35631" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35631,&quot;slug&quot;:&quot;web-dev-interm-view-more&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;extra_selectors&quot;:&quot;.wd-ivm&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;medium&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35631" class="pum-container popmake theme-21493 pum-responsive pum-responsive-medium responsive size-medium">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<p><img decoding="async" class="img-fluid" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%200'%3E%3C/svg%3E" alt="" width="100%" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Gold-Package.jpg" /><noscript><img decoding="async" class="img-fluid" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Gold-Package.jpg" alt="" width="100%" /></noscript></p>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-35625" class="pum pum-overlay pum-theme-21493 pum-theme-lightbox popmake-overlay click_open" data-popmake="{&quot;id&quot;:35625,&quot;slug&quot;:&quot;web-dev-basic-view-more&quot;,&quot;theme_id&quot;:21493,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.wd-bvm&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:null,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;medium&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-35625" class="pum-container popmake theme-21493 pum-responsive pum-responsive-medium responsive size-medium">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
			<p><img decoding="async" class="img-fluid" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%200'%3E%3C/svg%3E" alt="" width="100%" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Silver-Package.jpg" /><noscript><img decoding="async" class="img-fluid" src="https://www.cloudanalogy.com/wp-content/uploads/2024/03/Silver-Package.jpg" alt="" width="100%" /></noscript></p>
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			&times;			</button>
		
	</div>

</div>
<div id="pum-21501" class="pum pum-overlay pum-theme-21492 pum-theme-default-theme popmake-overlay click_open" data-popmake="{&quot;id&quot;:21501,&quot;slug&quot;:&quot;new-home-popup&quot;,&quot;theme_id&quot;:21492,&quot;cookies&quot;:[],&quot;triggers&quot;:[{&quot;type&quot;:&quot;click_open&quot;,&quot;settings&quot;:{&quot;cookie_name&quot;:&quot;&quot;,&quot;extra_selectors&quot;:&quot;.git-popup&quot;}}],&quot;mobile_disabled&quot;:null,&quot;tablet_disabled&quot;:true,&quot;meta&quot;:{&quot;display&quot;:{&quot;stackable&quot;:false,&quot;overlay_disabled&quot;:false,&quot;scrollable_content&quot;:false,&quot;disable_reposition&quot;:false,&quot;size&quot;:&quot;medium&quot;,&quot;responsive_min_width&quot;:&quot;0%&quot;,&quot;responsive_min_width_unit&quot;:false,&quot;responsive_max_width&quot;:&quot;100%&quot;,&quot;responsive_max_width_unit&quot;:false,&quot;custom_width&quot;:&quot;640px&quot;,&quot;custom_width_unit&quot;:false,&quot;custom_height&quot;:&quot;380px&quot;,&quot;custom_height_unit&quot;:false,&quot;custom_height_auto&quot;:false,&quot;location&quot;:&quot;center&quot;,&quot;position_from_trigger&quot;:false,&quot;position_top&quot;:&quot;100&quot;,&quot;position_left&quot;:&quot;0&quot;,&quot;position_bottom&quot;:&quot;0&quot;,&quot;position_right&quot;:&quot;0&quot;,&quot;position_fixed&quot;:false,&quot;animation_type&quot;:&quot;fade&quot;,&quot;animation_speed&quot;:&quot;350&quot;,&quot;animation_origin&quot;:&quot;center top&quot;,&quot;overlay_zindex&quot;:false,&quot;zindex&quot;:&quot;1999999999&quot;},&quot;close&quot;:{&quot;text&quot;:&quot;fas fa-times&quot;,&quot;button_delay&quot;:&quot;0&quot;,&quot;overlay_click&quot;:false,&quot;esc_press&quot;:false,&quot;f4_press&quot;:false},&quot;click_open&quot;:[]}}" role="dialog" aria-modal="false"
								   >

	<div id="popmake-21501" class="pum-container popmake theme-21492 pum-responsive pum-responsive-medium responsive size-medium">

				

				

		

				<div class="pum-content popmake-content" tabindex="0">
					<div data-elementor-type="wp-post" data-elementor-id="33567" class="elementor elementor-33567">
						<section class="has_eae_slider elementor-section elementor-top-section elementor-element elementor-element-6610bfa elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="6610bfa" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
						<div class="elementor-container elementor-column-gap-no">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c88a4b" data-id="4c88a4b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<section class="has_eae_slider elementor-section elementor-inner-section elementor-element elementor-element-465e86a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="465e86a" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="has_eae_slider elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b7325ab pos-rel" data-id="b7325ab" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-ac6898b elementor-widget elementor-widget-html" data-id="ac6898b" data-element_type="widget" data-widget_type="html.default">
				<div class="elementor-widget-container">
			<div class="pos-rel">
    <script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js"></script>
        <form action='https://forms.zohopublic.in/bangalore/form/NewDropUsAMessage/formperma/IDha9lHwWEv2ZPTVxvRMZVySNlWBJh6qpL6o4p9Rq1w/htmlRecords/submit' name='form' class="rvm-course-drop" id='hm-drop' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
<input type="hidden" name="zf_referrer_name" value=""><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
<input type="hidden" name="zf_redirect_url" value="https://cloudanalogy.com/success/"><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
<input type="hidden" name="zc_gad" value=""><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->

        <div class="row">
            <div class="col-md-6">
                <div class="group">
                    <input type="text" maxlength="255" name="Name_First" pattern="^(?=.*[a-zA-Z])[a-zA-Z\s]+$" fieldType=7 placeholder="" class="mat-input" required oninvalid="this.setCustomValidity('Please Enter your name')" title="Please Enter Alphabets Only" oninput="this.setCustomValidity('')"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                </div>
                <input type="hidden" maxlength="255" name="Name_Last" value="--" fieldType=7 placeholder="" />
            </div>
            <div class="col-md-6">
                <div class="group">
                    <input type="email" maxlength="255" name="Email" value="" fieldType=9 placeholder="" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" class="mat-input" required oninvalid="this.setCustomValidity('Please Enter Valid Email ID')" title="Please Enter Valid Email ID" oninput="this.setCustomValidity('')"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                </div>
            </div>

            <div class="col-md-6">
                <div class="group">
                     <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled=false  maxlength="15"  pattern="[0-9]{1,15}" value="" fieldType=11 id="international_PhoneNumber_countrycode" placeholder="" class="mat-input" required oninvalid="this.setCustomValidity('Please Enter Valid Phone Number')" title="Please Enter Valid Phone Number" oninput="this.setCustomValidity('')"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Phone</label>
                </div>
            </div>
            <div class="col-md-6">
                <div class="group">
                    <input  type="text" name="SingleLine" value="" fieldType=1 maxlength="255" placeholder="" class="mat-input" pattern="^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]+$" required oninvalid="this.setCustomValidity('Please Enter Company Name')" title="Please Enter Company Name" oninput="this.setCustomValidity('')"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Company</label>
                </div>
            </div>
            <div class="col-md-12">
                <div class="group">
                    <select name="Dropdown" class="mat-input" required oninvalid="this.setCustomValidity('Please Select The Country')" title="Please Select The Country" oninput="this.setCustomValidity('')">
<option value=""></option>
<option value="&Aring;land&#x20;Islands">&Aring;land Islands</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Akrotiri">Akrotiri</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American&#x20;Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antarctica">Antarctica</option>
<option value="Antigua&#x20;and&#x20;Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Ashmore&#x20;and&#x20;Cartier&#x20;Islands">Ashmore and Cartier Islands</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Bassas&#x20;Da&#x20;India">Bassas Da India</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia&#x20;and&#x20;Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet&#x20;Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British&#x20;Indian&#x20;Ocean&#x20;Territory">British Indian Ocean Territory</option>
<option value="British&#x20;Virgin&#x20;Islands">British Virgin Islands</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina&#x20;Faso">Burkina Faso</option>
<option value="Burma">Burma</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape&#x20;Verde">Cape Verde</option>
<option value="Caribbean&#x20;Netherlands">Caribbean Netherlands</option>
<option value="Cayman&#x20;Islands">Cayman Islands</option>
<option value="Central&#x20;African&#x20;Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas&#x20;Island">Christmas Island</option>
<option value="Clipperton&#x20;Island">Clipperton Island</option>
<option value="Cocos&#x20;&#x28;Keeling&#x29;&#x20;Islands">Cocos &#x28;Keeling&#x29; Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Cook&#x20;Islands">Cook Islands</option>
<option value="Coral&#x20;Sea&#x20;Islands">Coral Sea Islands</option>
<option value="Costa&#x20;Rica">Costa Rica</option>
<option value="Cote&#x20;D&#x27;Ivoire">Cote D&#x27;Ivoire</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cura&ccedil;ao">Cura&ccedil;ao</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech&#x20;Republic">Czech Republic</option>
<option value="Democratic&#x20;Republic&#x20;of&#x20;the&#x20;Congo">Democratic Republic of the Congo</option>
<option value="Denmark">Denmark</option>
<option value="Dhekelia">Dhekelia</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican&#x20;Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El&#x20;Salvador">El Salvador</option>
<option value="Equatorial&#x20;Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Europa&#x20;Island">Europa Island</option>
<option value="Falkland&#x20;Islands&#x20;&#x28;Islas&#x20;Malvinas&#x29;">Falkland Islands &#x28;Islas Malvinas&#x29;</option>
<option value="Faroe&#x20;Islands">Faroe Islands</option>
<option value="Federated&#x20;States&#x20;of&#x20;Micronesia">Federated States of Micronesia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="French&#x20;Guiana">French Guiana</option>
<option value="French&#x20;Polynesia">French Polynesia</option>
<option value="French&#x20;Southern&#x20;and&#x20;Antarctic&#x20;Lands">French Southern and Antarctic Lands</option>
<option value="Gabon">Gabon</option>
<option value="Gaza&#x20;Strip">Gaza Strip</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Glorioso&#x20;Islands">Glorioso Islands</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guernsey">Guernsey</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-bissau">Guinea-bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard&#x20;Island&#x20;and&#x20;Mcdonald&#x20;Islands">Heard Island and Mcdonald Islands</option>
<option value="Holy&#x20;See&#x20;&#x28;Vatican&#x20;City&#x29;">Holy See &#x28;Vatican City&#x29;</option>
<option value="Honduras">Honduras</option>
<option value="Hong&#x20;Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Isle&#x20;of&#x20;Man">Isle of Man</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Jan&#x20;Mayen">Jan Mayen</option>
<option value="Japan">Japan</option>
<option value="Jersey">Jersey</option>
<option value="Jordan">Jordan</option>
<option value="Juan&#x20;De&#x20;Nova&#x20;Island">Juan De Nova Island</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Kosovo">Kosovo</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall&#x20;Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Navassa&#x20;Island">Navassa Island</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands&#x20;Antilles">Netherlands Antilles</option>
<option value="New&#x20;Caledonia">New Caledonia</option>
<option value="New&#x20;Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk&#x20;Island">Norfolk Island</option>
<option value="North&#x20;Korea">North Korea</option>
<option value="Northern&#x20;Mariana&#x20;Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Palestine">Palestine</option>
<option value="Panama">Panama</option>
<option value="Papua&#x20;New&#x20;Guinea">Papua New Guinea</option>
<option value="Paracel&#x20;Islands">Paracel Islands</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn&#x20;Islands">Pitcairn Islands</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto&#x20;Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Republic&#x20;of&#x20;the&#x20;Congo">Republic of the Congo</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint&#x20;Barth&Atilde;&copy;lemy">Saint Barth&Atilde;&copy;lemy</option>
<option value="Saint&#x20;Helena">Saint Helena</option>
<option value="Saint&#x20;Kitts&#x20;and&#x20;Nevis">Saint Kitts and Nevis</option>
<option value="Saint&#x20;Lucia">Saint Lucia</option>
<option value="Saint&#x20;Martin">Saint Martin</option>
<option value="Saint&#x20;Pierre&#x20;and&#x20;Miquelon">Saint Pierre and Miquelon</option>
<option value="Saint&#x20;Vincent&#x20;and&#x20;the&#x20;Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San&#x20;Marino">San Marino</option>
<option value="Sao&#x20;Tome&#x20;and&#x20;Principe">Sao Tome and Principe</option>
<option value="Saudi&#x20;Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra&#x20;Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Sint&#x20;Maarten">Sint Maarten</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon&#x20;Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South&#x20;Africa">South Africa</option>
<option value="South&#x20;Georgia&#x20;and&#x20;the&#x20;South&#x20;Sandwich&#x20;Islands">South Georgia and the South Sandwich Islands</option>
<option value="South&#x20;Korea">South Korea</option>
<option value="South&#x20;Sudan">South Sudan</option>
<option value="Spain">Spain</option>
<option value="Spratly&#x20;Islands">Spratly Islands</option>
<option value="Sri&#x20;Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="The&#x20;Bahamas">The Bahamas</option>
<option value="The&#x20;Gambia">The Gambia</option>
<option value="Timor-leste">Timor-leste</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad&#x20;and&#x20;Tobago">Trinidad and Tobago</option>
<option value="Tromelin&#x20;Island">Tromelin Island</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks&#x20;and&#x20;Caicos&#x20;Islands">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United&#x20;Arab&#x20;Emirates">United Arab Emirates</option>
<option value="United&#x20;Kingdom">United Kingdom</option>
<option value="United&#x20;States">United States</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Vietnam</option>
<option value="Virgin&#x20;Islands">Virgin Islands</option>
<option value="Wake&#x20;Island">Wake Island</option>
<option value="Wallis&#x20;and&#x20;Futuna">Wallis and Futuna</option>
<option value="West&#x20;Bank">West Bank</option>
<option value="Western&#x20;Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
</select>

                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Country</label>
                </div>
            </div>
            <div class="col-md-12">
                <div class="group">
                     <select name="Dropdown1" class="mat-input" required oninvalid="this.setCustomValidity('Please Select where did you hear about us')" title="Please Select where did you hear about us
" oninput="this.setCustomValidity('')">
<option value=""></option>
<option value="Google&#x20;Search&#x20;Engine">Google Search Engine</option>
<option value="Social&#x20;Media">Social Media</option>
<option value="Referral">Referral</option>
<option value="Website&#x20;Blog">Website Blog</option>
</select>

                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Where did you hear about us?</label>
                </div>
            </div>
           
            <div class="col-md-12">
                <div class="group textare_bar">
                    <textarea name="MultiLine" maxlength="65535" placeholder="" class="cus-textarea mat-input" oninput="this.setCustomValidity('')" required title="Describe your idea to help us assign the relevant consultation expert." oninvalid="this.setCustomValidity('Describe your idea to help us assign the relevant consultation expert.')"></textarea>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Message</label>
                    
                </div>
            </div>
            <div class="col-md-12 pjt-for">
<div class="group">
<select class="zf-form-sBox" name="Dropdown2" checktype="c1">
<option value="-Select-">-Select-</option>
<option selected="true" value="CA">CA</option>
<option value="FB">FB</option>
<option value="PG">PG</option>
</select>
</div>
</div>
            <div class="col-md-6">
                <div class="form-group">
                <div class="g-recaptcha" data-sitekey="6LfnrWIUAAAAAEaEpEgctqgnvhp2TY6aYr09Lv-a"></div>
                <p style="color: red" id="captcha_errorinn"></p>
            </div>
            </div>
            <input  type="hidden" name="SingleLine1" value="Home Page Drop us a message" fieldType=1 maxlength="255" placeholder="" />
            <div class="col-md-12">
<div class="text-left sfnew-btn caSubmit"><button class="btn sub-btn" type="submit">Submit</button>
</div>
</div>
            
        </div>
    </form>
</div>

<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {

jQuery(document).ready(function($){
       $(document).on('click','.rvm-course-drop .caSubmit > button',function(){
         
          var element = jQuery('.rvm-course-drop textarea[name=g-recaptcha-response]').val();
	        if(element != '') {
	            jQuery('.rvm-course-drop #captcha_errorinn').text ("");
	            return true;
	        } else {
	            jQuery('.rvm-course-drop #captcha_errorinn').text ("You can't leave Captcha Code empty");
	            return false;
	        } 
       }); 
    });
    
    });</script>
    
    <script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function(){
jQuery('#hm-drop input.mat-input').on('focusout', function() {
    if(jQuery(this).val() != ''){
        jQuery(this).siblings('label').css('top','-23px');    
    }else{
        jQuery(this).siblings('label').css('top','0px');
    }
});
	
	
jQuery(document).ready(function($) {
	jQuery('#hm-drop input.mat-input').on('focusin', function() {
		jQuery(this).siblings('label').css('top','-23px');    
	});
	},500);
});

});</script>
    
	
	<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
	    
	    jQuery(document).ready(function(){
	       
    	    const utm_source = getQueryParam("utm_source");
            if(utm_source!=undefined){
                jQuery('#00N5w00000SFQtX').val(utm_source);
            }
    	    
	        function getQueryParam(paramName) {
              const queryString = window.location.search;
              const urlParams = new URLSearchParams(queryString);
              return urlParams.get(paramName);
            }
	        
	    })
	    
	    
	    
});</script>
	
	
	
	
	
	
		</div>
				</div>
					</div>
		</div>
					</div>
		</section>
					</div>
		</div>
					</div>
		</section>
				</div>
		
		</div>


				

							<button type="button" class="pum-close popmake-close" aria-label="Close">
			<i class="fas fa-times"></i>			</button>
		
	</div>

</div>

  <!--copyscapeskip-->
  <aside id="moove_gdpr_cookie_info_bar" class="moove-gdpr-info-bar-hidden moove-gdpr-align-center moove-gdpr-dark-scheme gdpr_infobar_postion_bottom" aria-label="GDPR Cookie Banner" style="display: none;">
    <div class="moove-gdpr-info-bar-container">
      <div class="moove-gdpr-info-bar-content">
        
<div class="moove-gdpr-cookie-notice">
  <p>We are using cookies to give you the best experience on our website.</p>
<p>You can find out more about which cookies we are using or switch them off in <button  data-href="#moove_gdpr_cookie_modal" class="change-settings-button">settings</button>.</p>
</div>
<!--  .moove-gdpr-cookie-notice -->        
<div class="moove-gdpr-button-holder">
		  <button class="mgbutton moove-gdpr-infobar-allow-all gdpr-fbo-0" aria-label="Accept" >Accept</button>
	  </div>
<!--  .button-container -->      </div>
      <!-- moove-gdpr-info-bar-content -->
    </div>
    <!-- moove-gdpr-info-bar-container -->
  </aside>
  <!-- #moove_gdpr_cookie_info_bar -->
  <!--/copyscapeskip-->
<div id="qlwapp" class="qlwapp qlwapp-free qlwapp-button qlwapp-bottom-right qlwapp-all qlwapp-rounded">
	<div class="qlwapp-container">
		
		<a class="qlwapp-toggle" data-action="open" data-phone="919254031579" data-message="" role="button" tabindex="0" target="_blank">
							<i class="qlwapp-icon qlwapp-whatsapp-icon"></i>
						<i class="qlwapp-close" data-action="close">&times;</i>
							<span class="qlwapp-text">How can I help you?</span>
					</a>
	</div>
</div>
<link rel='stylesheet' id='e-animations-css' href='https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.22.3' media='all' />
<link data-minify="1" rel='stylesheet' id='contact-form-7-css' href='https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=1728035237' media='all' />
<script data-minify="1" async data-noptimize  data-cfasync="false" src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/social-pug/assets/dist/front-end-free.js?ver=1728035238" id="dpsp-frontend-js-pro-js"></script>
<script id="eae-main-js-extra">
var eae = {"ajaxurl":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","current_url":"aHR0cHM6Ly93d3cuY2xvdWRhbmFsb2d5LmNvbS9uZXh0LWxldmVsLXdlYnNpdGUtZGV2ZWxvcG1lbnQv","nonce":"6374371d11","plugin_url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/addon-elements-for-elementor-page-builder\/"};
var eae_editor = {"plugin_url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/addon-elements-for-elementor-page-builder\/"};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/js/eae.min.js?ver=1.13.6" id="eae-main-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/build/index.min.js?ver=1.13.6" id="eae-index-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/js/animated-main.min.js?ver=1.0" id="animated-main-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/js/particles.min.js?ver=2.0.0" id="eae-particles-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/addon-elements-for-elementor-page-builder/assets/lib/vegas/vegas.min.js?ver=2.4.0" id="vegas-js" defer></script>
<script type="rocketlazyloadscript" id="rocket-browser-checker-js-after">
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script id="rocket-preload-links-js-extra">
var RocketPreloadLinksConfig = {"excludeUris":"\/contact\/|\/revamp-branding-and-design\/|\/(?:.+\/)?feed(?:\/(?:.+\/?)?)?$|\/(?:.+\/)?embed\/|\/(index.php\/)?(.*)wp-json(\/.*|$)|\/refer\/|\/go\/|\/recommend\/|\/recommends\/","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|pdf|doc|docx|xls|xlsx|php|html|htm","siteUrl":"https:\/\/www.cloudanalogy.com","onHoverDelay":"100","rateThrottle":"3"};
</script>
<script type="rocketlazyloadscript" id="rocket-preload-links-js-after">
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script id="rocket_lazyload_css-js-extra">
var rocket_lazyload_css_data = {"threshold":"300"};
</script>
<script id="rocket_lazyload_css-js-after">
!function o(n,c,a){function u(t,e){if(!c[t]){if(!n[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(s)return s(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=c[t]={exports:{}},n[t][0].call(r.exports,function(e){return u(n[t][1][e]||e)},r,r.exports,o,n,c,a)}return c[t].exports}for(var s="function"==typeof require&&require,e=0;e<a.length;e++)u(a[e]);return u}({1:[function(e,t,r){"use strict";{const c="undefined"==typeof rocket_pairs?[]:rocket_pairs,a=(("undefined"==typeof rocket_excluded_pairs?[]:rocket_excluded_pairs).map(t=>{var e=t.selector;document.querySelectorAll(e).forEach(e=>{e.setAttribute("data-rocket-lazy-bg-"+t.hash,"excluded")})}),document.querySelector("#wpr-lazyload-bg-container"));var o=rocket_lazyload_css_data.threshold||300;const u=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&c.filter(e=>t.target.matches(e.selector)).map(t=>{var e;t&&((e=document.createElement("style")).textContent=t.style,a.insertAdjacentElement("afterend",e),t.elements.forEach(e=>{u.unobserve(e),e.setAttribute("data-rocket-lazy-bg-"+t.hash,"loaded")}))})})},{rootMargin:o+"px"});function n(){0<(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).length&&c.forEach(t=>{try{document.querySelectorAll(t.selector).forEach(e=>{"loaded"!==e.getAttribute("data-rocket-lazy-bg-"+t.hash)&&"excluded"!==e.getAttribute("data-rocket-lazy-bg-"+t.hash)&&(u.observe(e),(t.elements||=[]).push(e))})}catch(e){console.error(e)}})}n(),function(){const r=window.MutationObserver;return function(e,t){if(e&&1===e.nodeType)return(t=new r(t)).observe(e,{attributes:!0,childList:!0,subtree:!0}),t}}()(document.querySelector("body"),n)}},{}]},{},[1]);
//# sourceMappingURL=lazyload-css.min.js.map
</script>
<script id="eael-general-js-extra">
var localize = {"ajaxurl":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","nonce":"2c40f0ebc2","i18n":{"added":"Added ","compare":"Compare","loading":"Loading..."},"eael_translate_text":{"required_text":"is a required field","invalid_text":"Invalid","billing_text":"Billing","shipping_text":"Shipping","fg_mfp_counter_text":"of"},"page_permalink":"https:\/\/www.cloudanalogy.com\/next-level-website-development\/","cart_redirectition":"","cart_page_url":"","el_breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/essential-addons-for-elementor-lite/assets/front-end/js/view/general.min.js?ver=5.9.25" id="eael-general-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/uploads/essential-addons-elementor/eael-13721.js?ver=1725495103" id="eael-13721-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-includes/js/imagesloaded.min.js?ver=5.0.0" id="imagesloaded-js" defer></script>
<script id="oceanwp-main-js-extra">
var oceanwpLocalize = {"nonce":"edc55151d9","isRTL":"","menuSearchStyle":"drop_down","mobileMenuSearchStyle":"disabled","sidrSource":"#sidr-close, #site-navigation","sidrDisplace":"1","sidrSide":"right","sidrDropdownTarget":"link","verticalHeaderTarget":"link","customScrollOffset":"0","customSelects":".woocommerce-ordering .orderby, #dropdown_product_cat, .widget_categories select, .widget_archive select, .single-product .variations_form .variations select","ajax_url":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","oe_mc_wpnonce":"f09fa09288"};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/theme.min.js?ver=1.5.32.1543908685" id="oceanwp-main-js" defer></script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/themes/oceanwp/assets/js/vendors/sidr.js?ver=1728035238" id="ow-sidr-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/sidebar-mobile-menu.min.js?ver=1.5.32.1543908685" id="oceanwp-sidebar-mobile-menu-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/drop-down-search.min.js?ver=1.5.32.1543908685" id="oceanwp-drop-down-search-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/equal-height-elements.min.js?ver=1.5.32.1543908685" id="oceanwp-equal-height-elements-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/vendors/magnific-popup.min.js?ver=1.5.32.1543908685" id="ow-magnific-popup-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/ow-lightbox.min.js?ver=1.5.32.1543908685" id="oceanwp-lightbox-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/vendors/flickity.pkgd.min.js?ver=1.5.32.1543908685" id="ow-flickity-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/ow-slider.min.js?ver=1.5.32.1543908685" id="oceanwp-slider-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/scroll-effect.min.js?ver=1.5.32.1543908685" id="oceanwp-scroll-effect-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/scroll-top.min.js?ver=1.5.32.1543908685" id="oceanwp-scroll-top-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/themes/oceanwp/assets/js/select.min.js?ver=1.5.32.1543908685" id="oceanwp-select-js" defer></script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementskit-lite/libs/framework/assets/js/frontend-script.js?ver=1728035238" id="elementskit-framework-js-frontend-js" defer></script>
<script type="rocketlazyloadscript" id="elementskit-framework-js-frontend-js-after">
		var elementskit = {
			resturl: 'https://www.cloudanalogy.com/wp-json/elementskit/v1/',
		}

		
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=1728035238" id="ekit-widget-scripts-js" defer></script>
<script id="flickr-widget-script-js-extra">
var flickrWidgetParams = {"widgets":[]};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/ocean-extra/includes/widgets/js/flickr.min.js?ver=6.6.1" id="flickr-widget-script-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/ocean-extra/includes/widgets/js/share.min.js?ver=6.6.1" id="oe-social-share-js" defer></script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/wp-whatsapp-chat/build/frontend/js/index.js?ver=1728035238" id="qlwapp-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/lib/font-awesome/js/v4-shims.min.js?ver=1.0" id="font-awesome-4-shim-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3" id="jquery-ui-core-js" defer></script>
<script id="popup-maker-site-js-extra">
var pum_vars = {"version":"1.19.0","pm_dir_url":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/popup-maker\/","ajaxurl":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","restapi":"https:\/\/www.cloudanalogy.com\/wp-json\/pum\/v1","rest_nonce":null,"default_theme":"21492","debug_mode":"","disable_tracking":"","home_url":"\/","message_position":"top","core_sub_forms_enabled":"1","popups":[],"cookie_domain":"","analytics_route":"analytics","analytics_api":"https:\/\/www.cloudanalogy.com\/wp-json\/pum\/v1"};
var pum_sub_vars = {"ajaxurl":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","message_position":"top"};
var pum_popups = {"pum-36385":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".crms-serve"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":36385,"slug":"crm-amc-popup"},"pum-36209":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".vid-ani"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":36209,"slug":"video-and-animation-popup"},"pum-35370":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".nl-webform"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35370,"slug":"nxt-level-website-development"},"pum-35869":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".zcrmwriter-select"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35869,"slug":"zoho-crm-zoho-form-zoho-writer-zoho-books-package-popup"},"pum-35865":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".zcrmpeople-select"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35865,"slug":"zoho-crm-zoho-people-recruit-package-popup"},"pum-35861":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".zcrmdesk-select"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35861,"slug":"zoho-crmzoho-desk-package-popup"},"pum-35857":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".zfsm-select"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35857,"slug":"zoho-fsm-package-popup"},"pum-35851":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".zcrm-select"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35851,"slug":"zoho-crm-package-popup"},"pum-35512":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".zpackage"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"small","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35512,"slug":"zoho-package-popup"},"pum-22884":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".git-sap-popup"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21492","size":"medium","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"default-theme","id":22884,"slug":"sap-popup"},"pum-35635":{"triggers":[{"type":"click_open","settings":{"extra_selectors":".wd-avm"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"medium","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35635,"slug":"web-dev-advanced-view-more"},"pum-35631":{"triggers":[{"type":"click_open","settings":{"extra_selectors":".wd-ivm"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"medium","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35631,"slug":"web-dev-interm-view-more"},"pum-35625":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".wd-bvm"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":false,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21493","size":"medium","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"lightbox","id":35625,"slug":"web-dev-basic-view-more"},"pum-21501":{"triggers":[{"type":"click_open","settings":{"cookie_name":"","extra_selectors":".git-popup"}}],"cookies":[],"disable_on_mobile":false,"disable_on_tablet":true,"atc_promotion":null,"explain":null,"type_section":null,"theme_id":"21492","size":"medium","responsive_min_width":"0%","responsive_max_width":"100%","custom_width":"640px","custom_height_auto":false,"custom_height":"380px","scrollable_content":false,"animation_type":"fade","animation_speed":"350","animation_origin":"center top","open_sound":"none","custom_sound":"","location":"center","position_top":"100","position_bottom":"0","position_left":"0","position_right":"0","position_from_trigger":false,"position_fixed":false,"overlay_disabled":false,"stackable":false,"disable_reposition":false,"zindex":"1999999999","close_button_delay":"0","fi_promotion":null,"close_on_form_submission":false,"close_on_form_submission_delay":"0","close_on_overlay_click":false,"close_on_esc_press":false,"close_on_f4_press":false,"disable_form_reopen":false,"disable_accessibility":false,"theme_slug":"default-theme","id":21501,"slug":"new-home-popup"}};
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/uploads/pum/pum-site-scripts.js?ver=1728035238" id="popup-maker-site-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/popup-maker/assets/js/vendor/mobile-detect.min.js?ver=1.3.3" id="mobile-detect-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.google.com/recaptcha/api.js?render=6LfOZ9AZAAAAANddICKjIr4itFImqSkcNYha9MrA&amp;ver=3.0" id="google-recaptcha-js"></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0" id="wp-polyfill-js"></script>
<script id="wpcf7-recaptcha-js-extra">
var wpcf7_recaptcha = {"sitekey":"6LfOZ9AZAAAAANddICKjIr4itFImqSkcNYha9MrA","actions":{"homepage":"homepage","contactform":"contactform"}};
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/modules/recaptcha/index.js?ver=1728035238" id="wpcf7-recaptcha-js" defer></script>
<script id="moove_gdpr_frontend-js-extra">
var moove_frontend_gdpr_scripts = {"ajaxurl":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","post_id":"40228","plugin_dir":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/gdpr-cookie-compliance","show_icons":"all","is_page":"1","ajax_cookie_removal":"false","strict_init":"1","enabled_default":{"third_party":0,"advanced":0},"geo_location":"false","force_reload":"false","is_single":"","hide_save_btn":"false","current_user":"0","cookie_expiration":"365","script_delay":"2000","close_btn_action":"1","close_btn_rdr":"","scripts_defined":"{\"cache\":true,\"header\":\"\",\"body\":\"\",\"footer\":\"\",\"thirdparty\":{\"header\":\"\",\"body\":\"\",\"footer\":\"\"},\"advanced\":{\"header\":\"\",\"body\":\"\",\"footer\":\"\"}}","gdpr_scor":"true","wp_lang":"","wp_consent_api":"false"};
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/gdpr-cookie-compliance/dist/scripts/main.js?ver=1728035238" id="moove_gdpr_frontend-js" defer></script>
<script type="rocketlazyloadscript" id="moove_gdpr_frontend-js-after">
var gdpr_consent__strict = "false"
var gdpr_consent__thirdparty = "false"
var gdpr_consent__advanced = "false"
var gdpr_consent__cookies = ""
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=1728035238" id="swv-js" defer></script>
<script id="contact-form-7-js-extra">
var wpcf7 = {"api":{"root":"https:\/\/www.cloudanalogy.com\/wp-json\/","namespace":"contact-form-7\/v1"},"cached":"1"};
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/contact-form-7/includes/js/index.js?ver=1728035238" id="contact-form-7-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.22.3" id="elementor-webpack-runtime-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.22.3" id="elementor-frontend-modules-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2" id="elementor-waypoints-js" defer></script>
<script type="rocketlazyloadscript" id="elementor-frontend-js-before">
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}}},
"version":"3.22.3","is_static":false,"experimentalFeatures":{"e_optimized_assets_loading":true,"additional_custom_breakpoints":true,"container_grid":true,"e_swiper_latest":true,"e_onboarding":true,"home_screen":true,"ai-layout":true,"landing-pages":true},"urls":{"assets":"https:\/\/www.cloudanalogy.com\/wp-content\/plugins\/elementor\/assets\/"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"global_image_lightbox":"yes","active_breakpoints":["viewport_mobile","viewport_tablet"],"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":40228,"title":"next%20level%20website%20development%20-%20Cloud%20Analogy","excerpt":"","featuredImage":false}};
</script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.22.3" id="elementor-frontend-js" defer></script>
<script type="rocketlazyloadscript" data-rocket-src="https://www.cloudanalogy.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.min.js?ver=3.2.0" id="animate-circle-js" defer></script>
<script id="elementskit-elementor-js-extra">
var ekit_config = {"ajaxurl":"https:\/\/www.cloudanalogy.com\/wp-admin\/admin-ajax.php","nonce":"38906d0513"};
</script>
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/wp-content/plugins/elementskit-lite/widgets/init/assets/js/elementor.js?ver=1728035238" id="elementskit-elementor-js" defer></script>
<!-- start Simple Custom CSS and JS -->
<link data-minify="1" rel="stylesheet" href="https://www.cloudanalogy.com/wp-content/cache/min/1/bootstrap/3.4.1/css/bootstrap.min.css?ver=1728035238">
 <script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/bootstrap/3.4.1/js/bootstrap.min.js?ver=1728035238" async> </script>

<link data-minify="1" href="https://www.cloudanalogy.com/wp-content/cache/min/1/npm/select2@4.1.0-rc.0/dist/css/select2.min.css?ver=1728035238" rel="stylesheet" />
<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/npm/select2@4.1.0-rc.0/dist/js/select2.min.js?ver=1728035238" defer></script>



<!-- Calendly link widget begin -->
<link data-minify="1" href="https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.css?ver=1728035238&wpr_t=1729010843" rel="stylesheet">
<script type="rocketlazyloadscript" data-minify="1" async data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/assets/external/widget.js?ver=1728035238" data-rocket-type="text/javascript" async></script>
<!-- Calendly link widget end -->


<link data-minify="1"
     rel="stylesheet"
     href="https://www.cloudanalogy.com/wp-content/cache/background-css/www.cloudanalogy.com/wp-content/cache/min/1/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css?ver=1728035238&wpr_t=1729010843"
   />

<script type="rocketlazyloadscript" data-minify="1" data-rocket-src="https://www.cloudanalogy.com/wp-content/cache/min/1/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js?ver=1728035238" defer></script>

<script type="rocketlazyloadscript">
	
document.addEventListener("DOMContentLoaded", function() {
    // Delay execution to ensure the intl-tel-input library is fully loaded
    setTimeout(function() {
        const phoneInputField = document.querySelector(".phcountry #international_PhoneNumber_countrycode");
        const submitButton = document.querySelector(".intl-btn"); // Select the submit button by its class
        const disIntlText = document.getElementById("dis-intl-text");
        var userLocation = {};

        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            initialCountry: 'us'  // Default to auto-detection if fetch fails
        });

        const errorMsg = document.querySelector(".phcountry #error-msg");
        const validMsg = document.querySelector(".phcountry #valid-msg");

        const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
        
        const reset = () => {
            phoneInputField.classList.remove("error");
            errorMsg.innerHTML = "";
            errorMsg.classList.add("hide");
            validMsg.classList.add("hide");
            submitButton.disabled = false; // Enable the submit button
            disIntlText.innerText = ""; // Clear the message
        };

        const showError = (msg) => {
            phoneInputField.classList.add("error");
            errorMsg.innerHTML = msg;
            errorMsg.classList.remove("hide");
            submitButton.disabled = true; // Disable the submit button
            disIntlText.innerText = "Please fill all the fields with valid data"; // Show the message
        };

        // On blur: validate
        phoneInputField.addEventListener('blur', () => {
            reset();
            if (!phoneInputField.value.trim()) {
                showError("Phone number is required");
            } else if (phoneInput.isValidNumber()) {
                validMsg.classList.remove("hide");
                submitButton.disabled = false; // Enable the submit button
            } else {
                const errorCode = phoneInput.getValidationError();
                const msg = errorMap[errorCode] || "Invalid number";
                showError(msg);
            }
        });

        // On keyup / change flag: reset
        phoneInputField.addEventListener('change', reset);
        phoneInputField.addEventListener('keyup', reset);

    }, 1000);

    setTimeout(function() {
			
        var selectedValue = jQuery('#iti-0__country-listbox .iti__active .iti__dial-code').text(); // Get the text of the clicked li
        jQuery('.phcountry #international_PhoneNumber_countrycodeval').val(selectedValue); // Set the value of text field
        
        jQuery('#iti-0__country-listbox li').on('click', function(){
            var selectedValue2 = jQuery(this).find('.iti__dial-code').text(); // Get the text of the clicked li
            jQuery('.phcountry #international_PhoneNumber_countrycodeval').val(selectedValue2); // Set the value of text field
        });	
		
		jQuery('#international_PhoneNumber_countrycode').on('change', function(){
var selectedValue3 = jQuery('#iti-0__country-listbox .iti__active').find('.iti__dial-code').text();
     jQuery('.phcountry #international_PhoneNumber_countrycodeval').val(selectedValue3); // Set the value of text field
        });
	
		
		
		
    }, 2000);
});
	  
 </script>





<script type="rocketlazyloadscript">
 function timestamp() { 
   var response = document.getElementById("g-recaptcha-response"); 
   if (response == null || response.value.trim() == "") {
     var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());
     document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
   } 
 } 
  /*setInterval(timestamp, 500);*/ 
</script>
<script type="rocketlazyloadscript">
function checkValidation1() {
   
    var capt = grecaptcha.getResponse();

    if(capt.length == 0) {
        document.getElementById('googlecaptcha1').innerHTML="You can't leave Captcha Code empty";
        return false;
    }
    else {
        document.getElementById('googlecaptcha1').innerHTML= "Captcha Completed";
        return true;
    }
    
}

</script>



<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
 
jQuery(function($){	 
    $(window).load(function() {
        $.getJSON('https://api.country.is/')
            .done(function(location) {
                var phone, href;

                switch(location.country) {
                    case 'IN':
                        phone = '919254031579';
                        break;
                    case 'CA':
                        phone = '14252300946';
                        break;
                    case 'AU':
                        phone = '61280061994';
                        break;
                    case 'GB':
                        phone = '442081331902';
                        break;
                    default:
                        phone = '15166651885';
                }

                href = 'https://web.whatsapp.com/send?phone=' + phone + '&text=';
                
                $("#qlwapp .qlwapp-toggle").attr("data-phone", phone);
                $("#qlwapp .qlwapp-toggle").attr("href", href);
            });
    });
});
});</script>
<script type="rocketlazyloadscript" data-rocket-type="text/javascript">window.addEventListener('DOMContentLoaded', function() { 
  jQuery(document).ready(function($){
  	window.onscroll = function() {
    if (window.pageYOffset > 200) {  
        $("#site-header").addClass("sticky");
    } else {
        $("#site-header").removeClass("sticky");
    }
  }
}); 
});</script>









<!-- end Simple Custom CSS and JS -->

    
  <!--copyscapeskip-->
  <!-- V1 -->
  <div id="moove_gdpr_cookie_modal" class="gdpr_lightbox-hide" role="complementary" aria-label="GDPR Settings Screen">
    <div class="moove-gdpr-modal-content moove-clearfix logo-position-left moove_gdpr_modal_theme_v1">
          
        <button class="moove-gdpr-modal-close" aria-label="Close GDPR Cookie Settings">
          <span class="gdpr-sr-only">Close GDPR Cookie Settings</span>
          <span class="gdpr-icon moovegdpr-arrow-close"></span>
        </button>
            <div class="moove-gdpr-modal-left-content">
        
<div class="moove-gdpr-company-logo-holder">
  <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%2080'%3E%3C/svg%3E" alt="salesforce development services"   width="120"  height="80"  class="img-responsive" data-lazy-src="https://www.cloudanalogy.com/wp-content/uploads/2018/12/CA_logo-120-x-80.png" /><noscript><img src="https://www.cloudanalogy.com/wp-content/uploads/2018/12/CA_logo-120-x-80.png" alt="salesforce development services"   width="120"  height="80"  class="img-responsive" /></noscript>
</div>
<!--  .moove-gdpr-company-logo-holder -->        <ul id="moove-gdpr-menu">
          
<li class="menu-item-on menu-item-privacy_overview menu-item-selected">
  <button data-href="#privacy_overview" class="moove-gdpr-tab-nav" aria-label="Privacy Overview">
    <span class="gdpr-nav-tab-title">Privacy Overview</span>
  </button>
</li>

  <li class="menu-item-strict-necessary-cookies menu-item-off">
    <button data-href="#strict-necessary-cookies" class="moove-gdpr-tab-nav" aria-label="Strictly Necessary Cookies">
      <span class="gdpr-nav-tab-title">Strictly Necessary Cookies</span>
    </button>
  </li>




        </ul>
        
<div class="moove-gdpr-branding-cnt">
  		<a href="https://wordpress.org/plugins/gdpr-cookie-compliance/" rel="noopener noreferrer" target="_blank" class='moove-gdpr-branding'>Powered by Cloudanalogy&nbsp; <span>GDPR Cookie Compliance</span></a>
		</div>
<!--  .moove-gdpr-branding -->      </div>
      <!--  .moove-gdpr-modal-left-content -->
      <div class="moove-gdpr-modal-right-content">
        <div class="moove-gdpr-modal-title">
           
        </div>
        <!-- .moove-gdpr-modal-ritle -->
        <div class="main-modal-content">

          <div class="moove-gdpr-tab-content">
            
<div id="privacy_overview" class="moove-gdpr-tab-main">
      <span class="tab-title">Privacy Overview</span>
    <div class="moove-gdpr-tab-main-content">
  	<p>This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.</p>
  	  </div>
  <!--  .moove-gdpr-tab-main-content -->

</div>
<!-- #privacy_overview -->            
  <div id="strict-necessary-cookies" class="moove-gdpr-tab-main" style="display:none">
    <span class="tab-title">Strictly Necessary Cookies</span>
    <div class="moove-gdpr-tab-main-content">
      <p>Strictly Necessary Cookie should be enabled at all times so that we can save your preferences for cookie settings.</p>
      <div class="moove-gdpr-status-bar ">
        <div class="gdpr-cc-form-wrap">
          <div class="gdpr-cc-form-fieldset">
            <label class="cookie-switch" for="moove_gdpr_strict_cookies">    
              <span class="gdpr-sr-only">Enable or Disable Cookies</span>        
              <input type="checkbox" aria-label="Strictly Necessary Cookies"  value="check" name="moove_gdpr_strict_cookies" id="moove_gdpr_strict_cookies">
              <span class="cookie-slider cookie-round" data-text-enable="Enabled" data-text-disabled="Disabled"></span>
            </label>
          </div>
          <!-- .gdpr-cc-form-fieldset -->
        </div>
        <!-- .gdpr-cc-form-wrap -->
      </div>
      <!-- .moove-gdpr-status-bar -->
              <div class="moove-gdpr-strict-warning-message" style="margin-top: 10px;">
          <p>If you disable this cookie, we will not be able to save your preferences. This means that every time you visit this website you will need to enable or disable cookies again.</p>
        </div>
        <!--  .moove-gdpr-tab-main-content -->
                                              
    </div>
    <!--  .moove-gdpr-tab-main-content -->
  </div>
  <!-- #strict-necesarry-cookies -->
            
            
            
          </div>
          <!--  .moove-gdpr-tab-content -->
        </div>
        <!--  .main-modal-content -->
        <div class="moove-gdpr-modal-footer-content">
          <div class="moove-gdpr-button-holder">
			  		<button class="mgbutton moove-gdpr-modal-allow-all button-visible" aria-label="Enable All">Enable All</button>
		  					<button class="mgbutton moove-gdpr-modal-save-settings button-visible" aria-label="Save Changes">Save Changes</button>
				</div>
<!--  .moove-gdpr-button-holder -->        </div>
        <!--  .moove-gdpr-modal-footer-content -->
      </div>
      <!--  .moove-gdpr-modal-right-content -->

      <div class="moove-clearfix"></div>

    </div>
    <!--  .moove-gdpr-modal-content -->
  </div>
  <!-- #moove_gdpr_cookie_modal -->
  <!--/copyscapeskip-->
<div data-pafe-ajax-url="https://www.cloudanalogy.com/wp-admin/admin-ajax.php"></div><script>window.lazyLoadOptions=[{elements_selector:"img[data-lazy-src],.rocket-lazyload,iframe[data-lazy-src]",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}},{elements_selector:".rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,}];window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(var i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async src="https://www.cloudanalogy.com/wp-content/plugins/wp-rocket/assets/js/lazyload/17.8.3/lazyload.min.js"></script><script>function lazyLoadThumb(e,alt,l){var t='<img data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',a='<button class="play" aria-label="play Youtube video"></button>';if(l){t=t.replace('data-lazy-','');t=t.replace('loading="lazy"','');t=t.replace(/<noscript>.*?<\/noscript>/g,'');}t=t.replace('alt=""','alt="'+alt+'"');return t.replace("ID",e)+a}function lazyLoadYoutubeIframe(){var e=document.createElement("iframe"),t="ID?autoplay=1";t+=0===this.parentNode.dataset.query.length?"":"&"+this.parentNode.dataset.query;e.setAttribute("src",t.replace("ID",this.parentNode.dataset.src)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),e.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),this.parentNode.parentNode.replaceChild(e,this.parentNode)}document.addEventListener("DOMContentLoaded",function(){var exclusions=[];var e,t,p,u,l,a=document.getElementsByClassName("rll-youtube-player");for(t=0;t<a.length;t++)(e=document.createElement("div")),(u='https://i.ytimg.com/vi/ID/hqdefault.jpg'),(u=u.replace('ID',a[t].dataset.id)),(l=exclusions.some(exclusion=>u.includes(exclusion))),e.setAttribute("data-id",a[t].dataset.id),e.setAttribute("data-query",a[t].dataset.query),e.setAttribute("data-src",a[t].dataset.src),(e.innerHTML=lazyLoadThumb(a[t].dataset.id,a[t].dataset.alt,l)),a[t].appendChild(e),(p=e.querySelector(".play")),(p.onclick=lazyLoadYoutubeIframe)});</script>
<!-- Start of Forcebolt Chat Script-->


<script>class RocketElementorAnimation{constructor(){this.deviceMode=document.createElement("span"),this.deviceMode.id="elementor-device-mode-wpr",this.deviceMode.setAttribute("class","elementor-screen-only"),document.body.appendChild(this.deviceMode)}_detectAnimations(){let t=getComputedStyle(this.deviceMode,":after").content.replace(/"/g,"");this.animationSettingKeys=this._listAnimationSettingsKeys(t),document.querySelectorAll(".elementor-invisible[data-settings]").forEach(t=>{const e=t.getBoundingClientRect();if(e.bottom>=0&&e.top<=window.innerHeight)try{this._animateElement(t)}catch(t){}})}_animateElement(t){const e=JSON.parse(t.dataset.settings),i=e._animation_delay||e.animation_delay||0,n=e[this.animationSettingKeys.find(t=>e[t])];if("none"===n)return void t.classList.remove("elementor-invisible");t.classList.remove(n),this.currentAnimation&&t.classList.remove(this.currentAnimation),this.currentAnimation=n;let s=setTimeout(()=>{t.classList.remove("elementor-invisible"),t.classList.add("animated",n),this._removeAnimationSettings(t,e)},i);window.addEventListener("rocket-startLoading",function(){clearTimeout(s)})}_listAnimationSettingsKeys(t="mobile"){const e=[""];switch(t){case"mobile":e.unshift("_mobile");case"tablet":e.unshift("_tablet");case"desktop":e.unshift("_desktop")}const i=[];return["animation","_animation"].forEach(t=>{e.forEach(e=>{i.push(t+e)})}),i}_removeAnimationSettings(t,e){this._listAnimationSettingsKeys().forEach(t=>delete e[t]),t.dataset.settings=JSON.stringify(e)}static run(){const t=new RocketElementorAnimation;requestAnimationFrame(t._detectAnimations.bind(t))}}document.addEventListener("DOMContentLoaded",RocketElementorAnimation.run);</script></body>

</html>
<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me - Debug: cached@1729036043 -->