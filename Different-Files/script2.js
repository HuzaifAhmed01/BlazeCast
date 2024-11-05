function BlazeCast() {
  const apiKey = "7cefeabe9fbfc95e0029bb81cde6088b";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      document.querySelector(".weather").style.display = "block";
    }

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    var body = document.querySelector("body");

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/Images,videos/clouds.webp";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/Images,videos/clear.webp";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/Images,videos/rain.webp";
    } else if (data.weather[0].main == "drizzle") {
      weatherIcon.src = "/Images,videos/drizzle.webp";
    } else if (data.weather[0].main == "snow") {
      weatherIcon.src = "/Images,videos/snow.webp";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "/Images,videos/mist.webp";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
}
BlazeCast();
