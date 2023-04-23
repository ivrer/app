"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: {
    screenTop: {
      type: String,
      default: "100rpx"
    }
  },
  setup(__props) {
    const { screenTop } = __props;
    console.log("screenTop:", screenTop);
    return (_ctx, _cache) => {
      return {
        a: `${__props.screenTop}`,
        b: common_vendor.t("newPin")
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/navbar/index.vue"]]);
wx.createComponent(Component);
