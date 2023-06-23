$(document).ready(function(){
    //On click show info in section "Our advantages"
    $('.show-content').click(function(){
        //This function allow to show only one info list
        $('.show-content').each(function(){
            //Check if any element is visible and hide them all
            if($(this).parent().parent().find('.content-text').css('display') != 'none'){
                //Hide info list
                $(this).parent().parent().find('.content-text').slideUp(300);
                //Rotatel plus button
                $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(0deg)');
            }
        });
        //If this element's button was clicked first time, show him
        if($(this).parent().parent().find('.content-text').css('display') == 'none'){
            $(this).parent().parent().find('.content-text').slideDown(300);
            $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(-90deg)');
        }
        //Else hide
        else{
            $(this).parent().parent().find('.content-text').slideUp(300);
            $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(0deg)');
        }
    });
    //Button cards
    $('.aboutLink-block').hover(function(){
        $(this).find('.LinkHover').addClass('LinkHovered');
    }, function(){
        $(this).find('.LinkHover').removeClass('LinkHovered');
    });
    //Show info on click
    $('.aboutLink-block').click(function(){
        if(!$(this).hasClass('active')){
            // Hide all info blocks
            $('.aboutLink-block').removeClass('active');
            $('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '1',
            }, 300);
            $('.hiddenInfo').animate({opacity : "0"}, 300)

            $(this).addClass('active');
            $(this).find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300);
            $(this).find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else{
            $(this).removeClass('active');
            $(this).find('.aboutLink-block-wrapper').animate({
                opacity: '1',
            }, 300);
            $(this).find('.hiddenInfo').animate({opacity: '0'}, 300);
        }
    });


});



