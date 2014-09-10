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
	//retrievedata
	app.retrieveTierDetails = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/retrieveTierDetails.json',
		}, query);
		return response;
	}

	app.retrieveTierDetailsMobile = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/retrieveTierDetailsMobile.json',
		}, query);
		return response;
	}


	app.retrieveTierDetailsSlam = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/retrieveTierDetailsSlam.json',
		}, query);
		return response;
	}
	//validatedata
	app.validateTierMobile = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/validateTierMobile.json',
		},query);
		return response;
	}

	app.validateTierSlam = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/validateTierSlam.json',
		}, query);
		return response;
	}

	app.validateTier = function () {
		var response = $.ajax({
			url: 'http://10.40.170.134/JSon/validateTier.json',
		}, query);
		return response;
	}
})(app);