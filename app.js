/// <reference path="typings/jquery/jquery.d.ts"/>  
$('#rotate').on('click', function () {  
    $('#rotate').animate({ zIndex : 1 },{  
        duration : 1000,  
        step : function (value) {  
            $(this).css({  
                transform : 'rotate(' + (value * 360) + 'deg)'  
            });  
        },  
        complete : function () {  
            $('#rotate').css('zIndex', 0);  
        }  
    });  
});  