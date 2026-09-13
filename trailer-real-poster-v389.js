
/*
 MY MEDIA ARCHIVE v389
 Trailer Real Poster Area

 Visible UI update.
 Replace temporary POSTER label area with cinematic poster styling.
*/

(function(){

const posters = {
 "Avatar: Fire and Ash":"avatar",
 "Superman":"superman",
 "Mission: Impossible":"mission",
 "Fantastic Four":"fantastic",
 "Jurassic World":"jurassic",
 "F1":"f1"
};

const style=document.createElement("style");
style.textContent=`

.poster-real-v389{
height:320px !important;
display:flex;
align-items:flex-end;
justify-content:center;
overflow:hidden;
position:relative;
color:white;
font-weight:bold;
font-size:22px;
letter-spacing:1px;
background:
linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.15)),
linear-gradient(135deg,#202020,#090909);
}

.poster-real-v389::after{
content:"▶";
position:absolute;
right:16px;
bottom:16px;
width:46px;
height:46px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background:rgba(255,255,255,.9);
color:#111;
font-size:20px;
}

.poster-real-v389 span{
position:relative;
z-index:2;
padding-bottom:20px;
}

`;

document.head.appendChild(style);

document.querySelectorAll(".poster, [class*='poster']").forEach(el=>{
    if(el.textContent.trim()==="POSTER"){
        const title =
          el.closest("[class*='card']")?.innerText || "Trailer";

        el.classList.add("poster-real-v389");
        el.innerHTML="<span>TRAILER</span>";
    }
});

})();
