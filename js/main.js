var welcome = document.getElementById( 'welcome' );

welcome.addEventListener( 'click', function() {
	welcome.innerHTML = '<h3>You will love Pizza Planet!</h3>';
} );

//Backstrech Plug-in

$.backstretch( 'css/headerbackground.jpg' );
