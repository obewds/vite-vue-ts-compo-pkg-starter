(function(e,t){typeof exports=="object"&&typeof module!="undefined"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,e.ViteVueTsCompoPkgStarter=t(e.Vue))})(this,function(e){"use strict";const t=e.createTextVNode("ViteVueTsCompoPkgStarter");return e.defineComponent({props:{text:{default:""}},setup(n){return(o,r)=>(e.openBlock(),e.createElementBlock("div",null,[n.text?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(n.text),1)],64)):e.renderSlot(o.$slots,"default",{key:1},()=>[t])]))}})});
