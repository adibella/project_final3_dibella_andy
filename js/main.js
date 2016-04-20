//Custom Javascript

var welcome = document.getElementById( 'alien' );

welcome.addEventListener( 'click', function() {
	welcome.innerHTML = '<h3>You will love Pizza Planet!</h3>';
} );

//Custom jQuery
$( document ).ready( function() {
	$( '.facebook' ).mouseenter( function() {
		$( '.facebook' ).addClass( 'h4hover' );
	} );

	$( '.facebook' ).mouseleave( function() {
		$( '.facebook' ).removeClass( 'h4hover' );
	} );

	$( '.twitter' ).mouseenter( function() {
		$( '.twitter' ).addClass( 'h4hover' );
	} );

	$( '.twitter' ).mouseleave( function() {
		$( '.twitter' ).removeClass( 'h4hover' );
	} );

//Backstrech Plug-in

$.backstretch( 'css/headerbackground.jpg' );

//Scroll Up Plug-in

$( function() {
    $.scrollUp();
} );

} );
