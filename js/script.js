$(document).ready(function() {
    
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