const temperature = 5;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather display
const windChillSpan = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillSpan.textContent = `${windChill.toFixed(1)} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
