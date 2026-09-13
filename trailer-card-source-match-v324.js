
/*
 MY MEDIA ARCHIVE v324
 Trailer Card Source Match

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_CARD_SOURCE_MATCH_V324 = {

    resolve:function(title){

      const mapping =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies;

      if(!mapping){
        return null;
      }

      const movie = mapping[title];

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
