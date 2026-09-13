
/*
 MY MEDIA ARCHIVE v348
 Trailer Final Play Validate

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_PLAY_VALIDATE_V348 = {

    validate:function(title){

      const movies =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      const movie = movies && movies[title];

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
    },

    play:function(title){

      const result = this.validate(title);

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
