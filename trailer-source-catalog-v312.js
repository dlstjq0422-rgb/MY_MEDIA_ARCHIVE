
/*
 MY MEDIA ARCHIVE v312
 Trailer Source Catalog

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_CATALOG_V312 = {

    register:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

    },

    count:function(){

      return Object.keys(
        window.TRAILER_SOURCE_MAPPING_V258?.movies || {}
      ).length;

    }

  };

})();
