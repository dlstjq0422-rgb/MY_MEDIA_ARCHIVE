(function(){
 const OST_MAP = {
  "너의 이름은.": {
    title:"Sparkle",
    artist:"RADWIMPS",
    youtubeId:"a2GujJZfXpg"
  },
  "날씨의 아이": {
    title:"グランドエスケープ (Grand Escape)",
    artist:"RADWIMPS",
    youtubeId:"QpJc2L4VvKc"
  },
  "스즈메의 문단속": {
    title:"すずめ (Suzume)",
    artist:"RADWIMPS",
    youtubeId:"BzGm3mYfJ2M"
  }
 };
 window.COLLECTION_OST_MAP = OST_MAP;

 let audio;

 function ensure(){
  if(document.getElementById('collectionCinemaOverlay')) return;
  const o=document.createElement('div');
  o.id='collectionCinemaOverlay';
  o.className='collection-cinema-overlay';
  o.innerHTML='<div class="collection-cinema-bg"></div><div class="collection-cinema-panel"><button class="collection-cinema-close">닫기</button><img class="collection-cinema-poster"><h2 class="collection-cinema-title"></h2><p class="collection-cinema-ost"></p><p class="collection-cinema-artist"></p><iframe class="collection-cinema-youtube" allow="autoplay; fullscreen"></iframe></div>';
  document.body.appendChild(o);

  o.querySelector('.collection-cinema-close').onclick=close;
  o.onclick=e=>{if(e.target===o)close()};
 }

 function getItemFromCard(card){
  return {
   title:card.querySelector('.hover-info strong')?.textContent?.trim() || '',
   poster:card.querySelector('.poster-fg')?.src || ''
  };
 }

 function open(item){
  ensure();
  const o=document.getElementById('collectionCinemaOverlay');
  const ost=OST_MAP[item.title] || {};

  o.querySelector('.collection-cinema-bg').style.backgroundImage=`url("${item.poster}")`;
  o.querySelector('.collection-cinema-poster').src=item.poster;
  o.querySelector('.collection-cinema-title').textContent=item.title;
  o.querySelector('.collection-cinema-ost').textContent=ost.title ? `OST: ${ost.title}` : 'OST 정보 없음';
  o.querySelector('.collection-cinema-artist').textContent=ost.artist ? `Artist: ${ost.artist}` : '';

  const frame=o.querySelector('.collection-cinema-youtube');
  frame.src=ost.youtubeId ? `https://www.youtube.com/embed/${ost.youtubeId}?autoplay=1&playsinline=1` : '';

  o.classList.add('active');
 }

 function close(){
  const o=document.getElementById('collectionCinemaOverlay');
  if(!o)return;
  o.classList.remove('active');
  const frame=o.querySelector('.collection-cinema-youtube');
  if(frame) frame.src='';
 }

 window.COLLECTION_CINEMA_OPEN=open;

 document.addEventListener('click',function(e){
  const card=e.target.closest('.collection-card');
  if(!card)return;
  const item=getItemFromCard(card);
  if(item.title) open(item);
 });
})();
