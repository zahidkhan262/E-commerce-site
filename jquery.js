// navigation
$('#bars').click(function () {
    $('.navigation-ul').toggleClass('active-nav')
})

// scroll top
$(window).scroll(function () {
    if ($(window).scrollTop() > 30) {
        $('header').addClass('menu-nav');
    }
    else {
        $('header').removeClass('menu-nav')
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
$('.main-carousel').slick();