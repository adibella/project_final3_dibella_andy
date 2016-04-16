var welcome = document.getElementById( 'welcome' );

welcome.addEventListener( 'click', function() {
	welcome.innerHTML = '<h3>You will love Pizza Planet!</h3>';
} );

//SMINT Plug-in


$( document ).ready( function() {
	$( '#welcome' ).animatescroll( ( { scrollSpeed:2000, easing:'easeOutBounce' } ) );
	$( '#menu' ).animatescroll( ( { scrollSpeed:2000, easing:'easeOutBounce' } ) );
	$( '#specials' ).animatescroll( ( { scrollSpeed:2000, easing:'easeOutBounce' } ) );
	$( '#contact' ).animatescroll( ( { scrollSpeed:2000, easing:'easeOutBounce' } ) );
} );
