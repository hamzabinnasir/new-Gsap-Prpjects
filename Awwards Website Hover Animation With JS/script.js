let left = document.querySelector(".left");
let right = document.querySelector(".right");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let popup1 = document.querySelector(".popup1");
let popup2 = document.querySelector(".popup2");


// Images
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
let img7 = document.querySelector("#img7");
let img8 = document.querySelector("#img8");

left.addEventListener("mousemove", () => {
    btn1.style.backgroundColor = "#111";
    btn1.style.color = "#F8F8F8";
    popup1.style.height = "50vh";
    // Image1
    img1.style.filter = "blur(0px)"
    img1.style.height = "135px";
    img1.style.width = "250px";
    img1.style.opacity = "1";
    // Image2
    img2.style.filter = "blur(5px)"
    img2.style.height = "90px";
    img2.style.width = "150px";
    img2.style.opacity = "1";
    // Image3
    img3.style.filter = "blur(20px)"
    img3.style.height = "60px";
    img3.style.width = "110px";
    img3.style.opacity = "1";
    // Image4
    img4.style.filter = "blur(50px)"
    img4.style.height = "60px";
    img4.style.width = "110px";
    img4.style.opacity = "1";
});

left.addEventListener("mouseleave", () => {
    btn1.style.backgroundColor = "initial";
    btn1.style.color = "initial";
    popup1.style.height = "0vh";
    // Image1
    img1.style.filter = "blur(5px)"
    img1.style.height = "125px";
    img1.style.width = "230px";
    img1.style.opacity = "0";
    // Image2
    img2.style.filter = "blur(5px)"
    img2.style.height = "80px";
    img2.style.width = "130px";
    img2.style.opacity = "0";
    // Image3
    img3.style.filter = "blur(20px)"
    img3.style.height = "50px";
    img3.style.width = "100px";
    img3.style.opacity = "0";
    // Image4
    img4.style.filter = "blur(50px)"
    img4.style.height = "50px";
    img4.style.width = "100px";
    img4.style.opacity = "0";
});




right.addEventListener("mousemove", () => {
    btn2.style.backgroundColor = "#111";
    btn2.innerHTML = "Director of photography works";
    btn2.style.color = "#F8F8F8";
    popup2.style.height = "50vh";
    // Image5
    img5.style.filter = "blur(0px)"
    img5.style.height = "135px";
    img5.style.width = "250px";
    img5.style.opacity = "1";
    // Image6
    img6.style.filter = "blur(5px)"
    img6.style.height = "90px";
    img6.style.width = "150px";
    img6.style.opacity = "1";
    // Image7
    img7.style.filter = "blur(20px)"
    img7.style.height = "60px";
    img7.style.width = "110px";
    img7.style.opacity = "1";
    // Image8
    img8.style.filter = "blur(50px)"
    img8.style.height = "60px";
    img8.style.width = "110px";
    img8.style.opacity = "1";
});

right.addEventListener("mouseleave", () => {
    btn2.style.backgroundColor = "initial";
    btn2.innerHTML = "dop works";
    btn2.style.color = "initial";
    popup2.style.height = "0vh";
    // Image5
    img5.style.filter = "blur(5px)"
    img5.style.height = "125px";
    img5.style.width = "230px";
    img5.style.opacity = "0";
    // Image6
    img6.style.filter = "blur(5px)"
    img6.style.height = "80px";
    img6.style.width = "130px";
    img6.style.opacity = "0";
    // Image7
    img7.style.filter = "blur(20px)"
    img7.style.height = "50px";
    img7.style.width = "100px";
    img7.style.opacity = "0";
    // Image8
    img8.style.filter = "blur(50px)"
    img8.style.height = "50px";
    img8.style.width = "100px";
    img8.style.opacity = "0";
});