$(document).ready(() =>{
  //Slider setting   
  $('.cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
  });

  //Set arrows to change slide
  $('.prev-slide').click(function() {
    $('.cards').slick('slickPrev');
  });
  $('.next-slide').click(function() {
    $('.cards').slick('slickNext');
  });

  //Adding animation for arrows
  $('.arrow').click(function(){
    if($(this).hasClass('prev-slide')){
      $(this).find('.animation-arrow').animate({left:'-8px'},100).delay(200).animate({left:"0px"},100);
    }
    if($(this).hasClass('next-slide')){
      $(this).find('.animation-arrow').animate({right:'-8px'},100).delay(200).animate({right:"0px"},100);
    }
  });
});


