const apikey= "2f6fe97eaaa8588f5bf4d59fa17a1553";
const apiurl=" https://api.openweathermap.org/data/2.5/weather?
units=metric&q=bangalore";
async function checkWeather(){
  const response = await fetch(apiurl + `&appid=${apikey}`);
  var data=await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML= data.name;
  document.querySelector(".temp").innerHTML= data.main.temp + "°c";
  document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
  document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

}
checkWeather();