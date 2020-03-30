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
		$('.mobile__menu').removeClass('showMobileMenu');
		$('.mobile__menu').stop().slideUp(300);
		$('.mobile__menu').addClass('topmobileBg');
	}else{
		if (st > lastScrollTop){
			$('.mobile__menu').stop().slideUp(300);
			$('.mobile__menu').removeClass('showMobileMenu');
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


console.timeEnd("Module enabled Other ");
