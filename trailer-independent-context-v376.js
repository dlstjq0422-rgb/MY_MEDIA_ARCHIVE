
/*
 MY MEDIA ARCHIVE v376
 TRAILER INDEPENDENT CONTEXT

 Trailer only.
 Keeps archive UI/features unchanged.

 Opens YouTube in a fully independent browser context.
*/

(function(){

const TRAILERS = {
 "Avatar: Fire and Ash":"https://www.youtube.com/watch?v=nb_fFj_0rq8",
 "Superman":"https://www.youtube.com/watch?v=Ox8ZLF6cGM0",
 "Mission: Impossible":"https://www.youtube.com/watch?v=kLzsazwBanE",
 "Fantastic Four":"https://www.youtube.com/watch?v=pAsmrKyMqaA",
 "Jurassic World":"https://www.youtube.com/watch?v=jan5CFWs9ic",
 "F1":"https://www.youtube.com/watch?v=CT2_P2DZBR0"
};

document.addEventListener("click", function(e){

    const btn = e.target.closest("button");
    if(!btn || !btn.textContent.includes("예고편 보기")) return;

    const card = btn.closest(".trailer-card-v152");
    const title = card && card.querySelector("h2");

    if(!title) return;

    const url = TRAILERS[title.textContent.trim()];
    if(!url) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const win = window.open(
        "about:blank",
        "_blank",
        "noopener,noreferrer"
    );

    if(win){
        win.opener = null;
        win.location.replace(url);
    }

}, true);

})();
