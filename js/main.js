$(document).ready(function () {

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    // fix click on navbar, and content is hidden under navbar
    $('.nav-link-with-redirect-inpage').click(function(e){
        let divCoords = $(e.target.hash).offset();
        let height = $('header').height();
        e.preventDefault();
        window.scrollTo({
            left: divCoords.left, 
            top: divCoords.top - height,
            behavior: 'smooth'
        });
    });

});