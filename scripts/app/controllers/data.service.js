var app= app|| {};
(function(app) {
	app.getSourceType = function () {
	var response =$.ajax({
		async: true,
		contentType: 'application/json; charset=UTF-8',
		type: 'GET',
		url: 'http://10.40.170.134/JSon/retrieveAvailableSources.json',
		dataType: 'json',
		success:function(data) {
		}
	});
		return response;
	}

	app.validateTierMobile = function () {
		var response = $.ajax({
			async: true,
			contentType: 'application/json; charset=UTF-8',
			type: 'GET',
			url: 'http://10.40.170.134/JSon/validateTierMobile.json',
			dataType: 'json',
			success: function (data) {
			}
		});
		return response;
	}
})(app);