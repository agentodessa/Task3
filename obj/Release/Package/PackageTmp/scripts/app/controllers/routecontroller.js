var app = app || {};


(function() {

	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"": "maintain",
			"maintain": "maintain", //#maintain
			"maintain/:page": "maintaintype", //#maintain/type
			"updownload": "updownload", //#updownload
			"reports": "reports", //#reports
			"maintenance": "maintenance", //#maintenance
			"*unknownurl:page": "error",
		},
		maintain: function() {
			console.log("Source:maintain");
			app.viewModel.showTabPage(1);
		},
		updownload: function() {
			console.log("Source:updownload");
			app.viewModel.showTabPage(2);
		},

		reports: function() {
			console.log("Source:reports");
			app.viewModel.showTabPage(3);
		},
		maintenance: function() {
			console.log("Source:maintenance");
			app.viewModel.showTabPage(4);
		},

		maintaintype: function(page, params) {
			console.log("Source:maintain " + " type " + page);
			app.retrieveDataFromServer(page, params);
			app.viewModel.maintainType.showForm(true);
		},
		error: function() {
			console.log("ERROR 404");
		},
	});
	app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();