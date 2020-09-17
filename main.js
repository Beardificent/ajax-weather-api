const searchbar = document.querySelector('.search-bar');
searchbar.addEventListener('keypress', setQuery);

const currentTemperatureDiv = document.querySelector('.current .temperature');
const theDateDiv = document.querySelector('.location .date');
const cityDiv = document.querySelector('.location .city');
const descriptionDiv = document.querySelector('.current .weather');
const averageDiv = document.querySelector('.min-max');

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

    let oneCallFetch = 'https://api.openweathermap.org/data/2.5/onecall?';
    let lat = weather.city.coords.latitude;
    let lon = weather.city.coords.longitude;
    let urlPartTwo = '&units=metric&APPID=';
    let apiKey = config.MY_KEY;
    let oneCallUrl = oneCallFetch + lat + lon + urlPartTwo + apiKey;

        fetch(oneCallUrl)
            .then(weather => {
                return weather.json ();
            }).then(data => {
            displayResults (data)
        });


    cityDiv.innerText = `${weather.city.name}, ${weather.city.country}`;

    let current = new Date();

    theDateDiv.innerText = dateBuilder(current);


    //currentTemperatureDiv.innerHTML= `${Math.round(weather.list[0].main[0].temp)}<span>°C</span>`;

   // descriptionDiv.innerText = weather.weather[0].main;

  //  averageDiv.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
}

function dateBuilder (d){
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


