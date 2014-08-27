var app = app || {};


(function () {

	var MaintainView = Backbone.View.extend({
		el: '#maintain',

		//initialize: function () {
		//	this.render();
		//},

		render: function () {

		}
	});

	var ComissioinRouter = Backbone.Router.extend({
// ReSharper restore InconsistentNaming
		routes:
		{
			"maitain": "maintain",  //#maintain
			"updownload" : "updownload",//#updownload
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
	var maintains = new MaintainView();
	 app.appRouter = new ComissioinRouter();
	Backbone.history.start();
})();