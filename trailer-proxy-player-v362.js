
/*
 MY MEDIA ARCHIVE v362
 Trailer Proxy Player

 Uses an intermediate normal web page to provide a valid page context.
 Existing archive UI/modal preserved.
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

function play(title){

 const id=IDS[title];
 const player=document.getElementById("TRAILER_PLAYER_V214");
 const modal=document.getElementById("TRAILER_MODAL_V214");

 if(!id || !player || !modal) return false;

 player.src="trailer-player.html?v="+encodeURIComponent(id);
 modal.style.display="flex";

 window.CURRENT_TRAILER_TITLE=title;

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

 play(title.textContent.trim());

},true);

window.TRAILER_PROXY_PLAYER_V362={play};

})();
