import { defineComponent as a, openBlock as t, createElementBlock as o, Fragment as s, createTextVNode as r, toDisplayString as i, renderSlot as l } from "vue";
const m = /* @__PURE__ */ r("ViteVueTsCompoPkgStarter"), u = /* @__PURE__ */ a({
  __name: "ViteVueTsCompoPkgStarter",
  props: {
    text: { default: "" }
  },
  setup(e) {
    return (n, c) => (t(), o("div", null, [
      e.text ? (t(), o(s, { key: 0 }, [
        r(i(e.text), 1)
      ], 64)) : l(n.$slots, "default", { key: 1 }, () => [
        m
      ])
    ]));
  }
});
export {
  u as ViteVueTsCompoPkgStarter
};
