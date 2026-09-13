
/*
 MY MEDIA ARCHIVE v374
 TRAILER USER CLICK PLAY

 Goal:
 - avoid automatic navigation/render state issues
 - require a real user click before opening YouTube
 - keep archive UI unchanged
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

function show(title){

 const url=TRAILERS[title];
 if(!url) return;

 const box=document.createElement("div");
 box.id="TRAILER_USER_CLICK_V374";

 box.style.cssText=
 "position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99999;display:flex;align-items:center;justify-content:center;color:white";

 box.innerHTML=`
 <div style="background:#111;padding:32px;border-radius:14px;text-align:center">
 <h2>${title}</h2>
 <p>유튜브 최적 재생 환경으로 이동합니다.</p>
 <button id="PLAY_V374">재생</button>
 <button id="CLOSE_V374">닫기</button>
 </div>`;

 document.body.appendChild(box);

 box.querySelector("#PLAY_V374").onclick=function(){
   location.href=url;
 };

 box.querySelector("#CLOSE_V374").onclick=function(){
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
