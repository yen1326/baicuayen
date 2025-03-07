document.addEventListener("DOMContentLoaded", function () {
    function initSlider(sliderClass, prevBtnClass, nextBtnClass, itemsToShow) {
        if (!$(sliderClass).length) return;

        $(sliderClass).slick({
            slidesToShow: itemsToShow,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 1000,
            dots: false,
            arrows: true,
            prevArrow: $(prevBtnClass),
            nextArrow: $(nextBtnClass),
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 376,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }

    // Khởi tạo slider cho slide1
    initSlider(".slide1 .slide", ".slide1 .prev", ".slide1 .next", 3);
});
