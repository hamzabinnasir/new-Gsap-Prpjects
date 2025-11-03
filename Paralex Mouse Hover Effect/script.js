// DOM Manipulation
document.addEventListener("mousemove", (dets) => {
    var images = document.querySelectorAll(".hello");
    images.forEach((element) => {
        let position = element.getAttribute("value");
        let x = (window.innerWidth - dets.clientX * position) / 50;
        let y = (window.innerHeight - dets.clientY * position) / 50;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
});


let images = document.querySelectorAll(".hello");
images.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.style.zIndex = "5";
        let img = element.querySelector(".img");
        if(img){
            img.style.borderRadius = "30px";
        }
        let info = element.querySelector(".info");
        if (info) {
            info.style.transform = `translateY(${0}px)`;
            info.style.borderRadius = "20px";
        }
    });
});


images.forEach((element) => {
    element.addEventListener("mouseleave", () => {
        element.style.zIndex = "3";
        let img = element.querySelector(".img");
        if(img){
            img.style.borderRadius = "15px";
        }
        let info = element.querySelector(".info");
        if (info) {
            info.style.transform = `translateY(${-90}px)`
            info.style.borderRadius = "15px";
        }
    });
});