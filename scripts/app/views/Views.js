var app = app || {};
(function ($) {


	var MaintainView = Backbone.View.extend({
		el: "#maintain",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").show();
			$("#accordion").hide();
			$(".select_type").val("Choose tepe").attr("selected", "selected");
			$(".wrap_form_and_tabs").hide();
			$(this.el).show();
		},
		show:function(){
			
		},
		hide:function(){
			
		}
	});


	var MaintainTypeView = Backbone.View.extend({
		el: "#maintain",

		render: function (page,params) {
			$(".main_page .hided").hide();
			$(this.el).show();
			$(".select_type").val(page).attr("selected", "selected");
			$(".wrap_form_and_tabs").show();
			if (params) {
				$(".input_search1").val(params[$(".input_search1").attr('name').toString()]);
				$(".input_search2").val(params[$(".input_search2").attr('name').toString()]);
				$(".input_search3").val(params[$(".input_search3").attr('name').toString()]);
				$(".input_search4").val(params[$(".input_search4").attr('name').toString()]);
			} else {
				$(".input_search1").val("");
				$(".input_search2").val("");
				$(".input_search3").val("");
				$(".input_search4").val("");
			};
			

		},
		show: function () {

		},
		hide: function () {

		}
	});

	var UpDownloadView = Backbone.View.extend({
		el: "#updownload",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
			$(this.el).show();

		},
		show: function () {

		},
		hide: function () {

		}
	});
	var ReportsView = Backbone.View.extend({
		el: "#reports",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
			$(this.el).show();

		},
		show: function () {

		},
		hide: function () {

		}
	});
	var MaintenanceView = Backbone.View.extend({
		el: "#maintenance",

		render: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
			$(this.el).show();

		},
		show: function () {

		},
		hide: function () {

		}
	});



	//app.defaultop = new DefaultView();
	app.maintain = new MaintainView();
	app.updownload = new UpDownloadView();
	app.reports = new ReportsView();
	app.maintenance = new MaintenanceView();
	app.maintaintype = new MaintainTypeView();
})(jQuery);