var button = document.getElementById("search");
var input = document.getElementById("cityInput");

var icon = document.querySelector(".icon");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var hum = document.querySelector(".hum");
var city = document.querySelector(".city-name");


button.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid=64d39c15fe67680d1da13f4fb2685aac&units=imperial")
    .then(response => response.json())
    .then(data => {                            // .then(data => console.log(data))    this is to show the Json in our google inspect
        var iconValue = data["weather"][0]["icon"];
        var tempValue = Math.floor(data["main"]["temp"]);
        var descValue = data["weather"][0]["description"];
        var humValue = data["main"]["humidity"];
        var cityValue = data["name"];
        

        icon.src = "https://openweathermap.org/img/w/" + iconValue +".png";
        temp.innerText = tempValue + "°F";
        desc.innerHTML = descValue;
        hum.innerText = "humidity: "+ humValue + "%";
        city.innerText = "City of " + cityValue;
    })
  
 
.catch(err => alert("Wrong City Name!"))
})

// This removes top-margin for the start image on web app;
document.querySelector(".icon-margin-button").addEventListener("click", function(){
    document.querySelector(".icon").style.margin = "0 0 0 0";
})

//image URL: https://openweathermap.org/img/w/04n.png";
//Api URL: https://api.openweathermap.org/data/2.5/weather?q=London&appid=64d39c15fe67680d1da13f4fb2685aac&units=imperial
