
/*
 MY MEDIA ARCHIVE v385
 Trailer Poster Cards
 Visible UI update only.
*/

(function(){

const style=document.createElement("style");
style.textContent=`

.trailer-poster-v385{
display:flex;
gap:18px;
flex-wrap:wrap;
margin-top:20px;
}

.poster-card-v385{
width:220px;
background:rgba(15,15,20,.9);
border-radius:16px;
overflow:hidden;
color:white;
box-shadow:0 12px 30px rgba(0,0,0,.35);
}

.poster-card-v385 .poster{
height:300px;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(160deg,#222,#050505);
font-size:40px;
}

.poster-card-v385 .info{
padding:16px;
}

.poster-card-v385 h3{
margin:0 0 10px;
}

.poster-card-v385 p{
margin:5px 0;
opacity:.8;
}

`;
document.head.appendChild(style);

window.TRAILER_POSTER_V385=function(items){

let old=document.querySelector(".trailer-poster-v385");
if(old) old.remove();

const wrap=document.createElement("div");
wrap.className="trailer-poster-v385";

(items||["Avatar: Fire and Ash","Superman","Mission: Impossible"]).forEach(t=>{
const card=document.createElement("div");
card.className="poster-card-v385";
card.innerHTML=`
<div class="poster">🎬</div>
<div class="info">
<h3>${t}</h3>
<p>Official Trailer</p>
<p>Movie Archive</p>
</div>`;
wrap.appendChild(card);
});

document.body.appendChild(wrap);

};

})();
