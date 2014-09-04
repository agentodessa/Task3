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

	//$(".nav_link").click(function () {
	//	$(previous).addClass("hide");
	//		var show = $(this).attr('href');
	//		previous = show;
	//		$(show).removeClass("hide");
	//	});

	$(".search_btn").click(function () {
		
		return false;
	});

	$(".select_type").change(function () {
		var page = location.hash.split('#')[1] || 'maintain';
		var newpage = page.split('/')[0] || '';
		var pageType =$(".select_type option:selected").text();
		var url = newpage + "/" + pageType;

		if (window.location.hash!=url) {
			window.location.hash = url;
		}
	});



	$("#tabs_small").tabs();
	$("#accordion").accordion();

})