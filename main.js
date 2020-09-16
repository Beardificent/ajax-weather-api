function getWeather () {
    console.log('button works');
    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecastq='
    let city = document.getElementById('questionOne').value;
    let urlPartTwo = '&units=metric';
    let apiKey = '7aa28471737ee768556bdeb7c6b3a4df';


    console.log(urlPartOne + city + urlPartTwo + '&APPID=' + apiKey);

    fetch(urlPartOne + city + urlPartTwo + '&APPID=' + apiKey)
        .then((response) => response.json())
        .then((data) => {


        })

}


//EVENT LISTENERS
document.getElementById('findCity').addEventListener('click', getWeather)