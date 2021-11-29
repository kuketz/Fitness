let weather = {
apiKey: "be61c8099fe1637546ea5572a9d30cbf",
fetchWeather: function (city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => this.displayWeather(data));
},
displayWeather: function (data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = "Погода в " + name;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText =
    "Влажность: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Скорость ветра: " + speed + " km/h";
  document.querySelector(".weather").classList.remove("loading");

},
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});


//5days
// function GetInfo() {
//
//     var newName = document.getElementById("cityInput");
//     var cityName = document.getElementById("cityName");
//
//
// fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=apiKey')
// .then(response => response.json())
// .then(data => {
///    for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
//         //Number(1.3450001).toFixed(2); // 1.35
//     }
//
//     for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
//     }
//
//      for(i = 0; i<5; i++){
//         document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
//         data.list[i].weather[0].icon
//         +".png";
//     }
//
// })
//
// .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
// }
//
// function DefaultScreen(){
//     document.getElementById("cityInput").defaultValue = "London";
//     GetInfo();
// }
//
//
// //Getting and displaying the text for the upcoming five days of the week
// var d = new Date();
// var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
//
// //Function to get the correct integer for the index of the days array
// function CheckDay(day){
//     if(day + d.getDay() > 6){
//         return day + d.getDay() - 7;
//     }
//     else{
//         return day + d.getDay();
//     }
// }
//
//     for(i = 0; i<5; i++){
//         document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
//     }
