"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _component_uni_fab = common_vendor.resolveComponent("uni-fab");
  (_component_uni_card + _component_uni_section + _component_uni_fab)();
}
if (!Math) {
  MyNavBar();
}
const MyNavBar = () => "../../components/navbar/index.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    common_vendor.defineComponent({ MyNavBar });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["is-shadow"]: false,
          ["is-full"]: true,
          title: "组件卡片"
        }),
        b: common_vendor.p({
          ["is-shadow"]: false
        }),
        c: common_vendor.p({
          title: "基础卡片",
          type: "line"
        }),
        d: common_vendor.o(_ctx.trigger),
        e: common_vendor.p({
          pattern: _ctx.pattern,
          content: _ctx.content,
          horizontal: _ctx.horizontal,
          vertical: _ctx.vertical,
          direction: _ctx.direction
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98a9e0b2"], ["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
