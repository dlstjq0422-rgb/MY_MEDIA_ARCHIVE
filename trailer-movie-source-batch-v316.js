
/*
 MY MEDIA ARCHIVE v316
 Trailer Movie Source Batch

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_MOVIE_SOURCE_BATCH_V316 = {

    register:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    },

    has:function(title){

      return !!(
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title]
      );

    }

  };

})();
