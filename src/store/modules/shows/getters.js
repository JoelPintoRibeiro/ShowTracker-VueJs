const selectedShows = state => selectedGenre => {
  if (selectedGenre.length === 0) {
    return state.shows;
  } else {
    return state.shows.filter(val => {
      return (
        selectedGenre.filter(genre => -1 !== val.genre_ids.indexOf(genre))
          .length > 0
      );
    });
  }
};

export { selectedShows };
