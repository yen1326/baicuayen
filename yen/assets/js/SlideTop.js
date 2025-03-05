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
            prevArrow: ".slide1 .prev",
            nextArrow: ".slide1 .next",
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true, // Giúp căn giữa slide
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }

    // Khởi tạo slider cho slide1
    initSlider(".slide1 .slide", ".slide1 .prev", ".slide1 .next", 3);
});
