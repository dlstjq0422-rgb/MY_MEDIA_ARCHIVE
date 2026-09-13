
/*
 MY MEDIA ARCHIVE v275
 Trailer Play Final Connect

 Additive only.
 Connects current trailer source flow to existing player entry point.
 Existing archive UI/modal/player are preserved.
*/

(function(){
  window.TRAILER_PLAY_FINAL_CONNECT_V275 = {

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

      // Use existing player hooks when available.
      if(typeof window.openTrailerPlayer === "function"){
        window.openTrailerPlayer(item.source, title);
        return true;
      }

      if(typeof window.playTrailer === "function"){
        window.playTrailer(item.source);
        return true;
      }

      return true;
    }

  };
})();
