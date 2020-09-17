//SEARCHBAR

const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', setQuery);

//CONSTANTS AND VARIABLES
const cityDiv = document.querySelector('.location .city');
const theDateDiv = document.querySelector('.location .date');
const currentTemperatureDiv = document.querySelector('.current .temperature');
const descriptionDiv = document.querySelector('.current .weather');
const averageDiv = document.querySelector('.min-max');

let current = new Date();

//FUNCTIONS

function setDate (d){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    let weekDays = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    let day = weekDays[d.getDay()];
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    return`${day} ${date} ${month} ${year}`;
}


//keycode 13 is linked with the enter button :)
function setQuery (event) {
    if (event.keyCode === 13){
        getResults(searchbar.value)
    }
}



function getResults () {
    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let city = document.getElementById('set-city').value;
    let urlPartTwo = '&units=metric&APPID=';
    let apiKey = config.MY_KEY;
    let urlFull = urlPartOne + city + urlPartTwo + apiKey;

    console.log(urlFull);
    fetch(urlFull)
        .then(weather => {
            return weather.json ();
        }).then(data => {
        displayResults (data)
    });
}
function displayResults (weather) {

    theDateDiv.innerText = setDate(current);
    cityDiv.innerText = `${weather.city.name}, ${weather.city.country}`;
    currentTemperatureDiv.innerHTML= `${Math.round(weather.list[0].main.temp)}<span>°C</span>`;
    descriptionDiv.innerText = `${weather.list[0].weather[0].description}`;
    averageDiv.innerText = `${Math.round(weather.list[0].main.temp_min)}°c / ${Math.round(weather.list[0].main.temp_max)}°c`;
    console.log(weather.list);




}



