(function($) {
    $(".color-change>li img").on("click", function() {
        let value = $(this).attr("src");
        if (value === "images/pepsi001.png") {
            $(".pic>img").attr("src", value);
            $("body").css("background", "#0062be");
        } else if (value === "images/pepsi002.png") {
            $(".pic>img").attr("src", value)
            $("body").css("background", "#e60c2c");
        } else if (value === "images/pepsi003.png") {
            $(".pic>img").attr("src", value);
            $("body").css("background", "#1e1e1e");
        }
    })
    $(".toggle").on("click", function() {
        $(this).removeClass("toggle");
        $(".container").css("display", "none");
        $(".wrap").css("height", "100vh");
        $(".wrap nav").css("display", "flex");
        $(".active").show();
        $(".header>div:nth-child(3)").addClass("active");
        $(".logo").hide();
    })
    $(".active").on("click", function() {
        $(this).removeClass("active");
        $(".header>div:nth-child(2)").addClass("toggle");
        $(".container").css("display", "flex");
        $(".wrap nav").css("display", "none");
        $(".wrap").css("height", "100px");
        $(".logo").show();
    })
})($)