
/*
 MY MEDIA ARCHIVE v301
 Trailer Runtime Play Finish

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_RUNTIME_PLAY_FINISH_V301 = {

    execute:function(title){

      const data =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!data || !data.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = data.source;
      window.CURRENT_TRAILER_TITLE = title;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.setAttribute("src", data.source);
      }

      if(typeof window.openTrailerPlayer === "function"){
        window.openTrailerPlayer(data.source, title);
      }

      return true;
    }

  };

})();
