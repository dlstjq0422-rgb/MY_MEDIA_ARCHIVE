
/*
 MY MEDIA ARCHIVE v368
 TRAILER CINEMA MODE

 Trailer-only performance layer.
 Keeps existing archive UI/features unchanged.
*/

(function(){

const TRAILERS={
"Avatar: Fire and Ash":"https://www.youtube.com/watch?v=nb_fFj_0rq8",
"Superman":"https://www.youtube.com/watch?v=Ox8ZLF6cGM0",
"Mission: Impossible":"https://www.youtube.com/watch?v=kLzsazwBanE",
"Fantastic Four":"https://www.youtube.com/watch?v=pAsmrKyMqaA",
"Jurassic World":"https://www.youtube.com/watch?v=jan5CFWs9ic",
"F1":"https://www.youtube.com/watch?v=CT2_P2DZBR0"
};

function openCinema(title){

    const url = TRAILERS[title];
    if(!url) return false;

    const overlay = document.createElement("div");
    overlay.id = "TRAILER_CINEMA_MODE_V368";

    overlay.style.position="fixed";
    overlay.style.inset="0";
    overlay.style.zIndex="99999";
    overlay.style.background="#000";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";

    overlay.innerHTML = `
      <button id="TRAILER_CINEMA_CLOSE_V368"
      style="position:absolute;top:20px;right:25px;z-index:2;">
      ✕
      </button>
      <iframe
      src="${url.replace("watch?v=","embed/")}"
      style="width:95vw;height:85vh;border:0;"
      allow="autoplay; encrypted-media; fullscreen"
      allowfullscreen></iframe>
    `;

    document.body.appendChild(overlay);

    document.getElementById("TRAILER_CINEMA_CLOSE_V368")
    .onclick=function(){
        overlay.remove();
    };

    return true;
}

document.addEventListener("click",function(e){

    const btn=e.target.closest("button");
    if(!btn || !btn.textContent.includes("예고편 보기")) return;

    const card=btn.closest(".trailer-card-v152");
    const title=card && card.querySelector("h2");

    if(!title || !TRAILERS[title.textContent.trim()]) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    openCinema(title.textContent.trim());

},true);

})();
