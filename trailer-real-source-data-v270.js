
/*
 MY MEDIA ARCHIVE v270
 Trailer Real Source Data Registry

 Additive only.
 This file contains trailer source records only.
 Existing archive pages, UI and player logic are untouched.
*/

window.TRAILER_REAL_SOURCE_DATA_V270 = {
  movies: [
    {
      title: "Avatar: Fire and Ash",
      source: "https://www.youtube.com/watch?v=nb_fFj_0rq8",
      status: "ready"
    },
    {
      title: "Mission: Impossible",
      source: "https://youtu.be/kLzsazwBanE",
      status: "ready"
    }
  ]
};

window.TRAILER_SOURCE_MAPPING_V258 =
  window.TRAILER_SOURCE_MAPPING_V258 || { movies:{} };

window.TRAILER_REAL_SOURCE_DATA_V270.movies.forEach(function(movie){
  window.TRAILER_SOURCE_MAPPING_V258.movies[movie.title] = {
    source: movie.source,
    status: movie.status
  };
});
