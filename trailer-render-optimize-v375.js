
/*
 MY MEDIA ARCHIVE v375
 TRAILER RENDER OPTIMIZE

 Trailer-only performance tuning.
 No archive feature/layout changes.

 Focus:
 - isolate video rendering layer
 - reduce compositing conflicts
 - avoid heavy visual effects during playback
*/

(function(){

function optimizePlayer(player){

    if(!player) return;

    player.style.transform = "translateZ(0)";
    player.style.backfaceVisibility = "hidden";
    player.style.willChange = "transform";

    const parent = player.parentElement;

    if(parent){
        parent.style.transform = "translateZ(0)";
        parent.style.contain = "layout paint";
    }
}

document.addEventListener("load", function(){
    optimizePlayer(document.querySelector("iframe"));
}, true);

const observer = new MutationObserver(function(){

    const player =
        document.querySelector("#TRAILER_PLAYER_V214") ||
        document.querySelector("iframe");

    optimizePlayer(player);

});

observer.observe(document.documentElement,{
    childList:true,
    subtree:true
});

window.TRAILER_RENDER_OPTIMIZE_V375 = {
    optimize: optimizePlayer
};

})();
