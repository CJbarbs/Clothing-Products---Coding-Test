//When a selection is made in the drop down menu, these event listeners will change the partial which renders the grid.
var $allProducts = $('#productsGrid');
  $('#allFilter').click(function() {
     $allProducts.load('/allProducts');
});

var $saleProducts = $('#productsGrid');
  $('#saleFilter').click(function() {
     $saleProducts.load('/sale');
});

var $exclusiveProducts = $('#productsGrid');
  $('#exclusiveFilter').click(function() {
     $exclusiveProducts.load('/exclusive');
});
