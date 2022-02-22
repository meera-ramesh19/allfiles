let nodeGeocoder = require('node-geocoder');
let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);
geoCoder.geocode('7410 35th ave jacksonheights ny')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });