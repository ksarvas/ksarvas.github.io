$(document).ready(function() {
    
    
    /* ---- NAVIGATION SCROLL ---- */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
	
	/* ---- GALLERY HIGHLIGHT ---- */
    $(".work-text", this).mouseenter(function() {
		$(this).children(".section-work article h3").css({"background-color": "#00BCD4", "border": "2px solid #00BCD4"});
	});
	
	$(".work-text").mouseleave(function() {
		$(".section-work article h3").css({"background-color": "transparent", "border": "2px solid #fff"});
	});
    
        
});