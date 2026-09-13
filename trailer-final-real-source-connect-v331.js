
/*
 MY MEDIA ARCHIVE v331
 Trailer Final Real Source Connect

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_REAL_SOURCE_CONNECT_V331 = {

    resolve:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!movies){
        return null;
      }

      const movie = movies[title];

      if(!movie || !movie.source){
        return null;
      }

      return movie.source;
    },

    play:function(title){

      const source = this.resolve(title);

      if(!source){
        return false;
      }

      window.CURRENT_TRAILER_TITLE = title;
      window.CURRENT_TRAILER_SOURCE = source;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.src = source;
      }

      return true;
    }

  };

})();
