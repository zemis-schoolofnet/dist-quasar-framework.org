(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29,93],{flrz:function(a,s,t){},vuY9:function(a,s,t){"use strict";t.r(s);var n=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("q-page",{staticClass:"docs-slider row justify-center",attrs:{padding:""}},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[a._v("\n      Standard\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.standard)+" (0 to 50)\n        ")])],1)]),t("q-slider",{attrs:{min:0,max:50},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}}),t("q-slider",{attrs:{min:0,max:50,square:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}}),t("p",{staticClass:"caption"},[a._v("\n      With Floating Point Precision\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.precision)+" (0.1 to 1.5)\n        ")])],1)]),t("q-slider",{attrs:{min:.1,max:1.5,step:.1,decimals:1,color:"amber"},model:{value:a.precision,callback:function(s){a.precision=s},expression:"precision"}}),t("p",{staticClass:"caption"},[a._v("\n      With Step\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.step)+" (0 to 45, step 5)\n        ")])],1)]),t("q-slider",{attrs:{min:0,max:45,step:5,color:"purple"},model:{value:a.step,callback:function(s){a.step=s},expression:"step"}}),t("p",{staticClass:"caption"},[a._v("\n      With Label\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label)+" (-20 to 20, step 4)\n        ")])],1)]),t("q-slider",{attrs:{min:-20,max:20,step:4,label:"",color:"light-green"},model:{value:a.label,callback:function(s){a.label=s},expression:"label"}}),t("p",{staticClass:"caption"},[a._v("\n      Snaps to Steps\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.snap)+" (0 to 10, step 2)\n        ")])],1)]),t("q-slider",{attrs:{min:0,max:10,step:2,label:"",snap:"",color:"deep-orange"},model:{value:a.snap,callback:function(s){a.snap=s},expression:"snap"}}),t("p",{staticClass:"caption"},[a._v("\n      With Markers. Snaps to Steps\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.marker)+" (0 to 10, step 2)\n        ")])],1)]),t("q-slider",{attrs:{min:0,max:10,step:2,label:"",snap:"",markers:""},model:{value:a.marker,callback:function(s){a.marker=s},expression:"marker"}}),t("p",{staticClass:"caption"},[a._v("\n      Display Label Always\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label)+" (-20 to 20, step 4)\n        ")])],1)]),t("q-slider",{attrs:{min:-20,max:20,step:4,"label-always":"",color:"orange"},model:{value:a.label,callback:function(s){a.label=s},expression:"label"}}),t("p",{staticClass:"caption"},[a._v("\n      Custom Label Value\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label)+" (-20 to 20, step 4)\n        ")])],1)]),t("q-slider",{attrs:{"label-value":a.label+"px",min:-20,max:20,step:4,"label-always":"",color:"brown"},model:{value:a.label,callback:function(s){a.label=s},expression:"label"}}),t("p",{staticClass:"caption"},[a._v("\n      Lazy input\n      "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.lazy)+"\n        ")])],1)]),t("q-slider",{attrs:{value:a.lazy,min:0,max:45,step:5,color:"purple",label:""},on:{change:function(s){a.lazy=s}}}),t("p",{staticClass:"caption"},[a._v("Readonly State")]),t("q-slider",{attrs:{color:"secondary",min:0,max:50,readonly:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}}),t("p",{staticClass:"caption"},[a._v("Disabled State")]),t("q-slider",{attrs:{color:"secondary",min:0,max:50,disable:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}}),t("p",{staticClass:"caption"},[a._v("Error/Warning states")]),t("div",{staticClass:"q-ma-xs q-mb-md"},[t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:a.error,callback:function(s){a.error=s},expression:"error"}}),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:a.warning,callback:function(s){a.warning=s},expression:"warning"}})],1),t("q-slider",{attrs:{error:a.error,warning:a.warning,min:0,max:50},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}}),t("q-slider",{attrs:{error:a.error,warning:a.warning,min:0,max:50,"label-always":""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}}),t("p",{staticClass:"caption"},[a._v("In a Field")]),t("q-field",{attrs:{icon:"local_atm",label:"Payment",helper:"Amount you are willing to spend (in USD)"}},[t("q-slider",{staticClass:"dark",attrs:{min:0,max:50,label:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}})],1),t("p",{staticClass:"caption"},[a._v("In a List")]),t("q-list",[t("q-item",[t("q-item-side",{attrs:{icon:"volume_down"}}),t("q-item-main",[t("q-slider",{attrs:{color:"secondary",min:0,max:50,label:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}})],1),t("q-item-side",{attrs:{right:"",icon:"volume_up"}})],1),t("q-item",[t("q-item-side",{attrs:{icon:"brightness_low"}}),t("q-item-main",[t("q-slider",{attrs:{color:"orange",min:0,max:50,label:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}})],1),t("q-item-side",{attrs:{right:"",icon:"brightness_high"}})],1),t("q-item",[t("q-item-side",{attrs:{icon:"mic"}}),t("q-item-main",[t("q-slider",{attrs:{color:"black",min:0,max:50,label:""},model:{value:a.standard,callback:function(s){a.standard=s},expression:"standard"}})],1)],1)],1)],1)])},e=[];n._withStripped=!0;t("flrz");var l={data:function(){return{standard:20,precision:.4,step:30,label:5,snap:2,marker:6,lazy:6,error:!0,warning:!1}},watch:{error:function(a){a&&(this.warning=!1)},warning:function(a){a&&(this.error=!1)}}},r=l,i=t("KHd+"),o=Object(i["a"])(r,n,e,!1,null,null,null);s["default"]=o.exports}}]);