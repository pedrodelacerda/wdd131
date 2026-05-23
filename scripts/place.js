const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;