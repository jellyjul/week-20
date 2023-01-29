
// Если делать с инпутом, то не получается
//  function showResult() {
//     let myCity = document.querySelector('.mycity');
//     myCity = myCity.value
//     console.log(myCity)
//     return  myCity.value
// };


document.addEventListener("DOMContentLoaded",
function(event) {
     getWeather("Уфа"); 
    //  getWeather(showResult());
});

function getWeather(city){
    let key = 'f4fe370735bdf6cfd5c77978322da1f1';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + key +'&units=metric&lang=ru' )
    .then(response => response.json())
    .then(weather =>  {
    console.log(weather);
    document.querySelector('.city').innerHTML = weather.name;
    document.querySelector('.temp').innerHTML = "Температура сегодня:" + Math.floor(weather.main.temp);
    document.querySelector('.high-low').innerHTML = "Макс/мин：" + Math.floor(weather.main.temp_max) + '/' + Math.floor(weather.main.temp_min);
    document.querySelector('.descr').innerHTML = weather.weather[0].description;
    document.querySelector('.humidity').innerHTML ="Влажность：" + Math.floor(weather.main.humidity)
    })
    .catch(error =>console.log(error))
}

