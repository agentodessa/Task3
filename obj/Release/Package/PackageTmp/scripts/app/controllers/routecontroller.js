var app = app || {};


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
			app.maintain.render();
		},

		updownload: function () {
			console.log("Source:updownload");
			app.updownload.render();
		},
		reports: function () {
			console.log("Source:reports");
			app.reports.render();
		},
		maintenance: function () {
			console.log("Source:maintenance");
			app.maintenance.render();
		},
		maintaintype: function (page, params) {
			console.log("Source:maintain " + " type " + page);
			console.log(params);
			app.maintaintype.render(page, params);
			app.getSourceType();
			
		},
		error: function () {
			console.log("ERROR 404");
		},
	});
	app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();