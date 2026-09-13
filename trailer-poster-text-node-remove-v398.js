
/*
 MY MEDIA ARCHIVE v398
 Current screen based fix.

 Remove only poster-area title text.
 Do not touch card title/meta/button.
*/

(function(){

function cleanPosterTitle(){
 document.querySelectorAll(".poster-visible-v391").forEach(poster=>{
   [...poster.childNodes].forEach(node=>{
     if(node.nodeType===Node.TEXT_NODE){
       node.remove();
     }
   });

   poster.querySelectorAll("span").forEach(span=>{
     span.remove();
   });
 });
}

cleanPosterTitle();

const observer = new MutationObserver(cleanPosterTitle);
observer.observe(document.body,{childList:true,subtree:true});

})();
