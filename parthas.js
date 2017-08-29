 $mt(document).ready(function(){
 $mt( ".logo-a" ).insertAfter( ".nav-4" );
    
    $mt("#login-ac").click(function(){
	$mt(".mtsettingbig").toggleClass("open-account");
});

$mt(function () {
    $mt(window).scroll(function () {
        if ($mt(this).scrollTop() > 650) {
            $mt(".header-container").addClass("is-sticky");

           
        } else if ($mt(this).scrollTop() <= 650) {
            $mt(".header-container").removeClass("is-sticky");
        }
    });

});
$mt("#product_tabs_tabreviews").remove();
 $mt( "#p-logo" ).insertAfter( "header .nav-4" );
            $mt(".cart-click,.cart-value").click(function(){
    $mt(".ajaxcart").toggleClass("open-cart");
});
});
  $mt(window).scroll(function () {
        
  });

$mt(document).ready(function(){
    var cart_value = $mt(".print").text();
    if(cart_value==0){
        $mt(".cart-value").hide();    
    }
    $mt(".cart-value").html('<p class="val-p">'+cart_value+'</p>');
});

$mt(document).ready(function(){
    $mt("#cart-back i").click(function(){
        $mt(".ajaxcart").toggleClass("open-cart");
    });
});
  
    function goBack() {
    window.history.back();
}