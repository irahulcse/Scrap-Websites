const scrape = require('website-scraper');

let options = {
    urls: ['https://khatabook.com/'],
    directory: './khatabook',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});