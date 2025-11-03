// // Method 1
// // DOM Manipulation
// let cardParent1 = document.querySelector(".cardParent1");
// let cardParent2 = document.querySelector(".cardParent2");
// let cardParent3 = document.querySelector(".cardParent3");

// let card1 = document.querySelector(".card1");
// let card2 = document.querySelector(".card2");
// let card3 = document.querySelector(".card3");


// // Card 1
// cardParent1.addEventListener("mousemove", () => {
//     card1.style.transform = "rotateY(180deg)";
// });
// cardParent1.addEventListener("mouseleave", () => {
//     card1.style.transform = "rotateY(0deg)";
// });

// // Card 2
// cardParent2.addEventListener("mousemove", () => {
//     card2.style.transform = "rotateY(180deg)";
// });
// cardParent2.addEventListener("mouseleave", () => {
//     card2.style.transform = "rotateY(0deg)";
// });

// // Card 3
// cardParent3.addEventListener("mousemove", () => {
//     card3.style.transform = "rotateY(180deg)";
// });
// cardParent3.addEventListener("mouseleave", () => {
//     card3.style.transform = "rotateY(0deg)";
// });





// // Method 2 (rotate in same direction)
// // DOM Manipulation
// let card1 = document.querySelector(".card1");
// let card2 = document.querySelector(".card2");
// let card3 = document.querySelector(".card3");


// // Card 1
// card1.addEventListener("mousemove", () => {
//     anime({
//         targets: document.querySelector(".card1"),
//         duration : 400,
//         rotateY : "+=180",
//         easing: 'easeInOutSine',
//       });
//       ;
// });
// card2.addEventListener("mousemove", () => {
//     anime({
//         targets: document.querySelector(".card2"),
//         duration : 400,
//         rotateY : "+=180",
//         easing: 'easeInOutSine',
//       });
//       ;
// });
// card3.addEventListener("mousemove", () => {
//     anime({
//         targets: document.querySelector(".card3"),
//         duration : 400,
//         rotateY : "+=180",
//         easing: 'easeInOutSine',
//       });
//       ;
// });