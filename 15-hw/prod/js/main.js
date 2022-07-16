
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
        slidesToScroll: 1
    })
})
