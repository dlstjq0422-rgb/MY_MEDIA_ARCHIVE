
/*
 MY MEDIA ARCHIVE v386
 Trailer Card Redesign

 Visible UI update only.
 Existing pages/features untouched.
*/

(function(){

const style=document.createElement("style");
style.textContent=`

.trailer-card-v152,
.trailer-card-v151{
 transition:.25s ease;
}

.trailer-card-v152:hover,
.trailer-card-v151:hover{
 transform:translateY(-8px);
 box-shadow:0 18px 45px rgba(0,0,0,.45);
}

.trailer-card-v152 .poster,
.trailer-card-v151 .poster{
 position:relative;
 overflow:hidden;
}

.trailer-card-v152:hover .poster::after,
.trailer-card-v151:hover .poster::after{
 content:"▶ WATCH TRAILER";
 position:absolute;
 inset:0;
 display:flex;
 align-items:center;
 justify-content:center;
 background:rgba(0,0,0,.45);
 color:white;
 font-size:18px;
 letter-spacing:2px;
}

`;
document.head.appendChild(style);

})();
