var app= app|| {};
(function (app) {
	var query = "async: true" +
		"contentType: 'application/json; charset=UTF-8'"+
		"type: 'GET'"+	
		"dataType: 'json'";

	app.getSourceType = function () {
	var response =$.ajax({
		url: 'http://10.40.170.134/JSon/retrieveAvailableSources.json',
	},query);
		return response;
	}

	app.validateTierMobile = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/retrieveTierDetailsMobile.json',
		},query);
		return response;
	}
})(app);