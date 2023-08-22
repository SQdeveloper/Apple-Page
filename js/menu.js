const menu         = document.querySelector(".menu");
const button_arrow = document.querySelector(".ul_responsive button");
const background   = document.querySelector(".background_blur");
let isActive       = true;

button_arrow.addEventListener("click", ()=> {
    menu.classList.toggle("active");
    background.classList.toggle("active");
    if(isActive) {
        button_arrow.querySelector("img").src = "./assets/icons/chevron-up.svg";
    } else {
        button_arrow.querySelector("img").src = "./assets/icons/chevron-down.svg";
    }
    isActive = !isActive;
});

background.addEventListener("click", ()=>{
    background.classList.remove("active");
    menu.classList.remove("active");
});

menu.addEventListener("scroll", ()=>{
    console.log("scroll")
});

