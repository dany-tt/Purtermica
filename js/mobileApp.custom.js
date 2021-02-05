$(function () {
    /* 
     Custom js file for assan
     */
    $('.carousel-shots').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 250,
        mouseDrag: true,
        center: true,
        autoWidth: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.carousel-review').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeInUp',
        smartSpeed: 550,
        autoplayTimeout: 3500,
        mouseDrag: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});
