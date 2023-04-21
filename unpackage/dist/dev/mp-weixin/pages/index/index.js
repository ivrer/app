"use strict";
const common_vendor = require("../../common/vendor.js");
const MySwiper = () => "../../components/swiper/index.js";
const MyNavBar = () => "../../components/navbar/index.js";
const MyRecommend = () => "../../components/recommend/index.js";
const _sfc_main = {
  data() {
    return {
      title: "Helloxczxc"
    };
  },
  components: { MySwiper, MyNavBar, MyRecommend },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_MyNavBar = common_vendor.resolveComponent("MyNavBar");
  const _component_MySwiper = common_vendor.resolveComponent("MySwiper");
  const _component_MyRecommend = common_vendor.resolveComponent("MyRecommend");
  (_component_MyNavBar + _component_MySwiper + _component_MyRecommend)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
