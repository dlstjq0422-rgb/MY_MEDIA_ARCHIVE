
/*
 MY MEDIA ARCHIVE v284
 Trailer Event Direct Connect

 Connects trailer click events to existing player flow.
 Additive only.
*/

(function(){

  window.TRAILER_EVENT_DIRECT_CONNECT_V284 = {

    handleClick:function(title){

      const source =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!source || !source.source){
        return false;
      }

      const url = source.source;

      window.CURRENT_TRAILER_SOURCE = url;
      window.CURRENT_TRAILER_TITLE = title;

      const player =
        document.querySelector("#trailer-player") ||
        document.querySelector("#trailerPlayer") ||
        document.querySelector(".trailer-player iframe");

      if(player){
        player.src = url;
      }

      if(typeof window.openTrailerPlayer === "function"){
        window.openTrailerPlayer(url, title);
      }

      return true;
    }

  };

})();
