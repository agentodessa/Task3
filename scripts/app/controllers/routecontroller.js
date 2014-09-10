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

			//to other module 
			app.getSourceType().done(function (data) {
				console.log(data);
			});
		},

		updownload: function () {
			console.log("Source:updownload");
			//app.updownload.render();
		},

		reports: function () {
			console.log("Source:reports");
			//app.reports.render();
		},
		maintenance: function () {
			console.log("Source:maintenance");
			//app.maintenance.render();
		},

		maintaintype: function (page, params) {
			console.log("Source:maintain " + " type " + page);


			//to modules
			if (params) {

				switch (page) {
					case 'All sources':
						app.validateTier().done(function (validdata) {
							console.log(validdata);
						});
						app.getSourceType().done(function (data) {
							app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
							console.log(data);
						});
						break;
					case 'Mobile':
						app.validateTierMobile().done(function (validdata) {
							console.log(validdata);
						});
						app.getSourceType().done(function (data) {
							app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
							console.log(data);
						});
						break;
					case 'SLAM':
						app.validateTierSlam().done(function (validdata) {
							console.log(validdata);
						});
						app.getSourceType().done(function (data) {
							app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
							console.log(data);
						});
						break;
					default:
						console.log("Error");
				}

			} else {
				switch (page) {
					case 'All sources':
						app.retrieveTierDetails().done(function (validdata) {
							console.log(validdata);
						});
						app.getSourceType().done(function (data) {
							console.log(data);
							app.maintaintype  &&  app.maintaintype.renderWithParams(page, params, data);
						});
						break;
					case 'Mobile':
						app.retrieveTierDetailsMobile().done(function (validdata) {
							console.log(validdata);
						});
						app.getSourceType().done(function (data) {
							app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
							console.log(data);
						});
						break;
					case 'SLAM':
						app.retrieveTierDetailsSlam().done(function (validdata) {
							console.log(validdata);
						});
						app.getSourceType().done(function (data) {
							app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
							console.log(data);
						});
						break;
					default:
						console.log("Error");
				}
			}


		},
		error: function () {
			console.log("ERROR 404");
		},
	});
	app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();