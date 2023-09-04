AOS.init();
$(document).ready(function() {
    $('.counter').each(function () {
    $(this).prop('counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    });

    $('.hamburger-menu').click(function(){
        $('body').addClass('headeropen');
        $('.side-menu').addClass('activeheader');
    });
    $('.closemenu').click(function(){
        $('body').removeClass('headeropen');
        $('.side-menu').removeClass('activeheader');
    });
});  
