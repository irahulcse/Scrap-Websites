const scrape = require('website-scraper');

let options = {
    urls: ['https://www.sybill.ai/'],
    directory: './sybill_ai_startup_ms_standord_iit_kanpur',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});