const scrape = require('website-scraper');

let options = {
    urls: ['https://unacademy.com/'],
    directory: './unacademy',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});