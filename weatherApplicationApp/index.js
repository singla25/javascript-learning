const apiKey = "cd75bc44fdc91e82ad765ee40e6e76a7";

fetchByLocation();

function fetchByLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => {   
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      fetch(url)
        .then(res => res.json())
        .then(data => renderWeather(data))
        .catch(err => console.error(err));
    },
    error => {
      alert("Location permission denied ❌");
    }
  );
}

function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Please enter your City");
    return;
  } 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 404) {
        document.getElementById("result").innerHTML = "City not found ❌";
        return;
      }
      renderWeather(data);
    })
    .catch(err => console.error(err));
}

function renderWeather(data) {
  const icon = getWeatherIcon(data.weather[0].main);

  document.getElementById("result").innerHTML = `
    <h3>${data.name}</h3>
    <p>📅 Date: ${formatDate()}</p>
    <p>${icon} Weather: ${data.weather[0].main}</p>
    <p>🌡️ Temp: ${data.main.temp} °C</p>
    <p>🌅 Sunrise: ${formatTime(data.sys.sunrise)}</p>
    <p>🌇 Sunset: ${formatTime(data.sys.sunset)}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>💨 Wind: ${data.wind.speed} m/s</p>
    <p>👀 Visibility: ${data.visibility / 1000} km</p>
  `;
}

function formatDate() {
  const date = new Date();
  return date.toDateString();
}

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function getWeatherIcon(weather) {
  switch (weather) {
    case "Clear": return "☀️";
    case "Clouds": return "☁️";
    case "Rain": return "🌧️";
    case "Drizzle": return "🌦️";
    case "Thunderstorm": return "⛈️";
    case "Snow": return "❄️";
    case "Mist":
    case "Haze":
    case "Fog": return "🌫️";
    default: return "🌍";
  }
}

