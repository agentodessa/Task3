var app = app || {};


(function () {



	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"": "defaultOp",
			"maintain": "maintain",  //#maintain
			"maintain/:page": "maintaintype",  //#maintaintype
			"updownload" :"updownload",//#updownload
			"reports"	 :"reports",	//#reports
			"maintenance": "maintenance",//#maintenance
			"*unknown:page": "defaultOp",
		},
		defaultOp: function (page) {
			console.log(0);
			app.defaultop.render(page);

		},
		maintain: function () {
			console.log(1);
			app.maintain.render();
		},

		updownload: function () {
			console.log(2);
			app.updownload.render();
		},
		reports: function () {
			console.log(3);
			app.reports.render();
		},
		maintenance: function () {
			console.log(4);
			app.maintenance.render();
		},
		maintaintype: function (page) {
			app.maintaintype.render(page);
		}

	});
	 app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();