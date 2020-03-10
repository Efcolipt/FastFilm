jQuery(document).ready(function($) {
	function addMess(msg,status){
		let hide = "";
		function addMess200(msg){
			let counter = $('.message-alert .st200').length + 1;
			$('.message-alert').append('<div class="st200 alert-success alert-msg" style="display:none;" data-id="'+counter+'">'+msg+'</div>');
			$('.st200[data-id="'+counter+'"]').stop().fadeIn('slow');
			hide = 'st200[data-id="'+counter+'"]';
		}

		function addMess800(msg){
			let counter = $('.message-alert .st800').length + 1;
			$('.message-alert').append('<div class="st800 alert-danger alert-msg" style="display:none;" data-id="'+counter+'">'+msg+'</div>');
			$('.st800[data-id="'+counter+'"]').stop().fadeIn('slow');
			hide = 'st800[data-id="'+counter+'"]';
		}


		if (+status == 200) {
			addMess200(msg);
		}else if (+status == 800){
			addMess800(msg);
		}

		let timerHideAllElement = setTimeout(function(){
			$(`.${hide}`).stop().fadeOut('slow');
		}, 3000);
	}

	function cleanGarbage(){
		$('.message-alert').html('');
	}

	setInterval(function(){cleanGarbage();}, 20000);
});