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
    setTimeout(()=>{imgs[index].style.opacity = 1}, 1000);
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
        setTimeout(()=>{moveTrain(index)}, 1000);
        blockCursor(index);
    })
})