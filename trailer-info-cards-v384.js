
/*
 MY MEDIA ARCHIVE v384
 Trailer Info Cards

 Additive only.
 Existing archive untouched.
*/

(function(){

const movies = {
 "Avatar: Fire and Ash":{
   studio:"Disney",
   genre:"Sci-Fi / Adventure",
   year:"2025",
   status:"Coming Soon"
 },
 "Superman":{
   studio:"DC",
   genre:"Action / Hero",
   year:"2025",
   status:"Coming Soon"
 },
 "Mission: Impossible":{
   studio:"Paramount",
   genre:"Action / Thriller",
   year:"2025",
   status:"Coming Soon"
 }
};

window.TRAILER_INFO_CARD_V384 = function(title){

 const data = movies[title];
 if(!data) return;

 const old=document.querySelector(".trailer-detail-v384");
 if(old) old.remove();

 const box=document.createElement("div");
 box.className="trailer-detail-v384";

 box.innerHTML=`
 <h2>${title}</h2>
 <p>${data.studio}</p>
 <p>${data.genre}</p>
 <p>${data.year}</p>
 <p>${data.status}</p>
 `;

 document.body.appendChild(box);
};

const style=document.createElement("style");
style.textContent=`
.trailer-detail-v384{
 position:fixed;
 right:24px;
 top:120px;
 width:280px;
 padding:20px;
 background:rgba(10,10,15,.94);
 color:#fff;
 border-radius:16px;
 z-index:9999;
 border:1px solid rgba(255,255,255,.15);
}
.trailer-detail-v384 h2{
 margin-top:0;
}
`;
document.head.appendChild(style);

})();
