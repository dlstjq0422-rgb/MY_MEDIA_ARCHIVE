
/*
 MY MEDIA ARCHIVE v288
 Trailer Card Integration

 Trailer-only change.
 Keeps existing archive pages, UI, modal and player untouched.
*/

(function(){

  function connectCards(){

    const buttons = document.querySelectorAll(
      "[data-trailer-title], .trailer-button, .trailer-btn"
    );

    buttons.forEach(function(button){

      if(button.dataset.trailerBoundV288) return;

      const title =
        button.dataset.trailerTitle ||
        button.closest("[data-title]")?.dataset.title ||
        button.closest(".movie-card")?.dataset.title;

      if(!title) return;

      button.dataset.trailerBoundV288 = "true";

      button.addEventListener("click", function(){

        if(window.TRAILER_DIRECT_PLAYER_CONNECT_V286){
          window.TRAILER_DIRECT_PLAYER_CONNECT_V286.play(title);
        }

      });

    });

  }

  window.TRAILER_CARD_INTEGRATION_V288 = {
    connect: connectCards
  };

  document.addEventListener("DOMContentLoaded", connectCards);

})();
