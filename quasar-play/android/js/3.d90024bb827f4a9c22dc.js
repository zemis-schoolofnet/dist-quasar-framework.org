webpackJsonp([3,86],{"+tPU":function(e,o,t){t("xGkn");for(var r=t("7KvD"),n=t("hJx8"),l=t("/bQp"),a=t("dSzd")("toStringTag"),i="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<i.length;c++){var s=i[c],u=r[s],f=u&&u.prototype;f&&!f[a]&&n(f,a,s),l[s]=l.Array}},"/bQp":function(e,o){e.exports={}},"/n6Q":function(e,o,t){t("zQR9"),t("+tPU"),e.exports=t("Kh4W").f("iterator")},"06OY":function(e,o,t){var r=t("3Eo+")("meta"),n=t("EqjI"),l=t("D2L2"),a=t("evD5").f,i=0,c=Object.isExtensible||function(){return!0},s=!t("S82l")(function(){return c(Object.preventExtensions({}))}),u=function(e){a(e,r,{value:{i:"O"+ ++i,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,o){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!l(e,r)){if(!c(e))return"F";if(!o)return"E";u(e)}return e[r].i},getWeak:function(e,o){if(!l(e,r)){if(!c(e))return!0;if(!o)return!1;u(e)}return e[r].w},onFreeze:function(e){return s&&f.NEED&&c(e)&&!l(e,r)&&u(e),e}}},"2mtT":function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t("pFYg"),n=t.n(r),l=(t("cSth"),{data:function(){return{modelHex:"#C7044B",modelHexa:"#F0FF1CBF",modelRgb:{r:112,g:204,b:55},modelRgba:{r:138,g:36,b:138,a:64},defaultValue:null,forceType:null,lazy:"#C7044B",error:!0,warning:!1,error2:!1,warning2:!1}},methods:{onInput:function(e){console.log("input",e,void 0===e?"undefined":n()(e))}},computed:{customDisplayValue:function(){return this.modelHex?"Color: "+this.modelHex.slice(1).match(/.{1,2}/g).join("~"):"Pick a color"}},watch:{error:function(e){e&&(this.warning=!1)},warning:function(e){e&&(this.error=!1)},error2:function(e){e&&(this.warning2=!1)},warning2:function(e){e&&(this.error2=!1)}}}),a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("q-color",{model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{placeholder:"Placeholder"},model:{value:e.modelRgb,callback:function(o){e.modelRgb=o},expression:"modelRgb"}}),e._v(" "),t("q-color",{attrs:{"stack-label":"Stack label"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{"float-label":"Float label"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{"float-label":"Car color",prefix:"~ ",suffix:" ~"},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-color",{attrs:{"stack-label":"Clearable",clearable:""},model:{value:e.modelRgba,callback:function(o){e.modelRgba=o},expression:"modelRgba"}}),e._v(" "),t("q-color",{attrs:{"stack-label":"Default value","default-value":"#1c32b0",clearable:""},model:{value:e.defaultValue,callback:function(o){e.defaultValue=o},expression:"defaultValue"}}),e._v(" "),t("q-color",{attrs:{"stack-label":"Forced type",type:"rgba"},model:{value:e.forceType,callback:function(o){e.forceType=o},expression:"forceType"}}),e._v(" "),t("q-color",{attrs:{"display-value":e.customDisplayValue,"stack-label":"Custom display value"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Inverted")]),e._v(" "),t("q-color",{attrs:{inverted:""},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-color",{attrs:{inverted:"",color:"secondary",suffix:"Suffix"},model:{value:e.modelRgba,callback:function(o){e.modelRgba=o},expression:"modelRgba"}}),e._v(" "),t("q-color",{attrs:{"inverted-light":"",color:"amber",clearable:""},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{align:"right",suffix:"(no alpha)",inverted:"",color:"brown","stack-label":"Color aligned to right"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Force either modal or popover")]),e._v(" "),t("q-color",{attrs:{modal:"","stack-label":"Always open modal"},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-color",{attrs:{popover:"","stack-label":"Always open popover"},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("\n      Lazy input\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("\n          Model: "+e._s(e.lazy)+"\n        ")])],1)]),e._v(" "),t("q-color",{attrs:{value:e.lazy,clearable:""},on:{change:function(o){return e.lazy=o}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Before/after icons")]),e._v(" "),t("q-color",{attrs:{before:[{icon:"mail",handler:function(){}}],suffix:"Toyota"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{clearable:"","float-label":"Icon dissapears on empty input",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelRgb,callback:function(o){e.modelRgb=o},expression:"modelRgb"}}),e._v(" "),t("q-color",{attrs:{inverted:"",color:"secondary",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-color",{attrs:{"float-label":"Color to paint walls","inverted-light":"",color:"amber",clearable:"",after:[{icon:"done",condition:e.modelRgba,handler:function(){}}]},model:{value:e.modelRgba,callback:function(o){e.modelRgba=o},expression:"modelRgba"}}),e._v(" "),t("q-color",{attrs:{inverted:"",color:"brown",before:[{icon:"brush",handler:function(){}}]},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Error/warning states")]),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(o){e.error=o},expression:"error"}}),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning,callback:function(o){e.warning=o},expression:"warning"}}),e._v(" "),t("q-color",{attrs:{error:e.error,warning:e.warning},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{error:e.error,warning:e.warning,"float-label":"Float label"},model:{value:e.modelRgb,callback:function(o){e.modelRgb=o},expression:"modelRgb"}}),e._v(" "),t("q-color",{attrs:{error:e.error,warning:e.warning,inverted:""},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-color",{attrs:{error:e.error,warning:e.warning,inverted:"","float-label":e.error?"We got an error":e.warning?"We got a warning":"Everything fine now",after:[{icon:"warning",error:!0,handler:function(){}},{icon:"priority_high",warning:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Read-only")]),e._v(" "),t("q-color",{attrs:{readonly:"","float-label":"Read-only color input"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{readonly:"",inverted:"",color:"secondary","float-label":"Read-only & inverted"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disabled")]),e._v(" "),t("q-color",{attrs:{disable:"","float-label":"Disabled color input"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("q-color",{attrs:{disable:"",inverted:"",color:"primary","float-label":"Disabled & inverted"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error2,callback:function(o){e.error2=o},expression:"error2"}}),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning2,callback:function(o){e.warning2=o},expression:"warning2"}}),e._v(" "),t("q-field",{attrs:{helper:"What's your favourite name?",error:e.error2,"error-label":"Hey, we got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[t("q-color",{model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}})],1),e._v(" "),t("q-field",{attrs:{icon:"camera_alt",helper:"Your awesome helper",error:e.error2,"error-label":"We got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[t("q-color",{attrs:{"float-label":"Float Label"},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}})],1),e._v(" "),t("br"),e._v(" "),t("q-field",{attrs:{icon:"important_devices",label:"Playstation color",count:15,helper:"Some helper",error:e.error2,"error-label":"Wait, wait. Error!",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[t("q-color",{attrs:{inverted:"",placeholder:"On Field",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}})],1),e._v(" "),t("q-field",{attrs:{icon:"place",label:"Floor color",helper:"Some helper",error:e.error2,"error-label":"Some error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[t("q-color",{attrs:{color:"secondary",inverted:"","stack-label":"Stack Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}})],1),e._v(" "),t("q-field",{attrs:{icon:"color_lens",label:"Wall color",helper:"This color will be used on the living room",error:e.error2,"error-label":"That's not a valid color",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[t("q-color",{attrs:{inverted:"",color:"purple","float-label":"Float Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("On a dark background")]),e._v(" "),t("div",{staticClass:"dark-example"},[t("q-color",{attrs:{"float-label":"Colored",dark:"",color:"yellow",suffix:"TSP"},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-color",{attrs:{"float-label":"Colored",dark:"",color:"secondary",suffix:"TSP"},model:{value:e.modelHexa,callback:function(o){e.modelHexa=o},expression:"modelHexa"}}),e._v(" "),t("q-field",{attrs:{icon:"wifi",label:"Wifi network",helper:"We need this for connecting you"}},[t("q-color",{attrs:{dark:"",color:"yellow","float-label":"Wifi name"},model:{value:e.modelHex,callback:function(o){e.modelHex=o},expression:"modelHex"}})],1)],1)],1)])},i=[];a._withStripped=!0;var c=t("XyMi"),s=Object(c.a)(l,a,i,!1,null,null,null);s.options.__file="src/pages/showcase/forms/color/color-input.vue";o.default=s.exports},"4mcu":function(e,o){e.exports=function(){}},"5QVw":function(e,o,t){e.exports={default:t("BwfY"),__esModule:!0}},"7UMu":function(e,o,t){var r=t("R9M2");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"880/":function(e,o,t){e.exports=t("hJx8")},"94VQ":function(e,o,t){"use strict";var r=t("Yobk"),n=t("X8DO"),l=t("e6n0"),a={};t("hJx8")(a,t("dSzd")("iterator"),function(){return this}),e.exports=function(e,o,t){e.prototype=r(a,{next:n(1,t)}),l(e,o+" Iterator")}},BwfY:function(e,o,t){t("fWfb"),t("M6a0"),t("OYls"),t("QWe/"),e.exports=t("FeBl").Symbol},EGZi:function(e,o){e.exports=function(e,o){return{value:o,done:!!e}}},Kh4W:function(e,o,t){o.f=t("dSzd")},LKZe:function(e,o,t){var r=t("NpIQ"),n=t("X8DO"),l=t("TcQ7"),a=t("MmMw"),i=t("D2L2"),c=t("SfB7"),s=Object.getOwnPropertyDescriptor;o.f=t("+E39")?s:function(e,o){if(e=l(e),o=a(o,!0),c)try{return s(e,o)}catch(e){}if(i(e,o))return n(!r.f.call(e,o),e[o])}},M6a0:function(e,o){},O4g8:function(e,o){e.exports=!0},OYls:function(e,o,t){t("crlp")("asyncIterator")},PzxK:function(e,o,t){var r=t("D2L2"),n=t("sB3e"),l=t("ax3d")("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=n(e),r(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},"QWe/":function(e,o,t){t("crlp")("observable")},RPLV:function(e,o,t){var r=t("7KvD").document;e.exports=r&&r.documentElement},Rrel:function(e,o,t){var r=t("TcQ7"),n=t("n0T6").f,l={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==l.call(e)?function(e){try{return n(e)}catch(e){return a.slice()}}(e):n(r(e))}},Xc4G:function(e,o,t){var r=t("lktj"),n=t("1kS7"),l=t("NpIQ");e.exports=function(e){var o=r(e),t=n.f;if(t)for(var a,i=t(e),c=l.f,s=0;i.length>s;)c.call(e,a=i[s++])&&o.push(a);return o}},Yobk:function(e,o,t){var r=t("77Pl"),n=t("qio6"),l=t("xnc9"),a=t("ax3d")("IE_PROTO"),i=function(){},c=function(){var e,o=t("ON07")("iframe"),r=l.length;for(o.style.display="none",t("RPLV").appendChild(o),o.src="javascript:",(e=o.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[l[r]];return c()};e.exports=Object.create||function(e,o){var t;return null!==e?(i.prototype=r(e),t=new i,i.prototype=null,t[a]=e):t=c(),void 0===o?t:n(t,o)}},Zzip:function(e,o,t){e.exports={default:t("/n6Q"),__esModule:!0}},cSth:function(e,o,t){var r=t("t3GF");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t("rjj0").default)("4674b73f",r,!1,{})},crlp:function(e,o,t){var r=t("7KvD"),n=t("FeBl"),l=t("O4g8"),a=t("Kh4W"),i=t("evD5").f;e.exports=function(e){var o=n.Symbol||(n.Symbol=l?{}:r.Symbol||{});"_"==e.charAt(0)||e in o||i(o,e,{value:a.f(e)})}},dSzd:function(e,o,t){var r=t("e8AB")("wks"),n=t("3Eo+"),l=t("7KvD").Symbol,a="function"==typeof l;(e.exports=function(e){return r[e]||(r[e]=a&&l[e]||(a?l:n)("Symbol."+e))}).store=r},e6n0:function(e,o,t){var r=t("evD5").f,n=t("D2L2"),l=t("dSzd")("toStringTag");e.exports=function(e,o,t){e&&!n(e=t?e:e.prototype,l)&&r(e,l,{configurable:!0,value:o})}},fWfb:function(e,o,t){"use strict";var r=t("7KvD"),n=t("D2L2"),l=t("+E39"),a=t("kM2E"),i=t("880/"),c=t("06OY").KEY,s=t("S82l"),u=t("e8AB"),f=t("e6n0"),d=t("3Eo+"),p=t("dSzd"),m=t("Kh4W"),v=t("crlp"),b=t("Xc4G"),x=t("7UMu"),g=t("77Pl"),y=t("EqjI"),h=t("TcQ7"),w=t("MmMw"),_=t("X8DO"),H=t("Yobk"),k=t("Rrel"),S=t("LKZe"),q=t("evD5"),O=t("lktj"),L=S.f,T=q.f,C=k.f,P=r.Symbol,R=r.JSON,D=R&&R.stringify,E=p("_hidden"),F=p("toPrimitive"),j={}.propertyIsEnumerable,M=u("symbol-registry"),I=u("symbols"),Q=u("op-symbols"),W=Object.prototype,A="function"==typeof P,z=r.QObject,V=!z||!z.prototype||!z.prototype.findChild,N=l&&s(function(){return 7!=H(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,o,t){var r=L(W,o);r&&delete W[o],T(e,o,t),r&&e!==W&&T(W,o,r)}:T,B=function(e){var o=I[e]=H(P.prototype);return o._k=e,o},G=A&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},K=function(e,o,t){return e===W&&K(Q,o,t),g(e),o=w(o,!0),g(t),n(I,o)?(t.enumerable?(n(e,E)&&e[E][o]&&(e[E][o]=!1),t=H(t,{enumerable:_(0,!1)})):(n(e,E)||T(e,E,_(1,{})),e[E][o]=!0),N(e,o,t)):T(e,o,t)},Y=function(e,o){g(e);for(var t,r=b(o=h(o)),n=0,l=r.length;l>n;)K(e,t=r[n++],o[t]);return e},J=function(e){var o=j.call(this,e=w(e,!0));return!(this===W&&n(I,e)&&!n(Q,e))&&(!(o||!n(this,e)||!n(I,e)||n(this,E)&&this[E][e])||o)},Z=function(e,o){if(e=h(e),o=w(o,!0),e!==W||!n(I,o)||n(Q,o)){var t=L(e,o);return!t||!n(I,o)||n(e,E)&&e[E][o]||(t.enumerable=!0),t}},X=function(e){for(var o,t=C(h(e)),r=[],l=0;t.length>l;)n(I,o=t[l++])||o==E||o==c||r.push(o);return r},U=function(e){for(var o,t=e===W,r=C(t?Q:h(e)),l=[],a=0;r.length>a;)!n(I,o=r[a++])||t&&!n(W,o)||l.push(I[o]);return l};A||(i((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),o=function(t){this===W&&o.call(Q,t),n(this,E)&&n(this[E],e)&&(this[E][e]=!1),N(this,e,_(1,t))};return l&&V&&N(W,e,{configurable:!0,set:o}),B(e)}).prototype,"toString",function(){return this._k}),S.f=Z,q.f=K,t("n0T6").f=k.f=X,t("NpIQ").f=J,t("1kS7").f=U,l&&!t("O4g8")&&i(W,"propertyIsEnumerable",J,!0),m.f=function(e){return B(p(e))}),a(a.G+a.W+a.F*!A,{Symbol:P});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;$.length>ee;)p($[ee++]);for(var oe=O(p.store),te=0;oe.length>te;)v(oe[te++]);a(a.S+a.F*!A,"Symbol",{for:function(e){return n(M,e+="")?M[e]:M[e]=P(e)},keyFor:function(e){if(!G(e))throw TypeError(e+" is not a symbol!");for(var o in M)if(M[o]===e)return o},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!A,"Object",{create:function(e,o){return void 0===o?H(e):Y(H(e),o)},defineProperty:K,defineProperties:Y,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:U}),R&&a(a.S+a.F*(!A||s(function(){var e=P();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var o,t,r=[e],n=1;arguments.length>n;)r.push(arguments[n++]);if(t=o=r[1],(y(o)||void 0!==e)&&!G(e))return x(o)||(o=function(e,o){if("function"==typeof t&&(o=t.call(this,e,o)),!G(o))return o}),r[1]=o,D.apply(R,r)}}),P.prototype[F]||t("hJx8")(P.prototype,F,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},h65t:function(e,o,t){var r=t("UuGF"),n=t("52gC");e.exports=function(e){return function(o,t){var l,a,i=String(n(o)),c=r(t),s=i.length;return c<0||c>=s?e?"":void 0:(l=i.charCodeAt(c))<55296||l>56319||c+1===s||(a=i.charCodeAt(c+1))<56320||a>57343?e?i.charAt(c):l:e?i.slice(c,c+2):a-56320+(l-55296<<10)+65536}}},n0T6:function(e,o,t){var r=t("Ibhu"),n=t("xnc9").concat("length","prototype");o.f=Object.getOwnPropertyNames||function(e){return r(e,n)}},pFYg:function(e,o,t){"use strict";o.__esModule=!0;var r=a(t("Zzip")),n=a(t("5QVw")),l="function"==typeof n.default&&"symbol"==typeof r.default?function(e){return typeof e}:function(e){return e&&"function"==typeof n.default&&e.constructor===n.default&&e!==n.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}o.default="function"==typeof n.default&&"symbol"===l(r.default)?function(e){return void 0===e?"undefined":l(e)}:function(e){return e&&"function"==typeof n.default&&e.constructor===n.default&&e!==n.default.prototype?"symbol":void 0===e?"undefined":l(e)}},qio6:function(e,o,t){var r=t("evD5"),n=t("77Pl"),l=t("lktj");e.exports=t("+E39")?Object.defineProperties:function(e,o){n(e);for(var t,a=l(o),i=a.length,c=0;i>c;)r.f(e,t=a[c++],o[t]);return e}},t3GF:function(e,o,t){(e.exports=t("FZ+f")(!1)).push([e.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])},"vIB/":function(e,o,t){"use strict";var r=t("O4g8"),n=t("kM2E"),l=t("880/"),a=t("hJx8"),i=t("D2L2"),c=t("/bQp"),s=t("94VQ"),u=t("e6n0"),f=t("PzxK"),d=t("dSzd")("iterator"),p=!([].keys&&"next"in[].keys()),m=function(){return this};e.exports=function(e,o,t,v,b,x,g){s(t,o,v);var y,h,w,_=function(e){if(!p&&e in q)return q[e];switch(e){case"keys":case"values":return function(){return new t(this,e)}}return function(){return new t(this,e)}},H=o+" Iterator",k="values"==b,S=!1,q=e.prototype,O=q[d]||q["@@iterator"]||b&&q[b],L=!p&&O||_(b),T=b?k?_("entries"):L:void 0,C="Array"==o&&q.entries||O;if(C&&(w=f(C.call(new e)))!==Object.prototype&&w.next&&(u(w,H,!0),r||i(w,d)||a(w,d,m)),k&&O&&"values"!==O.name&&(S=!0,L=function(){return O.call(this)}),r&&!g||!p&&!S&&q[d]||a(q,d,L),c[o]=L,c[H]=m,b)if(y={values:k?L:_("values"),keys:x?L:_("keys"),entries:T},g)for(h in y)h in q||l(q,h,y[h]);else n(n.P+n.F*(p||S),o,y);return y}},xGkn:function(e,o,t){"use strict";var r=t("4mcu"),n=t("EGZi"),l=t("/bQp"),a=t("TcQ7");e.exports=t("vIB/")(Array,"Array",function(e,o){this._t=a(e),this._i=0,this._k=o},function(){var e=this._t,o=this._k,t=this._i++;return!e||t>=e.length?(this._t=void 0,n(1)):n(0,"keys"==o?t:"values"==o?e[t]:[t,e[t]])},"values"),l.Arguments=l.Array,r("keys"),r("values"),r("entries")},zQR9:function(e,o,t){"use strict";var r=t("h65t")(!0);t("vIB/")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,o=this._t,t=this._i;return t>=o.length?{value:void 0,done:!0}:(e=r(o,t),this._i+=e.length,{value:e,done:!1})})}});