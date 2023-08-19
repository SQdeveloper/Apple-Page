const barras_menu = document.querySelector(".header_sup .barras_menu");
const global_menu = document.querySelector(".global_menu");
const button_x    = global_menu.querySelector("button");

barras_menu.addEventListener("click", ()=>{
    global_menu.classList.add("active");
    document.body.style.overflow = "hidden";
});

button_x.addEventListener("click", ()=>{
    global_menu.classList.remove("active");
    document.body.style.overflow = "scroll";
});