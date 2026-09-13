
/*
 MY MEDIA ARCHIVE v363
 TRAILER CLEAN HANDLER

 Removes the accumulated override conflict.
 One trailer handler only.
*/

(function(){

const SOURCES={
"Avatar: Fire and Ash":"nb_fFj_0rq8",
"Superman":"Ox8ZLF6cGM0",
"Mission: Impossible":"kLzsazwBanE",
"Fantastic Four":"pAsmrKyMqaA",
"Jurassic World":"jan5CFWs9ic",
"F1":"CT2_P2DZBR0"
};

function openTrailer(title){

 const id=SOURCES[title];
 const player=document.getElementById("TRAILER_PLAYER_V214");
 const modal=document.getElementById("TRAILER_MODAL_V214");

 if(!id || !player || !modal) return;

 player.src="https://www.youtube.com/embed/"+id;
 modal.style.display="flex";
}

document.addEventListener("click",function(e){

 const btn=e.target.closest("button");
 if(!btn || !btn.textContent.includes("예고편 보기")) return;

 const card=btn.closest(".trailer-card-v152");
 const title=card && card.querySelector("h2");

 if(!title || !SOURCES[title.textContent.trim()]) return;

 e.preventDefault();
 e.stopImmediatePropagation();

 openTrailer(title.textContent.trim());

},true);

})();
