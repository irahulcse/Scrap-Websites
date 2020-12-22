const scrape = require('website-scraper');

let options = {
    urls: ['https://www.glance.com/'],
    directory: './glance',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});