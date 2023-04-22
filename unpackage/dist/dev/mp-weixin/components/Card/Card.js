"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MyCardItem();
}
const MyCardItem = () => "../cardItem/cardItem.js";
const MyBanner = () => "../Banner/Banner.js";
const _sfc_main = {
  __name: "Card",
  props: ["title", "widthX"],
  setup(__props) {
    const { title, widthX = "50%" } = __props;
    common_vendor.defineComponent({ MyCardItem, MyBanner });
    console.log(widthX, "widthX-card");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t("—" + __props.title + "—"),
        b: common_vendor.p({
          widthX: __props.widthX
        }),
        c: common_vendor.p({
          widthX: __props.widthX
        }),
        d: common_vendor.p({
          widthX: __props.widthX
        }),
        e: common_vendor.p({
          widthX: __props.widthX
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/Card/Card.vue"]]);
wx.createComponent(Component);
