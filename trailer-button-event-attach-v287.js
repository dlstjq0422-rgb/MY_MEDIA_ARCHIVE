
/*
 MY MEDIA ARCHIVE v287
 Trailer Button Event Attach

 Trailer-only addition.
 Existing archive UI, layout, modal and player are preserved.
*/

(function(){

  function attach(button, title){

    if(!button) return false;

    button.addEventListener("click", function(){

      if(window.TRAILER_DIRECT_PLAYER_CONNECT_V286 &&
         window.TRAILER_DIRECT_PLAYER_CONNECT_V286.play){

        window.TRAILER_DIRECT_PLAYER_CONNECT_V286.play(title);
      }

    });

    return true;
  }

  window.TRAILER_BUTTON_EVENT_ATTACH_V287 = {
    attach: attach
  };

})();
