
/*
 MY MEDIA ARCHIVE v294
 Trailer Real Source Batch 2

 Trailer-only data update.
 Existing archive UI/player/modal untouched.
*/

(function(){

  const sources = [
    /*
      Add real movie trailer records:

      {
        title: "Movie Title",
        source: "https://www.youtube.com/embed/VIDEO_ID?autoplay=1",
        status: "ready"
      }
    */
  ];

  window.TRAILER_REAL_SOURCE_BATCH2_V294 = sources;

  window.TRAILER_SOURCE_MAPPING_V258 =
    window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

  sources.forEach(function(movie){
    window.TRAILER_SOURCE_MAPPING_V258.movies[movie.title] = movie;
  });

})();
