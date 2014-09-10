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




		$(".search_form").submit(function(event) {
			event.preventDefault();
			var oldHash = window.location.hash.split('?')[0];
			var queryparams = "";
			queryparams="?" + buildQueryParams();
			var url = "";
			url= oldHash + queryparams;
			window.location.hash = url;
		});


	var buildQueryParams= function() {
		var len = $(".search_form input").length;
		var paramString = "", i = 0;
		for (i = 0; i < len; ++i) {
			paramString += $(".search_form input")[i].name +"="+ $(".input_search"+[i]).val()+"&";
		}
		return paramString;
	}
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



	//$("#tabs_small").tabs();
	//$("#accordion").accordion();

})