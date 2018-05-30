const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alia: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    (error, res, body) => {
        if (error) {
            console.log("Unable to connect to Internet");
        } else if (JSON.parse(body).status === '200'){
            console.log(`Address: ${JSON.parse(body).results[0].formatted_address}`);
            console.log(`Latitude: ${JSON.parse(body).results[0].geometry.location.lat}`);
            console.log(`Longitude: ${JSON.parse(body).results[0].geometry.location.lng}`);
        }
    });
