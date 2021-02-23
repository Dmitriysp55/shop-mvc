// Schema (modern develpment)
class Product {
  constructor( name, price, photo, quantity ) {
    this.name     = name;
    this.price    = price;
    this.photo    = photo;
    this.quantity = quantity;
  }
}

// данный метод/функция генерирует список продуктов
// https://www.npmjs.com/package/faker
function getProducts( f ){
  if(typeof products == 'undefined' ){
  $.getScript('https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js')
  .done( function(){
  faker.locale = "ru";
  var products = [];
  for( var i = 0; i< 100; i++){
  var name = faker.commerce.productName();
  var price = faker.commerce.price();
  var photo = faker.image.cats();
  var quantity = faker.random.number(1,100);
  var product = new Product (name, price, photo, quantity);
  products.push( product );
}
  f( products );
});
  }
else {
  f( products )
}
}
