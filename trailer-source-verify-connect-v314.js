
/*
 MY MEDIA ARCHIVE v314
 Trailer Source Verify Connect

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_VERIFY_CONNECT_V314 = {

    check:function(title){

      const movie =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!movie || !movie.source){
        return {
          ready:false,
          title:title
        };
      }

      return {
        ready:true,
        title:title,
        source:movie.source
      };
    }

  };

})();
