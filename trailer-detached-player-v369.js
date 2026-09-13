
/*
 MY MEDIA ARCHIVE v369
 TRAILER DETACHED PLAYER

 Trailer-only change.
 Keeps archive UI untouched.
 Opens a separate lightweight player window.
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

function openPlayer(title){

 const url=TRAILERS[title];
 if(!url) return false;

 const win=window.open(
   "",
   "TRAILER_PLAYER",
   "width=1280,height=720,resizable=yes"
 );

 if(!win) return false;

 win.document.write(`
 <html>
 <head>
 <title>${title} Trailer</title>
 <style>
 body{margin:0;background:#000}
 iframe{width:100vw;height:100vh;border:0}
 </style>
 </head>
 <body>
 <iframe src="${url.replace("watch?v=","embed/")}"
 allow="autoplay;encrypted-media;fullscreen"
 allowfullscreen></iframe>
 </body>
 </html>`);

 return true;
}

document.addEventListener("click",function(e){

 const btn=e.target.closest("button");
 if(!btn || !btn.textContent.includes("예고편 보기")) return;

 const card=btn.closest(".trailer-card-v152");
 const title=card && card.querySelector("h2");

 if(!title || !TRAILERS[title.textContent.trim()]) return;

 e.preventDefault();
 e.stopImmediatePropagation();

 openPlayer(title.textContent.trim());

},true);

})();
