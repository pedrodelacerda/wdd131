const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();
const temperature = 25; 
const windSpeed = 10;

currentYearElement.innerHTML = today.getFullYear();
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

window.addEventListener("DOMContentLoaded", () => {
    const windChillElement = document.querySelector("#wind-chill-value");
    
    if (windChillElement) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const result = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${result}°C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});