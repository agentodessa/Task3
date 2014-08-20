$(document).ready(function () {


    $(".input_name").click(function() {
        $(this).val("");
    });
	$(".login_btn").click(function () {

	});


	$(".login_anonymous").click(function () {
		$(".container").css('display', 'none');
		$("body").css('background-color', 'white');
		$(".main_page").css('display', 'block');

	});


	$("#tabs").tabs();
	$("#accordion").accordion();

})