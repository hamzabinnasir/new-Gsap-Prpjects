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
    trigger : ".btnContainer",
    scrub: true,
    start : "50% 50%",
    end :"300% 50%",
    pin : true,
}});

tl.to("#anime" , {
    filter : "blur(0px)",
    opacity : 1,
});
tl.to("#figma" , {
    filter : "blur(0px)",
    opacity : 1,
});
tl.to("#logo" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#social" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#seo" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#adobe" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#reels" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#html" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#dm" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#web" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#figma" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#js" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#word" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
tl.to("#css" , {
    filter : "blur(0px)",
    opacity : 1,
    delay : "-0.3",
});
