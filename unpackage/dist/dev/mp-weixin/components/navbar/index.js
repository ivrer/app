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
    let goSearch = () => {
      console.log("route");
      common_vendor.index.redirectTo({
        url: "../search/search"
      });
    };
    console.log("screenTop:", screenTop);
    return (_ctx, _cache) => {
      return {
        a: `${__props.screenTop}`,
        b: common_vendor.t("newPin"),
        c: common_vendor.o((...args) => common_vendor.unref(goSearch) && common_vendor.unref(goSearch)(...args))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/navbar/index.vue"]]);
wx.createComponent(Component);
