(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{szHE:function(s,n,e){"use strict";e.r(n);var o=function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("q-page",{attrs:{padding:""}},[e("p",{staticClass:"caption"},[s._v("\n    Notify the user something is going on under the covers.\n  ")]),s._v(" "),e("div",{staticClass:"group"},[e("q-btn",{attrs:{push:"",color:"secondary"},on:{click:s.noMessage}},[s._v("\n      Show\n    ")]),s._v(" "),e("q-btn",{attrs:{push:"",color:"primary"},on:{click:s.withMessage}},[s._v("\n      Show With Message\n    ")])],1),s._v(" "),e("p",{staticClass:"caption"},[s._v("\n    ...with a custom spinner, colors and size.\n  ")]),s._v(" "),e("q-btn",{attrs:{push:"",color:"secondary"},on:{click:s.customLoading}},[s._v("\n    Show custom Loading\n  ")]),s._v(" "),e("p",{staticClass:"caption"},[s._v("\n    Change Message while Being Displayed\n  ")]),s._v(" "),e("q-btn",{attrs:{push:"",color:"secondary"},on:{click:s.changeMessage}},[s._v("\n    Show & Change\n  ")])],1)},t=[];o._withStripped=!0;var i=e("5/OS"),a={methods:{show:function(s){var n=this;this.$q.loading.show(s),setTimeout(function(){n.$q.loading.hide()},3e3)},noMessage:function(){this.show()},customLoading:function(){this.show({spinner:i["QSpinnerFacebook"],spinnerColor:"amber",spinnerSize:140,message:"Some important process is in progress. Hang on...",messageColor:"orange"})},withMessage:function(){this.show({message:"Some important process is in progress. Hang on..."})},changeMessage:function(){var s=this;this.$q.loading.show({message:"First message. Gonna change it in 3 seconds..."}),setTimeout(function(){s.show({spinner:i["QSpinnerGears"],spinnerColor:"amber",message:"Updated message"})},3e3)}}},r=a,c=e("crz2"),h=Object(c["a"])(r,o,t,!1,null,null,null);n["default"]=h.exports}}]);