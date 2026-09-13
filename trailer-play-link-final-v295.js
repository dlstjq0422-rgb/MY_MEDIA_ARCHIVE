
/*
 MY MEDIA ARCHIVE v295
 Trailer Play Link Final

 Trailer connection only.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  function resolve(title){

    const data =
      window.TRAILER_SOURCE_MAPPING_V258 &&
      window.TRAILER_SOURCE_MAPPING_V258.movies &&
      window.TRAILER_SOURCE_MAPPING_V258.movies[title];

    if(!data || !data.source){
      return null;
    }

    return data.source;
  }

  window.TRAILER_PLAY_LINK_FINAL_V295 = {
    getSource: resolve,

    play:function(title){

      const source = resolve(title);

      if(!source){
        return false;
      }

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
