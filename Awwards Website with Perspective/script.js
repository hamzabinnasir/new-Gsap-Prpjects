// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf);

var tl = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".container",
        start: "50% 50%",
        end: "250% 50%",
        pin: true,
        scrub: true,
    }
});

tl.to(".top", {
    rotateX: "110deg",
    opacity: 0,
}, "ha");

tl.to(".bottom", {
    rotateX: "-110deg",
    opacity: 0,
}, "ha")

tl.to(".center", {
    width: "100%",
    height: "100%",
    duration: 2,
}, "ha");