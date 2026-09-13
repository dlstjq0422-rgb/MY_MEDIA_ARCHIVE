
/*
 MY MEDIA ARCHIVE v356
 Trailer Real Data Link

 Real trailer data link layer.
 Existing UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_DATA_LINK_V356 = {

    link:function(movie){

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

    linkBatch:function(list){

      (list || []).forEach(function(movie){
        this.link(movie);
      }, this);

      return true;
    }

  };

})();
