const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


var tl = gsap.timeline({scrollTrigger : {
    scroller : "body",
    trigger : "#page1",
    start : "50% 50%",
    end : "200% 50%",
    pin : true,
    scrub : true,
}});

tl.to(".img" , {
    height : "100vh",
    width : "100%",
    backgroundSize : "100%",
});