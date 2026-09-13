
/*
 MY MEDIA ARCHIVE v343
 Trailer Final Source Bind Complete

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_SOURCE_BIND_COMPLETE_V343 = {

    play:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!movies){
        return false;
      }

      const movie = movies[title];

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
