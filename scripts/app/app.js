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

	$(".search_btn").click(function () {
		window.location.hash = "";
		return false;
	});
	$(".select_type").change(function () {
		if ($(".select_type option:selected").text() != "Choose type") {
			var page = location.hash.split('#')[1] || 'maintain';
			var newpage = page.split('/')[0] || '';
			var pageType = $(".select_type option:selected").text();
			var url = newpage + "/" + pageType;

			if (window.location.hash != url) {
				window.location.hash = url;
			} 
		} else {
			window.location.hash = "";

		}
	
	});



	$("#tabs_small").tabs();
	$("#accordion").accordion();

})