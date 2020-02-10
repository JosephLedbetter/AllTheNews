# All The News Worth Scraping From NYT

### Overview

The New York Times Scraper (NYT Scraper for short) is a scraper app which captures the title, short summary and image of articles. In the app, users save their preferred articles, add notes and edit notes to one or many articles. The app also provides search feature, allowing users to search in titles according to different key words.
 
### Key Dependencies

`request`: enables `cheerio` to get access to front-end code of https://www.nytimes.com/section/world

`cheerio`: scrapes front-end code from https://www.nytimes.com/section/world

`mongoose`: be in charge of database of `scrap`

`express`: builds server-side routes and functions

`morgan`: logs server-side requests, helping debugging

`express-handlebars`: a powerful front-end builder without requiring multiple html pages
