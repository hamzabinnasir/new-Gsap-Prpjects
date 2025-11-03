// let list = document.querySelector("#para");
// let clutter = "";
// let listContent = list.textContent.split("");
// listContent.forEach((ch) =>{
//     clutter += `<span>${ch}</span>`;
// });
// console.log(clutter);




let boxContainer = document.querySelector(".boxContainer");
boxContainer.addEventListener("mouseenter" , () =>{
    gsap.to(".anim", {
        y: -45,
        stagger: 0.03,
        duration : 0.5,
    });
});

boxContainer.addEventListener("mouseleave" , () =>{
    gsap.to(".anim", {
        y: 0,
        duration : 0,
    });
});