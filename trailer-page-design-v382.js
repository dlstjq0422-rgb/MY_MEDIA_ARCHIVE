
/*
 MY MEDIA ARCHIVE v382
 Trailer Page Design

 Additive only.
 Existing archive untouched.
*/

(function(){

const style=document.createElement("style");
style.textContent=`

.trailer-info-card-v382{
position:fixed;
right:24px;
bottom:90px;
width:320px;
padding:20px;
background:rgba(10,10,10,.92);
color:white;
border-radius:16px;
z-index:99998;
font-family:sans-serif;
box-shadow:0 10px 30px rgba(0,0,0,.4);
}

.trailer-info-card-v382 h2{
margin:0 0 12px;
font-size:24px;
}

.trailer-info-card-v382 p{
margin:6px 0;
opacity:.85;
}

`;

document.head.appendChild(style);

window.TRAILER_INFO_V382=function(title="Movie Trailer"){
const old=document.querySelector(".trailer-info-card-v382");
if(old) old.remove();

const box=document.createElement("div");
box.className="trailer-info-card-v382";

box.innerHTML=`
<h2>${title}</h2>
<p>🎬 Official Trailer</p>
<p>영화 예고편 아카이브</p>
`;

document.body.appendChild(box);
};

})();
