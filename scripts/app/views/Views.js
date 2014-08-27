var app = app || {};


(function($) {
		//var MaintainView = Backbone.View.extend({
		//el: '#maintain',

		////initialize: function () {
		////	this.render();
		////},

		//render:function() {
		//	this.$el.html("HI!");
		//}
	//});
	var UpDownloadView = Backbone.View.extend({
		el: "#updownload",

		initialize: function () {

		},

		render: function () {

		}
	});
	app.ReportsView = Backbone.View.extend({
		el: "#reports",

		initialize: function () {

		},

		render: function () {

		}
	});
	app.MaintenanceView = Backbone.View.extend({
		el: "#maintenance",

		initialize: function () {
			route();
		},

		render: function () {

		}
	});

	//app.maintain = new MaintainView();
})(jQuery);