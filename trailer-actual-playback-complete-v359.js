
/*
 MY MEDIA ARCHIVE v359
 ACTUAL TRAILER PLAYBACK COMPLETE

 Additive trailer-only override.
 Purpose:
 - keep the existing archive/site UI untouched
 - keep the existing central V214 trailer modal/player
 - prevent legacy trailer handlers from replacing the iframe with test video
 - connect all six current trailer cards to real official trailer embeds
*/

(function () {
  const SOURCES = {
    "Avatar: Fire and Ash":
      "https://www.youtube-nocookie.com/embed/nb_fFj_0rq8?autoplay=1&playsinline=1&rel=0",
    "Superman":
      "https://www.youtube-nocookie.com/embed/Ox8ZLF6cGM0?autoplay=1&playsinline=1&rel=0",
    "Mission: Impossible":
      "https://www.youtube-nocookie.com/embed/kLzsazwBanE?autoplay=1&playsinline=1&rel=0",
    "Fantastic Four":
      "https://www.youtube-nocookie.com/embed/pAsmrKyMqaA?autoplay=1&playsinline=1&rel=0",
    "Jurassic World":
      "https://www.youtube-nocookie.com/embed/jan5CFWs9ic?autoplay=1&playsinline=1&rel=0",
    "F1":
      "https://www.youtube-nocookie.com/embed/CT2_P2DZBR0?autoplay=1&playsinline=1&rel=0"
  };

  // Keep the existing V258 mapping available to later trailer code.
  window.TRAILER_SOURCE_MAPPING_V258 =
    window.TRAILER_SOURCE_MAPPING_V258 || { movies: {} };

  Object.keys(SOURCES).forEach(function (title) {
    window.TRAILER_SOURCE_MAPPING_V258.movies[title] = {
      source: SOURCES[title],
      status: "ready"
    };
  });

  window.TRAILER_ACTUAL_SOURCES_V359 = SOURCES;

  function getCardTitle(button) {
    const card = button.closest(".trailer-card-v152");
    const heading = card && card.querySelector("h2");
    return heading ? heading.textContent.trim() : "";
  }

  function openTrailer(title) {
    const source = SOURCES[title];
    const modal = document.getElementById("TRAILER_MODAL_V214");
    const player = document.getElementById("TRAILER_PLAYER_V214");
    const titleBox = document.getElementById("TRAILER_TITLE_V214");

    if (!source || !modal || !player) return false;

    if (titleBox) titleBox.textContent = title;

    player.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    player.setAttribute("allowfullscreen", "");
    player.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

    window.CURRENT_TRAILER_TITLE = title;
    window.CURRENT_TRAILER_SOURCE = source;

    player.src = source;
    modal.style.display = "flex";

    return true;
  }

  // Capture phase intentionally wins over the accumulated legacy bubble handlers.
  // This prevents old V224/V247 test-video code from replacing the V214 iframe.
  document.addEventListener(
    "click",
    function (event) {
      const button = event.target.closest("button");
      if (!button || !button.textContent.includes("예고편 보기")) return;

      const title = getCardTitle(button);
      if (!SOURCES[title]) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      openTrailer(title);
    },
    true
  );

  // Preserve the existing close UI while guaranteeing immediate iframe shutdown.
  document.addEventListener(
    "click",
    function (event) {
      const close = event.target.closest("#TRAILER_CLOSE_V214");
      if (!close) return;

      const player = document.getElementById("TRAILER_PLAYER_V214");
      if (player) player.src = "";
    },
    true
  );

  window.playTrailerV359 = openTrailer;
})();
