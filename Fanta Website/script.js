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
    trigger : ".page2",
    start : "0% 100%",
    end : "100% 100%",
    scrub : true,
}});


tl.to("#fantaCan" , {
    top : "140%",
    left : "2.5%",
},"ha");

tl.to("#slice" , {
    top : "150%",
    left : "20%",
},"ha");

tl.to("#leaf2" , {
    top : "100%",
    rotate : "130deg",
    left : "80%",
},"ha");

tl.to("#orange" , {
    top : "160%",
    left : "70%",
},"ha");


var tl2 = gsap.timeline({scrollTrigger : {
    scroller : "body",
    trigger : ".page3",
    start : "0% 100%",
    end : "100% 100%",
    scrub : true,
}});

tl2.to("#fantaCan" , {
    top : "227%",
    left : "36.8%",
    scale : 0.9,
},"ca");

tl2.to("#slice" , {
    top : "220%",
    left : "45.2%",
    scale : 1.2,
},"ca");



tl2.from(".imgBox1" , {
    rotate : "-90deg",
    left : "-100%",
},"ca");

tl2.from(".imgBox3" , {
    rotate : "90deg",
    left : "100%",
},"ca");

// tl2.from(".lemon1",{
//     rotate: "-90deg",
//     left: "-100%",
//     top: "110%"
// }, 'ca')
// tl2.from("#cola",{
//     rotate: "-90deg",
//     top: "110%",
//     left: "-100%",
// }, 'ca')

// tl2.from(".lemon2",{
//     rotate: "90deg",
//     left: "100%",
//     top: "110%"
// }, 'ca')
// tl2.from("#pepsi",{
//     rotate: "90deg",
//     top: "110%",
//     left: "100%",
// }, 'ca')
