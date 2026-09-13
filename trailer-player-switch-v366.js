
/*
 MY MEDIA ARCHIVE v366
 TRAILER PLAYER SWITCH

 Goal:
 - stop using heavy embedded iframe playback path
 - keep archive UI untouched
 - open trailer through lightweight player context

*/

(function(){

const URLS={
"Avatar: Fire and Ash":"https://www.youtube.com/watch?v=nb_fFj_0rq8",
"Superman":"https://www.youtube.com/watch?v=Ox8ZLF6cGM0",
"Mission: Impossible":"https://www.youtube.com/watch?v=kLzsazwBanE",
"Fantastic Four":"https://www.youtube.com/watch?v=pAsmrKyMqaA",
"Jurassic World":"https://www.youtube.com/watch?v=jan5CFWs9ic",
"F1":"https://www.youtube.com/watch?v=CT2_P2DZBR0"
};

function openTrailer(title){

 const url=URLS[title];

 if(!url) return false;

 window.open(url,"_blank","noopener,noreferrer");

 return true;
}

document.addEventListener("click",function(e){

 const btn=e.target.closest("button");

 if(!btn || !btn.textContent.includes("예고편 보기")) return;

 const card=btn.closest(".trailer-card-v152");
 const title=card && card.querySelector("h2");

 if(!title || !URLS[title.textContent.trim()]) return;

 e.preventDefault();
 e.stopImmediatePropagation();

 openTrailer(title.textContent.trim());

},true);

})();
