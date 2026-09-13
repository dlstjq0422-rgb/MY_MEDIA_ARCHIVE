
/*
 MY MEDIA ARCHIVE v358
 Trailer Real Data Complete

 Real trailer data completion layer.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_DATA_COMPLETE_V358 = {

    register:function(movie){

      window.TRAILER_SOURCE_MAPPING_V258 =
        window.TRAILER_SOURCE_MAPPING_V258 || {movies:{}};

      if(!movie || !movie.title || !movie.source){
        return false;
      }

      window.TRAILER_SOURCE_MAPPING_V258.movies[movie.title] = {
        source: movie.source,
        meta: movie.meta || {},
        status:"ready"
      };

      return true;
    },

    registerBatch:function(list){

      (list || []).forEach(function(movie){
        this.register(movie);
      }, this);

      return true;
    }

  };

})();
