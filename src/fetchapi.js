function buttonClicked(){
    var city = document.getElementById("city").value;
    
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
         .then((response) => response.json())
         .then((data) => {
             console.log(data);  
             document.getElementById("CityName").innerHTML = `City: ${data.name}`
             document.getElementById("Country").innerHTML = `Country: ${data.sys.country}`
             document.getElementById("Coordinate").innerHTML = `Coordinate, longitude: ${data.coord.lon} , latitude: ${data.coord.lat}`
             document.getElementById("Weather").innerHTML = `Weather Description: ${data.weather[0].description}`
             var tempCelsius = data.main.temp - 273.15;
             document.getElementById("Temperature").innerHTML = `Current Temperature: ${tempCelsius.toFixed(2)}°C`;
             var minTempCelsius = data.main.temp_min - 273.15;
             document.getElementById("MinimumTemperature").innerHTML = `Minimum temperature: ${minTempCelsius.toFixed(2)}°C`;
             var maxTempCelsius = data.main.temp_max - 273.15;
             document.getElementById("MaximumTemperature").innerHTML = `Maximum temperature: ${maxTempCelsius.toFixed(2)}°C`;
             document.getElementById("Humidity").innerHTML = `Humidity: ${data.main.humidity}%`
             document.getElementById("Windspeed").innerHTML = `Wind Speed: ${data.wind.speed} m/s`
             document.getElementById("Sunrise").innerHTML = `Sunrise: ${new Date(data.sys.sunrise*1000).toLocaleTimeString()}`
             document.getElementById("Sunset").innerHTML = `Sunset: ${new Date(data.sys.sunset*1000).toLocaleTimeString()}`
        });
}
