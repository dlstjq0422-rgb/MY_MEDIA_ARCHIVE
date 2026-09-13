
/*
 MY MEDIA ARCHIVE v372
 TRAILER VIEWER SEPARATE

 Trailer only.
 Opens a clean dedicated viewer page.
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

document.addEventListener("click",function(e){

const btn=e.target.closest("button");
if(!btn || !btn.textContent.includes("예고편 보기")) return;

const card=btn.closest(".trailer-card-v152");
const title=card && card.querySelector("h2");

if(!title || !IDS[title.textContent.trim()]) return;

e.preventDefault();
e.stopImmediatePropagation();

location.href=
"trailer-viewer.html?v="+IDS[title.textContent.trim()];

},true);

})();
