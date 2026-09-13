
/*
 MY MEDIA ARCHIVE v317
 Trailer Real Source Expansion

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_SOURCE_EXPANSION_V317 = {

    register:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    }

  };

})();
