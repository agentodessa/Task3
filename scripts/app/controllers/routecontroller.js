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
			console.info(app.viewModel.showMaintain());
			app.viewModel.showMaintain(true);
			console.info(app.viewModel.showMaintain());
		},
		updownload: function() {
			console.log("Source:updownload");
			app.viewModel.showUpdownload(true);
		},

		reports: function() {
			console.log("Source:reports");
			app.viewModel.showReports(true);
		},
		maintenance: function() {
			console.log("Source:maintenance");
			app.viewModel.showMaintenance(true);
		},

		maintaintype: function(page, params) {
			console.log("Source:maintain " + " type " + page);
			app.retrieveDataFromServer(page, params);
		},
		error: function() {
			console.log("ERROR 404");
		},
	});
	app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();