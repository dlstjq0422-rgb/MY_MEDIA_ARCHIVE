
/*
 MY MEDIA ARCHIVE v349
 Trailer Final Real Play Connect

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_REAL_PLAY_CONNECT_V349 = {

    open:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      const movie = movies && movies[title];

      if(!movie || !movie.source){
        return false;
      }

      window.CURRENT_TRAILER_TITLE = title;
      window.CURRENT_TRAILER_SOURCE = movie.source;

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
