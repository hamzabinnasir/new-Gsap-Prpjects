// For smooth Scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// Gsap Animation

var tl = gsap.timeline({
    scrollTrigger : {
      scroller : "body",
      trigger : "#main",
      // markers : true,
      scrub : true,
      start : "20% 50%", 
      end : "100% 50%", // Pehli value start or end k liay or doosry wali value scrollerStart or end k liay yani k doosry wali value us page k hawale se jo ham ne select kia hai or yad rkhna k start ki donon values hamesha same honi chahiay agar pin true kia hai to. Or is main start ki value jitno kam hogi utni jaldi start hoga or end ki value jitni zyada hogi utni late end ho ga.
      // pin : true,
  
  
      // start : "-40%",
      // end : "70%",
      // // ham esay bhi kr sakte hain
  },
});

tl.to("#span1" , {
  width : "100%",
});

tl.to("#span2" , {
  delay : "-0.4",
  width : "100%",
});