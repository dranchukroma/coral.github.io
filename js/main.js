$(document).ready(function(){
    hoverLinks('.box', '.hoverLink');
    navigation('.navigation');
    changingOnClickHeader();
    timerToHeader(7000);



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
}

//Timer to changing header
function timerToHeader(changingTime){
    var changingInterval = setInterval(function(){
        if($('#js-dot-1').hasClass('dotActive')){
            changeToStyle2();
        }
        else if($('#js-dot-2').hasClass('dotActive')){
            changeToStyle3();
        }
        else if($('#js-dot-3').hasClass('dotActive')){
            changeToStyle1();
        }
    }, changingTime)
    $('.paintWrapper').hover(function(){
        clearInterval(changingInterval);
    }, function(){
        changingInterval = setInterval(function(){
            if($('#js-dot-1').hasClass('dotActive')){
                changeToStyle2();
            }
            else if($('#js-dot-2').hasClass('dotActive')){
                changeToStyle3();
            }
            else if($('#js-dot-3').hasClass('dotActive')){
                changeToStyle1();
            }
        }, changingTime)
    });

}
//Changing header
function changingOnClickHeader(){
    $('.dot').on('click', function(){
        var checkElement = $(this).attr("id")
        if(checkElement == 'js-dot-1'){
            changeToStyle1();
        }
        else if(checkElement == 'js-dot-2'){
            changeToStyle2();
        }
        else if(checkElement == 'js-dot-3'){
            changeToStyle3();
        }
    });
}
function changeToStyle1(){
    //Changing dots status Active/noActive
    $('#js-dot-1').addClass('dotActive');
    $('#js-dot-2').removeClass('dotActive');
    $('#js-dot-3').removeClass('dotActive');
    //Changing background for paintElement
    $('#js-paintColorToChange').animate({
        backgroundColor: 'rgb(77, 75, 80)',
    }, 300)
    // Changing background-image
    $('.imgBackground').animate({
        opacity: '0',
    }, 300)
    setTimeout(function(){
        $('.imgBackground').css({
            'background': 'url("https://dranchukroma.github.io/coral.github.io/img/mainPage/headerStyle1.png")',
            'background-size': 'cover',
        });
    }, 300)
    $('.imgBackground').animate({
        opacity: '1',
    });
    //Changing text
    $('#js-firstTitleChange').animate({
        opacity: '0',
    }, 300);
    $('#js-secondTitleChange').animate({
        opacity: '0',
    }, 300);
    $('#js-modelToChange').animate({
        opacity: '0',
    }, 300);
    $('#js-colorToChange').animate({
        opacity: '0',
    }, 300);
    setTimeout(function(){
        $('.headerFirstTitle').css('background-color', 'white');
        $('.headerSecondTitle').css('background-color', 'white');
        $('.changingFirstTitle').css('width', '376px');
        $('.headerFirstTitle').css('width', '714px');
        $('.headerSecondTitle').css('width', '649px');
        $('#js-firstTitleChange').text('Get Ready to Take on Any Challenge');
        $('#js-secondTitleChange').text('Our Fashion-Forward Sportswear!');
        $('#js-modelToChange').text('19-3901 TCX');
        $('#js-colorToChange').text('Magnet');
    }, 300)
    $('#js-firstTitleChange').animate({
        opacity: '1',
    }, 300);
    $('#js-secondTitleChange').animate({
        opacity: '1',
    }, 300);
    $('#js-modelToChange').animate({
        opacity: '1',
    }, 300);
    $('#js-colorToChange').animate({
        opacity: '1',
    }, 300);
}
function changeToStyle2(){
    //Changing dots status Active/noActive
    $('#js-dot-1').removeClass('dotActive');
    $('#js-dot-2').addClass('dotActive');
    $('#js-dot-3').removeClass('dotActive');
    //Changing background for paintElement
    $('#js-paintColorToChange').animate({
        backgroundColor: 'rgb(23, 74, 69)',
    }, 300)
    // Changing background-image
    $('.imgBackground').animate({
        opacity: '0',
    }, 300)
    setTimeout(function(){
        $('.imgBackground').css({
            'background': 'url("https://dranchukroma.github.io/coral.github.io/img/mainPage/headerStyle2.png")',
            'background-size': 'cover',
        });
    }, 300)
    $('.imgBackground').animate({
        opacity: '1',
    });
    //Changing text
    $('#js-firstTitleChange').animate({
        opacity: '0',
    }, 300);
    $('#js-secondTitleChange').animate({
        opacity: '0',
    }, 300);
    $('#js-modelToChange').animate({
        opacity: '0',
    }, 300);
    $('#js-colorToChange').animate({
        opacity: '0',
    }, 300);
    setTimeout(function(){
        $('.headerFirstTitle').css('background-color', 'transparent');
        $('.headerSecondTitle').css('background-color', 'transparent');
        $('.changingFirstTitle').css('width', '259px');
        $('.headerFirstTitle').css('width', '596px');
        $('.headerSecondTitle').css('width', '558px');
        $('#js-firstTitleChange').text('Elevate Your Athletic Style');
        $('#js-secondTitleChange').text('Our Fashionable Sportswear');
        $('#js-modelToChange').text('19-5230 TCX');
        $('#js-colorToChange').text('Forest Biome');
    }, 300)
    $('#js-firstTitleChange').animate({
        opacity: '1',
    }, 300);
    $('#js-secondTitleChange').animate({
        opacity: '1',
    }, 300);
    $('#js-modelToChange').animate({
        opacity: '1',
    }, 300);
    $('#js-colorToChange').animate({
        opacity: '1',
    }, 300);
}
function changeToStyle3(){
    //Changing dots status Active/noActive
    $('#js-dot-1').removeClass('dotActive');
    $('#js-dot-2').removeClass('dotActive');
    $('#js-dot-3').addClass('dotActive');
    //Changing background for paintElement
    $('#js-paintColorToChange').animate({
        backgroundColor: 'rgb(84, 59, 54)',
    }, 300)
    // Changing background-image
    $('.imgBackground').animate({
        opacity: '0',
    }, 300)
    setTimeout(function(){
        $('.imgBackground').css({
            'background': 'url("https://dranchukroma.github.io/coral.github.io/img/mainPage/headerStyle3.png")',
            'background-size': 'cover',
        });
    }, 300)
    $('.imgBackground').animate({
        opacity: '1',
    });
    //Changing text
    $('#js-firstTitleChange').animate({
        opacity: '0',
    }, 300);
    $('#js-secondTitleChange').animate({
        opacity: '0',
    }, 300);
    $('#js-modelToChange').animate({
        opacity: '0',
    }, 300);
    $('#js-colorToChange').animate({
        opacity: '0',
    }, 300);
    setTimeout(function(){
        $('.headerFirstTitle').css('background-color', 'white');
        $('.headerSecondTitle').css('background-color', 'white');
        $('.changingFirstTitle').css('width', '184px');
        $('.headerFirstTitle').css('width', '536px');
        $('.headerSecondTitle').css('width', '661px');
        $('#js-firstTitleChange').text('Get Your Game On');
        $('#js-secondTitleChange').text('Our Stylish Sportswear Collection!');
        $('#js-modelToChange').text('19-1215 TCX');
        $('#js-colorToChange').text('Shaved Chocolate');
    }, 300)
    $('#js-firstTitleChange').animate({
        opacity: '1',
    }, 300);
    $('#js-secondTitleChange').animate({
        opacity: '1',
    }, 300);
    $('#js-modelToChange').animate({
        opacity: '1',
    }, 300);
    $('#js-colorToChange').animate({
        opacity: '1',
    }, 300);

}
