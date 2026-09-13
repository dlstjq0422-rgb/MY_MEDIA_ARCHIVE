
/*
 MY MEDIA ARCHIVE v351
 Trailer Source Data Ready

 Trailer data layer only.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_DATA_READY_V351 = {

    registerBatch:function(items){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      items.forEach(function(item){
        if(item.title && item.source){
          window.TRAILER_SOURCE_MAPPING_V258.movies[item.title] = {
            source:item.source,
            status:"ready"
          };
        }
      });

      return true;
    },

    list:function(){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      return movies ? Object.keys(movies) : [];
    }

  };

})();
