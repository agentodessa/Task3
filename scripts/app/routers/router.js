﻿var app = app || {};


(function () {



	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"":"maintain",
			"maintain":"maintain",  //#maintain
			"updownload" :"updownload",//#updownload
			"reports"	 :"reports",	//#reports
			"maintenance":"maintenance"//#maintenance
		},

		maintain: function () {

			console.log(1);
		},

		updownload: function () {
			console.log(2);
		},
		reports: function () {
			console.log(3);
		},
		maintenance: function () {
			console.log(4);
		},

	});
	 app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();