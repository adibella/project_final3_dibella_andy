//Custom Javascript

var welcome = document.getElementById( 'alien' );

welcome.addEventListener( 'click', function() {
	welcome.innerHTML = '<h3>You will love Pizza Planet!</h3>';
} );

//Custom jQuery
$( document ).ready( function() {
	$( '.socialmedia' ).mouseenter( function() {
		$( '.socialmedia' ).addClass( 'h4hover' );
	} );

	$( '.socialmedia' ).mouseleave( function() {
		$( '.socialmedia' ).removeClass( 'h4hover' );
	} );

//Backstrech Plug-in

$.backstretch( 'css/headerbackground.jpg' );

//Scroll Up Plug-in

$( function() {
    $.scrollUp();
} );

} );
