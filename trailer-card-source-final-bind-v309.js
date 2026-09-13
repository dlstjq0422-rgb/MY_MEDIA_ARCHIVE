
/*
 MY MEDIA ARCHIVE v309
 Trailer Card Source Final Bind

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_CARD_SOURCE_FINAL_BIND_V309 = {

    play:function(title){

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
        player.src = movie.source;
      }

      return true;
    }

  };

})();
