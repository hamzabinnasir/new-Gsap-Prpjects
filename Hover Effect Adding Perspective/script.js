let cardContainer = document.querySelectorAll(".cardContainer");
cardContainer.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        let card = element.querySelector(".card");
        if (card) {
            card.style.transform = "perspective(1000px) rotateX(-50deg)";
        }
    });

    element.addEventListener("mouseleave", () => {
        let card = element.querySelector(".card");
        if (card) {
            card.style.transform = "perspective(1000px) rotateX(0deg)";
        }
    });
});
