$(document).ready(function(){
    //Scroll top after reload
    // $(window).on('beforeunload', function(){
    //     $(window).scrollTop(0);
    //     console.log('work')
    // });

    //Show/Hide navigation on scroll
    $(document).on('wheel', function(e){
        if(e.originalEvent.wheelDelta >=0){
            $('.navigation').css({'top': '0px'});
        }
        else if($(window).scrollTop() > $('header').height()){
            $('.navigation').css({'top': ('-' + ($('.navigation').height() + 30) + 'px')});
        }
    })

    //Search input
    showHidePopUp('none', '#js-search', '.search-results');

//Basket
    addingToList('.addedCardsBasket', '.forSale', 'basket');
    showHidePopUp('.cross-popUp', '.popUp-Basket-icon', '.popUp-Basket');

});

//Changing like and basket icon on click
function addingToList(addTo, triggerClick, listName){
    $(triggerClick).on('click', function(){
        $(this).children().toggleClass('onClickIcon');
        let item = makingCards(addTo);
        console.log(item);

        let listName = getList();
        listName.push(item);
        saveList(listName);
    });
}

//Show/Hide popUp on click
function showHidePopUp(hideEl, showEl, popUpEl){
    $(showEl).click(function(){
        $(popUpEl).toggleClass('hiddenPopUp');
    });

    // $(hideEl).click(function(){
    //     $(popUpEl).addClass('hiddenPopUp');
    // });

//??Close PopUp when user clicked on not PopUp
    // $(document).on('click', function(e){
    //     console.log(!$(popUpEl).hasClass("hiddenPopUp"));
    //     if(!($(popUpEl).hasClass('hiddenPopUp'))){

    //         if($(e.target).closest(popUpEl).length === 0) {
    //         $(popUpEl).addClass('hiddenPopUp');
    //         }
    //     }
    // });
}


////Adding to list

//Save list
function saveList(listName){
    localStorage.setItem(listName, JSON.stringify(listName));
}

//Get List
function getList(){
    let listName = localStorage.getItem('listName');
    if(listName){
        return JSON.parse(listName);
    }
    else{return []}
}
//Display list
function displayList(){
    let list = getList();
}

//Making cards
function makingCards(addTo){
    const card = $('<div class="cart"><div class="flexRow"><div class="cart-header"><p>Basic sports suit</p></div><div class="cross" id="js-deleteCross"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div><div class="cart-wrapper flexRow"><div class="cart-img"><img src="./img/mainPage/1stCardImg.png" width="135" height="168px" class="cart-image" alt=""></div><div class="item-info flexRow"><div class="item-articleNumber"><p>Article number: 2145995</p></div><div class="item-color"><p>green</p></div><div class="item-size">S</div><div class="item-counting"><div class="flexRow"><div class="item-minus"><div class="minus-line"></div></div><div class="item-count">1</div><div class="item-add"><div class="minus-line"></div><div class="plus-line"></div></div></div></div></div></div><div class="item-fullPrice"><p>Everything: <span class="item-price"></span> uah</p></div></div>')
    card.find('#js-deleteCross').click(function(){
        card.remove();
    });
    $(addTo).append(card);
    return card;
}
//// Atributes for making cards
//// articleNumber, color, size, counts, price, image
