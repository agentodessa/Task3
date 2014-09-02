var app = app || {};


(function () {

	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"": "maintain",
			"maintain": "maintain",  //#maintain
			"#maintain/:page": "maintaintype",  //#maintaintype
			"updownload" :"updownload",//#updownload
			"reports"	 :"reports",	//#reports
			"maintenance": "maintenance",//#maintenance

			":page": "maintaintype",// like  #/ or #// and other 
			"*unknownurl:page": "error",
		},
		//defaultOp: function (page) {
		//	console.log(0);
		//	app.defaultop.render(page);

		//},
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
		maintaintype: function (page) {
			console.log("Source:maintain "+" type "+page);
			app.maintaintype.render(page);

		},
		error: function () {
			console.log("EROR 404");
		},
	});
	 app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();