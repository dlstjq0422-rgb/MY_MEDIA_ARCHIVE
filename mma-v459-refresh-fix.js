/* v459 refresh/category stability patch */
(function(){
function patch(){
 const btn=document.querySelector('.trailer-live-refresh-v422');
 if(!btn || btn.dataset.v459fixed) return;
 btn.dataset.v459fixed='true';
 btn.replaceWith(btn.cloneNode(true));
 const fresh=document.querySelector('.trailer-live-refresh-v422');
 fresh.addEventListener('click',function(){
   const event=new CustomEvent('mma-force-refresh-v459');
   window.dispatchEvent(event);
 });
 window.addEventListener('mma-force-refresh-v459',function(){
   localStorage.removeItem('mma_trailer_live_v422');
   const buttons=document.querySelectorAll('.trailer-live-categories-v422 button');
   if(buttons.length){ buttons[0].click(); }
 });
}
setInterval(patch,500);
})();
