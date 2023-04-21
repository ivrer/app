"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MyCard();
}
const MyCard = () => "../Card/Card.js";
const _sfc_main = {
  __name: "Hot",
  setup(__props) {
    common_vendor.defineComponent({ MyCard });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "热销商品",
          widthX: "33%"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/Hot/Hot.vue"]]);
wx.createComponent(Component);
