const apiKey = "3b5e6721b99796d16600c5f66e854671";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
         
        const data = await response.json();
         
        if(response.status == 404){
           document.querySelector(".error").style.display = "block";
           document.querySelector(".weather").style.display = "none";
        } else{
         
            
        const weatherMain = data.weather[0].main.toLowerCase(); 
        

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (weatherMain === "clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherMain === "clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherMain === "rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherMain === "drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherMain === "mist") {
            weatherIcon.src = "images/mist.png";
        } 
        else if (weatherMain === "mist") {
            weatherIcon.src = "images/snow.png";
        }  
        else if (weatherMain === "haze") {
            weatherIcon.src = "images/haze.png";
        } 
        else {
            // Default icon if none of the above conditions match
            weatherIcon.src = "images/default.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }  

     
}

 
    

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

 