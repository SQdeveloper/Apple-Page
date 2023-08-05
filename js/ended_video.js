const video = document.querySelector(".cont_video video");
const firstPhone = document.querySelector(".train img");

video.addEventListener("ended", ()=>{
    video.style.display = "none";
    firstPhone.style.transition = "opacity 3s";
    firstPhone.style.opacity = "1";
    setTimeout(()=>{
        firstPhone.style.transition = "opacity .5s";
    }, 3000)
});