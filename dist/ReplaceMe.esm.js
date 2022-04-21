import { defineComponent, openBlock, createElementBlock, Fragment, createTextVNode, toDisplayString, renderSlot } from 'vue';

var script = defineComponent({

        name: 'ReplaceMe',

        // components: {},

        props: {
            text: {
                type: String,
                default: '',
            },
        },

        // setup(){},

    });

const _hoisted_1 = /*#__PURE__*/createTextVNode("ReplaceMe");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, [
    (_ctx.text)
      ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString(_ctx.text), 1 /* TEXT */)
        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
          _hoisted_1
        ])
  ]))
}

script.render = render;
script.__file = "src/ReplaceMe.vue";

export { script as default };
