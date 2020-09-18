//SEARCHBAR

const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', pressEnter);

//CONSTANTS AND VARIABLES
const cityDiv = document.querySelector('.location .city');
const theDateDiv = document.querySelector('.location .date');
const currentTemperatureDiv = document.querySelector('.current .temperature');
const descriptionDiv = document.querySelector('.current .weather');
const averageDiv = document.querySelector('.min-max');

let current = new Date();

const dateDayOne = document.querySelector('.location-one .date-one');
const weatherDayOne = document.querySelector('.current-one .weather-one');
const minMaxDayOne = document.querySelector('.min-max-one');

const dateDayTwo = document.querySelector('.location-two .date-two');
const weatherDayTwo = document.querySelector('.current-two .weather-two');
const minMaxDayTwo = document.querySelector('.min-max-two')

const dateDayThree = document.querySelector('.location-three .date-three');
const weatherDayThree = document.querySelector('.current-three .weather-three');
const minMaxDayThree = document.querySelector('.min-max-three');


const dateDayFour = document.querySelector('.location-four .date-four');
const weatherDayFour = document.querySelector('.current-four .weather-four');
const minMaxDayFour = document.querySelector('.min-max-four');

const dateDayFive = document.querySelector('.location-five .date-five');
const weatherDayFive = document.querySelector('.current-five .weather-five');
const minMaxDayFive = document.querySelector('.min-max-five');
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
    let month = months [d.getMonth()];
    let year = d.getFullYear();

    return`${day} ${date} ${month} ${year}`;
}


//keycode 13 is linked with the enter button :)
function pressEnter (event) {
    if (event.keyCode === 13){
        getResults(searchbar.value)

    }
}



function getResults () {
    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let city = document.getElementById('set-city').value;
   // let country = document.getElementById('set-country').value;
    let urlPartTwo = '&units=metric&exclude=hourly&APPID=';
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
    averageDiv.innerText = 'Average temperature today is ' + (Math.round(weather.list[0].main.temp_min) + Math.round(weather.list[0].main.temp_max) / 2) +'°c';
    console.log(weather.list);


    dateDayOne.innerText = `${weather.list[9].dt_txt}`;
    weatherDayOne.innerText = `${weather.list[9].weather[0].description}`;
    minMaxDayOne.innerText = Math.round(weather.list[9].main.temp_min) + Math.round(weather.list[9].main.temp_max) / 2 +'°c';


    dateDayTwo.innerText = `${weather.list[17].dt_txt}`;
    weatherDayTwo.innerText = `${weather.list[17].weather[0].description}`;
    minMaxDayTwo.innerText = Math.round(weather.list[17].main.temp_min) + Math.round(weather.list[17].main.temp_max) / 2 +'°c';


    dateDayThree.innerText = `${weather.list[25].dt_txt}`;
    weatherDayThree.innerText = `${weather.list[25].weather[0].description}`;
    minMaxDayThree.innerText = Math.round(weather.list[25].main.temp_min) + Math.round(weather.list[25].main.temp_max) / 2 +'°c';



    dateDayFour.innerText = `${weather.list[33].dt_txt}`;
    weatherDayFour.innerText = `${weather.list[33].weather[0].description}`;
    minMaxDayFour.innerText = Math.round(weather.list[33].main.temp_min) + Math.round(weather.list[33].main.temp_max) / 2 +'°c';


    dateDayFive.innerText = `${weather.list[39].dt_txt}`;
    weatherDayFive.innerText = `${weather.list[39].weather[0].description}`;
    minMaxDayFive.innerText = Math.round(weather.list[39].main.temp_min) + Math.round(weather.list[39].main.temp_max) / 2 +'°c';
}




