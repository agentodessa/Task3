﻿var app = app || {};
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

	//Form submit
		$(".search_form").submit(function(event) {
			event.preventDefault();
			if ($(".input_search0").val() && $(".input_search1").val()&&
				$(".input_search2").val() && $(".input_search3").val()!="") {
				var oldHash = window.location.hash.split('?')[0];
				var queryparams = "";
				queryparams = "?" + buildQueryParams();
				var url = "";
				url = oldHash + queryparams;
				window.location.hash = url;
			};
			console.log("Fill all fields!");
			return;
		});


	var buildQueryParams= function() {
		var len = $(".search_form input").length;
		var paramString = "", i = 0;
		for (i = 0; i < len; ++i) {

				paramString += $(".search_form input")[i].name + "=" + $(".input_search" + [i]).val() + "&";
		}
		return paramString.substring(0, paramString.length - 1);;
	}

	//Select search type
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


	//Table row click 
	$(".element_table tr").click(function () {
		if ($(this).index() != 0) {
			console.log($(this).children());
		}

	});

	//Delete Row
	$(".delete_btn").click(function () {

		if ($(".ui-accordion-content-active .element_table tr")
			.find("input:checked").parent().parent().index() != 0) {
			$(".ui-accordion-content-active .element_table tr")
			.find("input:checked").parent().parent().remove();
		}
	});

	$(".add_btn").click(function() {
		
	});




	//UpdonloadPage

	$(".close_icon").click(function() {
		$(".download_file_info").fadeOut();
	});



	$(".confirm_upload_btn").click(function() {
		$(".download_file_info").fadeIn();
	});



	$(".close_form_icon").click(function() {
		
	});

	//Input type file get filename
	$(".upload").change(function () {
		var filename = $(this).val();
		$(".uploadFile").attr('placeholder',filename);
	});

	$("#tabs_small").tabs();
	$("#accordion").accordion();





})