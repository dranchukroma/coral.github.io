$(document).ready(function(){
    hoverLinks('.box', '.hoverLink');
    navigation('.navigation');
});

function hoverLinks(onHoverElement, choverElement){
    $(onHoverElement).hover(function(){
        $(this).children('a').children(choverElement).stop().animate({ opacity: 1 }, 200);
        }, function() {
        $(this).children('a').children(choverElement).stop().animate({ opacity: 0.7 }, 200);
    });
}

// Navigation
function navigation(navigationElement){
    //Hide and show navigation on wheel
    $(document).on('wheel', function(e){
        if(e.originalEvent.wheelDelta >=0){
            $(navigationElement).css({'top': '0px'});
        }
        else if($(window).scrollTop() > $('.header').height()){
            $(navigationElement).css({'top': ('-' + ($(navigationElement).height() + 30) + 'px')});
        }
    })
    //Changing background-color
    $(window).scroll(function(){
        ($(window).scrollTop() > 0) ? $(navigationElement).addClass('navigationBG') : $(navigationElement).removeClass('navigationBG');
    });
}