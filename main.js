

function getWeather () {
    console.log('button works');

    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecast?q='
    let city = document.getElementById('questionOne').value;
    let urlParttwo = '&units=metric'
    let apiKey = '6b4f7d4420caea5b058e7a4ee75467c1';



    console.log(urlPartOne+ city + urlParttwo + '&APPID=' + apiKey);

    /*fetch(url + city + '&APPID=' + apiKey)
        .then((response) => response.json())
        .then((data) => {
    console.log(url + city + '&APPID=' + apiKey)

     */


}


//EVENT LISTENERS
document.getElementById('findCity').addEventListener('click', getWeather);