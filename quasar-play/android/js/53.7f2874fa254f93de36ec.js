webpackJsonp([53],{LA50:function(s,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7109"),t={methods:{show:function(s){var n=this;this.$q.loading.show(s),setTimeout(function(){n.$q.loading.hide()},3e3)},noMessage:function(){this.show()},customLoading:function(){this.show({spinner:o.QSpinnerFacebook,spinnerColor:"amber",spinnerSize:140,message:"Some important process is in progress. Hang on...",messageColor:"orange"})},withMessage:function(){this.show({message:"Some important process is in progress. Hang on..."})},changeMessage:function(){var s=this;this.$q.loading.show({message:"First message. Gonna change it in 3 seconds..."}),setTimeout(function(){s.show({spinner:o.QSpinnerGears,spinnerColor:"amber",message:"Updated message"})},3e3)}}},i=function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("q-page",{attrs:{padding:""}},[e("p",{staticClass:"caption"},[s._v("\n    Notify the user something is going on under the covers.\n  ")]),s._v(" "),e("div",{staticClass:"group"},[e("q-btn",{attrs:{push:"",color:"secondary"},on:{click:s.noMessage}},[s._v("\n      Show\n    ")]),s._v(" "),e("q-btn",{attrs:{push:"",color:"primary"},on:{click:s.withMessage}},[s._v("\n      Show With Message\n    ")])],1),s._v(" "),e("p",{staticClass:"caption"},[s._v("\n    ...with a custom spinner, colors and size.\n  ")]),s._v(" "),e("q-btn",{attrs:{push:"",color:"secondary"},on:{click:s.customLoading}},[s._v("\n    Show custom Loading\n  ")]),s._v(" "),e("p",{staticClass:"caption"},[s._v("\n    Change Message while Being Displayed\n  ")]),s._v(" "),e("q-btn",{attrs:{push:"",color:"secondary"},on:{click:s.changeMessage}},[s._v("\n    Show & Change\n  ")])],1)},a=[];i._withStripped=!0;var r=e("XyMi"),c=Object(r.a)(t,i,a,!1,null,null,null);c.options.__file="src/pages/showcase/progress/loading.vue";n.default=c.exports}});