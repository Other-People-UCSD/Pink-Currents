


    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if (wScroll >= $('.post-container').offset().top - ($(window).height() / 1.2)) {
            $("body").css("background-color", "var(--light-text-color)");
            $("body").css("color", "var(--background-color)");
            $(".st0").css("stroke", "var(--background-color)");
            $("svg").css("fill", "var(--background-color)");
            $("header").css("background-color", "var(--light-text-color)");
            $("header").css("color", "var(--background-color)");

        } else {
            $("body").css("background-color", "var(--background-color)");
            $("body").css("color", "var(--light-text-color)");
            $(".st0").css("stroke", "var(--light-text-color)");
            $("svg").css("fill", "var(--light-text-color)");
            $("header").css("background-color", "var(--background-color)");
            $("header").css("color", "var(--light-text-color)");

        }
    });













    


