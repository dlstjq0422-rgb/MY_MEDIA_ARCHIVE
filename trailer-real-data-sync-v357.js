
/*
 MY MEDIA ARCHIVE v357
 Trailer Real Data Sync

 Real trailer data synchronization layer.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_DATA_SYNC_V357 = {

    sync:function(items){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      (items || []).forEach(function(item){

        if(item && item.title && item.source){

          window.TRAILER_SOURCE_MAPPING_V258.movies[item.title] = {
            source:item.source,
            meta:item.meta || {},
            status:"ready"
          };

        }

      });

      return true;
    },

    readyCount:function(){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!movies){
        return 0;
      }

      return Object.values(movies)
        .filter(function(movie){
          return movie && movie.source;
        }).length;
    }

  };

})();
