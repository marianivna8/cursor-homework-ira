
'use strict';

console.log('test');

let loader = document.querySelector('.loader');

window.addEventListener('load', () =>{
    loader.classList.add('hide');
    setTimeout(() => {
        loader.remove();
    }, 600);
});

$(function() {

    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1000,
        speed:5000,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })
})
