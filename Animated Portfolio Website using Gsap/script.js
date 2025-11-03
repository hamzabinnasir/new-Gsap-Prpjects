var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".imgContainer",
        scrub: true,
        start: "20% 60%",
        end: "150% 90%"
    }
})

tl.to("#imgTwo", {
    rotateX: "0deg",
});

tl.to("#imgThree", {
    rotateX: "0deg",
});

tl.to(".imgContainer", {
    scale: 0.8,
    marginTop: "100vh",
});

tl.to(".text", {
    marginTop: "-108vh",
}, "ha");

tl.to(".overlay", {
    opacity: 1,
}, "ha");

tl.to(".imgContainer", {
    filter: "grayScale(1)",
}, "ha");