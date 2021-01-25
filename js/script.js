new Swiper('.text-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    simulateTouch: false,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
    autoHeight: true,

    loop: true,

    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    }
});

$(document).ready(function() {
	$('.menu-opener').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active')
	})
})
