(function(t,e){typeof exports=="object"&&typeof module!="undefined"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t.ViteVueTsCompoPkgStarter={},t.Vue))})(this,function(t,e){"use strict";const o=e.createTextVNode("ReplaceMe"),i=e.defineComponent({props:{text:{default:""}},setup(n){return(r,d)=>(e.openBlock(),e.createElementBlock("div",null,[n.text?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(n.text),1)],64)):e.renderSlot(r.$slots,"default",{key:1},()=>[o])]))}});t.ReplaceMe=i,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});