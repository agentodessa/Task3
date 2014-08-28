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

	$(".select_type").change(function () {
		var url = window.location.pathname;
		var page =url+ $(".select_type option:selected").text();
		if (url != window.location) {
			window.location.hash="/"+page;
		}
		console.log(url);
	});

	$("#tabs_small").tabs();
	$("#accordion").accordion();

})