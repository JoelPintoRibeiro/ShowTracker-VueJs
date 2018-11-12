const UPDATE_SHOW_LIST = (state, showList) => {
  state.shows = showList;
};
const UPDATE_CURRENT_SHOW = (state, show) => {
  state.currentShow = show;
};
const UPDATE_TITLE = (state, title) => {
  state.title = title;
};
const UPDATE_SEARCH_VAL = (state, searchVal) => {
  state.searchVal = searchVal;
};

export {
  UPDATE_SHOW_LIST,
  UPDATE_TITLE,
  UPDATE_SEARCH_VAL,
  UPDATE_CURRENT_SHOW
};
