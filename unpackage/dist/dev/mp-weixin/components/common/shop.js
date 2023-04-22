"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (MyBanner + MyCardItem)();
}
const MyBanner = () => "../Banner/Banner.js";
const MyCard = () => "../Card/Card.js";
const MyCardItem = () => "../cardItem/cardItem.js";
const _sfc_main = {
  __name: "shop",
  props: { title: { type: String, default: "推荐店铺" } },
  setup(__props) {
    common_vendor.defineComponent({ MyBanner, MyCard, MyCardItem });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t("—" + __props.title + "—"),
        b: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        }),
        c: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        }),
        d: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        }),
        e: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        }),
        f: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        }),
        g: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        }),
        h: common_vendor.p({
          widthX: "100%",
          imgH: "200rpx"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-886e3790"], ["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/components/common/shop.vue"]]);
wx.createComponent(Component);
