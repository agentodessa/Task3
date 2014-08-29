var app = app || {};


(function () {



	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"": "maintain",
			"maintain": "maintain",  //#maintain
			"maintain/:page": "maintaintype",  //#maintain
			"updownload" :"updownload",//#updownload
			"reports"	 :"reports",	//#reports
			"maintenance":"maintenance"//#maintenance
		},

		maintain: function () {
			console.log(1);
			app.maintain.initialize();
		},

		updownload: function () {
			console.log(2);
			app.updownload.initialize();
		},
		reports: function () {
			console.log(3);
			app.reports.initialize();
		},
		maintenance: function () {
			console.log(4);
			app.maintenance.initialize();
		},
		maintaintype: function(page) {
			console.log(page);
		}

	});
	 app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();