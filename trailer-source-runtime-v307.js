
/*
 MY MEDIA ARCHIVE v307
 Trailer Source Runtime

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_RUNTIME_V307 = {

    load:function(title){

      const movie =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!movie || !movie.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = movie.source;
      window.CURRENT_TRAILER_TITLE = title;

      return movie.source;
    }

  };

})();
