const blocks = document.querySelectorAll(".second .block");

function callback(entries) {
    entries.forEach(entry=> {        
        if(entry.isIntersecting) {            
            const arrow = entry.target.querySelector(".arrow");
            const background_image = entry.target.querySelector(".image_background");
            arrow.style.transform = "none";            
            if(background_image) background_image.style.transform = "none";            
            if(entry.target.querySelector("video")) {
                entry.target.querySelector("video").currentTime = 0;
                entry.target.querySelector("video").play();
            }
        }
    })
}

const observer = new IntersectionObserver(callback, {threshold: .7});

blocks.forEach(block => {
    observer.observe(block);    
});