// JavaScript Document

// PRE-LOAD IMAGES
$.fn.preload = function() {
	this.each(function(){
			$('<img/>')[0].src = this;
	});
}

$([
	'images/f_fb_hover.png',
	'images/f_li_hover.png',
	'images/f_tw_hover.png',
	'images/send_hover.png'

]).preload();// JavaScript Document