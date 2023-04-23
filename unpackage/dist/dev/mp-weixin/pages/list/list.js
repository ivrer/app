"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_card2 + _easycom_uni_fab2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_fab + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const MyNavBar = () => "../../components/navbar/index.js";
const _sfc_main = {
  __name: "list",
  setup(__props) {
    common_vendor.defineComponent({ MyNavBar });
    let store = common_vendor.useStore();
    let alertDialog = common_vendor.ref(null);
    let nodeFab = common_vendor.ref(null);
    let nodeMoveBox = common_vendor.ref(null);
    common_vendor.ref(null);
    let movePosition = common_vendor.reactive({ moveTop: "400rpx", moveLeft: "200rpx" });
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
    let moveFab = (e) => {
      console.log(e, "moveFab");
    };
    let fabTouchmove = (params) => {
      let x = params.touches[0].pageX;
      let y = params.touches[0].pageY;
      console.log(x, y);
    };
    let BoxTouchmove = (e) => {
      var _a;
      common_vendor.index.stopPullDownRefresh();
      let pageX = e.touches[0].pageX;
      let pageY = e.touches[0].pageY;
      if ((_a = nodeMoveBox.value) == null ? void 0 : _a.$el) {
        let el2 = nodeMoveBox.value.$el;
        let x = e.touches[0].pageX - el2.offsetWidth / 2 + "px";
        let y = e.touches[0].pageY - el2.offsetHeight / 2 + "px";
        el2.style.top = y;
        el2.style.left = x;
      }
      let el = common_vendor.index.createSelectorQuery().select(".moveBox");
      el.boundingClientRect((data) => {
        if (data.height) {
          movePosition.moveTop = pageY - data.height / 2 + "px";
          movePosition.moveLeft = pageX - data.width / 2 + "px";
        }
      }).exec();
    };
    common_vendor.onReady(() => {
      let menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      console.log("menuButtonInfo:", menuButtonInfo);
      console.log("store.state.windowInfo:", store.state.windowInfo);
      common_vendor.index.request({
        url: "http://localhost:5566/detail/productDetail",
        //仅为示例，并非真实接口地址。
        methods: "GET",
        header: {
          "custom-header": "hello"
          //自定义请求头信息
        },
        success: (res) => {
          console.log("request");
          console.log(res.data);
        },
        complete: () => {
          console.log("我发送了请求");
        }
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["is-shadow"]: false,
          title: "组件卡片"
        }),
        b: common_vendor.sr(nodeFab, "98a9e0b2-1", {
          "k": "nodeFab"
        }),
        c: common_vendor.o(common_vendor.unref(trigger)),
        d: common_vendor.o(common_vendor.unref(fabClick)),
        e: common_vendor.o(common_vendor.unref(moveFab)),
        f: common_vendor.o(common_vendor.unref(fabTouchmove)),
        g: common_vendor.p({
          pattern: common_vendor.unref(status).fab.pattern,
          content: common_vendor.unref(content),
          horizontal: "left",
          vertical: "bottom",
          direction: "horizontal",
          MyfabShow: common_vendor.unref(status).fab.fabShow
        }),
        h: common_vendor.o((...args) => common_vendor.unref(clearTrigger) && common_vendor.unref(clearTrigger)(...args)),
        i: common_vendor.o((...args) => common_vendor.unref(download) && common_vendor.unref(download)(...args)),
        j: common_vendor.unref(status).uploadImg.src,
        k: common_vendor.o(common_vendor.unref(dialogConfirm)),
        l: common_vendor.o(common_vendor.unref(dialogClose)),
        m: common_vendor.p({
          type: "success",
          cancelText: "关闭",
          confirmText: "同意",
          title: "通知",
          content: "确认下载该文件吗？"
        }),
        n: common_vendor.sr(alertDialog, "98a9e0b2-2", {
          "k": "alertDialog"
        }),
        o: common_vendor.p({
          type: "dialog"
        }),
        p: common_vendor.o((...args) => common_vendor.unref(BoxTouchmove) && common_vendor.unref(BoxTouchmove)(...args)),
        q: `${common_vendor.unref(movePosition).moveTop}`,
        r: `${common_vendor.unref(movePosition).moveLeft}`
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98a9e0b2"], ["__file", "C:/Users/张小兴/Documents/HBuilderProjects/uniapp-shabi1/pages/list/list.vue"]]);
wx.createPage(MiniProgramPage);
