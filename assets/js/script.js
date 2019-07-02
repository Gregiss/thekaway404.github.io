$(document).ready(function() {
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $(".menu").toggleClass('is-visible');
    });

    $('.options').click(function () {
        $('#nav-icon').toggleClass('open');
        $(".menu").toggleClass('is-visible');
    });

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", function () {
            // alert([event.beta, event.gamma]);
            $(".landing").css("background-position-y", 10 * (-event.beta + 90) * (40/180) - 40 );
            $(".landing").css("background-position-x", 10 * (-event.gamma + 90) * (40/180) - 40 );
        }, true);
    }
	
	setInterval(function(){
	var movementStrength = 725;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
	var i = 0;
	var newvalueX = 0;
	var newvalueY = 0;
	if(i == 0){
		newvalueX += 10;
		newvalueY += 10;
		i++;
	} else if(i >= 10){
		newvalueX -= 10;
		newvalueY -= 10;
		i = 0;
	}
    $('.landing').css("background-position", Math.random()+"px     "+newvalueY+"px");
	console.log("teste");
	}, 100);
	

});