function generate() {
    let arr = [];
    let value = 169;

    let a = "https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/0000";

    // From 1 to 9
    let b = ".jpg&w=750&q=90";
    for(let i = 0 ; i < 10 ; i++){
        arr.push(a + i + b);
    };


    // Url se ek digit kam kr hae hain or loop main ek digit increase kr rh e hain q k decemal number sytem main 1 to 9 tk single digit phir 10 - 99 tk do digits or isi trh aagay chalta jata hai
    // From 10 to 99
    let c = "https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/000"
    for(let i = 10 ; i < 100 ; i++){
        arr.push(c + i + b);
    };


    // From 99 to 168
    let d = "https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00"
    for(let i = 100 ; i < value ; i++){
        arr.push(d + i + b);
    };
    console.log(arr);

    // let div = document.querySelector(".hello");
    // div.innerHTML = arr.join("<br>");  // Join the array elements
}


generate();