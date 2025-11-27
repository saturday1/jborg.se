// JavaScript Document
jQuery(document).ready(function($) {
// REPLACE FORM TEXT
$('.formtext').click(function() {
	if (this.value == this.defaultValue) {
		this.value = '';
	}
});

$('.formtext').blur(function() {
	if (this.value == '') {
		this.value = this.defaultValue;
	}
});

// WORK THAT MENU
$(function() {
	$('#sdt_menu > li').bind('mouseenter',function(){
		var $elem = $(this);
		$elem.find('img')
			 .stop(true)
			 .animate({
				'width':'140px',
				'height':'140px',
				'left':'10px'
			 },400,'easeOutBack')
			 .andSelf()
			 .find('.sdt_wrap')
			 .stop(true)
			 .animate({'top':'110px'},500,'easeOutBack')
			 .andSelf()
			 .find('.sdt_active')
			 .stop(true)
			 .animate({'height':'160px'},300,function(){
			var $sub_menu = $elem.find('.sdt_box');
			if($sub_menu.length){
				var left = '160px';
				if($elem.parent().children().length == $elem.index()+1)
					left = '-160px';
				$sub_menu.show().animate({'left':left},200);
			}	
		});
	}).bind('mouseleave',function(){
		var $elem = $(this);
		var $sub_menu = $elem.find('.sdt_box');
		if($sub_menu.length)
			$sub_menu.hide().css('left','0px');
		
		$elem.find('.sdt_active')
			 .stop(true)
			 .animate({'height':'0px'},300)
			 .andSelf().find('img')
			 .stop(true)
			 .animate({
				'width':'0px',
				'height':'0px',
				'left':'85px'},400)
			 .andSelf()
			 .find('.sdt_wrap')
			 .stop(true)
			 .animate({'top':'5px'},500);
	});
});

// FADE IMAGE
$('.slideshow').cycle({
	fx:    'fade', 
	speed:  800,
	timeout: 8000,
	next:   '#next', 
	prev:   '#prev' 
});

// SCROLL TO NACHOR
$(document).ready(function(){
  $(".scroll").click(function(event){
	event.preventDefault();
	var offset = $($(this).attr('href')).offset().top  - 80;
	$('html, body').animate({scrollTop:offset}, 500);
  });
});

// HOVER IMG
$(".hover").hover( 
	function() {
		var hoverImg = HoverImgOf($(this).attr("src"));
		$(this).attr("src", hoverImg);
	}, function() {
		var normalImg = NormalImgOf($(this).attr("src"));
		$(this).attr("src", normalImg);
	}
);

function HoverImgOf(filename) {
	var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
	return filename.replace(re, "$1_hover.$2");
}

function NormalImgOf(filename) {
	var re = new RegExp("(.+)_hover\\.(gif|png|jpg)", "g");
	return filename.replace(re, "$1.$2");
}

// TOGGLE LAYERS
$(".project_descr").hide();
//toggle the componenet with class project_descr
$(".project_arrow").click(function(){
	$(this).prevAll('.project_descr').slideToggle(300), 
	$(this).toggleClass("project_arrow_back");

});

$(".link_div").click(function(){
	 window.location=$(this).find("a").attr("href");
	 return false;
});
});