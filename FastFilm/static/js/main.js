console.time("Module enabled Main ");
let hrefCurrent  = window.location.href;
let protocoll 	 = document.location.protocol;
$('.waitingSpin').stop().fadeOut(1000);
let pathnameWs = window.location.pathname;
pathnameWs = pathnameWs.split('/')[1];


function reYear() {
	$('.new_movie').each(function(index, el) {
		let year = $(this).find('.year_genre--film p').text();
		year = year.slice(0, 4);
		$(this).find('.year_genre--film p').text(year);
		$(this).find('.year_genre--film').css('display','block');
	});
}
$('.addFavorites').click(function () {
	let sfc = $(this).attr('data-sfc');
	if (+sfc == 800){
		$(this).attr('data-sfc',200);
		addMess('Добавлено в избранное !', 200);
		$(this).find('i').removeClass('far fa-heart').addClass('fas fa-heart');
	}else if (+sfc == 200){
		$(this).attr('data-sfc',800);
		addMess('Убрали из избранного !', 800);
		$(this).find('i').removeClass('fas fa-heart').addClass('far fa-heart');
	}
});
// Search
function isEmpty(str) {
	if (str.trim() == '') 
		return true;

	return false;
}

$('#searching').click(function(event) {
	let query = $('#search').val();
	if (isEmpty(query) == false) {
		location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/" + "search/" +  query;
	}else{
		alert("Введите данные для поиска");
	}
});
// end Search


if (pathnameWs == "movie" || pathnameWs == "series" ){
	pagination();
}

if (pathnameWs == "see" ){
	reFilmSeeData();
	similarSlider();
	addHistory();
}


function addHistory() {
	let [pheadline,year,quality] = [$('.headline--now--film--watch p > span:last-child').text(),$('.year--film--now--watch p > span:last-child').text(),$('.rait--now--film--watch p > span:last-child').text()];
	console.log(pheadline+year+quality)	;
}
function similarSlider() {
		$('.similar_slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows:true,
		prevArrow:'<button type="button" class="slick-prev"><</button>',
		nextArrow:'<button type="button" class="slick-next">></button>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]

	});	

}



function reFilmSeeData() {
	let country = $('.country--now--film--watch p').text();
	let genre = $('.genres--now--film--watch p').text();
	let res_g = '';
	let res_c = '';
	country = country.substr(1,country.length -2).split(',');
	genre = genre.substr(1,genre.length -2).split(',');
	for (var i = 0; i < genre.length; i++) {
		if (genre[i].indexOf('name') + 1) {
			genre[i] = genre[i].substr(2,genre[i].length - 4).substr(genre[i].indexOf(':') + 1,genre[i].length);
			res_g +=genre[i] + ',';
		}
	}

	for (var i = 0; i < country.length; i++) {
		if (country[i].indexOf('name') + 1) {
			country[i] = country[i].substr(2,country[i].length - 4).substr(country[i].indexOf(':') + 1,country[i].length);
			res_c +=country[i] + ',';
		}
	}
	country[0] = country[0].substr(country[0].indexOf('name'),country[0].length).substr(country[0].indexOf('\'') - 1,country[0].length).slice(0,-3);
	$('.country--now--film--watch p').text('Страна: ' + res_c.substr(0,res_c.length - 1));
	$('.genres--now--film--watch p').text('Жанр: ' + res_g.substr(0,res_g.length - 1));
}
// Pagination
function pagination() {
	let  current_page = window.location.pathname;
	current_page = current_page.split('/')[2];
	if (  current_page > 5 && ((current_page + 5) < $('.pagination').attr('data-id'))) {
		$('.pagination').append(`
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 1}"><</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 4}">${+current_page - 4}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 3}">${+current_page - 3}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 2}">${+current_page - 2}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 1}">${+current_page - 1}</a>
			<span  class="pag_item pag_active">${+current_page}</span>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">${+current_page + 1}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 2}">${+current_page + 2}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 3}">${+current_page + 3}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 4}">${+current_page + 4}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">></a>
			`);
	}else if (current_page > 1 && current_page < 5 &&((current_page + 5) < $('.pagination').attr('data-id'))){
		$('.pagination').append(`
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 1}"><</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 1}">${+current_page - 1}</a>
			<span  class="pag_item pag_active">${+current_page}</span>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">${+current_page + 1}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 2}">${+current_page + 2}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 3}">${+current_page + 3}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 4}">${+current_page + 4}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 5}">${+current_page + 5}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 6}">${+current_page + 6}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 7}">${+current_page + 7}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 8}">${+current_page + 8}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">></a>
			`);
	}else if (current_page == 1){
		$('.pagination').append(`
			<span class="pag_item pag_active">${current_page}</span>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">${+current_page + 1}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 2}">${+current_page + 2}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 3}">${+current_page + 3}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 4}">${+current_page + 4}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 5}">${+current_page + 5}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 6}">${+current_page + 6}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 7}">${+current_page + 7}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 8}">${+current_page + 8}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">></a>
			`);
	}else{
		$('.pagination').append(`
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 1}"><</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 4}">${+current_page - 4}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 3}">${+current_page - 3}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 2}">${+current_page - 2}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page - 1}">${+current_page - 1}</a>
			<span class="pag_item pag_active">${current_page}</span>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">${+current_page + 1}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 2}">${+current_page + 2}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 3}">${+current_page + 3}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 4}">${+current_page + 4}</a>
			<a  class="pag_item" href="/${pathnameWs}/${+current_page + 1}">></a>
			`);
	}
	
}


// Different callback
reYear();
console.timeEnd("Module enabled Main ");
console.info("Current url: "+hrefCurrent);
console.info("Current Protocoll: " + protocoll);
