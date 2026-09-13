
/*
 MY MEDIA ARCHIVE v378
 PERFORMANCE DIAGNOSTIC

 Purpose:
 - investigate archive-side performance impact
 - no feature/layout changes
 - trailer only diagnostic

 Checks:
 - frame timing
 - long tasks
 - animation count
*/

(function(){

let start = performance.now();
let frames = 0;

function tick(){
    frames++;

    if(performance.now() - start >= 3000){
        console.log(
          "[v378 Trailer Diagnostic] FPS approx:",
          Math.round(frames / 3)
        );
        frames = 0;
        start = performance.now();
    }

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

const observer = new PerformanceObserver((list)=>{
    for(const entry of list.getEntries()){
        console.log(
          "[v378 Long Task]",
          entry.duration.toFixed(1)+"ms"
        );
    }
});

try{
    observer.observe({entryTypes:["longtask"]});
}catch(e){}

window.TRAILER_DIAGNOSTIC_V378={
    animations: ()=>document.getAnimations().length
};

})();
