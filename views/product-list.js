function render(products){
  var template = ``;
  for( var i = 0; i< products.length; i++){
    template += `<h2>${products[i].name}: ${products[i].price}$  <a id="p-${[i]}" href="/add-to-cart" class="route btn btn-success">Add to cart</a></h2><img src="${products[i].photo}?[i]" alt="no pic">`;
  }
  $('section').html( template );
};
