(window.webpackJsonp=window.webpackJsonp||[]).push([[37,3],{447:function(t,e,r){"use strict";r.r(e);var n={name:"Content",props:{title:{type:String,default:""},date:{type:String,default:""},content:{type:Array,default:function(){return[]}},reference:{type:Array,default:function(){return[]}},source:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},methods:{}},o=r(75),c=r(90),l=r.n(c),h=r(454),d=r(444),m=r(546),v=(r(11),r(12),r(10),r(5),r(15),r(9),r(16),r(2)),y=(r(24),r(117),r(452),r(98)),f=r(28),_=r(35),O=r(7),w=r(0);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var S=Object(O.a)(Object(y.a)("bar",["height","window"]),f.a,_.a).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(w.h)(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var data={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,data),Object(w.s)(this))}}),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("div",{staticClass:"main"},[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.title))]),t._v("\n      "+t._s(t.date)+"\n    ")]),t._v(" "),r("hr",{staticStyle:{height:"1px",border:"none","background-color":"white"}}),t._v(" "),r("div",{staticClass:"content",staticStyle:{"margin-bottom":"50px"}},[r("div",{staticStyle:{"margin-top":"30px"}},t._l(t.content,(function(e,i){return r("div",{key:i},[""!==e.title?r("h3",{staticStyle:{margin:"0px 0 5px 0"}},[i>0?r("br"):t._e(),t._v("\n            #"+t._s(e.title)+" \n          ")]):t._e(),t._v(" "),"I"===e.type?r("div",{staticStyle:{margin:"10px 0 10px 10px"}},[r("img",{attrs:{src:e.scr,alt:""}})]):t._e(),t._v(" "),"P"===e.type?r("div",{staticStyle:{margin:"10px 0 10px 10px"}},[r("pre",[t._v(t._s(e.scr)),""!==e.link?r("span",[r("a",{attrs:{href:e.link}},[t._v(t._s(e.link))])]):t._e()])]):t._e(),t._v(" "),"C"===e.type?r("v-card",{staticStyle:{margin:"10px 10px 10px 10px"},attrs:{color:"#333333"}},[r("v-system-bar",{attrs:{color:"#222222"}},[t._v(" Code ")]),t._v(" "),r("pre",{staticStyle:{margin:"10px"}},[t._v(t._s(e.scr))])],1):t._e(),t._v(" "),"T"===e.type?r("v-data-table",{staticStyle:{margin:"10px 10px 20px 10px"},attrs:{headers:e.scr.headers,items:e.scr.desserts,"items-per-page":e.scr.desserts.length,"hide-default-footer":""}}):t._e(),t._v(" "),"L"===e.type?r("ul",t._l(e.scr.parent,(function(n){return r("li",{key:n},[t._v("\n              "+t._s(n)+"\n              "),e.scr.children.length>0?r("ul",t._l(e.scr.children,(function(e){return r("li",{key:e},[t._v("\n                "+t._s(e)+"\n                ")])})),0):t._e()])})),0):t._e()],1)})),0),t._v(" "),t.source.length>0?r("h3",{staticStyle:{"margin-top":"50px"}},[t._v("#참고")]):t._e(),t._v(" "),t._l(t.source,(function(e){return r("div",{key:e.url},[r("h4",[r("a",{attrs:{href:e.url}},[t._v(t._s(e.url)+" "),""!==e.title?r("span",{staticStyle:{color:"white"}},[t._v(" ["+t._s(e.title)+"]")]):t._e()])])])})),t._v(" "),t.reference.length>0?r("h3",{staticStyle:{"margin-top":"50px"}},[t._v("#출처")]):t._e(),t._v(" "),t._l(t.reference,(function(e){return r("div",{key:e.url},[r("h4",[r("a",{attrs:{href:e.url}},[t._v(t._s(e.url)+" "),""!==e.title?r("span",{staticStyle:{color:"white"}},[t._v(" ["+t._s(e.title)+"]")]):t._e()])])])}))],2),t._v(" "),r("script",{attrs:{src:"https://utteranc.es/client.js",repo:"choongbeom/choongbeom.github.io","issue-term":"pathname",theme:"github-light",crossorigin:"anonymous",async:""}})])])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:h.a,VContainer:d.a,VDataTable:m.a,VSystemBar:S})},452:function(t,e,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("dd2325f0",content,!0,{sourceMap:!1})},453:function(t,e,r){var n=r(17)(!1);n.push([t.i,".theme--light.v-system-bar{background-color:#e0e0e0;color:rgba(0,0,0,.6)}.theme--light.v-system-bar .v-icon{color:rgba(0,0,0,.6)}.theme--light.v-system-bar--lights-out{background-color:hsla(0,0%,100%,.7)!important}.theme--dark.v-system-bar{background-color:#000;color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar .v-icon{color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar--lights-out{background-color:rgba(0,0,0,.2)!important}.v-system-bar{align-items:center;display:flex;font-size:.875rem;font-weight:400;padding:0 8px}.v-system-bar .v-icon{font-size:1rem;margin-right:4px}.v-system-bar--absolute,.v-system-bar--fixed{left:0;top:0;width:100%;z-index:3}.v-system-bar--fixed{position:fixed}.v-system-bar--absolute{position:absolute}.v-system-bar--window .v-icon{font-size:1.25rem;margin-right:8px}",""]),t.exports=n},579:function(t,e,r){"use strict";r.r(e);var n={name:"OSIV",components:{Content:r(447).default},data:function(){return{title:"OSIV",date:"2021-10-28",content:[{title:"",type:"P",scr:"Open-In-View 또는 Open-Session-In-View 또는 Open-EntityManager-In-View를 관례상 OSIV라고 한다.\n\ntrue일 경우 영속성 컨텍스트가 트랜잭션 범위를 넘어선 레이어까지 살아있다.\nApi라면 클라이언트에게 응답될 때까지, View라면 View가 렌더링될 때까지 영속성컨텍스트가 살아있다."},{title:"OSIV = true",type:"I",scr:"https://github.com/choongbeom/choongbeom.github.io/blob/master/_posts/IMG/OSIV1.png?raw=true"},{title:"OSIV = false",type:"I",scr:"https://github.com/choongbeom/choongbeom.github.io/blob/master/_posts/IMG/OSIV2.png?raw=true"},{title:"정리",type:"P",scr:"사용자에게 응답 또는 view가 렌더링 될 때까지 영속성컨텍스트를 유지한다.\n너무나도 당연하게 OSIV를 true로 두는 게 좋아보이지만! 단점이 존재한다.\n영속성 컨텍스트를 유지한다는 건, DB Connection 또한 계속 가지고 있다는 뜻이다.\n실시간 트래픽이 중요한 어플리케이션에서는 DB Connection이 모자를 수 있다.\n성능이 중요하다면 OSIV는 false로 설정하자."}],source:[],reference:[{title:"공부 기록",url:"https://gracelove91.tistory.com/100"}]}},mounted:function(){},methods:{}},o=r(75),c=r(90),l=r.n(c),h=r(444),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("div",[r("Content",{attrs:{title:t.title,date:t.date,content:t.content,source:t.source,reference:t.reference}})],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{Content:r(447).default}),l()(component,{VContainer:h.a})}}]);