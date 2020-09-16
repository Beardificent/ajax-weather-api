//CONSTANTS AND VARIABLES
const theDateDiv = document.querySelector('.thedate');
const cityDiv = document.querySelector('.city');
const averageTemperatureDiv = document.querySelector('.averagetemperature');
const descriptionDiv = document.querySelector('.description');
const weekForeCastDiv = document.querySelector('.weekforecast');

//START FUNCTION getWeather

function getWeather () {
    getCity ()

}

//END FUNCTION getWeather
////
//START FUNCTION getCity

function getCity () {

    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let city = document.getElementById('questionOne').value;
    let urlPartTwo = '&units=metric';
    console.log('getCity responds to button');
    const apiKey = config.MY_KEY;
    fetch(urlPartOne + city + urlPartTwo + '&APPID=' + apiKey)
        .then((response) => response.json())
        .then((data) => {
                for (i = 0; i < 6; i++) {
                    averageTemperatureDiv.textContent = data["list"][i]["main"]["temp"];
                }
             }
        )

}

//END FUNCTION getCity



//EVENT LISTENERS
document.getElementById('findCity').addEventListener('click', getWeather);