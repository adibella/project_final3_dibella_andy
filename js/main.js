//Custom Javascript

var welcome = document.getElementById( 'alien' );

welcome.addEventListener( 'click', function() {
	welcome.innerHTML = '<h3>You will love Pizza Planet!</h3>';
} );

//Custon jquery
$( document ).ready( function() {
	$( 'h4' ).mouseenter( function() {
		$( 'h4' ).addClass( 'h4hover' );
	} );

	$( 'h4' ).mouseleave( function() {
		$( 'h4' ).removeClass( 'h4hover' );
	} );

//Backstrech Plug-in

$.backstretch( 'css/headerbackground.jpg' );

//Scroll Up Plug-in

$( function() {
    $.scrollUp();
} );

} );
