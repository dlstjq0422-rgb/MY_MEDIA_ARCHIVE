(function(){
 const OST_VIDEO_MAP = {
  "너의 이름은.": "a2GujJZfXpg",
  "날씨의 아이": "QpJc2L4VvKc",
  "스즈메의 문단속": "BzGm3mYfJ2M"
 };

 let currentFrame;

 function ensure(){
  if(document.getElementById('collectionCinemaOverlay')) return;

  const o=document.createElement('div');
  o.id='collectionCinemaOverlay';
  o.className='collection-cinema-overlay';
  o.innerHTML='<div class="collection-cinema-video-bg"><iframe class="collection-cinema-bg-frame" allow="autoplay; fullscreen"></iframe></div><div class="collection-cinema-dark"></div><button class="collection-cinema-close">×</button>';
  document.body.appendChild(o);

  o.querySelector('.collection-cinema-close').onclick=close;
  o.onclick=e=>{if(e.target===o)close()};
 }

 function getItemFromCard(card){
  return {
   title:card.querySelector('.hover-info strong')?.textContent?.trim() || ''
  };
 }

 function open(item){
  ensure();
  const o=document.getElementById('collectionCinemaOverlay');
  const id=OST_VIDEO_MAP[item.title];
  if(!id)return;

  currentFrame=o.querySelector('.collection-cinema-bg-frame');
  currentFrame.src=`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`;

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
  const card=e.target.closest('.collection-card');
  if(!card)return;
  const item=getItemFromCard(card);
  if(!OST_VIDEO_MAP[item.title]) return;
  open(item);
 });
})();
