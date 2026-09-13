
/*
 MY MEDIA ARCHIVE v353
 Trailer Real Data Expansion

 Real trailer data expansion layer.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_DATA_EXPANSION_V353 = {

    register:function(items){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      items.forEach(function(item){

        if(item && item.title && item.source){

          window.TRAILER_SOURCE_MAPPING_V258.movies[item.title] = {
            source:item.source,
            status:"ready"
          };

        }

      });

      return true;
    },

    total:function(){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      return movies ? Object.keys(movies).length : 0;
    }

  };

})();
