const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./Weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
   if (errorMessage) {
      console.log("Unable to connect");
    } else{
       console.log(results.Address);
       weather.weather(results.Latitude, results.Longitude, (errorMessage, result) => {
           if (errorMessage) {
               console.log('Unable to connect to Internet');
           } else if (result) {
               console.log(result);
           }
       });
    }

});
