(function(){

  $.getScript('models/product.js')
   .done( function(){
    //  1)products
     getProducts( function( products ){   // 2) run a view
        $.getScript('views/product-list.js')
         .done(function(){
          render( products );
        });
     });


  } ); // deffer

})();
