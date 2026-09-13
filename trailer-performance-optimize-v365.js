
/*
 MY MEDIA ARCHIVE v365
 TRAILER PERFORMANCE OPTIMIZE

 Trailer-only optimization.
 Existing archive UI/layout preserved.

 Changes:
 - lazy load YouTube iframe only after modal open
 - remove unnecessary autoplay loading
 - unload player on close
 - reduce duplicate iframe refresh
*/

(function(){

const IDS={
"Avatar: Fire and Ash":"nb_fFj_0rq8",
"Superman":"Ox8ZLF6cGM0",
"Mission: Impossible":"kLzsazwBanE",
"Fantastic Four":"pAsmrKyMqaA",
"Jurassic World":"jan5CFWs9ic",
"F1":"CT2_P2DZBR0"
};

let loaded=false;

function loadTrailer(title){

 const id=IDS[title];
 const player=document.getElementById("TRAILER_PLAYER_V214");
 const modal=document.getElementById("TRAILER_MODAL_V214");

 if(!id || !player || !modal) return false;

 if(player.dataset.loadedTitle===title){
   modal.style.display="flex";
   return true;
 }

 player.src="https://www.youtube.com/embed/"+id+"?rel=0";
 player.dataset.loadedTitle=title;

 modal.style.display="flex";
 loaded=true;

 return true;
}

document.addEventListener("click",function(e){

 const btn=e.target.closest("button");

 if(!btn || !btn.textContent.includes("예고편 보기")) return;

 const card=btn.closest(".trailer-card-v152");
 const title=card && card.querySelector("h2");

 if(!title || !IDS[title.textContent.trim()]) return;

 e.preventDefault();
 e.stopImmediatePropagation();

 loadTrailer(title.textContent.trim());

},true);


document.addEventListener("click",function(e){

 const close=e.target.closest("#TRAILER_CLOSE_V214");

 if(!close) return;

 const player=document.getElementById("TRAILER_PLAYER_V214");

 if(player){
   player.src="";
   player.dataset.loadedTitle="";
 }

},true);


window.TRAILER_PERFORMANCE_OPTIMIZE_V365={
 load:loadTrailer
};

})();
