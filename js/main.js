$(document).ready(function(){
	//Bootstrap scrollspy
	$('body').scrollspy({ target: '.navbar' });

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        $(".navbar-fixed-top").addClass(" top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass(" top-nav-collapse");
	    }
	});

	//smooth page scroll to an anchor on the same page. 
	//It has some logic built in to identify those jump links, and not target other links.
	//$('a[href*="#"]') selects all links with hashes
	  $('a[href*="#"]:not([href="#"])').click(function() {
	//on page links
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    	//gets part of the URL beginning with # - figure out which element to scroll to
		var target = $(this.hash);
		//does scroll target exist?
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
    }
  });

});