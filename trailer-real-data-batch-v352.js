
/*
 MY MEDIA ARCHIVE v352
 Trailer Real Data Batch

 Real trailer source data layer.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_DATA_BATCH_V352 = {

    addMovie:function(title, source){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
        source: source,
        status: "ready"
      };

      return true;
    },

    addMany:function(list){

      list.forEach(function(item){
        if(item.title && item.source){
          window.TRAILER_REAL_DATA_BATCH_V352.addMovie(
            item.title,
            item.source
          );
        }
      });

      return true;
    }

  };

})();
