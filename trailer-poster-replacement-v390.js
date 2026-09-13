
/*
 MY MEDIA ARCHIVE v390
 Trailer Poster Replacement

 Real visible replacement of temporary POSTER label.
 Existing pages preserved.
*/

(function(){

const posterMap = {
 "Avatar: Fire and Ash":"assets/posters/avatar-fire-and-ash.jpg",
 "Superman":"assets/posters/superman.jpg",
 "Mission: Impossible":"assets/posters/mission-impossible.jpg",
 "Fantastic Four":"assets/posters/fantastic-four.jpg",
 "Jurassic World":"assets/posters/jurassic-world.jpg",
 "F1":"assets/posters/f1.jpg"
};

const style=document.createElement("style");
style.textContent=`
.poster-image-v166,
.poster-real-area-v390{
 overflow:hidden;
 position:relative;
 background-size:cover !important;
 background-position:center !important;
}

.poster-real-area-v390::after{
 content:"▶";
 position:absolute;
 right:14px;
 bottom:14px;
 width:44px;
 height:44px;
 border-radius:50%;
 background:rgba(0,0,0,.65);
 color:white;
 display:flex;
 align-items:center;
 justify-content:center;
 font-size:20px;
}
`;
document.head.appendChild(style);

document.querySelectorAll(".trailer-card-v152").forEach(card=>{
 const title=card.querySelector("h2")?.textContent?.trim();
 const poster=card.querySelector(".poster-image-v166");

 if(poster && posterMap[title]){
   poster.classList.add("poster-real-area-v390");
   poster.innerHTML="";
   poster.style.backgroundImage=`url('${posterMap[title]}')`;
 }
});

})();
