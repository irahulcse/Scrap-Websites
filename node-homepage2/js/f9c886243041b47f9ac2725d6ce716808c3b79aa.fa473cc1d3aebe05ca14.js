(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0pOA":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"2LUv":function(e,t,n){var r=n("m1Oa"),o=n("o/EK"),a=n("ShTl"),i=n("sJOi");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},"2lck":function(e,t,n){"use strict";var r,o=n("6CzD"),a=n("dV/x"),i=n("mK0O"),u=n("hisu"),c=n("yBJb"),s=n("CHlC"),f=n("kMo5"),l=n("P+uj"),p=n("mXGw"),d=n.n(p),g=n("GeWT"),h=n.n(g),m=n("OSs+"),v=n("J2F4"),_=n("ou9M"),b=n("bBV7"),y=n("9fEB"),O=n.n(y),w=n("lEqP"),E=n("E3zU"),I=n("K92R"),S=n("mfX+"),T=n("hi5D"),P=n("xTjj"),j=d.a.createElement;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}!function(e){e.INIT="init",e.INIT_GA="init_ga",e.RESTART="restart"}(r||(r={}));var R=function(e){return p.Children.map(e,(function(e){return e}))};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=function(n){Object(s.a)(f,n);var i=k(f);function f(t){var n;return Object(u.a)(this,f),(n=i.call(this,t))._config=e,n.mountTea=!1,n.isLandingPage=0,n.onUrlChanged=function(e){if((e||{}).pathname===P.ROUTER_CLIENT.FORYOU){n._config=Object(S.c)(T.PageNames.TRENDING,!0);var t=n.getLoggerInfo(r.INIT);m.c.config(t)}},n.setPreviousInfo=function(e){var t,n=JSON.parse(null!==(t=sessionStorage.getItem(_.PREVOUS_PAGE_KEY))&&void 0!==t?t:"null")||{};return location.href!==n.href?(sessionStorage.setItem(_.PREVOUS_PAGE_KEY,JSON.stringify({href:location.href,pageName:e.page_name,twoPrev:n.pageName,twoPrevHref:n.href})),e.previous_page=n.pageName):e.previous_page=n.twoPrev,e},n.handleRouterChange=function(){if(n.mountTea)n.mountTea=!1;else{m.c.pause();var e=n.getLoggerInfo(r.RESTART);m.c.restart(e)}},n.getGaIds=function(){return[]},n.getLoggerInfo=function(e){var t="function"===typeof n._config?n._config(A({},n.props)):n._config,i=(t.openGa,t.gaIds,t.channels),u=void 0===i?[]:i,c=Object(a.a)(t,["openGa","gaIds","channels"]),s=n.props,f=s.$abTestVersion,l=s.$region,p=s.$wid,d=s.$sgOpen,g=s.$appId,h=s.$botType,b=s.$user,y=s.statusCode,O=s.$needFix,E=n.getGaIds();switch(e===r.INIT_GA&&(u=[]),e){case r.INIT:case r.INIT_GA:var S=sessionStorage.getItem(_.FIRST_OPEN_KEY);S||(n.isLandingPage=1,sessionStorage.setItem(_.FIRST_OPEN_KEY,c.page_name)),c.is_landing_page=n.isLandingPage,u.forEach((function(e){m.c.config([{loggerType:m.b.TEA,id:e,"header.custom":{user_is_login:b?1:0,landing_page:S||c.page_name}}])})),E.forEach((function(e){m.c.config([{loggerType:m.b.GA,id:e,landing_page:S||c.page_name}])}));break;case r.RESTART:c.is_landing_page=0}(c=n.setPreviousInfo(c)).region=l,c.page_url||(c.page_url=location.href);var P=c,j=P.seo_ab_version,C=P.routeChangePageView,k=Object(a.a)(P,["seo_ab_version","routeChangePageView"]);u.forEach((function(e){return m.c.setEventCommons(A({id:e},k))})),u.forEach((function(t){if(e===r.INIT||e===r.INIT_GA||C){var n={teaChannel:t,seo_ab_version:j,bot_type:h||"others",need_fix:O?"1":"0"};y&&y!==w.OK&&(n.error_code=String(y)),m.c.event(v.i.PAGE_VIEW,n,m.a.TEA)}})),E.forEach((function(e){return m.c.setEventCommons(A({id:e},k))})),E.forEach((function(t){if(e===r.INIT||e===r.INIT_GA||C){var n={gaChannel:t,seo_ab_version:j};y&&y!==w.OK&&(n.error_code=String(y)),m.c.event(v.i.PAGE_VIEW,n,m.a.GA)}}));var R=Object(I.c)("webapp_session_id");R||(R=p+String(Date.now()),Object(I.g)("webapp_session_id",R));var x=u.map((function(e){var t={loggerType:m.b.TEA,id:e,region:l,user_unique_id:p,web_id:p,abTestVersion:f,session_id:R};return t.channel=1180===g||d?"sg":"va",b&&b.uid&&c.page_name!==T.PageNames.EMBED_V2&&(t.user_id=b.uid),t})),N=E.map((function(e){return{loggerType:m.b.GA,id:e,region:l,user_unique_id:p,web_id:p,bot_type:h||"others",abTestVersion:f,session_id:R}}));return b&&b.uid&&c.page_name!==T.PageNames.EMBED_V2&&(N.user_id=b.uid),[].concat(Object(o.a)(x),Object(o.a)(N))},n.googleAnalyticsScript=function(){var e=n.getGaIds();return 0===e.length?null:[j("script",{key:"a",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(e[0])}),j("script",{key:"b",dangerouslySetInnerHTML:{__html:"\n                window.dataLayer = window.dataLayer || [];\n                function gtag() {\n                    dataLayer.push(arguments);\n                }\n                gtag('js', new Date());\n            "}})]},n.state={initialized:!1},n}return Object(c.a)(f,[{key:"componentDidMount",value:function(){m.c.initialized=!1;var e=this.getLoggerInfo(r.INIT);m.c.init(e),b.Router.events.on("routeChangeComplete",this.handleRouterChange),window.addEventListener("replaceState",this.onUrlChanged),this.mountTea=!0,window.localStorage&&window.localStorage.removeItem("TEST_LOCAL_STORAGE_KEY"),this.setState({initialized:!0})}},{key:"componentDidUpdate",value:function(t,n){if(this._config=e,t.$cookieConsent!==this.props.$cookieConsent||n.initialized!==this.state.initialized){m.c.pause();var a=m.c.getIds().filter((function(e){return e.loggerType===m.b.TEA})),i=this.getLoggerInfo(r.INIT_GA);a.push.apply(a,Object(o.a)(i)),m.c.restart(a)}}},{key:"componentWillUnmount",value:function(){b.Router.events.off("routeChangeComplete",this.handleRouterChange),window.removeEventListener("replaceState",this.onUrlChanged)}},{key:"render",value:function(){var e=this.props;return j(d.a.Fragment,null,j(O.a,null,R(this.googleAnalyticsScript())),j(t,e))}}]),f}(p.PureComponent);return n.displayName="withPageLogger(".concat(Object(E.a)(t),")"),h()(n,t),n}}},"5YB7":function(e,t,n){var r=n("PbJ5");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7osH":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"9fEB":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r=c(n("mXGw")),o=c(n("GlZI")),a=n("9rrO"),i=n("bxxT"),u=n("vI6Y");function c(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=l.length;u<c;u++){var s=l[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?a=!1:(p.add(f),r[s]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function g(e){var t=e.children;return r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))}))}g.rewind=d.rewind;var h=g;t.default=h},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},GlZI:function(e,t,n){"use strict";var r=n("fwM5"),o=(n("0pOA"),n("bkNG")),a=n("5YB7"),i=n("Y8Bl"),u=n("7osH"),c=n("2LUv");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("mXGw");t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(i){a(c,i);var u=s(c);function c(e){return r(this,c),u.call(this,e)}return o(c,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(c,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(f.Component)}},Y8Bl:function(e,t,n){var r=n("pSYS"),o=n("0pOA");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bxxT:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},m1Oa:function(e,t,n){var r=n("z3mR");e.exports=function(e){if(Array.isArray(e))return r(e)}},"mfX+":function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return h}));var r=n("mK0O"),o=n("cBaE"),a=n("kfo7"),i=n("hi5D"),u=n("J2F4");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){return function(t){var n=t.$appType;return{pageType:e,context:Object(a.b)(e,t),chromeThemeColor:"t"===n?"#161823":"#ffffff"}}}function l(){var e="user";return navigator.userAgent.match(/google/gi)&&(e="search"),e}function p(e,t,n,r){var a=r.testId,i=void 0===a?"":a;return{page_type:e,page_url:location&&location.href,app_name:n?null:t?"musical_wap":"tiktok_wap",utm_campaign:Object(o.h)("utm_campaign"),utm_medium:Object(o.h)("utm_medium"),utm_source:Object(o.h)("utm_source"),share_region:Object(o.h)("region"),iid:Object(o.h)("iid","share_iid"),date:(new Date).toString(),domain_name:location&&location.host||"unknown",user_type_alias:navigator&&l(),language:navigator&&navigator.language||"unknown",userAgent:navigator.userAgent,seo_ab_version:i}}function d(e,t,n){return{pageId:n?t:"".concat(t,"_h5"),bid:"tiktok_web"}}function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){var r=n.$appType,o=p(e,"m"===r,t,n);if(e===i.PageNames.USER||e===i.PageNames.PROFILE){var a=n.uniqueId,c=n.$user;e=a===(void 0===c?{}:c).uniqueId?i.PageNames.PROFILE:i.PageNames.USER}return s({channels:[u.n.PWA],page_name:e,enter_from:e,routeChangePageView:!0},o)}}function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){var r=n.$appType,o="m"===r?"#ffffff":"#000000";return{slardar:d(0,e,t),chromeThemeColor:!t&&o,report:(t&&e===i.PageNames.VIDEO||!t)&&{open:!0},saveRegion:!t&&!0,onDidMount:t?"":function(){n.$downloadLink&&n.$downloadLink.download&&n.$downloadLink.download.visible&&(document.body.dataset.downloadLink=n.$downloadLink.download.channelshare_web)}}}}},"o/EK":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},a=n("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}}}]);