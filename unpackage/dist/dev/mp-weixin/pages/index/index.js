"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (MyNavBar + MyTopbar + MySwiper + MyBanner + MyIcons + MyRecommend + MyCard + MyHot + MyShop)();
}
const MySwiper = () => "../../components/swiper/index.js";
const MyNavBar = () => "../../components/navbar/index.js";
const MyRecommend = () => "../../components/recommend/index.js";
const MyCard = () => "../../components/Card/Card.js";
const MyBanner = () => "../../components/Banner/Banner.js";
const MyIcons = () => "../../components/Icons/Icons.js";
const MyHot = () => "../../components/Hot/Hot.js";
const MyShop = () => "../../components/common/shop.js";
const MyTopbar = () => "../../components/Topbar/Topbar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.defineComponent({ MySwiper, MyCard, MyNavBar, MyRecommend, MyBanner, MyIcons, MyHot, MyShop, MyTopbar });
    let store = common_vendor.useStore();
    let status = common_vendor.reactive(
      {
        swiperItemHeight: "",
        windowInfo: {
          screenTop: "100rpx"
        }
      }
    );
    common_vendor.onReady(() => {
      let view = common_vendor.index.createSelectorQuery().select(".content");
      console.log(view, "onload view");
      view.boundingClientRect((data) => {
        if (data.height) {
          status.swiperItemHeight = data.height + "px";
        }
      }).exec();
      store.dispatch("getWindowInfo").then(() => {
        if (store.state.windowInfo) {
          status.windowInfo.screenTop = store.state.windowInfo.screenTop + "rpx";
          console.log(store.state.windowInfo, "page state");
        }
      });
      store.dispatch("getSystemInfo");
      console.group("1");
      console.log("uni", common_vendor.index);
      console.log("getCurrentPage", common_vendor.index, getCurrentPages());
      console.log(
        "getSystemInfo",
        common_vendor.index.getSystemInfo({
          success: function(res) {
            console.log(res.appName);
          }
        })
      );
      console.log("getwindowInfo", common_vendor.index.getWindowInfo());
      console.groupEnd("2");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          screenTop: common_vendor.unref(status).windowInfo.screenTop
        }),
        b: common_vendor.p({
          title: "猜你喜欢"
        }),
        c: `${common_vendor.unref(status).swiperItemHeight}`
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
