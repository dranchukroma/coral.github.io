$(document).ready(function(){
    // $('#js-cardImg').hover(function(){
    //     $(this).children().addClass('cardHoverTrue');
    // });
    // $('#js-cardImg').mouseleave(function(){
    //     $(this).children().removeClass('cardHoverTrue');
    // });
    $('.cardImg').hover(function(){
        $(this).children().stop().animate({ opacity: 1 }, 200);
         }, function() {
        $(this).children().stop().animate({ opacity: 0 }, 200);
        });



});