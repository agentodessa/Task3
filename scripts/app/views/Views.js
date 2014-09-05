var app = app || {};
(function ($) {


	var MaintainView = Backbone.View.extend({
		el: "#maintain",
	
		render: function (data) {
			var select = $(".select_type");

			for (var key in data.response.sources) {
				select.append("<option>"+data.response.sources[key]+"</option>");
			}
			$(".select_type").val("Choose type").attr("selected", "selected");
			this.hide();
			this.show();
		},
		show: function () {
			$(".select").show();
			$(this.el).show();
		},
		hide: function () {
			$(".wrap_form_and_tabs").hide();
			$(".main_page .hided").hide();
			$("#accordion").hide();
		}
	});


	var MaintainTypeView = Backbone.View.extend({
		el: "#maintain",

		render: function (page,params) {
			$(".select_type").val(page).attr("selected", "selected");
			$(".search_type").text(page + " search using:");
			this.hide();
			this.show();

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
			$(this.el).show();
			$(".wrap_form_and_tabs").show();
		},
		hide: function () {
			$(".main_page .hided").hide();
		}
	});

	var UpDownloadView = Backbone.View.extend({
		el: "#updownload",

		render: function () {


			this.hide();
			this.show();
		},
		show: function () {
			$(this.el).show();
		},
		hide: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
		}
	});
	var ReportsView = Backbone.View.extend({
		el: "#reports",

		render: function () {

			this.hide();
			this.show();

		},
		show: function () {
			$(this.el).show();
		},
		hide: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
		}
	});
	var MaintenanceView = Backbone.View.extend({
		el: "#maintenance",

		render: function () {


			this.hide();
			this.show();
		},
		show: function () {
			$(this.el).show();
		},
		hide: function () {
			$(".main_page .hided").hide();
			$(".select").hide();
		}
	});



	//app.defaultop = new DefaultView();
	app.maintain = new MaintainView();
	app.updownload = new UpDownloadView();
	app.reports = new ReportsView();
	app.maintenance = new MaintenanceView();
	app.maintaintype = new MaintainTypeView();
})(jQuery);