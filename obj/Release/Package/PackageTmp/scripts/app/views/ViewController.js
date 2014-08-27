var app = app || {};


(function($) {
	app.MaintainView = Backbone.View.extend({
		el: "#fragment-1",

		initialize: function () {
			this.render();
		},

		render:function() {
			
		}
	});
	app.UpDownloadView = Backbone.View.extend({
		el: "#fragment-2",

		initialize: function () {

		},

		render: function () {

		}
	});
	app.ReportsView = Backbone.View.extend({
		el: "#fragment-3",

		initialize: function () {

		},

		render: function () {

		}
	});
	app.MaintenanceView = Backbone.View.extend({
		el: "#fragment-4",

		initialize: function () {
			route();
		},

		render: function () {

		}
	});
})(jQuery);