// JavaScript Document
// SCROLL TO TOP BUTTON + MENU MOVE ON SCROLL
frameRate    =  50;
timeInterval = Math.round( 1000 / frameRate );
relMouseX    = 0;

$(document).ready( function () {
  offset = $('#bottomlayer').offset();
  atimer = setInterval( "animateFollower()", timeInterval );
} );

$(document).mousemove( function(e) {
  mouseX = e.pageX;
  relMouseX = mouseX - offset.left -80;
} );

function animateFollower() {
  $('#follower').css('left', relMouseX);
}

//MENU ANIMATE + SCROLL TO TOP BUTTON
$(function () {
	var scroll_timer;
	var displayed = false;
	var $window = $(window);
	var $message = $('#bottomlayer');
	$window.scroll(function () {
		window.clearTimeout(scroll_timer);
		scroll_timer = window.setTimeout(function () {
			if($(window).scrollTop() < 50)
			{
				displayed = false;
				$(".menu").animate({"top": "75px"}, "slow");
				$message.fadeOut(500);
			}
			else if(displayed == false)
			{
				displayed = true;
				$(".menu").animate({"top": "0px"}, "slow");
				$message.stop(true, true).show().click(function () { $message.fadeOut(500); });
			}
		}, 50);
	});
});
swfobject.embedSWF("swf/game.swf", "flash", "630", "458", "9.0.0");