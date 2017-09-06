$(function () {
    "use strict";
    $(".links li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
    
    // Start Header
    $(window).on("resize", function () {
        $(".header").height($(window).height())
    })
    
    $(".header").height($(window).height())
    //End Header
    
    //Start Our Services
    
    $(".links li a").click(function () {
        $("html, body").animate({
            scrollTop: $("#" +  $(this).data("value")).offset().top
        }, 1000)
    })
    
    //End Our Services
    
    
    // Start Our Slider 
    function auto() {
        
        $(".slider .act").each(function () {
            
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("act").next().fadeIn(1000).addClass("act");
                    auto();
                })
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("act")
                    $(".slider div").eq(0).fadeIn(1000).addClass("act");
                    auto();
                })
     
            }

        })

    };
    auto();
    
    //Trigger Shuffle
    
    $("#Container").mixItUp()
    
    // adjust Shuffle
    
    $(".projects li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected")
    })
    
    // Trigger nice scroll
    
    $("html").niceScroll({
        cursorcolor: "#29a389",
        cursorborder:"none",
        cursorborderradius: "none",
        
    });
    
})
