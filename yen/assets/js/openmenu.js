// <!--  Hiển thị/ẩn menu -->

document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        var body = document.body;
        var menu = document.querySelector('.menu-list');
        var menuToggle = document.querySelector('.menu-toggle');

        body.classList.toggle('menu-open');

        if (body.classList.contains('menu-open')) {
            menuToggle.innerHTML = "✖";
        } else {
            menuToggle.innerHTML = "&#9776;";
        }
    }

    // Gắn sự kiện click vào nút menu
    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }
});
