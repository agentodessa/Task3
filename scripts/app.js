$(document).ready(function () {


    $(".input_name").click(function() {
        $(this).val("");
    });
	$(".login_btn").click(function () {

	});


	$(".login_anonymous").click(function () {
		$(".login_page").css('text-indent', '');
		$("body").css('background-color', 'white');
	});
})