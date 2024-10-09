// coolpics.js - Script for Unit 2's Cool Pics

// Menu script
function setHideClass(element) {
    if (window.innerWidth < 600) {element.classList.add("hide");}
    else {element.classList.remove("hide");}
}
const navElement = document.querySelector("nav");
document.querySelector("#menu-button").addEventListener(
    "click",
    () => navElement.classList.toggle("hide")
);
document.addEventListener("DOMContentLoaded", () => setHideClass(navElement));
window.addEventListener("resize", () => setHideClass(navElement));

// Gallery script
document.querySelector(".gallery").addEventListener(
    "click",
    (event) => {
        const label = event.target.closest("img").src.split("-", 1);
        const path = label + "-full.jpeg";
        document.body.insertAdjacentHTML("afterbegin", `
            <div class="viewer">
                <div class="title-bar"><div class="span-container">
                    <span id="close-span">X</span>
                </div></div>
                <img class="modal" alt="${label}" src="${path}">
            </div>
        `);
        document.querySelector("#close-span").addEventListener(
            "click",
            () => document.querySelector(".viewer").remove()
        );
    }
);