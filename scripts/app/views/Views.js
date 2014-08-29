var app = app || {};

(function ($) {
	var prevDiv = 0;
	var MaintainView = Backbone.View.extend({
		el: "#maintain",

		initialize: function () {
			this.render();
		},

		render: function () {
			$(".main_page .hided").hide();
			$(this.el).show();

		}
	});
	var UpDownloadView = Backbone.View.extend({
		el: "#updownload",

		initialize: function () {
			this.render();
		},

		render: function () {
			$(".main_page .hided").hide();
			$(this.el).show();

		}
	});
	var ReportsView = Backbone.View.extend({
		el: "#reports",

		initialize: function () {
			this.render();
		},

		render: function () {
			$(".main_page .hided").hide();
			$(this.el).show();

		}
	});
	var MaintenanceView = Backbone.View.extend({
		el: "#maintenance",

		initialize: function () {
			this.render();
		},

		render: function () {
			$(".main_page .hided").hide();
			$(this.el).show();

		}
	});

	app.maintain = new MaintainView();
	app.updownload = new UpDownloadView();
	app.reports = new ReportsView();
	app.maintenance = new MaintenanceView();
})(jQuery);