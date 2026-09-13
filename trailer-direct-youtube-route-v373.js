
/*
 MY MEDIA ARCHIVE v373
 TRAILER DIRECT YOUTUBE ROUTE

 Final environment test:
 - no iframe
 - no local viewer
 - direct normal youtube watch page
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

 window.location.assign(url);

}, true);

})();
