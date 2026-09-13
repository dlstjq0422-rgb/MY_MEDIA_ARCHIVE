
/*
 MY MEDIA ARCHIVE v330
 Trailer Source Complete Check

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_SOURCE_COMPLETE_CHECK_V330 = {

    status:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      const movie = movies && movies[title];

      return {
        title:title,
        ready:!!(movie && movie.source),
        source: movie ? movie.source : null
      };
    },

    connect:function(title){

      const result = this.status(title);

      if(!result.ready){
        return false;
      }

      window.CURRENT_TRAILER_TITLE = title;
      window.CURRENT_TRAILER_SOURCE = result.source;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.src = result.source;
      }

      return true;
    }

  };

})();
