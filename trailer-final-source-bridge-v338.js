
/*
 MY MEDIA ARCHIVE v338
 Trailer Final Source Bridge

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_SOURCE_BRIDGE_V338 = {

    resolve:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!movies){
        return null;
      }

      const movie = movies[title];

      return movie && movie.source ? movie.source : null;
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
