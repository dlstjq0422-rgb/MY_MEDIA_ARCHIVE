
/*
 MY MEDIA ARCHIVE v297
 Trailer Real Play Bind

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_PLAY_BIND_V297 = {

    bindPlay:function(title){

      const source =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!source || !source.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = source.source;
      window.CURRENT_TRAILER_TITLE = title;

      const iframe =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(iframe){
        iframe.src = source.source;
      }

      return true;
    }

  };

})();
