"use strict";

// Hent alle billeder i insta sektionen'
const zoomImages = document.querySelectorAll(".zoom-img");

// Tilføj event listeners til hvert billede


//Mouseover = zoom in
zoomImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
    img.classList.add("hover-zoom");
    });


//Mouseout = remove zoom

    img.addEventListener("mouseout", () => {
    img.classList.remove("hover-zoom");
    });
});

// Hent knappen

const button = document.querySelector(".btn");


// Tilføj event listeners til knappen

//Mouseover = zoom in

if (button) {
    button.addEventListener("mouseover", () => {
        button.classList.add("hover-zoom");
    });


//Mouseout = remove zoom

    button.addEventListener("mouseout", () => {
        button.classList.remove("hover-zoom");
    });
}




 


