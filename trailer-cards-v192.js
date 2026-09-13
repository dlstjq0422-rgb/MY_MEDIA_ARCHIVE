
(function(){
 function initTrailerCards(){
   const area=document.querySelector('[data-trailer-module]');
   if(!area) return;

   const cards=[
    'Avatar: Fire and Ash',
    'Superman',
    'Mission: Impossible'
   ];

   area.innerHTML = cards.map(t=>`
    <div class="trailer-card-v192">
      <h3>${t}</h3>
      <button class="trailer-open-v191">예고편 보기</button>
    </div>
   `).join('');
 }
 document.addEventListener('DOMContentLoaded',initTrailerCards);
})();
