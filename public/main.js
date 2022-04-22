let navBar = document.querySelector("#navbar");
document.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
        document.querySelector("#navbar").classList.add("navbar-scrolled");
    } else {
        document.querySelector("#navbar").classList.remove("navbar-scrolled");
    }
});

$(document).ready(function () {
    $(".carousel").carousel({
        interval: 2000,
        cycle: true,
    });
});
