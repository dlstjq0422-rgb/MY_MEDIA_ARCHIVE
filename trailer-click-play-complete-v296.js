
/*
 MY MEDIA ARCHIVE v296
 Trailer Click Play Complete

 Trailer-only connection.
 Existing archive UI/layout/modal/player preserved.
*/

(function(){

  function playFromCard(title){

    const connector =
      window.TRAILER_PLAY_LINK_FINAL_V295;

    if(!connector || !connector.play){
      return false;
    }

    return connector.play(title);
  }

  window.TRAILER_CLICK_PLAY_COMPLETE_V296 = {
    play: playFromCard
  };

})();
