"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Topbar",
  setup(__props) {
    let item = [{ "title": "推荐" }, { "title": "运动健康" }, { "title": "潮流运动" }, { "title": "衣物鞋帽" }, { "title": "运动健康" }, { "title": "潮流运动" }, { "title": "运动" }];
    let status = common_vendor.reactive({ "active": 0 });
    let changeColor = (index) => {
      status.active = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(item), (el, index, i0) => {
          return {
            a: common_vendor.t(el.title),
            b: common_vendor.n(index == common_vendor.unref(status).active ? "activeText" : "peace"),
            c: "top" + index,
            d: index,
            e: common_vendor.o(($event) => common_vendor.unref(changeColor)(index), index)
          };
        }),
        b: "top" + common_vendor.unref(status).active
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/Topbar/Topbar.vue"]]);
wx.createComponent(Component);
