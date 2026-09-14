(function(){
 const OST_VIDEO_MAP = {
  "너의 이름은.": "a2GujJZfXpg",
  "날씨의 아이": "QpJc2L4VvKc",
  "스즈메의 문단속": "BzGm3mYfJ2M"
 };

 let currentFrame;

 function ensure(){
  console.log('[CINEMA] ensure');
  if(document.getElementById('collectionCinemaOverlay')) return;

  const o=document.createElement('div');
  o.id='collectionCinemaOverlay';
  o.className='collection-cinema-overlay';
  o.innerHTML='<div class="collection-cinema-video-bg"><iframe class="collection-cinema-bg-frame" allow="autoplay; fullscreen"></iframe></div><div class="collection-cinema-dark"></div><button class="collection-cinema-close">×</button>';
  document.body.appendChild(o);
  console.log('[CINEMA] overlay', o);

  o.querySelector('.collection-cinema-close').onclick=close;
  o.onclick=e=>{if(e.target===o)close()};
 }

 function getItemFromCard(card){
  const title =
   card.querySelector('.media-title')?.textContent?.trim() ||
   card.querySelector('.hover-info strong')?.textContent?.trim() ||
   card.querySelector('.poster-fg')?.alt?.trim() ||
   '';
  return { title };
 }

 function normalizeTitle(title){
  return String(title || '')
   .normalize('NFKC')
   .replace(/[\s.·]/g,'');
 }

 function getOstVideoId(title){
  const normalizedTitle=normalizeTitle(title);
  const key=Object.keys(OST_VIDEO_MAP).find(k=>normalizeTitle(k)===normalizedTitle);
  return key ? OST_VIDEO_MAP[key] : '';
 }

 function open(item){
  console.log('[CINEMA] open', item);
  ensure();
  const o=document.getElementById('collectionCinemaOverlay');
  const id=getOstVideoId(item.title);
  if(!id)return;

  currentFrame=o.querySelector('.collection-cinema-bg-frame');
  currentFrame.src=`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`;
  console.log('[CINEMA] iframe src', currentFrame.src);

  o.classList.add('active');
 }

 function close(){
  const o=document.getElementById('collectionCinemaOverlay');
  if(!o)return;
  o.classList.remove('active');
  if(currentFrame) currentFrame.src='';
 }

 window.COLLECTION_CINEMA_OPEN=open;

 document.addEventListener('click',function(e){
  console.log('[CINEMA] click', e.target);
  const card=e.target.closest('.media-card');
  console.log('[CINEMA] card', card);
  if(!card)return;

  const item=getItemFromCard(card);
  console.log('[CINEMA] item', item);
  const id=getOstVideoId(item.title);
  console.log('[CINEMA] ost id', id);

if(!id)return;

e.preventDefault();
e.stopPropagation();
e.stopImmediatePropagation();

console.log('[CINEMA] open call');
open(item);
 });

})();
