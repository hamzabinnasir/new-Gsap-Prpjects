// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

// Responsive GSAP animations
const mm = gsap.matchMedia();

mm.add({
    desktop: "(min-width: 769px)",
    tablet: "(min-width: 481px) and (max-width: 768px)",
    mobile: "(max-width: 480px)"
}, (context) => {
    const { conditions } = context;

    // base timeline config
    const isMobile = conditions.mobile === true;
    const isTablet = conditions.tablet === true;

    const tl = gsap.timeline({
        scrollTrigger : {
            scroller : "body",
            trigger : ".imgContainer",
            start : isMobile ? "40% 60%" : "50% 50%",
            end : isMobile ? "110% 50%" : "150% 50%",
            scrub : true,
            pin : !isMobile, // avoid heavy pinning on small screens
        }
    });

    tl.to([".image", ".image1"], {
        transform : "rotateX(0deg)",
        ease: "none"
    }, "ha");

    tl.to(".image2" , {
        opacity : 0,
        ease: "none"
    } , "ha");
});

// Burger menu logic
(function setupBurgerMenu(){
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMenuBtn');
    const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('[data-menu-link]') : [];
    const body = document.body;

    if(!burgerBtn || !mobileMenu) return;

    function openMenu(){
        mobileMenu.classList.add('open');
        mobileMenu.setAttribute('aria-hidden','false');
        burgerBtn.setAttribute('aria-expanded','true');
        body.classList.add('no-scroll');
    }

    function closeMenu(){
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden','true');
        burgerBtn.setAttribute('aria-expanded','false');
        body.classList.remove('no-scroll');
    }

    burgerBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        isOpen ? closeMenu() : openMenu();
    });

    if(closeBtn){
        closeBtn.addEventListener('click', closeMenu);
    }

    menuLinks.forEach(el => el.addEventListener('click', closeMenu));

    // Close on resize to desktop
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 769){
            closeMenu();
        }
    });
})();