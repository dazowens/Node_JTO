const axios = require('axios'),
    cheerio = require('cheerio');

const FetchPriceAmazon = (producturl) => {
    axios.get(producturl).then(({ data }) => {
        const $ = cheerio.load(data);
        console.log($("title").text());
        console.log($("#priceblock_ourprice").text());
    });
};


FetchPriceAmazon('https://www.amazon.co.uk/Nintendo-Games-NVLCAAAL-Amiibo-Kirby/dp/B00N4ABV10')

FetchPriceAmazon('https://www.amazon.co.uk/Villager-No-9-amiibo-Nintendo-Wii/dp/B00N8PBXFK')

FetchPriceAmazon('https://www.amazon.co.uk/Donkey-Kong-No-4-amiibo-Nintendo/dp/B00N8PBOFO')

FetchPriceAmazon('https://www.amazon.co.uk/Nintendo-Games-NVLCABAJ-Amiibo-Rosalina/dp/B01H2DKI3G/')