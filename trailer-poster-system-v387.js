
/*
 MY MEDIA ARCHIVE v387
 Trailer Poster System

 Visible Trailer UI update.
*/

(function(){

const style=document.createElement("style");
style.textContent=`

.trailer-card-v152 .poster,
.trailer-card-v151 .poster{
background-size:cover;
background-position:center;
position:relative;
}

.trailer-card-v152 .poster::after,
.trailer-card-v151 .poster::after{
content:"▶";
position:absolute;
right:18px;
bottom:18px;
width:44px;
height:44px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
background:rgba(255,255,255,.9);
color:#111;
font-size:20px;
opacity:.85;
}

.trailer-card-v152:hover .poster::after,
.trailer-card-v151:hover .poster::after{
transform:scale(1.1);
}

`;

document.head.appendChild(style);

})();
