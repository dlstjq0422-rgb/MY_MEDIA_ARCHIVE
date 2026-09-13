
/*
 MY MEDIA ARCHIVE v360
 TRAILER EMBED FIX

 Fix:
 - YouTube iframe error 153 handling
 - preserve existing V214 modal/player
 - remove youtube-nocookie autoplay conflict
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

  function build(id){
    return "https://www.youtube.com/embed/" + id +
      "?autoplay=1&rel=0&enablejsapi=1";
  }

  function play(title){

    const id = IDS[title];
    const player = document.getElementById("TRAILER_PLAYER_V214");
    const modal = document.getElementById("TRAILER_MODAL_V214");

    if(!id || !player || !modal) return false;

    player.removeAttribute("src");

    player.setAttribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin"
    );

    player.setAttribute(
      "allow",
      "autoplay; encrypted-media; picture-in-picture"
    );

    player.src = build(id);

    window.CURRENT_TRAILER_TITLE = title;
    window.CURRENT_TRAILER_SOURCE = player.src;

    modal.style.display = "flex";

    return true;
  }

  document.addEventListener("click", function(e){

    const btn = e.target.closest("button");

    if(!btn) return;
    if(!btn.textContent.includes("예고편 보기")) return;

    const card = btn.closest(".trailer-card-v152");
    const title = card && card.querySelector("h2");

    if(!title || !IDS[title.textContent.trim()]) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    play(title.textContent.trim());

  }, true);

  window.TRAILER_EMBED_FIX_V360 = {
    play: play
  };

})();
