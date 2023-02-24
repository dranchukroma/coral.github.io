$(document).ready(function(){
    hoverCards('.cardImg');
    hoverLinks('.box', '.hoverLink');
});

function hoverCards(hoverElement){
    $(hoverElement).hover(function(){
        $(this).children().stop().animate({ opacity: 1 }, 200);
        }, function() {
        $(this).children().stop().animate({ opacity: 0 }, 200);
        });
}

function hoverLinks(hoverElement, hoverChild){
    $(hoverElement).hover(function(){
        $(this).children(hoverChild).stop().animate({ opacity: 1 }, 200);
        }, function() {
        $(this).children(hoverChild).stop().animate({ opacity: 0.7 }, 200);
    });
}