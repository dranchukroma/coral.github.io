$(document).ready(() => {
    //On click show info in section "Our advantages"
    $('.show-content').click(function(){
        //This function allow to show only one info list
        $('.show-content').each(function(){
            //Check if any element is visible and hide them all
            if($(this).closest('.content-Wrapper').find('.content-text').css('display') != 'none'){
                //Hide info list
                $(this).closest('.content-Wrapper').find('.content-text').slideUp(300);
                //Rotatel plus button
                $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(0deg)');
            }
        });
        //If this element's button was clicked first time, show it
        if($(this).closest('.content-Wrapper').find('.content-text').css('display') == 'none'){
            $(this).closest('.content-Wrapper').find('.content-text').slideDown(300);
            $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(-90deg)');
        }
        //Else hide
        else{
            $(this).closest('.content-Wrapper').find('.content-text').slideUp(300);
            $(this).find('.plus-vertical').css('transform', 'translate(-50%, -50%) rotate(0deg)');
        }
    });

    //Emphasis titles of cards
    $('.aboutLink-block').hover(function(){
        $(this).find('.LinkHover').addClass('LinkHovered');
    }, function(){
        $(this).find('.LinkHover').removeClass('LinkHovered');
    });

    //Show info block when clicking on a card
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
            // Hide just clicked block
            $(this).removeClass('active');
            $(this).find('.aboutLink-block-wrapper').animate({
                opacity: '1',
            }, 300, function(){
                $(this).css('display', '');
            });
            $(this).find('.hiddenInfo').animate({opacity: '0'}, 300);
        }
    });

    //Hide if clicked not on cards
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
        //Set which card was clicked
        var actualHiddenInfo = $(this).closest('.aboutLink-block').find('.hiddenInfo').attr('id');
        //Changing info blocks by arrow right
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
        //Set which card was clicked
        var actualHiddenInfo = $(this).closest('.aboutLink-block').find('.hiddenInfo').attr('id');
        //Changing info blocks by arrow left
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