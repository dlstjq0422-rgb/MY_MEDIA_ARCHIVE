
/*
 MY MEDIA ARCHIVE v269
 Trailer Player Connect Layer

 Additive only.
 Uses existing trailer modal/player flow.
 Does not replace archive UI.
*/

(function(){
  window.TRAILER_PLAYER_CONNECT_V269 = {

    play:function(title){
      const mapping = window.TRAILER_SOURCE_MAPPING_V258;
      const item = mapping &&
                   mapping.movies &&
                   mapping.movies[title];

      if(!item || !item.source){
        return false;
      }

      // Expose source for the existing player/modal handlers.
      window.CURRENT_TRAILER_SOURCE = item.source;
      window.CURRENT_TRAILER_TITLE = title;

      return true;
    }

  };
})();
