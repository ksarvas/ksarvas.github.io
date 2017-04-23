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
    $(".gallery-text", this).mouseenter(function() {
		$(this).children(".inactive").css({"background-color": "#00BCD4", "border": "2px solid #00BCD4"});
	});
	
	$(".gallery-text").mouseleave(function() {
		$(".inactive").css({"background-color": "transparent", "border": "2px solid #fff"});
	});
    
    /* ---- MOBILE NAVIGATION ---- */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon')) {
            icon.addClass('ion-android-close');
            icon.removeClass('ion-navicon');
        } else {
            icon.addClass('ion-navicon');
            icon.removeClass('ion-android-close');
        }
    });
        
});