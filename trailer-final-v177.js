
document.addEventListener("click", function(e){
 const modal=document.getElementById("TRAILER_MODAL_FINAL_V177");
 if(e.target.tagName==="BUTTON" && e.target.textContent.includes("예고편 보기")){
   if(modal) modal.style.display="flex";
 }
 if(e.target.id==="TRAILER_CLOSE_FINAL_V177"){
   if(modal) modal.style.display="none";
 }
});

// v180 video source test
document.addEventListener("click", function(e){
  if(e.target.id==="TRAILER_CLOSE_FINAL_V177"){
    const video=document.getElementById("TRAILER_VIDEO_V179");
    if(video){
      video.pause();
      video.currentTime=0;
    }
  }
});
