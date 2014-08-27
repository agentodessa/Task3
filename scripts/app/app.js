var app = app || {};
$(document).ready(function () {

	var previous;
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

	$(".nav_link").click(function () {
		//$(previous).addClass("hide");
		//	var show = $(this).attr('href');
		//	previous = show;
		//	$(show).removeClass("hide");
		});



	$("#tabs_small").tabs();
	$("#accordion").accordion();

})