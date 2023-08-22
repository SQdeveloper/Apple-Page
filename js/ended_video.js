const video = document.querySelector(".cont_video video");
const firstPhone = document.querySelector(".train img");
const phones = document.querySelectorAll(".first .phone .train img");
let isViewPhone = false;

video.addEventListener("ended", ()=>{
    video.style.display = "none";
    if(!isViewPhone) {        
        firstPhone.style.transition = "opacity 3s";
    }
    firstPhone.style.opacity = "1";
    setTimeout(()=>{
        phones.forEach(phone => {
            phone.style.transition = "opacity .5s";
        })
    }, 3000)
});

//Responsive (480px) cellphone
if(window.innerWidth <= 480) {
    isViewPhone = true;
    video.src = "./assets/video/small_2x.mp4";
    firstPhone.style.transition = "opacity 0";
}