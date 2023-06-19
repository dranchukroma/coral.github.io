$(document).ready(function(){
    //How much item will be visible on 1 page
    const itemOnPage = 12;
    //Page counting based on items number
    var pages = Math.floor($('.item').length / itemOnPage);

    //Set items number on page
    $('#js-item-found').text($('.item').length);

    //Creating page counting
    if($('.item').length > itemOnPage){
        $("#js-pages").css({opacity: 1})
        //Creating page buttons
        for(var i = 1; i <= pages; i++){
            $("#page-counting").append($('<div class="page-count LinkHover"  id="page-' + i + '" ><p>' + i + '</p></div>'));
        }
    }

    //Take all items from catalog
    var allItems = $('.item').toArray();
    //Delete all items from catalog
    $('.items-wrapper').html('');
    //Object element to save items sorted by pages
    var itemsSortedByPages = {};
    //Loop adds all items to object and sorts it by pages
    for(var i = 0; i < pages; i++){
        //Creating empty pages i
        itemsSortedByPages[i] = [];
        //If allItems is not empty
        if(allItems.length > 0){
            //Adding all items to object itemsSortedByPages and sort by pages
            for(var j = 0; j < itemOnPage; j++){
                itemsSortedByPages[i].push(allItems[0]);
                //allItems will be remowed
                allItems.shift();
            }
        }
    }
    //Adding items from page 1
    returnPage($('#page-1'));
    //On click page-count
    $('.page-count').click(function(){returnPage($(this))});
    //Changing page by arrows
    $('.arrowLeft').click(function(){

    });
    $('.arrowRight').click(function(){

    });

    //Function returns HTML code of chosen page
    function returnPage(pageClicked){
        //Removing class 'active' from all page-count`s
        $('.page-count').removeClass('activePage');
        //Adding class 'active' to just clicked page-count
        $(pageClicked).addClass('activePage');
        //Set pageClicked id to pageNumver
        var pageNumber = pageClicked.attr('id');
        //In num leave only numbers
        var num = pageNumber.match(/\d+/g);
        //Creating string for saving numberPage
        var numberOfPage = '';
        //Check if num is not null
        num !== null ? numberOfPage = parseInt(num.join('')) : numberOfPage = 0;
        //onePageItems will contain items only from one page
        var onePageItems = [...itemsSortedByPages[numberOfPage - 1]];
        //HTML code of sorted pages
        var HTMLpage = '';
        // Adding every element to HTMLpage
        for(var i = 0; i < (itemOnPage / 3); i++){
            //Adding 3 elements to the helpElement
            var helpElement = '';
            for(var j = 0; j < 3; j++){
                helpElement += onePageItems[0].outerHTML;
                onePageItems.shift();
            }
            //Adding helpElement to the wrapper
            var itemsWrapper = $('<div class="items flexRow">' + helpElement + '</div>');
            //Adding all wrappers to the HTMLpage
            HTMLpage += itemsWrapper.get(0).outerHTML;
        }
        //Returning data
        if(HTMLpage != ''){
            $('.items-wrapper').html('');
            $('.items-wrapper').append(HTMLpage);
        }
        else{
            $('.items-wrapper').append('<div class="noItems" style="text-align: center; margin: 200px 0;"><p>No items</p></div>');
        }

        
    }

    //Show filters
    //If click on not filter hide all filters
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.filter, .filter *').length) {
          //Hide all filters
          $('.filter-block').slideUp();
          //Rotate arrow by removing class
          $('.svgArrow').removeClass('rotateArrow');
          //Remove class active
          $('.filter').removeClass('active');
        }
      });
    $('.categories-w').click(function(){
        //If .filter don`t have class active
        if(!$(this).parent('.filter').hasClass('active')){
            //Hide all filters
            $('.filter').find('.filter-block').stop().slideUp();
            //Remove all classes active
            $('.filter').removeClass('active');
            //Rotate all arrows
            $('.filter').find('.svgArrow').removeClass('rotateArrow');
            //Show clicked filter
            $(this).parent('.filter').find('.filter-block').stop().slideDown();
            //Add class active for clicked filter
            $(this).parent('.filter').addClass('active');
            //Rotate arrow for clicked filter
            $(this).parent('.filter').find('.svgArrow').addClass('rotateArrow');
        }
        //If .filter have class active
        else{
            //Hide all filters
            $('.filter').find('.filter-block').stop().slideUp();
            //Remove all classes active
            $('.filter').removeClass('active');
            //Rotete all arrows
            $('.filter').find('.svgArrow').removeClass('rotateArrow');
        }
    })
});