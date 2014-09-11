var app = app || {};
(function ($) {

	var MaintainView = Backbone.View.extend({
		el: "#maintain",
	
		render: function (data) {
			var select = $(".select_type");
			select.empty();
			select.append("<option>Choose type</option>").attr("selected", "selected");
			for (var key in data.response.sources) {
				select.append("<option>"+data.response.sources[key]+"</option>");
			}
			
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

		render:function() {
			
		},
		renderWithParams: function (page, params, data) {

			var select = $(".select_type");
			select.empty();
			select.append("<option>Choose type</option>").attr("selected", "selected");
			for (var key in data.response.sources) {
				select.append("<option>" + data.response.sources[key] + "</option>");
			}

			$(".select_type").val(page).attr("selected", "selected");
			$(".search_type").text(page + " search using:");
			this.hide();
			this.show();
			//enter data 
			if (params) {
				$(".input_search0").val(params[$(".input_search0").attr('name').toString()]);
				$(".input_search1").val(params[$(".input_search1").attr('name').toString()]);
				$(".input_search2").val(params[$(".input_search2").attr('name').toString()]);
				$(".input_search3").val(params[$(".input_search3").attr('name').toString()]);
				$("#accordion").show();
				$(".wrap_tabs").show();
			} else {
				$(".input_search0").val("");
				$(".input_search1").val("");
				$(".input_search2").val("");
				$(".input_search3").val("");
				$("#accordion").hide();
				$(".wrap_tabs").hide();
			};
			

		},
		show: function () {
			$(this.el).show();
			$(".select").show();
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



	app.maintain = new MaintainView();
	app.updownload = new UpDownloadView();
	app.reports = new ReportsView();
	app.maintenance = new MaintenanceView();
	app.maintaintype = new MaintainTypeView();





})(jQuery);