const train = document.querySelector(".train");
const imgs  = document.querySelectorAll(".train img");
const balls = document.querySelectorAll(".colors .ball");

const moveTrain = (index)=>{
    train.style.transform = `translateX(-${index*(100/4)}%)`;
}

const showTransition = (index)=>{
    imgs.forEach(img=>{
        img.style.opacity = 0;
    })
    setTimeout(()=>{imgs[index].style.opacity = 1}, 500);
}

const blockCursor = (index)=>{
    balls.forEach(ball=>{
        ball.style.cursor = "pointer"
        ball.style.pointerEvents = "auto";
    })
    balls[index].style.cursor = "auto";
    balls[index].style.pointerEvents = "none";
}

balls.forEach((ball, index)=>{
    ball.addEventListener("click", ()=>{        
        showTransition(index);
        setTimeout(()=>{moveTrain(index)}, 500);
        blockCursor(index);
    })
})

//Responsive (480px) cellphone
if(window.innerWidth <= 480) {
    for(let i=0; i<4; i++) {
        imgs[i].src = `./assets/images/hero_iphone_tlx${i+1}.jpg`;        
    }
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 480) return;
    
    for(let i=0; i<4; i++) {
            imgs[i].src = `./assets/images/hero_iphone_tlx${i+1}.jpg`;
    }
})