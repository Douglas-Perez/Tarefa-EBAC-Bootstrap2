$(document).ready(function(){
    $('.nav-link').click(function(e) {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').slideUp(300, function() {
                $(this).removeClass('show').css('display', '');
            });
        }
        
        e.preventDefault();

        const targetId = $(this).attr('href');
        const targetElement = $(targetId);
        const headerOffset = $('header').outerHeight();
        const elementPosition = targetElement.offset().top;
        const offsetPosition = elementPosition - headerOffset;
        
        $('html, body').animate({
            scrollTop: offsetPosition
        }, 300);
    });
})