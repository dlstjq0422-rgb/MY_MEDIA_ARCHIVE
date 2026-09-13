
/*
 MY MEDIA ARCHIVE v282
 Trailer Actual Playback

 Actual connection layer.
 Movie trailer source -> existing player.
 Existing archive UI/modal/player structure preserved.
*/

(function(){

  function playTrailer(title){

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
      document.querySelector("iframe");

    if(player){
      player.src = source;
    }

    if(typeof window.openTrailerPlayer === "function"){
      window.openTrailerPlayer(source, title);
    }

    return true;
  }

  window.playArchiveTrailerV282 = playTrailer;

})();
