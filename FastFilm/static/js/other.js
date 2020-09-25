console.time("Module enabled Other ");
// COOKIE 
function getCookie(name) {
	let cookie = " " + document.cookie;
	let search = " " + name + "=";
	let setStr = null;
	let offset = 0;
	let end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}
 
function set_cookie ( name, value, exp_y, exp_m, exp_d, path, domain, secure )
{
  var cookie_string = name + "=" + escape ( value );
 
  if ( exp_y )
  {
    var expires = new Date ( exp_y, exp_m, exp_d );
    cookie_string += "; expires=" + expires.toGMTString();
  }
 
  if ( path )
        cookie_string += "; path=" + escape ( path );
 
  if ( domain )
        cookie_string += "; domain=" + escape ( domain );
  
  if ( secure )
        cookie_string += "; secure";
  
  document.cookie = cookie_string;
}

function deleteCookie(name) {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
// End cookie


// Close found
$('.close_searching').click(function () {
	$('body').css({"overflow-y":"scroll"});
	$('.bgop').stop().fadeOut('slow');
	$('.searching').stop().fadeOut('slow');
	$('.searching .container .moviesSerach').html('');
	$('.bgop .report').html('');
});

// Header
let lastScrollTop = 0;
let header = $('header');
$(window).scroll(function(event){
	let st = $(this).scrollTop();
	if (window.pageYOffset <= 0) {
		header.removeClass('hideHeader').removeClass('showHeader');
		$('.mobile__menu').removeClass('showMobileMenu').stop().slideUp(300).addClass('topmobileBg');
	}else{
		if (st > lastScrollTop){
			$('.mobile__menu').stop().slideUp(300).removeClass('showMobileMenu');
			$(".profileMenu").removeClass('showProfileMenu').stop().fadeOut(300);
			header.addClass('hideHeader').removeClass('showHeader');
		} else{
			header.addClass('showHeader').removeClass('hideHeader');
		}
	}

	lastScrollTop = st;
}); 

$('.profile').click(function(){
	$('.profileMenu').toggleClass('showProfileMenu');
});
// Mobile menu
$('.iconBarMobile').click(function(){
	if (window.pageYOffset > 0) {
		$('.mobile__menu').removeClass('topmobileBg');
	}else{
		$('.mobile__menu').addClass('topmobileBg');
	}
	if ($('.mobile__menu').hasClass('showMobileMenu')) {
		$('.mobile__menu').stop().slideUp('slow');
	}else{
		$('.mobile__menu').stop().slideDown('slow');
	}
	$('.mobile__menu').toggleClass('showMobileMenu');

	
});
$(".new_movie img").each(function(key, item) {
	$(item).on("error", function() {
		showDefaultImage(this);
	}).attr('src', $(item).attr('src'));
});

$(".about--watch--now--film img").each(function(key, item) {
	$(item).on("error", function() {
		showDefaultImage(this);
	}).attr('src', $(item).attr('src'));
});

function showDefaultImage(img) {
	$(img).attr('src', window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/" + 'static/img/no-img-film/no-img.jpg');
	$(img).off("error");
}

// Functions sites
$('.title__functions__site').click(function () {
	let cl = $('.functions__site').attr('data-cl');
	if (cl == 1 ){
		$('.functions__site__block').stop().slideUp(500);
		$('.functions__site').attr('data-cl',0);
	}else{
		$('.functions__site__block').stop().slideDown(400);
		$('.functions__site').attr('data-cl',1);
	}
});

$('.reColors').click(function () {
	let color = $('.reColors').attr('data-color');
	reColors(color);
});

if (getCookie('color') == 'black') {
	 reColors(1);
}else{
	 reColors(0);
}

function reColors(color) {
	if (+color == 0) {
		$('.reColors').attr('data-color',1);
		$('.reColors').find('span').text('Светлая');
		$('body').css('background','#fff');
		$('.reColor').addClass('reColorBl');
		$('.footer__content').css('background','#232323');
		$('header').addClass('reColorHead');
		$('.about--watch--now--film').css('background','#232323');
		$('.title--now--film--watch').css('background','#2d2d2d');
		$('.tab_tr_fl').css('background','#232323');
		$('.slick-arrow').css('color','#232323');
		document.cookie = "color=white; path=/";
	}else{
		$('.reColors').attr('data-color',0);
		$('.reColors').find('span').text('Тёмная');
		$('body').css('background','url(' + window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/" + 'static/img/img/bg/bg.png")');
		$('.reColor').removeClass('reColorBl');
		$('.footer__content').css('background','#23232340');
		$('header').removeClass('reColorHead');
		$('.about--watch--now--film').css('background','#2323235c');
		$('.title--now--film--watch').css('background','#23232366');
		$('.tab_tr_fl').css('background','#2323238c');
		$('.slick-arrow').css('color','#fff');
		document.cookie = "color=black; path=/";
	}
}
console.timeEnd("Module enabled Other ");
