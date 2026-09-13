
/*
 MY MEDIA ARCHIVE v355
 Trailer Data Import Ready

 Data import layer only.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_DATA_IMPORT_READY_V355 = {

    import:function(items){

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

    count:function(){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      return movies ? Object.keys(movies).length : 0;
    }

  };

})();
