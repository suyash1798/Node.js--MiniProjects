const request = require('request');

var geocodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address);
    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        (error, res, body) => {
            if (error) {
                callback("Unable to connect to Internet", undefined);
            } else if (JSON.parse(body).status === 'OK') {
                callback(undefined,{
                    Address: JSON.parse(body).results[0].formatted_address,
                            Latitude: JSON.parse(body).results[0].geometry.location.lat,
                Longitude: JSON.parse(body).results[0].geometry.location.lng});
            }
        });

};

module.exports.geocodeAddress = geocodeAddress;