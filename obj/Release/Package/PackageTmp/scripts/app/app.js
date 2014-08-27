var app = app || {};
$(document).ready(function () {


    $(".input_name").click(function() {
        $(this).val("");
    });
	$(".login_btn").click(function () {

	});


	$(".login_anonymous").click(function () {
		//$(".container").css('display', 'none');
		$("body").css('background-color', 'white');
		//$(".main_page").css('display', 'block');

	});

		$(".nav_link").click(function (e) {
			var pageurl = $(this).attr('href');
			if(pageurl != window.location){
				window.history.pushState(null, null, pageurl);
			}
		});



	$("#tabs_small").tabs();
	$("#accordion").accordion();

})