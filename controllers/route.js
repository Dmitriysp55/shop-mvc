//фрагмент кода отвечает за маршрутизацию (диспетчер)
(function(){
  // задаем список адрессов, на которые должна отвечать система
  var routes = [
    {url: '/products', title: 'Product Catalog', controller: "products.js" },
    {url: '/cart', title: 'Your Cart', controller: "cart.js" },
    {url: '/checkout', title: 'Checkout & Pay', controller: "checkout.js" },
    {url: '/add-to-cart', title: 'Your cart', controller: "addcart.js" }
  ];

  function findRoute( href ){
      switch ( href ) {
      case routes[0].url: return routes[0]; break;
      case routes[1].url: return routes[1]; break;
      case routes[2].url: return routes[2]; break;
      case routes[3].url: return routes[3]; break;

      break;
      default: alert(' Error 404 - page is not found!');

    }
    // for( var i=0;i<routes.length;i++){
    //   if(routes[i].url == href ){
    //     return routes[i];
    //     break;
    //   }
    // }
  }


  function action(){
    event.preventDefault();
    $('.route').removeClass('active');
    $(this).addClass('active')
    var route = findRoute( $(this).attr('href') );
    $('title').text(route.title);
    $.getScript( 'controllers/' + route.controller );
  }

//  $('.route').click( action )
    $('body').on('click', '.route', action);
})();






// atom live server ctrl + alt + 3

// ДЗ: если адресса нет в списке [routes]- ответить аллертом 404
