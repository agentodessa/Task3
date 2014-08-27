var app = app || {};


(function () {
	var ComissioinRouter = Backbone.Router.extend({
		routes:
		{
			"maintain": "maintain",  //#maintain
			"updownload" : "updownload",//#updownload
			"reports"	 :"reports",	//#reports
			"maintenance":"maintenance"//#maintenance
		},

		maintain: function (page) {
			console.log("You are on maintain page");
		},
		updownload: function (page) {
			console.log("You are on updownload page");
		},

		reports: function () {
			
		},

		maintenance:function() {
			
		}
	});

	var appRouter = new ComissioinRouter();
	Backbone.history.start();
})();