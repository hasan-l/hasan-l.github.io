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
	  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});