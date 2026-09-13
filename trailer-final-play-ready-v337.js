
/*
 MY MEDIA ARCHIVE v337
 Trailer Final Play Ready

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_PLAY_READY_V337 = {

    prepare:function(title){

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

      return true;
    },

    play:function(title){

      if(!this.prepare(title)){
        return false;
      }

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.src = window.CURRENT_TRAILER_SOURCE;
      }

      return true;
    }

  };

})();
