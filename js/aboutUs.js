$(document).ready(function(){
    $('.show-content').click(function(){
        $('.show-content').each(function(){
            if($(this).parent().parent().find('.content-text').css('display') != 'none'){
                $(this).parent().parent().find('.content-text').slideUp(300);
                $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(0deg)');
            }
        });
        if($(this).parent().parent().find('.content-text').css('display') == 'none'){
            $(this).parent().parent().find('.content-text').slideDown(300);
            $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(-90deg)');
        }
        else{
            $(this).parent().parent().find('.content-text').slideUp(300);
            $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(0deg)');
        }
    });
});



