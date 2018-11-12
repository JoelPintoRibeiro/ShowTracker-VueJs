import SearchApi from "@/api";

const getDetailShow = async ({ commit, state, rootState }, idShow) => {
  rootState.isLoading = true;
  SearchApi.getShow(idShow).then(
    response => {
      debugger;
      commit("UPDATE_CURRENT_SHOW", response.data);
    },
    error => {
      console.log("Omagad : An error occurred.", error);
    }
  );
};

export { getDetailShow };
