
/*
 MY MEDIA ARCHIVE v289
 Trailer Real Card Bind

 Directly binds existing trailer card buttons to trailer playback.
 Trailer-only addition.
*/

(function(){

  function bind(){

    const buttons = document.querySelectorAll(
      ".trailer-btn, .trailer-button, [data-trailer-title]"
    );

    buttons.forEach(function(button){

      if(button.dataset.realTrailerBindV289) return;

      const title =
        button.dataset.trailerTitle ||
        button.dataset.title ||
        button.closest("[data-title]")?.dataset.title ||
        button.closest(".movie-card")?.querySelector(".title")?.textContent?.trim();

      if(!title) return;

      button.dataset.realTrailerBindV289 = "true";

      button.addEventListener("click", function(){

        const connector = window.TRAILER_DIRECT_PLAYER_CONNECT_V286;

        if(connector && connector.play){
          connector.play(title);
        }

      });

    });

  }

  window.TRAILER_REAL_CARD_BIND_V289 = {
    bind: bind
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bind);
  }else{
    bind();
  }

})();
