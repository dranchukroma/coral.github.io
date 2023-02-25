$(document).ready(function(){    
    $('.cards').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility: false,
        arrows: false,
    });
    $('.prev-slide').click(function() {
        $('.cards').slick('slickPrev');
      });
    
      $('.next-slide').click(function() {
        $('.cards').slick('slickNext');
      });
});