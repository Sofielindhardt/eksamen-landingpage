"use strict";

// Hent alle billeder i insta sektionen'
const zoomImages = document.querySelectorAll(".zoom-img"
);

// Tilføj event listeners til hvert billede
zoomImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
    img.classList.add("hover-zoom");
    });

    img.addEventListener("mouseout", () => {
    img.classList.remove("hover-zoom");
    });
});

const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("mouseover", () => {
        button.classList.add("hover-zoom");
    });

    button.addEventListener("mouseout", () => {
        button.classList.remove("hover-zoom");
    });
}
 


