$(document).ready(function(){
    hoverLinks('.box', '.hoverLink');
    navigation('.navigation');
    changingOnClickHeader();
    timerToHeader(7000);
    addingToFavorite();
    addingToBasket();
    search();
    showHidePopUp('.cross-popUp', '.popUp-Basket-icon' , '.popUp-Basket');


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
//Changing like and basket icon on click
function addingToFavorite(){
    $('.Like').on('click', function(){
        $(this).toggleClass('onClickIcon');
    });
}
function addingToBasket(){
    $('.Basket').on('click', function(){
        $(this).toggleClass('onClickIcon');
        makingCards();
    });
}
function search(){
    $('#js-search').click(function(){
        var noResults = $('<div class="popUp search-results"><p class="empty">The search yielded no results</p></div>');
        $('.searchWrapper').append(noResults);

        $('#js-inputSearch').keypress(function(){
            //Searching between elements
            console.log('searching in data bases');
        });

        $(document).on('click', function(e){
            if($(e.target).closest('#js-searchWrapper').length === 0) {
                $('.search-results').remove();
            }
        });
    });
}

function makingCards(){
    const card = $('<div class="cart"><div class="flexRow"><div class="cart-header"><p>Basic sports suit</p></div><div class="cross"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div><div class="cart-wrapper flexRow"><div class="cart-img"><img src="./img/mainPage/1stCardImg.png" width="135" height="168px" class="cart-image" alt=""></div><div class="item-info flexRow"><div class="item-articleNumber"><p>Article number: 2145995</p></div><div class="item-color"><p>green</p></div><div class="item-size">S</div><div class="item-counting"><div class="flexRow"><div class="item-minus"><div class="minus-line"></div></div><div class="item-count">1</div><div class="item-add"><div class="minus-line"></div><div class="plus-line"></div></div></div></div></div></div><div class="item-fullPrice"><p>Everything: <span class="item-price"></span> uah</p></div></div>')
    $('.addedCardsBasket').append(card);
}

function showHidePopUp(hideEl, showEl, popUpEl){
    console.log('Hello1');
    $(showEl).click(function(){
        $(popUpEl).toggleClass('hiddenPopUp');
        console.log('Hello2');
    });
    $(hideEl).click(function(){
        $(popUpEl).addClass('hiddenPopUp');
        console.log('Hello2');
    });
}

// articleNumber, color, size, counts, price, image