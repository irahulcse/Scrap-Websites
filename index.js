const scrape = require('website-scraper');

let options = {
    urls: ['https://stripe.com/en-in'],
    directory: './stripe',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});