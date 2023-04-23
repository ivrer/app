"use strict";
const common_vendor = require("../../common/vendor.js");
const const_index = require("../../const/index.js");
const state = {};
const getters = {};
const actions = {
  async getWindowInfo({ commit }, params) {
    let result = await common_vendor.index.getWindowInfo();
    if (result) {
      commit(const_index.SAVEWINDOWINFO, result);
      console.log("action reault", result);
    }
  }
};
const mutations = {
  SAVEWINDOWINFO(state2, data) {
    state2.windowInfo = data;
  }
};
const home = { state, getters, actions, mutations };
exports.home = home;
