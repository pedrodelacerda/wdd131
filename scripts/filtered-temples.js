const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978, November, 2",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-9671.jpg"
  },
  {
    templeName: "Campinas Brazil Temple",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-64137.jpg"
  },
  {
    templeName: "Curitiba Brazil Temple",
    location: "Curitiba, Brazil",
    dedicated: "2008, June, 01",
    area: 27850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-60225.jpg"
  },
  // Add more temple objects here...
];

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

const homeLink = document.querySelector("#home-link");
const oldTemplesLink = document.querySelector("#old-temples");
const newTemplesLink = document.querySelector("#new-temples");
const largeTemplesLink = document.querySelector("#large-temples");
const smallTemplesLink = document.querySelector("#small-temples");

homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

oldTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => temple.dedicated <"1900, January, 1");
  createTempleCard(oldTemples);
});

newTemplesLink.addEventListener("click", () => {
  let newTemples = temples.filter(temple => temple.dedicated >= "2001, January, 1");
  createTempleCard(newTemples);
});

largeTemplesLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});

smallTemplesLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area <= 10000);
  createTempleCard(smallTemples);
});

createTempleCard(temples);

function createTempleCard(filteredTemples) {
    const templeGrid = document.getElementById("temple-grid");
    templeGrid.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        let caption = document.createElement("figcaption");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        location.style.fontSize = "0.9rem";
        dedication.style.fontSize = "0.9rem";
        area.style.fontSize = "0.9rem";


        card.appendChild(name);
        card.appendChild(img);
        
        caption.appendChild(location);
        caption.appendChild(dedication);
        caption.appendChild(area);
        card.appendChild(caption);

        templeGrid.appendChild(card);
    });    
}
