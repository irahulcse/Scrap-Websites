const scrape = require('website-scraper');

let options = {
    urls: ['https://preview.colorlib.com/theme/durg/project.html'],
    directory: './appsssssssssssssssssss',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});     