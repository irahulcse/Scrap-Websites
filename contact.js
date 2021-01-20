const scrape = require('website-scraper');

let options = {
    urls: ['https://preview.colorlib.com/theme/durg/contact.html'],
    directory: './contactssssssssssssssssssss',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
}); 