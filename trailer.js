document.addEventListener("click", e=>{
 const b=e.target.closest("button");
 const modal=document.getElementById("trailer-modal");
 if(b && b.dataset.trailer==="open") modal.style.display="flex";
 if(e.target.dataset.trailer==="close") modal.style.display="none";
});
