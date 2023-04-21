"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (MyNavBar + MySwiper + MyBanner + MyIcons + MyRecommend + MyCard + MyHot)();
}
const MySwiper = () => "../../components/swiper/index.js";
const MyNavBar = () => "../../components/navbar/index.js";
const MyRecommend = () => "../../components/recommend/index.js";
const MyCard = () => "../../components/Card/Card.js";
const MyBanner = () => "../../components/Banner/Banner.js";
const MyIcons = () => "../../components/Icons/Icons.js";
const MyHot = () => "../../components/Hot/Hot.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.defineComponent({ MySwiper, MyCard, MyNavBar, MyRecommend, MyBanner, MyIcons, MyHot });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "猜你喜欢"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
