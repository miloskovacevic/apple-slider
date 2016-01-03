$(document).ready(function(){
    var totalWidth = 0;
    var positions = new Array();

    $('#slides .slide').each(function(i){
        // get slider widths
        positions[i] = totalWidth;
        totalWidth += $(this).width();

        //check widths
        if(!$(this).width()){
            alert('Please add a width to your images');
            return false;
        }
    });

    //set width
    $('#slides').width(totalWidth);

    //menu item click handler
    $('#menu ul li a').click(function(e, keepScroll){
        //remove active class and add inactive
        $('li.product').removeClass('active').addClass('inactive');
        // add active class to parent
        $(this).parent().addClass('active');


        var pos = $(this).parent().prevAll('.product').length;

        $('#slides').stop().animate({marginLeft: -positions[pos] + 'px'}, 450);

        //Prevent default
        e.preventDefault();

        //stoping autoscroll
        if(!autoScroll){
            clearInterval(itvl);
        }
    });

    // make fitst image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    //autoscroll
    var current = 1;
    function autoScroll(){
        if(current == -1) return false;

        $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click', [true]);
        current++;
    }

    //Duration for autoscroll
    var durration = 2;
    var itvl = setInterval(function () {
        autoScroll();
    }, durration * 1000);



});