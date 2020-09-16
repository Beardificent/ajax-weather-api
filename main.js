

function getWeather () {
    console.log('button works');

    let urlPartOne = 'https://api.openweathermap.org/data/2.5/forecast?q='
    let city = document.getElementById('questionOne').value;
    let urlParttwo = '&units=metric'
    const apiKey = config.MY_KEY;



    console.log(urlPartOne+ city + urlParttwo + '&APPID=' + apiKey);

    /*fetch(url + city + '&APPID=' + apiKey)
        .then((response) => response.json())
        .then((data) => {
    console.log(url + city + '&APPID=' + apiKey)

     */


}


//EVENT LISTENERS
document.getElementById('findCity').addEventListener('click', getWeather);