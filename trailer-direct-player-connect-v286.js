
/*
 MY MEDIA ARCHIVE v286
 Trailer Direct Player Connect

 Only Trailer connection logic.
 Existing archive pages, UI, modal and player design remain unchanged.
*/

(function(){

  window.TRAILER_DIRECT_PLAYER_CONNECT_V286 = {

    play:function(title){

      const data =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!data || !data.source){
        return false;
      }

      const source = data.source;

      window.CURRENT_TRAILER_SOURCE = source;
      window.CURRENT_TRAILER_TITLE = title;

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
