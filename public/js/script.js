$(function() {
    $('#media-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass: true,
        center: true,
        responsive: {
            0: {
            items: 2,
            },
            600: {
            items: 3,
            },
            1000: {
            items: 4,
            margin: 20
            },
            1100: {
                items: 5,
                margin: 20
            }

        }
    });
});


$(function() {
    $('#product-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass: true,
        center: true,
        items: 1,
        responsive: {
            0: {
            items: 1,
            },
            600: {
            items: 2,
            },
            1000: {
            items: 3,
            margin: 20
            },
            1100: {
                items: 4,
                margin: 20
            }

        }
    });
});
