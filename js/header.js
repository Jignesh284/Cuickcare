$(document).on('scroll', function(){
	if($(this).scrollTop()> 40) {
		$('.primary-header').addClass("remove");
		$('.site-icon').removeClass('hidden');
		$('.main-nav').addClass('sticky')
	} else {
		$('.primary-header').removeClass("remove");
		$('.site-icon').addClass('hidden');
		$('.main-nav').removeClass('sticky')
	}

})