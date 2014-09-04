var app= app|| {};
(function(app) {
	app.getSourceType = function () {
	$.ajax({
		async: true,
		contentType: 'application/json; charset=UTF-8',
		type: 'GET',
		url: 'http://10.40.170.134/JSon/retrieveAvailableSources.json',
		dataType: 'json',
		success: function(data) {
			console.log(data);
		}
	});
}
})(app);