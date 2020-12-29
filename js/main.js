$('.header-menu__icon').click(function (){
	$('.header-menu').toggleClass('active');
	blackout();
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('body').removeClass('blackout');
	} else {
		$(this).addClass('active');
		$('body').addClass('blackout');
	}
});

function blackout(){
	var docHeight = $(document).height();
	if($('div').is('#overlay')){
		$('#overlay').detach();
	} else {
		$('body').append('<div id="overlay"></div>');
		$('#overlay').height(docHeight).css({
			'opacity' : 0.4,
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'background-color': 'black',
			'width': '100%',
			'z-index': 4
		});
   }
}
$('.news-navigation-tabs__item').click(function (){
	$(this).addClass('active');
	let item = $(this).text();
	if(item == 'News') {
		$('.news-tabs-item').removeClass('active');
		$('.news').addClass('active');
	} else if (item == 'Press Release') {
		$('.news-tabs-item').removeClass('active');
		$('.press').addClass('active');
	} else if (item == 'All'){
		$('.news-tabs-item').addClass('active');
	}
});
$('.footer__title').click(function(argument) {
	$(this).toggleClass('active').next().slideToggle(300);
})


res();
$( window ).resize(function() {res();});

function res(){
	if ($(window).width() <= 768){
		$('.header-menu').append($('.header-navigation'));
		$('.footer__about').css({
			'display': 'none'
		})
	} else {
		$('.header-navigation').insertAfter($('.header-logo'));
		$('.footer__about').css({
			'display': 'block'
		})
	}
}
$('.news-navigation-tabs__item').click(function (){
	$('.news-navigation-tabs__item').removeClass('active');
	$(this).addClass('active');
});