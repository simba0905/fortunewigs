$(document).ready(function() {	

	var id = '#dialog';

	//Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	//Set heigth and width to mask to fill up the whole screen
	$('#mask').css({'width':maskWidth,'height':maskHeight});
	
	//Get the window height and width
	var winH = $(window).height();
	var winW = $(window).width();
          
	//Set the popup window to center
	$(id).css('top',  winH/2-$(id).height()/2);
	$(id).css('left', winW/2-$(id).width()/2);

	if (localStorage.getItem('popup') != 'loaded') {
		//transition effect
		$(id).fadeIn(2000); 
		$('#mask').fadeIn(500);	
		$('#mask').fadeTo("slow",0.9);
		localStorage.setItem('popup', 'loaded');
	} else {
		$(id).hide();
		$('#mask').hide();
		$('.window').hide();
	}

	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});
	
	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

	  // Load cookie library
  	$.getScript('https://cdn.rawgit.com/js-cookie/js-cookie/v2.1.2/src/js.cookie.js', function() {
  		// If cookie found (already shown)
	    if(Cookies.get('notice') !== undefined) {

			// Hide cookie notice (change jQuery selector to match your own)
			$('#mask').hide();
			$('.window').hide();
	    }
  	});
	
});