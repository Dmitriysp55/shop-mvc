(function(){
var cart_id = $('.active').attr('id');
//alert(cart_id);

var cart = $.localStorage.get('cart')?$.localStorage.get('cart'):[];
cart.push( cart_id);
$.localStorage.set('cart', cart);
})();


//при нажатии на кнопку Cart - вытащить из стораджа ид всех продуктов
//создать view  который покажет список продуктов в карзине
