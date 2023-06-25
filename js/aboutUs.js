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
        //If this element's button was clicked first time, show it
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
            }, 300, function(){
                $(this).css('display', 'block');
            });
            $('.hiddenInfo').animate({opacity : "0"}, 300)
            // Show info block that was just clicked
            $(this).addClass('active');
            $(this).find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(this).find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else{
            // Hise that block
            $(this).removeClass('active');
            $(this).find('.aboutLink-block-wrapper').animate({
                opacity: '1',
            }, 300, function(){
                $(this).css('display', '');
            });
            $(this).find('.hiddenInfo').animate({opacity: '0'}, 300);
        }
    });
    //Hide if clicked not on info block
    $(document).on('click', function(event) {
        var target = $(event.target);
        if (!target.closest('.aboutLink-block').length) {
            // Hide all info blocks
            $('.aboutLink-block').removeClass('active');
            $('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '1',
            }, 300, function(){
                $(this).css('display', 'block');
            });
            $('.hiddenInfo').animate({opacity : "0"}, 300)
        }
      });
    //Show next info block
    $('.button-right').click(function(){
        var actualHiddenInfo = $(this).closest('.aboutLink-block').find('.hiddenInfo').attr('id');
        if(actualHiddenInfo == 'js-hiddenInfo-1'){
            var nextInfoBlock = '#js-hiddenInfo-2'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else if(actualHiddenInfo == 'js-hiddenInfo-2'){
            var nextInfoBlock = '#js-hiddenInfo-3'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else if(actualHiddenInfo == 'js-hiddenInfo-3'){
            var nextInfoBlock = '#js-hiddenInfo-4'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else if(actualHiddenInfo == 'js-hiddenInfo-4'){
            var nextInfoBlock = '#js-hiddenInfo-1'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
    });
    //Show previous info block
    $('.button-left').click(function(){
        var actualHiddenInfo = $(this).closest('.aboutLink-block').find('.hiddenInfo').attr('id');
        if(actualHiddenInfo == 'js-hiddenInfo-1'){
            var nextInfoBlock = '#js-hiddenInfo-4'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else if(actualHiddenInfo == 'js-hiddenInfo-4'){
            var nextInfoBlock = '#js-hiddenInfo-3'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else if(actualHiddenInfo == 'js-hiddenInfo-3'){
            var nextInfoBlock = '#js-hiddenInfo-2'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
        else if(actualHiddenInfo == 'js-hiddenInfo-2'){
            var nextInfoBlock = '#js-hiddenInfo-1'
            $(nextInfoBlock).closest('.aboutLink-block').addClass('active');
            $(nextInfoBlock).closest('.aboutLink-block').find('.aboutLink-block-wrapper').animate({
                opacity: '0',
            }, 300, function(){
                $(this).css('display', 'none');
            });
            $(nextInfoBlock).closest('.aboutLink-block').find('.hiddenInfo').animate({opacity: '1'}, 300);
        }
    });
});



