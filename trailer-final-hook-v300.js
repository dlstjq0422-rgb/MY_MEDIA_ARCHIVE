
/*
 MY MEDIA ARCHIVE v300
 Trailer Final Hook

 Trailer-only addition.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  window.TRAILER_FINAL_HOOK_V300 = {

    play:function(title){

      const item =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!item || !item.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = item.source;
      window.CURRENT_TRAILER_TITLE = title;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.src = item.source;
      }

      return true;
    }

  };

})();
