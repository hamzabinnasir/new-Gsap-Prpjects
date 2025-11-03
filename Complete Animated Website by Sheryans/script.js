// Section 1 Animation
function page1(){
    var tl = gsap.timeline();
tl.from(".navbar h1 , .navbar li , .navbar button", {
    opacity : 0,
    y : -20,
    duration : 0.4,
    stagger : 0.2,
});

tl.from(".left h1" ,{
    x : -50,
    opacity : 0,
    duration : 0.4,
});

tl.from(".left p" ,{
    x : -50,
    opacity : 0,
    duration : 0.4,
});

tl.from(".left button" ,{
    opacity : 0,
    duration : 0.4,
});

tl.from(".right img" ,{
    opacity : 0,
    x : 50,
    duration : 0.3,
} ,"-=0.5");

tl.from(".brandImages img" , {
    opacity : 0,
    y : 20,
    duration : 0.4,
    stagger : 0.2,
});
}
page1();



// Section 2 Animation
function page2(){
    var tl2 = gsap.timeline({
        scrollTrigger : {
            trigger : "#section-2",
            scroller : "body",
            start: "top 50%",
            end : "top 0%",
            scrub : 2,
        }
    });
    
    tl2.from(".serviceHeadPara" , {
        opacity : 0,
        y : 30,
        duration : 0.4,
    });
    
    
    
    // Card 1 and Card 2
    tl2.from(".card1" ,  {
        opacity : 0,
        x : -50,
        duration : 0.4,
    },"anim1");
    
    tl2.from(".card2" ,  {
        opacity : 0,
        x : 50,
        duration : 0.4,
    },"anim1");
    
    
    
    // Card 3 and Card 4
    tl2.from(".card3" ,  {
        opacity : 0,
        x : -50,
        duration : 0.4,
    },"anim2");
    
    tl2.from(".card4" ,  {
        opacity : 0,
        x : 50,
        duration : 0.4,
    },"anim2");
}
page2();
