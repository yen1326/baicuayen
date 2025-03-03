$(document).ready(function(){
    $('.s4_content .slider').slick({
        infinite:true,
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow:".s4 .prev",
        nextArrow:".s4 .next",
        centerMode: false, 
        variableWidth: false,
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

