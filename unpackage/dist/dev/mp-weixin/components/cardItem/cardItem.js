"use strict";
const common_assets = require("../../common/assets.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "cardItem",
  props: ["widthX"],
  setup(__props) {
    const { widthX = "50%" } = __props;
    console.log("jieshou", widthX);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: `${__props.widthX}`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/cardItem/cardItem.vue"]]);
wx.createComponent(Component);
