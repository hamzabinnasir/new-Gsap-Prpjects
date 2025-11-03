let tl = gsap.timeline();
tl.from("#main h1", {
    opacity: 0,
    x: "-100%",
    duration: 0.8,
});
tl.from("#para", {
    opacity: 0,
    x: "-100%",
    duration: 0.8,
    delay: "-0.6",
});
let main = document.querySelector("#main");
main.addEventListener("mousemove", (dets) => {
    let ball = document.querySelector(".ball");
    let x = dets.clientX;
    let y = dets.clientY;
    gsap.to(".ball", {
        x: x,
        y: y,
    });
});
main.addEventListener("click", (dets) => {
    let ball = document.querySelector(".ball");
    let x = dets.clientX;
    let y = dets.clientY;
    gsap.to(".ball", {
        x: x,
        y: y,
        scale: 0,
    });
    gsap.to("#main h1", {
        opacity: 0,
        x: "-100%",
    });
    gsap.to("#para", {
        opacity: 0,
        x: "-100%",
    });
});