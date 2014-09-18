﻿var app = app || {};


(function () {

	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"": "maintain",
			"maintain": "maintain",  //#maintain
			"maintain/:page": "maintaintype",  //#maintain/type
			"updownload" :"updownload",//#updownload
			"reports"	 :"reports",	//#reports
			"maintenance": "maintenance",//#maintenance
			"*unknownurl:page": "error",
		},
		maintain: function () {
			console.log("Source:maintain");

			app.getSourceType().done(function (data) {
				console.log(data);
				app.maintainView && app.maintainView.render(data);

			});
		},

		updownload: function () {
			console.log("Source:updownload");
			app.updownloadView && app.updownloadView.render();
		},

		reports: function () {
			console.log("Source:reports");
			app.reports && app.reports.render();
		},
		maintenance: function () {
			console.log("Source:maintenance");
			app.maintenanceView && app.maintenanceView.render();
		},

		maintaintype: function (page, params) {
			console.log("Source:maintain " + " type " + page);
			//call view with or without params 
			app.callView(page,params);
		},
		error: function () {
			console.log("ERROR 404");
		},
	});
	app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();