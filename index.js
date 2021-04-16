const scrape = require('website-scraper');

let options = {
    urls: ['https://azuredevopslabs.com/labs/azuredevops/agile/'],
    directory: './agilmodel`',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
}); 