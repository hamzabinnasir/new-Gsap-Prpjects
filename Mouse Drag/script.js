let main = document.querySelector("#main");
main.addEventListener("mousemove", (dets) => {
    let x = dets.clientX;
    gsap.to(".page", {
        width: x,
        duration: 0,
    });
    gsap.to(".arrow", {
        x : x,
        duration: 0,
    });
});