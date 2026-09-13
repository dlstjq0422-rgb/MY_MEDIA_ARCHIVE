
/*
 MY MEDIA ARCHIVE v350
 Trailer Real Source Batch

 Actual source data expansion stage.
 Existing UI/player structure preserved.
*/

(function(){

  window.TRAILER_REAL_SOURCE_BATCH_V350 = {

    add:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    },

    count:function(){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      return movies ? Object.keys(movies).length : 0;
    }

  };

})();
