import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const defaultState = {
  shows: [],
  title: "default",
  searchVal: ""
};

const state = defaultState;

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
