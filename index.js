const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const url = "https://stockanalysis.com/stocks/";

axios(url)
  .then((response) => {
    let tickerSymbols = [];
    const html = response.data;
    const $ = cheerio.load(html);
    let stocksList = $(".no-spacing li");

    stocksList.each(function () {
      let name = $(this).text();
      let endIndex = name.indexOf(" -");
      let symbol = name.slice(0, endIndex);
      tickerSymbols.push(`"${symbol}"`);
    });
    const dir = "./ticker-symbols.txt";
    console.log(tickerSymbols);
    fs.writeFile(dir, tickerSymbols.toString(), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(tickerSymbols.length + " items written to " + dir);
      }
    });
  })
  .catch((err) => console.error(err));
