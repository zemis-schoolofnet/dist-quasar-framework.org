webpackJsonp([65],{dicg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[n("p",{staticClass:"caption"},[n("span",{staticClass:"desktop-only"},[t._v("\n        Right click on the colored area below.\n        "),n("br"),t._v("\n        On a real mobile device it works different by opening a minimized Modal triggered by a long tap.\n      ")]),t._v(" "),n("span",{staticClass:"mobile-only"},[t._v("\n        Long Tap on the colored area below (not on header though).\n        "),n("br"),t._v("\n        On a desktop it works different by opening a Popover.\n      ")])]),t._v(" "),n("blockquote",[n("small",[t._v("\n        Works with any elements you want. It doesn't have to be a List.\n      ")])]),t._v(" "),n("p",{staticClass:"caption"},[n("span",{staticClass:"mobile-only"},[t._v("\n        On a desktop browser user\n      ")]),t._v(" "),n("span",{staticClass:"desktop-only"},[t._v("\n        User\n      ")]),t._v("\n      can dismiss the Context Menu\n      by hitting the <ESCAPE> key.\n    ")]),t._v(" "),n("div",{staticClass:"bg-secondary text-white row flex-center",staticStyle:{height:"300px","margin-top":"40px"}},[t._v("\n      Target area\n\n      "),n("q-context-menu",[n("q-list",{staticStyle:{"min-width":"150px","max-height":"300px"},attrs:{link:"",separator:"","no-border":""}},t._l(10,function(e){return n("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],key:e,nativeOn:{click:function(e){t.showNotify()}}},[n("q-item-main",{attrs:{label:"Label",sublabel:"Value"}})],1)}))],1)],1)])])},i=[];a._withStripped=!0;var s=n("XyMi"),o=Object(s.a)({methods:{showNotify:function(){this.$q.notify((this.$q.platform.is.desktop?"Clicked":"Tapped")+" on a context menu item.")}}},a,i,!1,null,null,null);o.options.__file="src/pages/showcase/navigation/context-menu.vue";e.default=o.exports}});