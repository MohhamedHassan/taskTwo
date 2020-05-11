$(document).ready(function() {
    $(window).scroll(function() {
       if ($(window).scrollTop() > 0 ) {
        $(".navbar").css("background","#4b4fe3")
       } else {
        $(".navbar").css("background","transparent")
       }

      $(".scrol").each(function() {
          if ($(window).scrollTop() > $(this).offset().top - 90) {
              let iD = $(this).attr("id")
              $(".nav-link").removeClass("activee");
              $(`li:not(:last-of-type) .nav-link[data-scroll=${iD}]`).addClass("activee") 
          }
      }) 
    })
    $(".navbar-toggler").click(function() {
        $(this).css("outline","none")
    })
    $(".nav-link").click(function() {
        $("body,html").animate({
           scrollTop: $(`#${$(this).data("scroll")}`).offset().top - 85
        },1000)
     })
     $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    $(".up").click(function() {
        $("body,html").animate({
            scrollTop:0
        },1000)
    })
    $(".load").toggleClass("d-flex d-none")
    $("body").css("overflow","scroll")
})