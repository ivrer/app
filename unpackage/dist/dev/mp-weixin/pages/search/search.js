"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_message2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_message + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    let share = common_vendor.ref(null);
    let messageText = common_vendor.ref("asdas");
    common_vendor.index.getLocation(
      {
        type: "wgs84",
        success: function(res) {
          console.log(res, "地理位置");
          messageText.value = "当前地址为111";
        },
        fali: () => {
          console.log("失败地理");
          messageText.value = "获取不到当前地址，程序不支持或是定位功能未开启";
        },
        complete: () => {
          console.log("完成地理");
        }
      }
    );
    common_vendor.onReady(() => {
      console.log("onready", messageText.value);
      share.value.open();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "info",
          message: common_vendor.unref(messageText),
          duration: 4e3
        }),
        b: common_vendor.sr(share, "5722946f-0", {
          "k": "share"
        }),
        c: common_vendor.p({
          type: "message",
          safeArea: true,
          backgroundColor: "#fff"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
