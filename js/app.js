// settings
var action = "click";
var speed = "500";

$(document).ready(function(){
    //question handler
    $('li.q').on(action, function () {
        //get next element
        $(this).next()
               .slideToggle(speed)
               //select all other answers
               .siblings('li.a')
               .slideUp();
        // Get Image for active question
        var img = $(this).children('img');
        //remove the 'rotate' class for all images but the active
        $('img').not(img).removeClass('rotate');
        // Toggle rotate class
        img.toggleClass('rotate');
    });
});


















