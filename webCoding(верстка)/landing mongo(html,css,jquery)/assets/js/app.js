$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
   

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();


        let blockId = $(this).data('scroll')
        let  blockOffset = $(blockId).offset().top;
       
        $("#nav a").removeClass("active");
        $(this).addClass("active");
       
        $("html, body").animate({
            scrollTop:  blockOffset
        }, 400);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

     /* Collapse */
     $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

    
        let  blockId = $(this).data('collapse');

        
        $(blockId).slideToggle();
    });
 /* Slider slick plagin css js  */
 $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});
});
