/**
 * 
 */
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // class="hello" is the divider right before Keep Reading on _includes/index.html
    if (wScroll >= $('.w2b').offset().top - ($(window).height() / 3.5)) {
        $("body").css("background-color", "var(--light-text-color)");
        $("body").css("color", "var(--background-color)");
        $(".logoOutline").css("stroke", "var(--background-color)"); 
        $("#logo").css("fill", "var(--background-color)");
        $("header").css("background-color", "var(--light-text-color)");
        $("header").css("color", "var(--background-color)");
        $(".posts").css("border-color", "var(--background-color)");
    } else {
        $("body").css("background-color", "var(--background-color)");
        $("body").css("color", "var(--light-text-color)");
        $(".logoOutline").css("stroke", "var(--light-text-color)");
        $("#logo").css("fill", "var(--light-text-color)");
        $("header").css("background-color", "var(--background-color)");
        $("header").css("color", "var(--light-text-color)");
        $(".posts").css("border-color", "var(--light-text-color)");
    }
});
