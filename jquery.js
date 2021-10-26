// navigation
$('#bars').click(function () {
    $('.navigation-ul').toggleClass('active-nav');
})
$('.main-page, .best-seller, .best-seller-carousel, .our-services').click(function () {
    $('.navigation-ul').removeClass('active-nav')
})

// scroll top
$(window).scroll(function () {
    if ($(window).scrollTop() >= 90) {
        $('.top-header').hide(600);
        $('header').addClass('menu-nav');
    }
    else {
        $('header').removeClass('menu-nav')
        $('.top-header').show(400);
    }
})

//search

$('#search').click(function () {
    $('.fa-user').toggle()
    $('.fa-shopping-cart').toggle(200)
    $('.icons input').toggle(200)
    $('.icons input').addClass('input-search');
})







// main carousel
$('.main-carousel').slick({
    fade: true,
    arrows: false,
    speed: 500,
});