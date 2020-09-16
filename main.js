
const dayOne = document.querySelector('.dayOne');
const dayTwo = document.querySelector('.dayTwo');
const dayThree = document.querySelector('.dayThree');
const dayFour = document.querySelector('.dayFour');
const dayFive = document.querySelector('.dayFive');

function getWeather () {
    console.log('button works');
    getLink ()


}

function getLink () {
    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let city = document.getElementById('questionOne').value;
    let urlPartTwo = '&units=metric';

    const apiKey = config.MY_KEY;
    fetch(urlPartOne + city + urlPartTwo + '&APPID=' + apiKey)
        .then((response) => response.json())
        .then((data) => {
            console.log(urlPartOne+ city + urlPartTwo + '&APPID=' + apiKey)
            }
        )

}






//EVENT LISTENERS
document.getElementById('findCity').addEventListener('click', getWeather);