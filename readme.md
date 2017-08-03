##Clothing Products Coding Test
As part of a coding test applicants are required to write an application that takes product information from a JSON file and displays it in a grid.
For this coding test I used Node.js with the Express framework and used Embedded javascript for the view/templating engine.

##Installation Instructions
1. Clone the Repository
2. open up terminal and cd into the directory
3. if node isn't installed, then you will have to install node before the application can be run, more information can be found [here](https://nodejs.org/en/download/package-manager/)
4. Once navigated to the directory dependencies will have to be installed by typing `npm install`
5. Once dependencies are installed then the app can by typing `node app.js`
6. Navigate to localhost:4000 in your browser

##Notes
I decided to use Node with EJS because I figured this would be suitable for a small project like this, although in retrospect I believe I should of just used React due to the limitations of embedded javascript.

##Explanation
In order to filter through the products in the json file, I ended up making grid partials which I then included into the index page. By default all products show. Each partial had a function which looped over the data depending on what filter was selected and would only display products that matched that filter. The grid partials were then changed with an onClick event listener through jQuery.

If I was going to do this in React I believe it would be a lot more straight forward, I could of simply made the information of the json file available through a get request, then filter through the data on each of the get requests, saved to the state then have the table update depending on the state.
