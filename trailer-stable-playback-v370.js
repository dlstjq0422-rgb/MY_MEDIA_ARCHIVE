
/*
 MY MEDIA ARCHIVE v370
 TRAILER STABLE PLAYBACK

 Goal:
 - keep archive UI untouched
 - avoid unstable embedded playback
 - use a stable official YouTube route
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

function openStable(title){

 const url = TRAILERS[title];
 if(!url) return false;

 window.location.href = url;
 return true;
}

document.addEventListener("click", function(e){

 const btn = e.target.closest("button");
 if(!btn || !btn.textContent.includes("예고편 보기")) return;

 const card = btn.closest(".trailer-card-v152");
 const title = card && card.querySelector("h2");

 if(!title || !TRAILERS[title.textContent.trim()]) return;

 e.preventDefault();
 e.stopImmediatePropagation();

 openStable(title.textContent.trim());

}, true);

})();
