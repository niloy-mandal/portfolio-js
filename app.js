$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")

        }
    })
    // Active class

    $('.menu-btn').click(function () {
        $('.navbar .max-width .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})