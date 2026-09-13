
/*
 MY MEDIA ARCHIVE v303
 Trailer Movie Data Link

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_MOVIE_DATA_LINK_V303 = {

    link:function(movieTitle, trailerSource){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[movieTitle] = {
        source: trailerSource,
        status: "ready"
      };

      return true;
    },

    get:function(movieTitle){

      const item =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[movieTitle];

      return item ? item.source : null;
    }

  };

})();
