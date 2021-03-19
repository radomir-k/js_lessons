
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    // center: true,
    stagePadding: 1,
    margin: 20,
    nav: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 3
        }
    }
})