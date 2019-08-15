$('body').on('click', '.toggle-nav', function() {
	$('nav').toggleClass('open');
})

$('body').on('click', '.panel-toggle', function() {
	$('.panel-wrapper').toggleClass('d-none');
	$(this).toggleClass('open closed');
})

$('body').on('click', '.panel-toggle.open', function() {
	$('.screen-wrapper').removeClass("col-8 offset-2").addClass("col-10 offset-1");
})

$('body').on('click', '.panel-toggle.closed', function() {
	$('.screen-wrapper').removeClass("col-10 offset-1").addClass("col-8 offset-2");
})

// $(".panel-toggle").toggle(function() 
// {
//         $('.screen-wrapper').removeClass("col-8 offset-2").addClass("col-10 offset-1");

// }, function() {
//         $('#target').removeClass("col-10 offset-1").addClass("col-8 offset-2");

// });