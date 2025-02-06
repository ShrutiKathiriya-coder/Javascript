document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search-input button");
    const APIKey = "98740f4ebc0d63bc0f8ba70090e5a091";

    searchButton.addEventListener("click", () => {
        const city = document.querySelector(".search-input input").value;
        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(data => updateWeather(data))
            .catch(error => console.log("Error fetching weather data:", error));
    });
});

function updateWeather(data) {
    if (data.cod !== 200) {
        alert("City not found");
        return;
    }

    // document.querySelector(".search-box .name").textContent = data.name;
    document.querySelector(".search-box .temperature").innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
    document.querySelector(".search-box .description").textContent = data.weather[0].description;
    document.querySelector(".weather-details .info-humidity").textContent = `${data.main.humidity}%`;
    document.querySelector(".weather-details .info-wind").textContent = `${data.wind.speed} Km/h`;

    // Update weather image
    const weatherImage = document.querySelector(".search-box img");
    const weatherIcons = {
        Clear: "images/sun.png",
        Rain: "images/rain.png",
        Snow: "images/snow.png",
        Clouds: "images/clouds.png",
        Mist: "images/mist.png",
        Haze: "images/mist.png"
    };
    weatherImage.src = weatherIcons[data.weather[0].main] || "images/f-2.png";

    // Display current time
    const currentTime = new Date().toLocaleTimeString();
    // document.querySelector(".search-box .time").textContent = `Updated at: ${currentTime}`;
}
