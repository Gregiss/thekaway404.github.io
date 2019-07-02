$(document).ready(function() {
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(".menu").toggleClass('is-visible');
    });

    $('.options').click(function () {
        $('#nav-icon').toggleClass('open');
        $(".menu").toggleClass('is-visible');
    });


    var movementStrength = 725;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".landing").mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.landing').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", function () {
            // alert([event.beta, event.gamma]);
            $(".landing").css("background-position-y", 10 * (-event.beta + 90) * (40/180) - 40 );
            $(".landing").css("background-position-x", 10 * (-event.gamma + 90) * (40/180) - 40 );
        }, true);
    }


});