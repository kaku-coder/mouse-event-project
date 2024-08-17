let contenorel=document.querySelector(".contenor")

window.addEventListener("mousemove",(dets)=>{
    contenorel.innerHTML=`
            <div class="mousex">
            <p class="text">Mouse X position(px)</p>
            <div class="box">
                <p class="box-text"> ${dets.clientX}</p>
            </div>
        </div>
        <div class="mousey">
            <p class="text">Mouse Y position(px)</p>
            <div class="box">
                <p class="box-text"> ${dets.clientY}</p>
            </3>
        </div>
    `
    
})