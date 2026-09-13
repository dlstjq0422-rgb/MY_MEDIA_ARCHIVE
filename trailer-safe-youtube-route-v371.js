
/*
 MY MEDIA ARCHIVE v371
 TRAILER SAFE YOUTUBE ROUTE

 Trailer only.
 Keeps archive UI untouched.

 Instead of forced embeds:
 - show a small confirmation layer
 - user opens official YouTube page from a normal click
 - allows YouTube to initialize normally
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

function show(title){

 const url = TRAILERS[title];
 if(!url) return;

 const box=document.createElement("div");
 box.style.position="fixed";
 box.style.inset="0";
 box.style.zIndex="99999";
 box.style.background="rgba(0,0,0,.8)";
 box.style.display="flex";
 box.style.alignItems="center";
 box.style.justifyContent="center";

 box.innerHTML=`
 <div style="background:#111;padding:30px;border-radius:12px;text-align:center;color:white">
 <h2>${title}</h2>
 <p>유튜브에서 최적 환경으로 재생합니다.</p>
 <button id="TRAILER_OPEN_V371">예고편 재생</button>
 <button id="TRAILER_CLOSE_V371">닫기</button>
 </div>`;

 document.body.appendChild(box);

 box.querySelector("#TRAILER_OPEN_V371").onclick=function(){
   window.open(url,"_blank");
 };

 box.querySelector("#TRAILER_CLOSE_V371").onclick=function(){
   box.remove();
 };

}

document.addEventListener("click",function(e){

 const btn=e.target.closest("button");
 if(!btn || !btn.textContent.includes("예고편 보기")) return;

 const card=btn.closest(".trailer-card-v152");
 const title=card && card.querySelector("h2");

 if(!title || !TRAILERS[title.textContent.trim()]) return;

 e.preventDefault();
 e.stopImmediatePropagation();

 show(title.textContent.trim());

},true);

})();
