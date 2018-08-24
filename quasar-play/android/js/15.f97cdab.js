(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15,93],{NVWU:function(e,l,o){"use strict";o.r(l);var a=function(){var e=this,l=e.$createElement,o=e._self._c||l;return o("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[o("div",{staticStyle:{width:"500px","max-width":"90vw"}},[o("q-color",{model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{placeholder:"Placeholder"},model:{value:e.modelRgb,callback:function(l){e.modelRgb=l},expression:"modelRgb"}}),o("q-color",{attrs:{"stack-label":"Stack label"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{"float-label":"Float label"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{"float-label":"Car color",prefix:"~ ",suffix:" ~"},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-color",{attrs:{"stack-label":"Clearable",clearable:""},model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}}),o("q-color",{attrs:{"stack-label":"Default value","default-value":"#1c32b0",clearable:""},model:{value:e.defaultValue,callback:function(l){e.defaultValue=l},expression:"defaultValue"}}),o("q-color",{attrs:{"stack-label":"Forced type",type:"rgba"},model:{value:e.forceType,callback:function(l){e.forceType=l},expression:"forceType"}}),o("q-color",{attrs:{"display-value":e.customDisplayValue,"stack-label":"Custom display value"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("p",{staticClass:"caption"},[e._v("Inverted")]),o("q-color",{attrs:{inverted:""},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-color",{attrs:{inverted:"",color:"secondary",suffix:"Suffix"},model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}}),o("q-color",{attrs:{"inverted-light":"",color:"amber",clearable:""},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{align:"right",suffix:"(no alpha)",inverted:"",color:"brown","stack-label":"Color aligned to right"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("p",{staticClass:"caption"},[e._v("Force either modal or popover")]),o("q-color",{attrs:{modal:"","stack-label":"Always open modal"},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-color",{attrs:{popover:"","stack-label":"Always open popover"},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("p",{staticClass:"caption"},[e._v("\n      Lazy input\n      "),o("span",{staticClass:"chip-container"},[o("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("\n          Model: "+e._s(e.lazy)+"\n        ")])],1)]),o("q-color",{attrs:{value:e.lazy,clearable:""},on:{change:function(l){return e.lazy=l}}}),o("p",{staticClass:"caption"},[e._v("Before/after icons")]),o("q-color",{attrs:{before:[{icon:"mail",handler:function(){}}],suffix:"Toyota"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{clearable:"","float-label":"Icon dissapears on empty input",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelRgb,callback:function(l){e.modelRgb=l},expression:"modelRgb"}}),o("q-color",{attrs:{inverted:"",color:"secondary",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-color",{attrs:{"float-label":"Color to paint walls","inverted-light":"",color:"amber",clearable:"",after:[{icon:"done",condition:e.modelRgba,handler:function(){}}]},model:{value:e.modelRgba,callback:function(l){e.modelRgba=l},expression:"modelRgba"}}),o("q-color",{attrs:{inverted:"",color:"brown",before:[{icon:"brush",handler:function(){}}]},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("p",{staticClass:"caption"},[e._v("Error/warning states")]),o("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(l){e.error=l},expression:"error"}}),o("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning,callback:function(l){e.warning=l},expression:"warning"}}),o("q-color",{attrs:{error:e.error,warning:e.warning},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{error:e.error,warning:e.warning,"float-label":"Float label"},model:{value:e.modelRgb,callback:function(l){e.modelRgb=l},expression:"modelRgb"}}),o("q-color",{attrs:{error:e.error,warning:e.warning,inverted:""},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-color",{attrs:{error:e.error,warning:e.warning,inverted:"","float-label":e.error?"We got an error":e.warning?"We got a warning":"Everything fine now",after:[{icon:"warning",error:!0,handler:function(){}},{icon:"priority_high",warning:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("p",{staticClass:"caption"},[e._v("Read-only")]),o("q-color",{attrs:{readonly:"","float-label":"Read-only color input"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{readonly:"",inverted:"",color:"secondary","float-label":"Read-only & inverted"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("p",{staticClass:"caption"},[e._v("Disabled")]),o("q-color",{attrs:{disable:"","float-label":"Disabled color input"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("q-color",{attrs:{disable:"",inverted:"",color:"primary","float-label":"Disabled & inverted"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}}),o("p",{staticClass:"caption"},[e._v("In a Field")]),o("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error2,callback:function(l){e.error2=l},expression:"error2"}}),o("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning2,callback:function(l){e.warning2=l},expression:"warning2"}}),o("q-field",{attrs:{helper:"What's your favourite name?",error:e.error2,"error-label":"Hey, we got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[o("q-color",{model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1),o("q-field",{attrs:{icon:"camera_alt",helper:"Your awesome helper",error:e.error2,"error-label":"We got an error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[o("q-color",{attrs:{"float-label":"Float Label"},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}})],1),o("br"),o("q-field",{attrs:{icon:"important_devices",label:"Playstation color",count:15,helper:"Some helper",error:e.error2,"error-label":"Wait, wait. Error!",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[o("q-color",{attrs:{inverted:"",placeholder:"On Field",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1),o("q-field",{attrs:{icon:"place",label:"Floor color",helper:"Some helper",error:e.error2,"error-label":"Some error",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[o("q-color",{attrs:{color:"secondary",inverted:"","stack-label":"Stack Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1),o("q-field",{attrs:{icon:"color_lens",label:"Wall color",helper:"This color will be used on the living room",error:e.error2,"error-label":"That's not a valid color",warning:e.warning2,"warning-label":"Hey, we got a warning"}},[o("q-color",{attrs:{inverted:"",color:"purple","float-label":"Float Label",after:[{icon:"arrow_forward",content:!0,handler:function(){}}]},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1),o("p",{staticClass:"caption"},[e._v("On a dark background")]),o("div",{staticClass:"dark-example"},[o("q-color",{attrs:{"float-label":"Colored",dark:"",color:"yellow",suffix:"TSP"},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-color",{attrs:{"float-label":"Colored",dark:"",color:"secondary",suffix:"TSP"},model:{value:e.modelHexa,callback:function(l){e.modelHexa=l},expression:"modelHexa"}}),o("q-field",{attrs:{icon:"wifi",label:"Wifi network",helper:"We need this for connecting you"}},[o("q-color",{attrs:{dark:"",color:"yellow","float-label":"Wifi name"},model:{value:e.modelHex,callback:function(l){e.modelHex=l},expression:"modelHex"}})],1)],1)],1)])},r=[];a._withStripped=!0;o("SRfc");var n=o("cDf5"),t=o.n(n),c=(o("lNCw"),{data:function(){return{modelHex:"#C7044B",modelHexa:"#F0FF1CBF",modelRgb:{r:112,g:204,b:55},modelRgba:{r:138,g:36,b:138,a:64},defaultValue:null,forceType:null,lazy:"#C7044B",error:!0,warning:!1,error2:!1,warning2:!1}},methods:{onInput:function(e){console.log("input",e,t()(e))}},computed:{customDisplayValue:function(){return this.modelHex?"Color: "+this.modelHex.slice(1).match(/.{1,2}/g).join("~"):"Pick a color"}},watch:{error:function(e){e&&(this.warning=!1)},warning:function(e){e&&(this.error=!1)},error2:function(e){e&&(this.warning2=!1)},warning2:function(e){e&&(this.error2=!1)}}}),i=c,s=o("KHd+"),d=Object(s["a"])(i,a,r,!1,null,null,null);l["default"]=d.exports},lNCw:function(e,l,o){}}]);