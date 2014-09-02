var app = app || {};

(function ($) {

	//var DefaultView = Backbone.View.extend(
	//{
	//	render: function (page) {

	//		$(".main_page .hided").hide();
	//		$(".select").show();
	//		$(this.el).show();
	//		$(".select_type").val(page);
	//	}
	//});
	var MaintainView = Backbone.View.extend({
		el: "#maintain",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").show();
			$("#accordion").hide();
			$(".select_type").val("Choose tepe").attr("selected", "selected");
			$(".wrap_form_and_tabs").hide();
			$(this.el).show();

		}
	});


	var MaintainTypeView = Backbone.View.extend({
		el: "#maintain",

		render: function (page) {
			$(".main_page .hided").hide();
			$(this.el).show();
			$(".select_type").val(page).attr("selected", "selected");
			$(".wrap_form_and_tabs").show();

		}
	});

	var UpDownloadView = Backbone.View.extend({
		el: "#updownload",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
			$(this.el).show();

		}
	});
	var ReportsView = Backbone.View.extend({
		el: "#reports",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
			$(this.el).show();

		}
	});
	var MaintenanceView = Backbone.View.extend({
		el: "#maintenance",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
			$(this.el).show();

		}
	});



	//app.defaultop = new DefaultView();
	app.maintain = new MaintainView();
	app.updownload = new UpDownloadView();
	app.reports = new ReportsView();
	app.maintenance = new MaintenanceView();
	app.maintaintype = new MaintainTypeView();
})(jQuery);