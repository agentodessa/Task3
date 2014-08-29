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
		var page = location.hash.split('#')[1] || '';
		//var pagetype = location.hash.split('/')[1] || '';
		window.location.hash = page + "/" + $(".select_type option:selected").text();

		//if (window.location.hash !=("#"+url) ){
		//window.location.hash= page+pagetype;
		//}
			//console.log(pagetype);
	
	});

	$("#tabs_small").tabs();
	$("#accordion").accordion();

})