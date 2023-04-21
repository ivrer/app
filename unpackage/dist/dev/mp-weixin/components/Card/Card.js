"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MyCardItem();
}
const MyCardItem = () => "../cardItem/cardItem.js";
const _sfc_main = {
  __name: "Card",
  props: ["title"],
  setup(__props) {
    common_vendor.defineComponent({ MyCardItem });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t("—" + __props.title + "—")
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/Card/Card.vue"]]);
wx.createComponent(Component);
