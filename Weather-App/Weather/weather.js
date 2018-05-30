const request = require('request');

var weather = (lat, long, callback) => {
    request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eb9e11acad96ef0b9fa35acfcbd0a28f`, (error, res, body) => {
        if (error) {
            callback('Unable to connect');
        } else if (body) {
            callback(undefined, {
                Temperature: JSON.parse(body).main.temp,
                Humidity: JSON.parse(body).main.humidity
        });
        }
    });
}

module.exports.weather = weather;