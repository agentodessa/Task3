var app = app || {}
(function($) {
	var getSourceType = Backbone.Function.extend({
		request: function() {
			$.ajax({
				async: true,
				contentType: 'application/json; charset=UTF-8',
				type: 'GET',
				url: 'D:\Projects\Task3\Task3\scripts\JSon\validateTierMobile.json',
				dataType: 'json',
				success: function(data) {
					console.log(data);
				}
			});
		},
	});
	app.getSourceType = new getSourceType();
})(jQuery);