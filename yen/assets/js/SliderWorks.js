$(document).ready(function(){
    $('.s4_content').slick({
        infinite:true,
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow:".s4 .prev",
        nextArrow:".s4 .next",
        centerMode: false, 
        variableWidth: false,
    });
});

$(document).ready(function () {
    console.log("jQuery Version:", jQuery.fn.jquery); // Kiểm tra jQuery có load đúng không
    console.log("Slick Loaded:", typeof $.fn.slick); // Phải ra "function"

    if (typeof $.fn.slick === "function") {
        $(".slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
        });
    } else {
        console.error("Slick chưa được load đúng cách!");
    }
});
