const models3D = [
    { name: "Pokeball Vase", niche: "geek", material: "PLA", img: "images/geek1.jpg", price: "$25.00" },
    { name: "Mechanical Engine", niche: "engineering", material: "ABS", img: "images/enge1.jpg", price: "$45.00" },
    { name: "Couldron", niche: "deco", material: "PETG", img: "images/deco1.jpg", price: "$30.00" },
    { name: "X-box Mini", niche: "geek", material: "Resin", img: "images/geek2.jpg", price: "$15.00" },
    { name: "Gears", niche: "engineering", material: "Carbon PETG", img: "images/enge2.jpg", price: "$20.00" },
    { name: "Wall Deer", niche: "deco", material: "PLA", img: "images/deco2.jpg", price: "$25.00" },
    { name: "Mario Star", niche: "geek", material: "PLA", img: "images/geek3.jpg", price: "$35.00" },
    { name: "Gears Engine", niche: "engineering", material: "ABS", img: "images/enge3.jpg", price: "$50.00" },
    { name: "Ghosts", niche: "deco", material: "PETG", img: "images/deco3.jpg", price: "$30.00" }
];


const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;

function displayModels(filteredList) {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;
    grid.innerHTML = "";
    filteredList.forEach(model => {
        const card = document.createElement("div");
        card.className = "model-card"; 
        
        card.innerHTML = `
            <img src="${model.img}" alt="${model.name}">
            <h3>${model.name}</h3>
            <p>Material: <span class="tech-text">${model.material}</span></p>
            <p class="price">${model.price}</p>
        `;
        
        grid.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
if (document.getElementById("catalog-grid")) {
        
        displayModels(models3D);

        document.querySelector(".btn-all").addEventListener("click", () => {
            displayModels(models3D);
        });

        document.querySelector(".btn-geek").addEventListener("click", () => {
            const geekOnly = models3D.filter(item => item.niche === "geek");
            displayModels(geekOnly);
        });

        document.querySelector(".btn-engineering").addEventListener("click", () => {
            const engOnly = models3D.filter(item => item.niche === "engineering");
            displayModels(engOnly);
        });

        document.querySelector(".btn-deco").addEventListener("click", () => {
            const decoOnly = models3D.filter(item => item.niche === "deco");
            displayModels(decoOnly);
        });
    }
});