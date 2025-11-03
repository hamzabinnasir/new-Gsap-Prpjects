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
    trigger : ".page1",
    scrub : true,
    pin : true,
    start : "50% 50%",
    end : "150% 50%"
}});

tl.to(".top" , {
    top : "-50%",
} , "ha");

tl.to(".bottom" , {
    bottom : "-50%",
} , "ha");

tl.to("#head1" , {
    top : "120%",
} , "ha");

tl.to("#head2" , {
    bottom : "-80%",
} , "ha");

tl.from(".center h1" , {
    y : 400,
} , "ha");



