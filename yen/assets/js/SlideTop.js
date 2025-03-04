document.addEventListener("DOMContentLoaded", function () {
    function initSlider(sliderClass, prevBtnClass, nextBtnClass, itemsToShow) {
        // Kiểm tra xem phần tử có tồn tại không trước khi khởi tạo
        if (!$(sliderClass).length) {
            console.warn("⚠️ Không tìm thấy slider:", sliderClass);
            return;
        }

        $(sliderClass).slick({
            slidesToShow: itemsToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true,
            arrows: false
        });

        console.log("🔍 Kiểm tra trạng thái slick:", $(".slide1 .slide").hasClass("slick-initialized"));


        // Gán sự kiện click cho nút prev & next
        $(prevBtnClass).on("click", function () {
            console.log("Click prev trên:", sliderClass);
            $(sliderClass).slick("slickPrev");
        });

        $(nextBtnClass).on("click", function () {
            console.log("Click next trên:", sliderClass);
            $(sliderClass).slick("slickNext");
        });
    }

    console.log("✅ Script đã load, bắt đầu khởi tạo slider...");

    // Chỉ khởi tạo slide1
    initSlider(".slide1 .slide", ".slide1 .prev", ".slide1 .next", 3);
});
