
(function(){
 function initTrailerModal(){
   const buttons=document.querySelectorAll('.trailer-open-v191');
   const modal=document.getElementById('TRAILER_MODAL_V193');
   const close=document.getElementById('TRAILER_CLOSE_V193');

   if(!modal) return;

   buttons.forEach(btn=>{
     btn.addEventListener('click',()=>{
       modal.style.display='flex';
     });
   });

   if(close){
     close.addEventListener('click',()=>{
       modal.style.display='none';
     });
   }
 }

 document.addEventListener('DOMContentLoaded', initTrailerModal);
})();
