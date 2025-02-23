document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".item").forEach((item) => {
        const title = item.querySelector(".title");
        const group = item.querySelector(".group");

        title.addEventListener("click", () => {
            item.classList.toggle("hide"); // Ẩn/hiện group
        });
    });
});
