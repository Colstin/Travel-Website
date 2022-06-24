
var button = document.getElementById("weather-submit-button");
var input = document.getElementById("cityinput");

var city = document.querySelector(".city-name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var icon = document.querySelector(".icon");



button.addEventListener("click",function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid=64d39c15fe67680d1da13f4fb2685aac&units=imperial")
    .then(response => response.json())
    .then(data => {
        var cityValue = data["name"];
        var tempValue = Math.floor(data["main"]["temp"]);
        var iconValue = "https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png"; 
        var descValue = data["weather"][0]["description"];

        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        //icon.innerHTML = attr("src",iconValue);

    })
  
    // .then(data => console.log(data))    this is to show the Json in our google inspect
.catch(err => alert("Wrong City Name!"))
})



  // ("https://api.openweathermap.org/data/2.5/weather?q=London&appid=64d39c15fe67680d1da13f4fb2685aac")

 // "https://api.openweathermap.org/img/w/"

