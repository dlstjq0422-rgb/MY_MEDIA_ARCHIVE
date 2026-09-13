
/*
 MY MEDIA ARCHIVE v260
 Trailer Source Connection Layer

 KEEP:
 - Existing pages
 - Existing UI
 - Existing modal/player
 - Existing close/audio logic

 This file only connects prepared movie sources to the existing player.
*/

(function(){
  window.TRAILER_SOURCE_CONNECT_V260 = {
    play:function(title){
      const mapping = window.TRAILER_SOURCE_MAPPING_V258?.movies?.[title];

      if(!mapping || !mapping.source){
        return {
          success:false,
          status:"source_not_ready"
        };
      }

      const player = document.querySelector("video, #TRAILER_PLAYER_V214");

      if(!player){
        return {
          success:false,
          status:"player_missing"
        };
      }

      player.src = mapping.source;
      player.load?.();

      const result = player.play?.();
      if(result && result.catch){
        result.catch(function(){});
      }

      return {
        success:true,
        status:"playing",
        title:title
      };
    }
  };
})();
