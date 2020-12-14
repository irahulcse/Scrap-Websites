const scrape = require('website-scraper');

let options = {
    urls: ['https://www.oberlo.in/blog/instagram-stories#the-power-of-instagram-for-businesses'],
    directory: './oberlopage',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});