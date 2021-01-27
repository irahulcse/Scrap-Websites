const scrape = require('website-scraper');

let options = {
    urls: ['https://adespresso.com/blog/17-amazing-examples-of-instagram-and-facebook-stories-that-convert/'],
    directory: './adespresso',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
}); 