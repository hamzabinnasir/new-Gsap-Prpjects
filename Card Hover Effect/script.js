let leftDiv = document.querySelector(".left");
let float_lft = document.querySelector(".float-lft");

// Cards
let card1 = document.querySelector("#card1");

// Helpers for interactions (mouse, touch, pointer)
function activateLeft() {
    float_lft.style.right = "-90%";
    card1.style.transform = "perspective(1000px) rotateY(-30deg) translateX(-110%)";
}

function activateRight() {
    float_rght.style.left = "-90%";
    card1.style.transform = "perspective(1000px) rotateY(30deg) translateX(110%)";
}

function resetCards() {
    float_lft.style.right = "-150%";
    float_rght.style.left = "-150%";
    card1.style.transform = "perspective(1000px) rotateY(0deg) translateX(0%)";
}

leftDiv.addEventListener("mousemove", activateLeft, { passive: true });

leftDiv.addEventListener("mouseleave", resetCards, { passive: true });

// Touch and pointer for left side
leftDiv.addEventListener("pointerenter", activateLeft, { passive: true });
leftDiv.addEventListener("pointerleave", resetCards, { passive: true });
leftDiv.addEventListener("touchstart", activateLeft, { passive: true });
leftDiv.addEventListener("touchend", resetCards, { passive: true });


let rightDiv = document.querySelector(".right");
let float_rght = document.querySelector(".float-rght");
rightDiv.addEventListener("mousemove", activateRight, { passive: true });

rightDiv.addEventListener("mouseleave", resetCards, { passive: true });

// Touch and pointer for right side
rightDiv.addEventListener("pointerenter", activateRight, { passive: true });
rightDiv.addEventListener("pointerleave", resetCards, { passive: true });
rightDiv.addEventListener("touchstart", activateRight, { passive: true });
rightDiv.addEventListener("touchend", resetCards, { passive: true });




