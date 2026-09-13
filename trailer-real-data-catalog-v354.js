
/*
 MY MEDIA ARCHIVE v354
 Trailer Real Data Catalog

 Real trailer data catalog layer.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_DATA_CATALOG_V354 = {

    register:function(title, source, meta){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        meta: meta || {},
        status: "ready"
      };

      return true;
    },

    getAll:function(){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      return movies || {};
    }

  };

})();
