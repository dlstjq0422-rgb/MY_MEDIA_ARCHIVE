
/*
 MY MEDIA ARCHIVE v388
 Trailer Play Button Fix

 Visible UI update.
 Existing structure preserved.
*/

(function(){

const style=document.createElement("style");
style.textContent=`

[class*="trailer"] [class*="poster"],
[class*="poster"]{
 position:relative !important;
 overflow:hidden !important;
}

.trailer-play-overlay-v388{
 position:absolute;
 right:16px;
 bottom:16px;
 width:48px;
 height:48px;
 border-radius:50%;
 background:rgba(0,0,0,.72);
 color:white;
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:22px;
 z-index:5;
 border:1px solid rgba(255,255,255,.35);
}

[class*="trailer"]:hover .trailer-play-overlay-v388{
 transform:scale(1.08);
}

`;
document.head.appendChild(style);

document.querySelectorAll('[class*="trailer"], [class*="poster"]').forEach(card=>{
 if(card.querySelector(".trailer-play-overlay-v388")) return;
 const overlay=document.createElement("div");
 overlay.className="trailer-play-overlay-v388";
 overlay.textContent="▶";
 card.appendChild(overlay);
});

})();
