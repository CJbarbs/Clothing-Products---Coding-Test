var express = require('express');
var app = express();
var path = require('path');

// views as directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // use either jade or ejs
// instruct express to serve static assets
app.use(express.static('public'));
// app.use(express.static('public/js'));

//reading the json  with -async 
var fs = require('fs');
var products;
fs.readFile('products.json', 'utf8', function (err, data) {
  if (err) throw err;
  products = JSON.parse(data);
  // console.log(products)
})


// set routes for index + partials
app.get('/', function(req, res) {
  res.render('index.ejs', {
    products: products
  });
});

app.get('/allProducts', function (req, res) {
    res.render('partials/products.ejs', {
      products: products
    });
});

app.get('/sale', function (req, res) {
    res.render('partials/sale.ejs', {
      products: products
    });
});

app.get('/exclusive', function (req, res) {
    res.render('partials/exclusive.ejs', {
      products: products
    });
});

// Set server port
app.listen(4000);
console.log('server is running');
