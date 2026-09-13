
/*
 MY MEDIA ARCHIVE v280
 Trailer Movie Data Connect

 Actual movie trailer records are managed here.
 Existing archive UI/player/modal remain untouched.
*/

(function(){

  window.TRAILER_MOVIE_DATA_V280 = [
    /*
      Add movie records in this format:

      {
        title: "Movie Title",
        source: "https://www.youtube.com/embed/VIDEO_ID?autoplay=1",
        status: "ready"
      }
    */
  ];

  window.TRAILER_MOVIE_DATA_V280.forEach(function(movie){

    window.TRAILER_SOURCE_MAPPING_V258 =
      window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

    window.TRAILER_SOURCE_MAPPING_V258.movies[movie.title] = {
      source: movie.source,
      status: movie.status
    };

  });

})();
