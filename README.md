# URL-Shortener
A simple full stack app for creating short urls like bit.ly
 

* [x] Create server folder
  * [x] Init npm
  * [x] Add express morgan body-parser nodemon
  * [x] Add start script and dev script
* [ ] Create public folder
  * [ ] Create index.html
    * [ ] Add vue CDN
    * [ ] Add bulma CSS
    * [ ] Homepage layout
  * [ ] Serve public folder from express
* [ ] Create new url from on client
  * [ ] Submit form - fetch POST to server
    * [ ] Show any errors
    * [ ] show create link on page
* [ ] Add DB to server
  * [ ] Add monk
  * [ ] Create db folder
    * [ ] Create db connection
  * [ ] Create route to add url to db `/api/url`
    * [ ] Validate url with joi
      * url
      * name alphanum, min 5 chars, max 100 chars
    * [ ] Make sure name is not in use
      * [ ] insert url into db
    * [ ] respond with error if in use
* [ ] Create route to redirect a url
  * [ ] Search by name - if found, redirect to url
    * [ ] If not found, show 404
* [ ] Deploy!
* [ ] Alias domain

## Stretch
* [ ] Log links to a click
  * [ ] Date/Time
* [ ] View link page to see number of clicks
    