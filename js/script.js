$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    rewind: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    } 
})