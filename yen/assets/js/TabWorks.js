function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function filterItems(category) {
    let items = document.querySelectorAll(".items .item");

    items.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.currentTarget.classList.add("active");
}
