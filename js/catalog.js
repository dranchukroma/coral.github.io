$(document).ready(() =>{
    //Set how much elements will visible on 1 page
    const itemOnPage = 12;
    //Page counting based on items counts
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
    
    //Save alll items in variable 
    var allItems = $('.item').toArray();

    //Delete all items from catalog
    $('.items-wrapper').html('');

    //Object to saving items sorted by pages
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

    //Changing page by click on page-number
    $('.page-count').click(function(){returnPage($(this))});
    
    //Changing pages by arrows
    $('.arrowLeft').click(function(){
        //Get only numbers from actual page ID
        var numberOfActualPage = $('.activePage').attr('id').match(/\d+/g);
        if(numberOfActualPage == 1){
            var nextPage = '#page-4';
        }
        else{
            var nextPage = '#page-' + (Number(numberOfActualPage) - 1);
        }
        returnPage($(nextPage));
    });
    $('.arrowRight').click(function(){
        //Get only numbers from actual page ID
        var pageCounter = $('.page-count').length;
        var numberOfActualPage = $('.activePage').attr('id').match(/\d+/g);
        if(numberOfActualPage == pageCounter){
            var nextPage = '#page-1';
        }
        else{
            var nextPage = '#page-' + (Number(numberOfActualPage) + 1);
        }
        returnPage($(nextPage));
    });

    //Function adds HTML code of chosen page in catalog
    function returnPage(pageClicked){
        //Removing class 'active' from all page-count`s
        $('.page-count').removeClass('activePage');
        //Adding class 'active' to just clicked page-count
        $(pageClicked).addClass('activePage');
        //Set pageClicked id to pageNumver
        var pageNumber = pageClicked.attr('id');
        //Set number of pages in variable
        var numberOfPage = parseInt(pageNumber.match(/\d+/g)?.join('')) || 0;
        //onePageItems will contain items only from one page
        var onePageItems = [...itemsSortedByPages[numberOfPage - 1]];
        //HTML code of sorted pages
        var HTMLpage = '';

        // Adding every element to HTMLpage
        for(var i = 0; i < itemOnPage / 3; i++){
            var helpElement = onePageItems.splice(0, 3).map(item => item.outerHTML).join('');
            //Adding helpElement to the wrapper
            var itemsWrapper = $('<div class="items flexRow">' + helpElement + '</div>');
            //Adding all wrappers to the HTMLpage
            HTMLpage += itemsWrapper.get(0).outerHTML;
        }
        //Returning data
        if(HTMLpage){
            $('.items-wrapper').empty().append(HTMLpage);
        }
        else{
            $('.items-wrapper').html('<div class="noItems" style="text-align: center; margin: 200px 0;"><p>No items</p></div>');
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
    //Show filter on click
    $('.categories-w').click(function(){
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