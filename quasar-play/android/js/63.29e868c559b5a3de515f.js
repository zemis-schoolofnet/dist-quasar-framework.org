webpackJsonp([63],{HtTH:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{items:[{},{},{},{},{},{}]}},methods:{refresher:function(e){var t=this;setTimeout(function(){e(),t.items.push({}),t.$q.notify("Item #"+t.items.length+" is new.")},1e3)}}},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-pull-to-refresh",{attrs:{handler:e.refresher}},[i("q-page",{staticClass:"bg-white",attrs:{padding:""}},[i("p",{staticClass:"caption"},[e._v("\n      Pull down to refresh on the content below.\n      On desktop it works by dragging the content down.\n    ")]),e._v(" "),e._l(e.items,function(t,n){return i("p",{key:e.items.length-n,staticClass:"caption"},[i("q-chip",{staticClass:"shadow-1",attrs:{square:"",color:"secondary"}},[e._v("\n        "+e._s(e.items.length-n)+"\n      ")]),e._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n    ")],1)})],2)],1)},o=[];s._withStripped=!0;var a=i("XyMi"),r=Object(a.a)(n,s,o,!1,null,null,null);r.options.__file="src/pages/showcase/navigation/pull-to-refresh.vue";t.default=r.exports}});