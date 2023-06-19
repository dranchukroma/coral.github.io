$(document).ready(function(){
    saleBlockHover();
});

//Adding border to sale block
function saleBlockHover(){
    $('.cardImg').hover(function(){
        $(this).children('.sale-block').addClass('sale-block-hover');
    }, function(){
        $(this).children('.sale-block').removeClass('sale-block-hover')
    });
}