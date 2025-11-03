const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

var tl = gsap.timeline();
tl.from("#navbar" , {
    y : -100,
    opacity : 0,
});


tl.from("#vd" , {
    y : 100,
    opacity : 0,
} , "ha");

tl.from(".head" , {
    y : 100,
    opacity : 0,
} , "ha");

tl.from(".left p" , {
    y : 100,
    opacity : 0,
});

tl.from(".btnContainer" , {
    y : 100,
    opacity : 0,
});