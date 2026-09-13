
/*
 MY MEDIA ARCHIVE v310
 Trailer Real Play Complete

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_REAL_PLAY_COMPLETE_V310 = {

    open:function(title){

      const movie =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!movie || !movie.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = movie.source;
      window.CURRENT_TRAILER_TITLE = title;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.setAttribute("src", movie.source);
      }

      return true;
    }

  };

})();
