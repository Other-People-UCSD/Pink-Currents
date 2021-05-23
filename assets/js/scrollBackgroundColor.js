$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    // class="hello" is the divider right before Keep Reading on _includes/index.html
    if (wScroll >= $('.hello').offset().top - ($(window).height() / 3.5)) {
        $("body").css("background-color", "var(--light-text-color)");
        $("body").css("color", "var(--background-color)");
        // class="st0" is the Other People logo (_includes/posts.html)
        $(".st0").css("stroke", "var(--background-color)"); 
        $("svg").css("fill", "var(--background-color)");
        $("header").css("background-color", "var(--light-text-color)");
        $("header").css("color", "var(--background-color)");
        $(".posts").css("border-color", "var(--background-color)");
    } else {
        $("body").css("background-color", "var(--background-color)");
        $("body").css("color", "var(--light-text-color)");
        $(".st0").css("stroke", "var(--light-text-color)");
        $("svg").css("fill", "var(--light-text-color)");
        $("header").css("background-color", "var(--background-color)");
        $("header").css("color", "var(--light-text-color)");
        $(".posts").css("border-color", "var(--light-text-color)");
    }
});
