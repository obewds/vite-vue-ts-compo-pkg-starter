'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({

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

const _hoisted_1 = /*#__PURE__*/vue.createTextVNode("ReplaceMe");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (_ctx.text)
      ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
      : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
          _hoisted_1
        ])
  ]))
}

script.render = render;
script.__file = "src/ReplaceMe.vue";

exports.ReplaceMe = script;
