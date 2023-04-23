"use strict";
const common_vendor = require("../common/vendor.js");
const store_home_index = require("./home/index.js");
const const_index = require("../const/index.js");
let store = common_vendor.createStore(
  {
    state: {},
    actions: {
      async getWindowInfo({ commit }, params) {
        let result = await common_vendor.index.getWindowInfo();
        if (result) {
          commit(const_index.SAVEWINDOWINFO, result);
          console.log("action reault", result);
        }
      },
      async getSystemInfo({ commit }, params) {
        common_vendor.index.getSystemInfo({ sucees: (res) => {
          commit(const_index.SAVESYSTEMINFO, res);
        } });
      }
    },
    mutations: {
      SAVEWINDOWINFO(state, data) {
        state.windowInfo = data;
      },
      SAVESYSTEMINFO(state, data) {
        state.systemInfo = data;
      }
    },
    modules: { home: store_home_index.home }
  }
);
exports.store = store;
