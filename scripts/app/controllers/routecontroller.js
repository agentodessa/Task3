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
			app.viewModel.showMaintain(true);
			app.viewModel.showUpdownload(false);
			app.viewModel.showReports(false);
			app.viewModel.showMaintenance(false);
		},
		updownload: function() {
			console.log("Source:updownload");
			app.viewModel.showMaintain(false);
			app.viewModel.showUpdownload(true);
			app.viewModel.showReports(false);
			app.viewModel.showMaintenance(false);

		},

		reports: function() {
			console.log("Source:reports");
			app.viewModel.showMaintain(false);
			app.viewModel.showUpdownload(false);
			app.viewModel.showReports(true);
			app.viewModel.showMaintenance(false);
		},
		maintenance: function() {
			console.log("Source:maintenance");
			app.viewModel.showMaintain(false);
			app.viewModel.showUpdownload(false);
			app.viewModel.showReports(false);
			app.viewModel.showMaintenance(true);
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