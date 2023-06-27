$(document).ready(() =>{
    //Adding border to sale block on hover
    $('.cardImg').hover(function(){
        $(this).find('.sale-block').addClass('sale-block-hover');
    }, function(){
        $(this).find('.sale-block').removeClass('sale-block-hover')
    });
});

