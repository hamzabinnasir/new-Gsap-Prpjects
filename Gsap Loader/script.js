$(document).ready(function(){
    var $scramble = $(".scramble");
    $scramble.scramble(3000 , 20 , "alphabet" , true);
});


var tl = gsap.timeline();
tl.to("#main" , {
    opacity : 0,
    delay : 3,
});
