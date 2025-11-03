gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: "body",
    anticipatePin: 1,
});

const mm = gsap.matchMedia();

mm.add({
    // mobile first
    isSmall: "(max-width: 480px)",
    isMedium: "(min-width: 481px) and (max-width: 1024px)",
    isLarge: "(min-width: 1025px)"
}, (context) => {
    const { conditions } = context;

    let marginOffset;
    let scale2;
    let scale3;

    if (conditions.isSmall) {
        marginOffset = "-55svh";
        scale2 = 1.06;
        scale3 = 1.12;
    } else if (conditions.isMedium) {
        marginOffset = "-65svh";
        scale2 = 1.08;
        scale3 = 1.16;
    } else {
        marginOffset = "-70svh";
        scale2 = 1.1;
        scale3 = 1.2;
    }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            start: "50% 50%",
            end: "150% 50%",
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
        }
    });

    tl.to(".img2", {
        marginTop: marginOffset,
        scale: scale2,
    });
    tl.to(".img3", {
        marginTop: marginOffset,
        scale: scale3,
    });

    return () => {
        tl.kill();
    };
});

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});