# Stock Ticker Symbol Web-Scraper

A `node.js` web scraper that uses `axios` and `cheerio` to collect all 7,000+ US stock ticker symbols.

Ticker symbols are then written to a `.txt` file in this project's root directory.

I wrote this scraper to use for another service that I am writing to help pick stocks based on value-investing principles (currently in a private repository).

## To Run

1. `npm install`
2. `npm run start`
3. Check `./ticker-symbols.txt` for a list of all US stock ticker symbols.