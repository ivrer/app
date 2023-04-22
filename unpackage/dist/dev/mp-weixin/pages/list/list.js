"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_card2 + _easycom_uni_section2 + _easycom_uni_fab2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (MyNavBar + _easycom_uni_card + _easycom_uni_section + _easycom_uni_fab + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const MyNavBar = () => "../../components/navbar/index.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    common_vendor.defineComponent({ MyNavBar });
    let alertDialog = common_vendor.ref(null);
    let status = common_vendor.reactive({
      fab: {
        fabShow: true,
        pattern: {
          color: "#7A7E83",
          backgroundColor: "#fff",
          selectedColor: "#007AFF",
          buttonColor: "#fff",
          iconColor: "#000000"
        }
      },
      uploadImg: {
        src: "/static/images/upload.jpg"
      }
    });
    let content = [
      {
        iconPath: "/static/images/album.png",
        selectedIconPath: "/static/images/album.png",
        text: "相册",
        active: false
      },
      {
        iconPath: "/static/images/fav.png",
        selectedIconPath: "/static/images/fav.png",
        text: "收藏",
        active: false
      },
      {
        iconPath: "/static/images/download.png",
        selectedIconPath: "/static/images/download.png",
        text: "下载",
        active: false
      }
    ];
    let trigger = (event) => {
      console.log("trigger", event);
      if (event.index === 0) {
        common_vendor.index.chooseImage({
          success: (chooseImageRes) => {
            chooseImageRes.tempFilePaths;
            console.log(chooseImageRes, "chooseImageRes");
            status.uploadImg.src = chooseImageRes.tempFilePaths[0];
          }
        });
      }
    };
    let fabClick = (event) => {
      console.log(event, "fabClick");
    };
    let clearTrigger = () => {
      console.log("clearTrigger");
      status.fab.fabShow = !status.fab.fabShow;
      console.log(status.fab.fabShow, "fabshow");
    };
    let dialogConfirm = (value) => {
      console.log(value, "confirm");
    };
    let dialogClose = (value) => {
      console.log(value, "close");
    };
    let download = () => {
      status.uploadImg.src;
      common_vendor.index.getSystemInfo({ success: (res) => {
        let result = res;
        downloadFile(result);
      } });
      function downloadFile(res) {
        if (res.platForm)
          ;
      }
      alertDialog.value.open();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["is-shadow"]: false,
          ["is-full"]: true,
          title: "组件卡片"
        }),
        b: common_vendor.p({
          ["is-shadow"]: false
        }),
        c: common_vendor.p({
          title: "基础卡片",
          type: "line"
        }),
        d: common_vendor.o(common_vendor.unref(trigger)),
        e: common_vendor.o(common_vendor.unref(fabClick)),
        f: common_vendor.p({
          pattern: common_vendor.unref(status).fab.pattern,
          content: common_vendor.unref(content),
          horizontal: "left",
          vertical: "bottom",
          direction: "horizontal",
          MyfabShow: common_vendor.unref(status).fab.fabShow
        }),
        g: common_vendor.o((...args) => common_vendor.unref(clearTrigger) && common_vendor.unref(clearTrigger)(...args)),
        h: common_vendor.o((...args) => common_vendor.unref(download) && common_vendor.unref(download)(...args)),
        i: common_vendor.unref(status).uploadImg.src,
        j: common_vendor.o(common_vendor.unref(dialogConfirm)),
        k: common_vendor.o(common_vendor.unref(dialogClose)),
        l: common_vendor.p({
          type: "success",
          cancelText: "关闭",
          confirmText: "同意",
          title: "通知",
          content: "确认下载该文件吗？"
        }),
        m: common_vendor.sr(alertDialog, "195917ef-5", {
          "k": "alertDialog"
        }),
        n: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
