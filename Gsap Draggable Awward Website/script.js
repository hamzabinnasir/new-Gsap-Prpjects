Draggable.create(".drag" , {
    type : "x",
    bounds : ".container",
});

function checkOverlap(){
    var circle = document.querySelector(".circle");
    var drag = document.querySelector(".drag");
    // Finding Positions
    var rect1 = circle.getBoundingClientRect();
    var rect2  = drag.getBoundingClientRect();

    let video1 = document.querySelector("#vd1");


    if(rect1.left < rect2.right){
        video1.style.opacity = 0;
    }
    else{
        video1.style.opacity = 1;
    }
}

window.addEventListener("mousemove" , checkOverlap);