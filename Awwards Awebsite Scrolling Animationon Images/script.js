ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
        var tl1 = gsap.timeline({
            scrollTrigger: {
                scroller: "body",
                trigger: "#main",
                scrub: true,
                pin: true,
                start: "50% 50%",
                end: "150% 50%",
            }
        });
        tl1.to(".column1", {
            marginTop: "-120vh",
        }, "ha");
        tl1.to(".column2", {
            marginTop: "15vh",
        }, "ha");
    },
    "(max-width: 768px)": function() {
        var tl1 = gsap.timeline({
            scrollTrigger: {
                scroller: "body",
                trigger: "#main",
                scrub: true,
                pin: false,
                start: "top top",
                end: "+=200%",
            }
        });
        tl1.to(".column1", {
            marginTop: "-60vh",
        }, "ha");
        tl1.to(".column2", {
            marginTop: "5vh",
        }, "ha");
    }
});


// Creating spans between h1 tags
let heading = document.querySelectorAll(".left h1");
heading.forEach((element) => {
    let headingText = element.innerHTML;
    let arr = headingText.split("");
    let clutter = "";

    arr.forEach((ch , index) => {
        if(index === 5){
            clutter += `&nbsp;`;
        }
        clutter += `<span class="span">${ch}</span>`;
    });
    console.log(clutter);
    element.innerHTML = clutter;
});



var tl2 = gsap.timeline();
tl2.from(".span", {
    y: 200,
    duration: 1,
    stagger : 0.05,
});

tl2.from("#para", {
    opacity: 0,
    duration: 1,
});

tl2.from(".arrowDiv", {
    opacity: 0,
    duration: 1,
    delay: -0.5,
});
tl2.from(".p", {
    opacity: 0,
    duration: 1,
    delay: -0.5,
});
