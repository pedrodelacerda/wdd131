const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    menuLinks.classList.toggle("open");
});

const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;