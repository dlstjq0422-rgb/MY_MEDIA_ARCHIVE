
/*
 MY MEDIA ARCHIVE v306
 Trailer Playback Integration

 Trailer-only update.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  function play(title){

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
      player.src = data.source;
    }

    return true;
  }

  window.TRAILER_PLAYBACK_INTEGRATION_V306 = {
    play: play
  };

})();
