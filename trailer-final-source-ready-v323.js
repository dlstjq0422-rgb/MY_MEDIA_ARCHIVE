
/*
 MY MEDIA ARCHIVE v323
 Trailer Final Source Ready

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_SOURCE_READY_V323 = {

    register:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    },

    ready:function(title){

      const movie =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      return !!(movie && movie.source);
    }

  };

})();
