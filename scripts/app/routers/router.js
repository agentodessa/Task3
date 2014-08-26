var app = app || {};


(function () {
	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"mobility": "maintain",  //#maintain
			"updownload": "updownload",//#updownload
			"reports":"reports",//#reports
			"maintenance":"maintenance"//#maintenance
		},

		//mobility:function (param) {
		//	app.route();
		//},
		//tablet: function() {
			
		//},

		//pc: function() {
			
		//}
	});

	var appRouter = new ComissioinRouter();

	appRouter.on('route:maintain',function(page) {
		app.MaintainView(page);
	});
	appRouter.on('route:updownload', function (page) {
		app.UpDownloadView(page);
	});
	appRouter.on('route:reports', function (page) {
		app.ReportsView(page);
	});
	appRouter.on('route:maintenance', function (page) {
		app.MaintenanceView(page);
	});

	Backbone.history.start();
})();