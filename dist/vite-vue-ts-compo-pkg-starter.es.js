import { defineComponent, openBlock, createElementBlock, Fragment, createTextVNode, toDisplayString, renderSlot } from "vue";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("ViteVueTsCompoPkgStarter");
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    text: { default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        __props.text ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(__props.text), 1)
        ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
          _hoisted_1
        ])
      ]);
    };
  }
});
export { _sfc_main as ViteVueTsCompoPkgStarter };
