
/*
 MY MEDIA ARCHIVE v272
 Trailer Play Execute Layer

 Additive only.
 Sends registered trailer source to the existing player flow.
 Does not replace modal/player/archive UI.
*/

(function(){
  window.TRAILER_PLAY_EXECUTE_V272 = {

    execute:function(title){
      const item =
        window.TRAILER_SOURCE_MAPPING_V258 &&
        window.TRAILER_SOURCE_MAPPING_V258.movies &&
        window.TRAILER_SOURCE_MAPPING_V258.movies[title];

      if(!item || !item.source){
        return false;
      }

      window.CURRENT_TRAILER_SOURCE = item.source;
      window.CURRENT_TRAILER_TITLE = title;

      // Hook point for existing trailer player handler.
      if(typeof window.openTrailerPlayer === "function"){
        window.openTrailerPlayer(item.source, title);
      }

      return true;
    }

  };
})();
