$(document).ready(function() {
    var navHeight = $(".nav").position().top;
    window.onscroll =  function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() > navHeight) {
            $(".nav").css("position", "fixed");
            $(".nav").css("top", "0");
        } else 
            $(".nav").css("position", "relative");
    };
});
