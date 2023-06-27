$(document).ready(() => {
    //Set time to changing header
    const timeToChangingHeader = 7000;


    
    //Changing header by intervar
    var changingHeaderSlides = setInterval(function(){
        if($('#js-dot-1').hasClass('dotActive')){
            changeToSlide2();
        }
        else if($('#js-dot-2').hasClass('dotActive')){
            changeToSlide3();
        }
        else if($('#js-dot-3').hasClass('dotActive')){
            changeToSlide1();
        }
    }, timeToChangingHeader)

    //When paint wrapper is hover stop changing header, when paint wrapper is not hover start new interval
    $('.paintWrapper').hover(function(){
        clearInterval(changingHeaderSlides);
    }, function(){
        changingHeaderSlides = setInterval(function(){
            if($('#js-dot-1').hasClass('dotActive')){
                changeToSlide2();
            }
            else if($('#js-dot-2').hasClass('dotActive')){
                changeToSlide3();
            }
            else if($('#js-dot-3').hasClass('dotActive')){
                changeToSlide1();
            }
        }, timeToChangingHeader)
    });

    //Change opacity on hover blocks "About us", "Instagram" and "#colarstyle"
    $('.box').hover(function(){
        $(this).find('.hoverLink').stop().animate({ opacity: 1 }, 200);
        }, function() {
        $(this).find('.hoverLink').stop().animate({ opacity: 0.7 }, 200);
    });

    //Function can change style of header by click on dots
    $('.dot').on('click', function(){
        if($(this).attr("id") == 'js-dot-1'){
            changeToSlide1();
        }
        else if($(this).attr("id") == 'js-dot-2'){
            changeToSlide2();
        }
        else if($(this).attr("id") == 'js-dot-3'){
            changeToSlide3();
        }
    });
});
//Function changes to 1 slide
function changeToSlide1(){
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
//Function changes to 2 slide
function changeToSlide2(){
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
//Function changes to 3 slide
function changeToSlide3(){
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