
/*
 MY MEDIA ARCHIVE v361
 TRAILER ERROR 153 FINAL FIX

 Fix direction:
 - remove autoplay embed forcing
 - remove custom referrer overrides
 - use standard YouTube iframe context
 - preserve V214 modal/player
*/

(function(){

  const IDS = {
    "Avatar: Fire and Ash":"nb_fFj_0rq8",
    "Superman":"Ox8ZLF6cGM0",
    "Mission: Impossible":"kLzsazwBanE",
    "Fantastic Four":"pAsmrKyMqaA",
    "Jurassic World":"jan5CFWs9ic",
    "F1":"CT2_P2DZBR0"
  };

  function openTrailer(title){

    const id = IDS[title];
    const player = document.getElementById("TRAILER_PLAYER_V214");
    const modal = document.getElementById("TRAILER_MODAL_V214");

    if(!id || !player || !modal) return false;

    player.removeAttribute("referrerpolicy");
    player.removeAttribute("allow");

    player.src = "https://www.youtube.com/embed/" + id;

    window.CURRENT_TRAILER_TITLE = title;
    window.CURRENT_TRAILER_SOURCE = player.src;

    modal.style.display = "flex";

    return true;
  }

  document.addEventListener("click", function(e){

    const btn = e.target.closest("button");

    if(!btn || !btn.textContent.includes("예고편 보기")) return;

    const card = btn.closest(".trailer-card-v152");
    const title = card && card.querySelector("h2");

    if(!title || !IDS[title.textContent.trim()]) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    openTrailer(title.textContent.trim());

  }, true);

  window.TRAILER_ERROR153_FINAL_FIX_V361 = {
    play: openTrailer
  };

})();
