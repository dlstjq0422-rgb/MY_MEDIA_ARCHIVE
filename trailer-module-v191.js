
(function(){
  function initTrailerModule(){
    const buttons = document.querySelectorAll('.trailer-open-v191');
    const modal = document.getElementById('TRAILER_MODAL_V191');
    const close = document.getElementById('TRAILER_CLOSE_V191');

    if(!buttons.length || !modal) return;

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

  document.addEventListener('DOMContentLoaded', initTrailerModule);
})();
