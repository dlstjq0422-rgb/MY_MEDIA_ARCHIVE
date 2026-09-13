const BG_IMAGES=Array.from({length:10},(_,i)=>`assets/backgrounds/cinema_${String(i+1).padStart(2,'0')}.png`);
const bgA=document.querySelector('.bg-a'), bgB=document.querySelector('.bg-b'); let bgFront=0, bgIndex=0;
const preloaded=BG_IMAGES.map(src=>{const im=new Image(); im.src=src; return im;});
bgA.style.backgroundImage=`url('${BG_IMAGES[0]}')`; bgA.style.opacity='1'; bgA.classList.add('live');
function rotateBackground(){const next=(bgIndex+1)%BG_IMAGES.length; const incoming=bgFront===0?bgB:bgA; const outgoing=bgFront===0?bgA:bgB; const apply=()=>{incoming.style.backgroundImage=`url('${BG_IMAGES[next]}')`; incoming.classList.add('live'); incoming.style.opacity='0'; requestAnimationFrame(()=>requestAnimationFrame(()=>{incoming.style.opacity='1'; outgoing.style.opacity='0';})); setTimeout(()=>outgoing.classList.remove('live'),2500); bgFront=1-bgFront; bgIndex=next;}; if(preloaded[next].complete)apply(); else preloaded[next].onload=apply;}
setInterval(rotateBackground,4400);

const STORAGE_KEY='media_v21'; const OLD_KEYS=['media_v16','media_v15','media14','media_v10','media_v9','media_v8','media'];
function normalizeItem(x={}){return{title:String(x.title||'').trim(),genre:String(x.genre||'기타'),rating:Number(x.rating)||0,poster:String(x.poster||''),tag:String(x.tag||x.tags||''),date:String(x.date||''),review:String(x.review||''),favorite:Boolean(x.favorite)}}
function loadData(){let cur=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'); if(Array.isArray(cur))return cur.map(normalizeItem); for(const k of OLD_KEYS){try{const v=JSON.parse(localStorage.getItem(k)||'null'); if(Array.isArray(v)&&v.length){const migrated=v.map(normalizeItem); localStorage.setItem(STORAGE_KEY,JSON.stringify(migrated)); return migrated}}catch{}} return []}
let data=loadData(), currentGenre='ALL', favoritesOnly=false;
function saveData(){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
function stars(n){n=Math.max(0,Math.min(5,Number(n)||0));return '★'.repeat(n)+'☆'.repeat(5-n)}
function escapeHtml(s=''){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function bgStyle(url){return url?`style="background-image:url('${url.replace(/'/g,"%27")}')"`:''}
function avg(){return data.length?(data.reduce((a,b)=>a+b.rating,0)/data.length).toFixed(1):'0.0'}
function genreCounts(){return data.reduce((o,x)=>(o[x.genre||'기타']=(o[x.genre||'기타']||0)+1,o),{})}
function topGenre(){return Object.entries(genreCounts()).sort((a,b)=>b[1]-a[1])[0]?.[0]||'-'}

const pages=[...document.querySelectorAll('.page')], navBtns=[...document.querySelectorAll('.nav-btn')];
function showPage(id){
pages.forEach(p=>p.classList.toggle('active',p.id===id));
navBtns.forEach(b=>b.classList.toggle('active',b.dataset.page===id));

if(id==='report'){
    renderReport();
}

if(id==='home'){
    renderHome();
}

if(id==='collection'){
    renderCollection();
}

window.scrollTo({top:0,behavior:'smooth'})
}
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelectorAll('[data-page-jump]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.pageJump)));

function renderHome(){const recent=[...data].slice(-5).reverse(); document.getElementById('recentRow').innerHTML=recent.length?recent.map((x,i)=>mediaCard(x,data.indexOf(x))).join(''):'<div class="empty">아직 기록이 없습니다. ADD에서 첫 작품을 추가해보세요.</div>'; const fav=data.filter(x=>x.favorite).sort((a,b)=>b.rating-a.rating).slice(0,5); document.getElementById('favoriteList').innerHTML=fav.length?fav.map(x=>`<div class="compact-item"><span>⭐ ${escapeHtml(x.title)}</span><span>${stars(x.rating)}</span></div>`).join(''):'<div class="empty">즐겨찾기 작품이 없습니다.</div>'; document.getElementById('homeStats').innerHTML=`<div class="stat">총 작품<strong>${data.length}</strong></div><div class="stat">평균 평점<strong>${avg()}</strong></div><div class="stat">즐겨찾기<strong>${data.filter(x=>x.favorite).length}</strong></div><div class="stat">대표 장르<strong>${escapeHtml(topGenre())}</strong></div>`}
function mediaCard(x,index){const posterHtml=x.poster?`<div class="poster poster-image"><img class="poster-bg" src="${escapeHtml(x.poster)}" alt="" aria-hidden="true" loading="lazy"><img class="poster-fg" src="${escapeHtml(x.poster)}" alt="${escapeHtml(x.title||'poster')}" loading="lazy"></div>`:`<div class="poster poster-empty"><span class="poster-placeholder">🎬</span></div>`;return `<article class="media-card" data-index="${index}">${posterHtml}<div class="media-body"><div class="media-title">${escapeHtml(x.title)}</div><div class="media-meta">${escapeHtml(x.genre)} · ${stars(x.rating)}</div></div></article>`}
function collectionStatus(x){
 const tag=String(x.tag||'');
 if(x.favorite) return '⭐ 인생작';
 if(/재관람|재감상/i.test(tag)) return '↻ 재감상';
 if(Number(x.rating)>=4) return '👍 추천';
 return '';
}
function collectionCard(x,index){
 const posterHtml=x.poster?`<div class="poster poster-image"><img class="poster-bg" src="${escapeHtml(x.poster)}" alt="" aria-hidden="true" loading="lazy"><img class="poster-fg" src="${escapeHtml(x.poster)}" alt="${escapeHtml(x.title||"poster")}" loading="lazy"></div>`:`<div class="poster poster-empty"><span class="poster-placeholder">🎬</span></div>`;
 const status=collectionStatus(x);
 const favoriteMark=x.favorite?`<div class="favorite-mark" aria-label="즐겨찾기">★</div>`:'';
 const infoHtml=`<div class="hover-info"><strong>${escapeHtml(x.title)}</strong><span>${escapeHtml(x.genre)} · ${stars(x.rating)}</span>${status?`<em class="status-pill">${escapeHtml(status)}</em>`:''}${x.tag?`<small>${escapeHtml(x.tag)}</small>`:""}</div>`;
 return `<article class="media-card collection-card" data-index="${index}">${posterHtml}${favoriteMark}${infoHtml}</article>`;
}
function renderFilters(){const gs=['ALL',...Object.keys(genreCounts())]; document.getElementById('genreFilters').innerHTML=gs.map(g=>`<button class="chip ${g===currentGenre?'active':''}" data-genre="${escapeHtml(g)}">${g==='ALL'?'전체':escapeHtml(g)}</button>`).join(''); document.querySelectorAll('[data-genre]').forEach(b=>b.onclick=()=>{currentGenre=b.dataset.genre;renderFilters();renderCollection()}); document.getElementById('favoritesOnly').classList.toggle('active',favoritesOnly)}
function filtered(){const q=document.getElementById('searchInput').value.trim().toLowerCase(), sort=document.getElementById('sortSelect').value; let arr=data.map((x,i)=>({...x,_i:i})).filter(x=>(currentGenre==='ALL'||x.genre===currentGenre)&&(!favoritesOnly||x.favorite)&&(!q||`${x.title} ${x.tag}`.toLowerCase().includes(q))); if(sort==='rating')arr.sort((a,b)=>b.rating-a.rating); if(sort==='title')arr.sort((a,b)=>a.title.localeCompare(b.title,'ko')); if(sort==='new')arr.reverse(); return arr}
function renderCollection(){const arr=filtered(),grid=document.getElementById('collectionGrid'); grid.classList.remove('few-1','few-2','few-3'); if(arr.length>0&&arr.length<=3)grid.classList.add('few-'+arr.length); grid.innerHTML=arr.length?arr.map(x=>collectionCard(x,x._i)).join(''):'<div class="empty">조건에 맞는 작품이 없습니다.</div>'; bindCards()}
function bindCards(){document.querySelectorAll('.media-card[data-index]').forEach(c=>c.onclick=()=>openDetail(Number(c.dataset.index)))}
function renderReport(){
 renderArchiveStatus();
 renderRecentHighlight();
 renderTimeline();const counts=genreCounts(), max=Math.max(1,...Object.values(counts)); document.getElementById('reportCards').innerHTML=`<div class="report-card">총 작품<strong>${data.length}</strong></div><div class="report-card">평균 평점<strong>${avg()}</strong></div><div class="report-card">즐겨찾기<strong>${data.filter(x=>x.favorite).length}</strong></div><div class="report-card">대표 장르<strong>${escapeHtml(topGenre())}</strong></div>`;
 const best=data.slice().sort((a,b)=>(b.rating||0)-(a.rating||0))[0];
 const recent=data[data.length-1];
 const insight=document.getElementById('reportInsight');
 if(insight){
   insight.innerHTML=`
   <div class="insight-title">취향 분석</div>
   <div class="insight-text">
   ${data.length ? `현재 ${data.length}개의 작품을 기록했으며, ${escapeHtml(topGenre())} 장르 선호도가 가장 높습니다.` : '아직 감상 데이터가 없습니다.'}
   </div>
   <div class="insight-meta">
   ${best ? `최고 평점 작품 · ${escapeHtml(best.title||'제목 없음')} (${best.rating||0}점)` : ''}
   </div>`;
 }
 document.getElementById('genreBars').innerHTML=Object.keys(counts).length?Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([g,n])=>`<div><div class="bar-label"><span>${escapeHtml(g)}</span><span>${n}개</span></div><div class="bar-track"><div class="bar-fill" style="width:${n/max*100}%"></div></div></div>`).join(''):'<div class="empty">아직 통계 데이터가 없습니다.</div>'}
function renderAll(){renderHome();renderFilters();renderCollection();renderReport();bindCards()}

document.getElementById('searchInput').addEventListener('input',renderCollection); document.getElementById('sortSelect').addEventListener('change',renderCollection); document.getElementById('favoritesOnly').onclick=()=>{favoritesOnly=!favoritesOnly;renderFilters();renderCollection()};

let selectedRating=0;

function setRating(n){
 selectedRating=Math.max(0,Math.min(5,Math.round(Number(n)*2)/2));
 const input=document.getElementById('rating');
 if(input) input.value=selectedRating;

 document.querySelectorAll('#ratingStars button').forEach((b)=>{
   const r=Number(b.dataset.rate);
   const full=r<=Math.floor(selectedRating);
   const half=(selectedRating%1===0.5 && r===Math.ceil(selectedRating));
   b.classList.toggle('on',full);
   b.classList.toggle('half',half);
 });

 updatePreview();
}

function setupHalfRating(){
 const wrap=document.getElementById('ratingStars');
 if(!wrap) return;

 wrap.classList.add('half-mode');

 wrap.querySelectorAll('button').forEach((button)=>{
   button.addEventListener('click',(e)=>{
     e.preventDefault();
     e.stopPropagation();

     const rect=button.getBoundingClientRect();
     const isHalf=e.clientX < rect.left + rect.width/2;
     const value=Number(button.dataset.rate)-(isHalf?0.5:0);

     setRating(value);
   });
 });
}

setupHalfRating();
function updatePreview(){const t=document.getElementById('title').value.trim()||'새 작품',g=document.getElementById('genre').value||'장르',p=document.getElementById('poster').value.trim();document.getElementById('previewTitle').textContent=t;document.getElementById('previewMeta').textContent=`${g} · ${stars(selectedRating)}`;const pp=document.getElementById('posterPreview');pp.style.backgroundImage=p?`url('${p}')`:'';pp.innerHTML=p?'':'<span>POSTER</span>'}
['title','genre','poster'].forEach(id=>document.getElementById(id).addEventListener('input',updatePreview)); document.getElementById('genre').addEventListener('change',updatePreview);
function resetForm(){document.getElementById('mediaForm').reset();document.getElementById('editIndex').value='';selectedRating=0;setRating(0);document.getElementById('formHeading').textContent='ADD CONTENT';document.getElementById('saveBtn').textContent='저장하기';updatePreview()}
document.getElementById('resetBtn').onclick=resetForm;
document.getElementById('mediaForm').onsubmit=e=>{e.preventDefault();const item=normalizeItem({title:document.getElementById('title').value,genre:document.getElementById('genre').value||'기타',rating:selectedRating,poster:document.getElementById('poster').value,tag:document.getElementById('tag').value,date:document.getElementById('date').value,review:document.getElementById('review').value,favorite:document.getElementById('favorite').checked});if(!item.title)return;const idx=document.getElementById('editIndex').value;if(idx==='')data.push(item);else data[Number(idx)]=item;saveData();renderAll();resetForm();showPage('collection')};

const dialog=document.getElementById('detailDialog');document.getElementById('closeDetail').onclick=()=>dialog.close();
function openDetail(i){const x=data[i];if(!x)return;document.getElementById('detailContent').innerHTML=`<div class="detail-layout"><div class="detail-poster" ${bgStyle(x.poster)}></div><div class="detail-info"><p class="eyebrow">MY RECORD</p><h2>${escapeHtml(x.title)}</h2><div class="detail-meta">${escapeHtml(x.genre)} · ${stars(x.rating)}${x.date?' · '+escapeHtml(x.date):''}</div><div class="detail-tags">${escapeHtml(x.tag||'')}</div><div class="detail-review">${escapeHtml(x.review||'감상 후기가 없습니다.')}</div><div class="detail-actions"><button class="primary" data-action="favorite">${x.favorite?'★ 즐겨찾기 해제':'☆ 즐겨찾기'}</button><button class="secondary" data-action="edit">수정</button><button class="danger" data-action="delete">삭제</button></div></div></div>`;dialog.showModal();dialog.querySelector('[data-action="favorite"]').onclick=()=>{data[i].favorite=!data[i].favorite;saveData();renderAll();openDetail(i)};dialog.querySelector('[data-action="edit"]').onclick=()=>{dialog.close();loadEdit(i)};dialog.querySelector('[data-action="delete"]').onclick=()=>{if(confirm('이 작품을 삭제할까요?')){data.splice(i,1);saveData();renderAll();dialog.close()}}}
function loadEdit(i){const x=data[i];document.getElementById('editIndex').value=i;document.getElementById('title').value=x.title;document.getElementById('genre').value=x.genre;document.getElementById('poster').value=x.poster;document.getElementById('tag').value=x.tag;document.getElementById('date').value=x.date;document.getElementById('review').value=x.review;document.getElementById('favorite').checked=x.favorite;setRating(x.rating);document.getElementById('formHeading').textContent='EDIT CONTENT';document.getElementById('saveBtn').textContent='수정 저장';updatePreview();showPage('add')}

document.getElementById('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='my-media-archive-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)};
document.getElementById('importInput').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const parsed=JSON.parse(await f.text());if(!Array.isArray(parsed))throw 0;data=parsed.map(normalizeItem);saveData();renderAll();alert('백업을 불러왔습니다.')}catch{alert('올바른 백업 JSON 파일이 아닙니다.')}e.target.value=''};
renderAll();resetForm();
window.switchPage=function(id){showPage(id)};


// v24.6 hard page switch fix
window.showPage = function(id){
    document.querySelectorAll('.page').forEach(function(page){
        page.classList.remove('active');
        page.style.display='none';
    });

    var target=document.getElementById(id);
    if(target){
        target.classList.add('active');
        target.style.display='block';
    }

    document.querySelectorAll('.nav-btn').forEach(function(btn){
        btn.classList.toggle('active', btn.dataset.page===id);
    });

    if(id==='report' && typeof renderReport==='function'){
        renderReport();
        if(typeof renderRecentReport==='function') renderRecentReport();
        if(typeof renderTasteReport==='function') renderTasteReport();
        if(typeof renderBestReport==='function') renderBestReport();
        if(typeof renderGenreReport==='function') renderGenreReport();
        if(typeof renderYearReport==='function') renderYearReport();
        if(typeof renderReportTimeline==='function') renderReportTimeline();
    }

    window.scrollTo(0,0);
};

document.querySelectorAll('[data-page]').forEach(function(btn){
    btn.onclick=function(e){
        e.preventDefault();
        window.showPage(btn.dataset.page);
    };
});


// v24.8 hard isolate pages
(function(){
    function forcePage(id){
        document.querySelectorAll('.page').forEach(function(p){
            p.classList.remove('active');
            p.style.display = 'none';
        });

        const target = document.getElementById(id);
        if(target){
            target.classList.add('active');
            target.style.display = 'block';
            target.style.position = 'relative';
            target.style.top = '0';
        }

        document.querySelectorAll('.nav-btn').forEach(function(btn){
            btn.classList.toggle('active', btn.dataset.page === id);
        });

        if(id === 'report' && typeof renderReport === 'function'){
            renderReport();
        }

        window.scrollTo({top:0,left:0,behavior:'instant'});
    }

    document.addEventListener('click', function(e){
        const btn = e.target.closest('[data-page]');
        if(!btn) return;

        const id = btn.dataset.page;
        if(id){
            e.preventDefault();
            forcePage(id);
        }
    });
})();


// v24.9 final page stack prevention
window.__openPage = function(id){
    document.querySelectorAll('main.shell .page').forEach(function(page){
        if(page.id === id){
            page.classList.add('active');
            page.removeAttribute('hidden');
        }else{
            page.classList.remove('active');
            page.setAttribute('hidden','hidden');
        }
    });

    document.querySelectorAll('.nav-btn').forEach(function(btn){
        btn.classList.toggle('active', btn.dataset.page === id);
    });

    if(id === 'report' && typeof renderReport === 'function'){
        renderReport();
    }

    window.scrollTo(0,0);
};

document.querySelectorAll('.nav-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        window.__openPage(btn.dataset.page);
    });
});


// v25.1 recent report helper
function renderRecentReport(){
 const box=document.getElementById('recentReport');
 if(!box) return;
 const item=data[data.length-1];
 box.innerHTML=item ? `
 <div class="report-recent-title">최근 추가 작품</div>
 <div>${escapeHtml(item.title||'제목 없음')} · ${escapeHtml(item.genre||'기타')}</div>
 ` : '';
}


// v25.2 report timeline
function renderReportTimeline(){
 const box=document.getElementById('reportTimeline');
 if(!box) return;
 const items=(data||[]).slice(-5).reverse();
 box.innerHTML = `
 <div class="timeline-title">감상 기록</div>
 ${items.map(x=>`<div class="timeline-item">${escapeHtml(x.title||'제목 없음')} · ${escapeHtml(x.genre||'기타')}</div>`).join('')}
 `;
}


// v25.3 taste report helper
function renderTasteReport(){
 const box=document.getElementById('tasteReport');
 if(!box) return;
 const counts=genreCounts();
 const tags=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
 box.innerHTML=tags.length ? `
 <div class="taste-title">나의 취향 키워드</div>
 <div class="taste-tags">
 ${tags.map(t=>`<span class="taste-tag">${escapeHtml(t[0])}</span>`).join('')}
 </div>` : '';
}


// v25.4 best rated work report helper
function renderBestReport(){
 const box=document.getElementById('bestReport');
 if(!box) return;
 const best=data.slice().sort((a,b)=>(b.rating||0)-(a.rating||0))[0];
 box.innerHTML=best ? `
 <div class="best-title">최고 평점 작품</div>
 <div class="best-work">${escapeHtml(best.title||'제목 없음')}</div>
 <div class="best-meta">${escapeHtml(best.genre||'기타')} · ${best.rating||0}점</div>
 ` : '';
}


// v25.5 genre distribution report helper
function renderGenreReport(){
 const box=document.getElementById('genreReport');
 if(!box) return;

 const counts=genreCounts();
 const list=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
 const max=list.length ? list[0][1] : 1;

 box.innerHTML=list.length ? `
 <div class="taste-title">장르 비율</div>
 ${list.map(item=>`
 <div class="genre-row">
   <div class="genre-label">
    <span>${escapeHtml(item[0])}</span>
    <span>${item[1]}개</span>
   </div>
   <div class="genre-bar">
    <div class="genre-fill" style="width:${(item[1]/max)*100}%"></div>
   </div>
 </div>`).join('')}
 ` : '';
}


// v25.6 yearly archive report helper
function renderYearReport(){
 const box=document.getElementById('yearReport');
 if(!box) return;

 const years={};
 data.forEach(item=>{
   const y=(item.year || item.releaseYear || '').toString();
   if(y) years[y]=(years[y]||0)+1;
 });

 const list=Object.entries(years).sort((a,b)=>b[0]-a[0]);

 box.innerHTML=list.length ? `
 <div class="taste-title">연도별 기록</div>
 <div class="year-list">
 ${list.map(y=>`<div class="year-item">${escapeHtml(y[0])} · ${y[1]}개</div>`).join('')}
 </div>` : '';
}


// v30.0 collection preparation
const collectionFilterState = {
    genre:'all',
    sort:'latest',
    search:''
};

function applyCollectionFilter(){
    const cards=document.querySelectorAll('.collection-card');
    cards.forEach(card=>{
        card.style.display='';
    });
}



// v41.0 PERSONAL OTT ANALYTICS + SMART SAVE FLOW
(function(){
  function ensureV41Report(){
    const report=document.getElementById('report');
    if(!report) return null;
    let wrap=document.getElementById('reportV41');
    if(wrap) return wrap;

    wrap=document.createElement('div');
    wrap.id='reportV41';
    wrap.className='report-v41';
    wrap.innerHTML=`
      <section class="report-v41-head">
        <div>
          <span>PERSONAL OTT ANALYTICS</span>
          <h2>나의 감상 흐름</h2>
        </div>
        <div id="reportV41Pulse" class="report-v41-pulse"></div>
      </section>

      <div class="report-v41-grid">
        <article class="report-v41-panel">
          <div class="report-v41-title">
            <strong>최근 6개월 감상량</strong>
            <span>MONTHLY ACTIVITY</span>
          </div>
          <div id="reportMonthly" class="monthly-bars"></div>
        </article>

        <article class="report-v41-panel">
          <div class="report-v41-title">
            <strong>평점 분포</strong>
            <span>RATING PROFILE</span>
          </div>
          <div id="reportRatings" class="rating-profile"></div>
        </article>

        <article class="report-v41-panel report-v41-wide">
          <div class="report-v41-title">
            <strong>아카이브 상태</strong>
            <span>ARCHIVE HEALTH</span>
          </div>
          <div id="reportHealth" class="archive-health"></div>
        </article>

        <article class="report-v41-panel report-v41-wide">
          <div class="report-v41-title">
            <strong>자주 남긴 태그</strong>
            <span>TOP TAGS</span>
          </div>
          <div id="reportTopTags" class="report-top-tags"></div>
        </article>
      </div>
    `;

    const oldGrid=report.querySelector('.report-grid');
    if(oldGrid) report.insertBefore(wrap,oldGrid);
    else report.appendChild(wrap);
    return wrap;
  }

  function validDate(value){
    if(!value) return null;
    const d=new Date(value+'T00:00:00');
    return Number.isNaN(d.getTime())?null:d;
  }

  function monthKey(d){
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
  }

  function monthLabel(d){
    return `${d.getMonth()+1}월`;
  }

  function getLastMonths(count=6){
    const now=new Date();
    const arr=[];
    for(let i=count-1;i>=0;i--){
      arr.push(new Date(now.getFullYear(),now.getMonth()-i,1));
    }
    return arr;
  }

  function parseTags(){
    const counts={};
    data.forEach(item=>{
      String(item.tag||'')
        .split(/[\s,]+/)
        .map(x=>x.trim())
        .filter(Boolean)
        .forEach(tag=>{
          const normalized=tag.startsWith('#')?tag:'#'+tag;
          counts[normalized]=(counts[normalized]||0)+1;
        });
    });
    return Object.entries(counts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'ko'));
  }

  function renderReportV41(){
    if(!ensureV41Report()) return;

    const dated=data.map(x=>({...x,_date:validDate(x.date)})).filter(x=>x._date);
    const months=getLastMonths(6);
    const monthCounts=Object.fromEntries(months.map(d=>[monthKey(d),0]));
    dated.forEach(x=>{
      const key=monthKey(x._date);
      if(key in monthCounts) monthCounts[key]++;
    });

    const maxMonth=Math.max(1,...Object.values(monthCounts));
    const monthly=document.getElementById('reportMonthly');
    monthly.innerHTML=months.map(d=>{
      const n=monthCounts[monthKey(d)]||0;
      return `<div class="month-bar-item">
        <span class="month-count">${n}</span>
        <div class="month-track"><i style="height:${Math.max(n?14:3,(n/maxMonth)*100)}%"></i></div>
        <small>${monthLabel(d)}</small>
      </div>`;
    }).join('');

    const ratingCounts=[1,2,3,4,5].map(r=>data.filter(x=>Number(x.rating)===r).length);
    const maxRating=Math.max(1,...ratingCounts);
    const ratings=document.getElementById('reportRatings');
    ratings.innerHTML=[5,4,3,2,1].map(r=>{
      const n=ratingCounts[r-1];
      return `<div class="rating-row-v41">
        <span>${r}★</span>
        <div><i style="width:${(n/maxRating)*100}%"></i></div>
        <b>${n}</b>
      </div>`;
    }).join('');

    const favCount=data.filter(x=>x.favorite).length;
    const reviewed=data.filter(x=>String(x.review||'').trim()).length;
    const datedCount=dated.length;
    const favRate=data.length?Math.round(favCount/data.length*100):0;
    const reviewRate=data.length?Math.round(reviewed/data.length*100):0;
    const dateRate=data.length?Math.round(datedCount/data.length*100):0;
    const highRated=data.filter(x=>Number(x.rating)>=4).length;

    document.getElementById('reportHealth').innerHTML=`
      <div class="health-metric"><span>즐겨찾기 비율</span><strong>${favRate}%</strong><i><em style="width:${favRate}%"></em></i></div>
      <div class="health-metric"><span>후기 작성률</span><strong>${reviewRate}%</strong><i><em style="width:${reviewRate}%"></em></i></div>
      <div class="health-metric"><span>감상 날짜 기록률</span><strong>${dateRate}%</strong><i><em style="width:${dateRate}%"></em></i></div>
      <div class="health-summary">
        <span>4★ 이상 작품</span><b>${highRated}개</b>
      </div>`;

    const tags=parseTags().slice(0,8);
    document.getElementById('reportTopTags').innerHTML=tags.length
      ? tags.map(([tag,n],i)=>`<span class="top-tag-v41 ${i===0?'top':''}">${escapeHtml(tag)} <b>${n}</b></span>`).join('')
      : `<span class="report-v41-empty">태그를 기록하면 취향 키워드가 여기에 쌓입니다.</span>`;

    const now=new Date();
    const thisKey=monthKey(now);
    const prevDate=new Date(now.getFullYear(),now.getMonth()-1,1);
    const prevKey=monthKey(prevDate);
    const thisMonth=dated.filter(x=>monthKey(x._date)===thisKey).length;
    const prevMonth=dated.filter(x=>monthKey(x._date)===prevKey).length;
    const delta=thisMonth-prevMonth;
    const deltaText=delta>0?`지난달보다 +${delta}`:delta<0?`지난달보다 ${delta}`:'지난달과 동일';

    const pulse=document.getElementById('reportV41Pulse');
    pulse.innerHTML=`
      <span>이번 달 <b>${thisMonth}</b>개</span>
      <small>${deltaText}</small>
    `;
  }

  const baseRenderReport=renderReport;
  renderReport=function(){
    baseRenderReport();
    renderRecentReport();
    renderTasteReport();
    renderBestReport();
    renderGenreReport();
    renderYearReport();
    renderReportTimeline();
    renderReportV41();
  };

  function ensureToast(){
    let toast=document.getElementById('archiveToast');
    if(toast) return toast;
    toast=document.createElement('div');
    toast.id='archiveToast';
    toast.className='archive-toast';
    toast.setAttribute('aria-live','polite');
    document.body.appendChild(toast);
    return toast;
  }

  let toastTimer=0;
  function showArchiveToast(title,sub){
    const toast=ensureToast();
    toast.innerHTML=`<strong>${escapeHtml(title)}</strong><span>${escapeHtml(sub)}</span>`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>toast.classList.remove('show'),2600);
  }

  function highlightSaved(index){
    requestAnimationFrame(()=>{
      const card=document.querySelector(`.collection-card[data-index="${index}"]`);
      if(!card) return;
      card.classList.add('just-saved');
      setTimeout(()=>card.classList.remove('just-saved'),2400);
    });
  }

  const form=document.getElementById('mediaForm');
  if(form){
    form.onsubmit=function(e){
      e.preventDefault();

      const item=normalizeItem({
        title:document.getElementById('title').value,
        genre:document.getElementById('genre').value||'기타',
        rating:selectedRating,
        poster:document.getElementById('poster').value,
        tag:document.getElementById('tag').value,
        date:document.getElementById('date').value,
        review:document.getElementById('review').value,
        favorite:document.getElementById('favorite').checked
      });

      if(!item.title) return;

      const rawIndex=document.getElementById('editIndex').value;
      const isEdit=rawIndex!=='';
      let savedIndex;

      if(isEdit){
        savedIndex=Number(rawIndex);
        data[savedIndex]=item;
      }else{
        data.push(item);
        savedIndex=data.length-1;
      }

      saveData();
      renderAll();
      resetForm();
      showPage('collection');
      highlightSaved(savedIndex);
      showArchiveToast(
        isEdit?'수정 저장 완료':'아카이브에 저장 완료',
        `${item.title} · COLLECTION에 반영되었습니다`
      );
    };
  }

  // Initial report upgrade render if REPORT is already visible.
  renderReportV41();
})();


/* v43.2 half rating compatibility layer */
window.normalizeHalfRating = function(value){
    const n = Number(value || 0);
    return Math.round(n * 2) / 2;
};

window.displayHalfRating = function(value){
    const n = window.normalizeHalfRating(value);
    return "★".repeat(Math.floor(n)) + (n % 1 ? "⯨" : "") + "☆".repeat(5 - Math.ceil(n));
};


/* v43.6 clean half star rendering applied */


/* v43.7 REAL HALF STAR PATCH */
(function(){
  const initHalfStar = () => {
    const wrap = document.getElementById('ratingStars');
    if(!wrap || wrap.dataset.halfFixed) return;
    wrap.dataset.halfFixed = 'true';

    const buttons = [...wrap.querySelectorAll('button')];

    function render(value){
      const rating = Math.round(Number(value || 0) * 2) / 2;
      const hidden = document.getElementById('rating');
      if(hidden) hidden.value = rating;

      buttons.forEach((btn)=>{
        const n = Number(btn.dataset.rate);
        btn.classList.remove('on','half');
        if(rating >= n) btn.classList.add('on');
        else if(rating === n - 0.5) btn.classList.add('half');
      });
    }

    buttons.forEach((btn)=>{
      btn.onclick = (e)=>{
        e.preventDefault();
        const rect = btn.getBoundingClientRect();
        const half = e.clientX < rect.left + rect.width / 2;
        const value = Number(btn.dataset.rate) - (half ? 0.5 : 0);
        render(value);
      };
    });
  };

  document.addEventListener('DOMContentLoaded', initHalfStar);
  initHalfStar();
})();


// v56.0 real visible media timeline
function renderTimeline(){
 const box=document.getElementById('mediaTimeline');
 if(!box) return;

 const items=[...data].filter(x=>x.date||x.title).slice().reverse();

 box.innerHTML=items.length ? items.map(x=>`
 <div class="taste-timeline-item">
   <div class="year">${escapeHtml(x.date||'기록')}</div>
   <div class="desc">${escapeHtml(x.title)} · ${escapeHtml(x.genre||'기타')}</div>
 </div>
 `).join('') : '<div class="empty">아직 기록이 없습니다.</div>';
}



// v57.0 recent media highlight
function renderRecentHighlight(){
 const box=document.getElementById('recentMediaHighlight');
 if(!box) return;
 const item=data.length ? data[data.length-1] : null;
 box.innerHTML=item ? `
 <div class="insight-title">RECENT MEDIA</div>
 <div class="insight-text">
 최근 기록 작품 · ${escapeHtml(item.title)}
 </div>
 <div class="insight-meta">
 ${escapeHtml(item.genre||'기타')} · ${stars(item.rating)}
 </div>` : `
 <div class="insight-title">RECENT MEDIA</div>
 <div class="insight-text">아직 기록된 작품이 없습니다.</div>`;
}



function renderArchiveStatus(){
 const box=document.getElementById('archiveStatusContent');
 if(!box) return;
 const count=(typeof data!=='undefined' && Array.isArray(data)) ? data.length : 0;
 box.innerHTML = `
 <div class="archive-status-number">${count}</div>
 <div class="archive-status-text">현재 등록된 작품 수</div>`;
}


// TRAILER_NAV_V146
(function(){
  window.openTrailerPageV146 = function(){
    const page=document.getElementById('TRAILER_NAV_V146');
    if(page){ page.style.display='block'; }
  };
})();

// TRAILER_MENU_V147
document.addEventListener("click", function(e){
  if(e.target && e.target.id === "TRAILER_MENU_V147"){
    const screen=document.getElementById("TRAILER_SCREEN_V147");
    if(screen){
      screen.style.display="block";
    }
  }
});


// v148 trailer page uses existing page navigation system

// v168 trailer modal
document.addEventListener("click", function(e){
 if(e.target.textContent === "예고편 보기"){
   const m=document.getElementById("TRAILER_MODAL_V168");
   if(m) m.style.display="flex";
 }
 if(e.target.id==="TRAILER_CLOSE_V168"){
   const m=document.getElementById("TRAILER_MODAL_V168");
   if(m) m.style.display="none";
 }
});

// v169 trailer modal fix
document.addEventListener("click", function(e){
  const open = e.target.closest(".trailer-open-v169");
  const close = e.target.closest("#TRAILER_CLOSE_V168");
  const modal = document.getElementById("TRAILER_MODAL_V168");

  if(open && modal){
    modal.style.display = "flex";
  }

  if(close && modal){
    modal.style.display = "none";
  }
});



document.addEventListener("click",function(e){
 if(e.target.classList.contains("trailer-open-v171")){
  const m=document.getElementById("TRAILER_MODAL_V171"); if(m)m.style.display="flex";
 }
 if(e.target.id==="TRAILER_CLOSE_V171"){
  const m=document.getElementById("TRAILER_MODAL_V171"); if(m)m.style.display="none";
 }
});

// v172 player open bridge
document.addEventListener("click", function(e){
 const modal=document.getElementById("TRAILER_PLAYER_V172");
 if(e.target && e.target.textContent.includes("예고편 보기")){
   if(modal) modal.style.display="flex";
 }
 if(e.target && e.target.id==="PLAYER_CLOSE_V172"){
   if(modal) modal.style.display="none";
 }
});



// v174 single trailer modal only
document.addEventListener("click", function(e){
  if(e.target.closest("button") && e.target.textContent.includes("예고편 보기")){
    const modal=document.getElementById("TRAILER_SINGLE_MODAL_V174");
    if(modal) modal.style.display="flex";
  }
  if(e.target.id==="TRAILER_SINGLE_CLOSE_V174"){
    const modal=document.getElementById("TRAILER_SINGLE_MODAL_V174");
    if(modal) modal.style.display="none";
  }
});

document.addEventListener("click", function(e){
 const modal=document.getElementById("TRAILER_SINGLE_MODAL_V175");
 if(e.target.closest("button") && e.target.textContent.includes("예고편 보기")){
   if(modal) modal.style.display="flex";
 }
 if(e.target.id==="TRAILER_SINGLE_CLOSE_V175"){
   if(modal) modal.style.display="none";
 }
});

document.addEventListener("click", function(e){
 const modal=document.getElementById("TRAILER_CLEAN_MODAL_V176");
 if(e.target.closest("button") && e.target.textContent.includes("예고편 보기")){
   modal.style.display="flex";
 }
 if(e.target.id==="TRAILER_CLEAN_CLOSE_V176"){
   modal.style.display="none";
 }
});
