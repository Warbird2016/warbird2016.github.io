$(document).ready(
	function(){
		$('nav').onePageNav({
			scrollThreshold: 0.1
		});
	

	function toggleMenu(){
		// do something
		$('nav').toggle();
	}

$('#menu-button').click(toggleMenu);

// at mobile size, remove style attribute from nav text

$(window).resize(function(){

	var width = $(window).width()
	if (width>768){
		$('nav').removeAttr('style');
	}

});






	});



