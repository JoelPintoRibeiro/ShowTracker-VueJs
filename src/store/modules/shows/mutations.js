const UPDATE_SHOW_LIST = (state, showList) => {
    state.shows = showList;
}

const UPDATE_TITLE = (state, title) => {
    state.title = title;
}

export {
    UPDATE_SHOW_LIST,
    UPDATE_TITLE
} 