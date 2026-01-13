// Display current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
