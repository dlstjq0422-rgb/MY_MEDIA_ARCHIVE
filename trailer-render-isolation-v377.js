
/*
 MY MEDIA ARCHIVE v377
 TRAILER RENDER ISOLATION TEST

 Trailer performance investigation.
 Existing archive UI/features untouched.

 Disables only heavy visual effects while trailer is active.
*/

(function(){

function setTrailerMode(active){

    document.documentElement.classList.toggle(
        "trailer-render-mode-v377",
        active
    );

}

const style=document.createElement("style");
style.textContent=`
.trailer-render-mode-v377 *,
.trailer-render-mode-v377 *::before,
.trailer-render-mode-v377 *::after{
    animation-play-state:paused !important;
    transition:none !important;
}

.trailer-render-mode-v377{
    scroll-behavior:auto !important;
}
`;
document.head.appendChild(style);


document.addEventListener("click",function(e){

    const btn=e.target.closest("button");

    if(!btn) return;

    if(btn.textContent.includes("예고편 보기")){
        setTrailerMode(true);
    }

    if(
      btn.textContent.includes("닫기") ||
      btn.textContent.includes("✕") ||
      btn.textContent.includes("×")
    ){
        setTrailerMode(false);
    }

}, true);


window.TRAILER_RENDER_ISOLATION_V377={
 setTrailerMode
};

})();
