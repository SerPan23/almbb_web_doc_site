(function(t){function a(a){for(var e,c,l=a[0],r=a[1],i=a[2],p=0,_=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&_.push(s[c][0]),s[c]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);v&&v(a);while(_.length)_.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,a=0;a<o.length;a++){for(var n=o[a],e=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(e=!1)}e&&(o.splice(a--,1),t=c(c.s=n[0]))}return t}var e={},s={app:0},o=[];function c(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=e,c.d=function(t,a,n){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)c.d(n,e,function(a){return t[a]}.bind(null,e));return n},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var i=0;i<l.length;i++)a(l[i]);var v=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"034f":function(t,a,n){"use strict";var e=n("85ec"),s=n.n(e);s.a},1773:function(t,a,n){},"2a85":function(t,a,n){},"30fc":function(t,a,n){"use strict";var e=n("f94b"),s=n.n(e);s.a},5452:function(t,a,n){"use strict";var e=n("af35"),s=n.n(e);s.a},"56d7":function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),s=n("2f62"),o={state:{},mutations:{},getters:{}},c=n("8c4f"),l=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticStyle:{height:"100% !important"},attrs:{id:"app"}},[n("page-header"),n("router-view")],1)},r=[],i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark fixed-top bg-dark"},[n("router-link",{staticClass:"router-link",attrs:{to:"/"}},[n("a",{ref:"MainPage",staticClass:"navbar-brand"},[t._v("ALMBB")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav mr-auto sidenav",attrs:{id:"navAccordion"}},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"router-link",attrs:{to:"/"}},[n("a",{ref:"MainPage",staticClass:"nav-link"},[t._v("Home "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/animated-hamburger"}},[n("a",{ref:"AnimatedHamburger",staticClass:"nav-link"},[t._v("Animated hamburger")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/carousel-overlay"}},[n("a",{ref:"CarouselOverlay",staticClass:"nav-link"},[t._v("Carousel overlay")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"router-link",attrs:{to:"/buttons"}},[n("a",{ref:"Buttons",staticClass:"nav-link"},[t._v("Buttons")])])],1)])])],1)},v=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("div",{staticClass:"anim-bar anim-2"},[n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})])])}],p={name:"Header"},_=p,u=(n("5452"),n("2877")),f=Object(u["a"])(_,i,v,!1,null,null,null),y=f.exports,b={name:"App",components:{PageHeader:y}},d=b,S=(n("034f"),Object(u["a"])(d,l,r,!1,null,null,null)),m=S.exports,g=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main content-wrapper"},[n("div",[n("h2",[t._v("Installation:")]),t._m(0),n("a",{staticClass:"btn btn-outline-success",attrs:{href:t.publicPath+"for_download/almbb.rar",download:""}},[t._v(" Download ")])])])},h=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ul",[n("li",[t._v("Download bootstrap 4, jquery.js, popper.js or use cdn links")]),n("li",[t._v("Download archive and add css and js files in your project")]),n("li",[t._v("Link almbb.css in head")]),n("li",[t._v("Add almbb.js in head after bootstrap 4, jquery.js, popper.js or before body end")])])}],C={name:"MainPage",data:function(){return{publicPath:"/"}}},w=C,k=(n("30fc"),Object(u["a"])(w,g,h,!1,null,null,null)),j=k.exports,x=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main content-wrapper"},[n("h3",[t._v("Usage:")]),t._v(" Simple navbar-toggler: "),n("div",{staticClass:"codeblock"},[n("pre",{staticClass:"html5",staticStyle:{"font-family":"monospace","margin-bottom":"0px"}},[t._v("\n    "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("button")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"navbar-toggler"')]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("type")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"button"')]),t._v(" data-toggle"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"collapse"')]),t._v(" data-"),n("span",{staticStyle:{color:"#000066"}},[t._v("target")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"#navbarSupportedContent"')]),t._v(" aria-controls"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"navbarSupportedContent"')]),t._v("   aria-expanded"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"false"')]),t._v(" aria-"),n("span",{staticStyle:{color:"#000066"}},[t._v("label")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"Toggle navigation"')]),t._v(">")]),t._v("\n        "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"navbar-toggler-icon"')]),t._v("><"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(">")]),t._v("\n    "),n("span",{staticStyle:{color:"#009900","margin-bottom":"1em"}},[t._v("<"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("button")]),t._v(">")]),t._v("\n\n")])]),n("br"),n("h3",[t._v("You need change to this (choose anim-1 or anim-2):")]),n("div",{staticClass:"codeblock"},[n("pre",{staticClass:"html5",staticStyle:{"font-family":"monospace","margin-bottom":"0px"}},[t._v("\n    "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("button")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"navbar-toggler"')]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("type")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"button"')]),t._v(" data-toggle"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"collapse"')]),t._v(" data-"),n("span",{staticStyle:{color:"#000066"}},[t._v("target")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"#navbarSupportedContent"')]),t._v(" aria-controls"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"navbarSupportedContent"')]),t._v(" aria-expanded"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"false"')]),t._v(" aria-"),n("span",{staticStyle:{color:"#000066"}},[t._v("label")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"Toggle navigation"')]),t._v(">")]),t._v("\n        "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("div")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"anim-bar anim-1"')]),t._v(">")]),t._v("  \n        "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"icon-bar"')]),t._v("><"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(">")]),t._v("\n        "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"icon-bar"')]),t._v("><"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(">")]),t._v("\n        "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(" "),n("span",{staticStyle:{color:"#000066"}},[t._v("class")]),n("span",{staticStyle:{color:"#66cc66"}},[t._v("=")]),n("span",{staticStyle:{color:"#ff0000"}},[t._v('"icon-bar"')]),t._v("><"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("span")]),t._v(">")]),t._v("\n        "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("div")]),t._v(">")]),t._v("\n    "),n("span",{staticStyle:{color:"#009900"}},[t._v("<"),n("span",{staticStyle:{color:"#66cc66"}},[t._v("/")]),n("span",{staticStyle:{color:"#000000","font-weight":"bold"}},[t._v("button")]),t._v(">")]),t._v("\n\n")])])])}],P={name:"AnimatedHamburger"},$=P,E=(n("b903"),Object(u["a"])($,x,O,!1,null,null,null)),M=E.exports,A=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main content-wrapper"},[n("div",{staticStyle:{"text-align":"left"}},[t._v("C")])])}],T={name:"CarouselOverlay"},H=T,D=(n("9909"),Object(u["a"])(H,A,B,!1,null,null,null)),q=D.exports,J=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main content-wrapper"},[n("div",{staticStyle:{"text-align":"left"}},[t._v("B")])])}],z={name:"Buttons"},F=z,I=(n("bfb1"),Object(u["a"])(F,J,L,!1,null,null,null)),N=I.exports,U=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"main content-wrapper"},[n("section",{staticClass:"page_404"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 "},[n("div",{staticClass:"col-sm-10 col-sm-offset-1  text-center"},[t._m(0),n("div",{staticClass:"contant_box_404"},[n("h3",{staticClass:"h2"},[t._v(" Похоже, Вы заблудились ")]),n("p",[t._v("Страница, которую Вы ищете, недоступна или находится в разработке!")]),n("router-link",{staticClass:"router-link",attrs:{to:"/"}},[n("a",{ref:"profile",staticClass:"link_404",attrs:{type:"button"}},[t._v("Домой")])])],1)])])])])])])},Y=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"four_zero_four_bg"},[n("h1",{staticClass:"text-center "},[t._v("404")])])}],G={name:"PageNotFound"},K=G,Q=(n("cba2"),Object(u["a"])(K,U,Y,!1,null,"32180b10",null)),R=Q.exports;e["a"].config.productionTip=!1,e["a"].use(c["a"]),e["a"].use(s["a"]);var V=[{path:"/",component:j},{path:"/animated-hamburger",component:M},{path:"/carousel-overlay",component:q},{path:"/buttons",component:N},{path:"/404",component:R},{path:"*",redirect:"/404"}],W=new c["a"]({mode:"history",routes:V}),X=new s["a"].Store(o);new e["a"]({router:W,store:X,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,a,n){},"8c8e":function(t,a,n){},9909:function(t,a,n){"use strict";var e=n("1773"),s=n.n(e);s.a},af35:function(t,a,n){},afe0:function(t,a,n){},b903:function(t,a,n){"use strict";var e=n("afe0"),s=n.n(e);s.a},bfb1:function(t,a,n){"use strict";var e=n("2a85"),s=n.n(e);s.a},cba2:function(t,a,n){"use strict";var e=n("8c8e"),s=n.n(e);s.a},f94b:function(t,a,n){}});
//# sourceMappingURL=app.1d07f514.js.map