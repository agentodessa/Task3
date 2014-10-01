var app = app || {};
(function($) {

	var MaintainView = Backbone.View.extend({
		el: "#maintain",

		render: function(data) {
			var select = $(".select_type");
			select.empty();
			select.append("<option>Choose type</option>").attr("selected", "selected");
			for (var key in data.response.sources) {
				select.append("<option>" + data.response.sources[key] + "</option>");
			}

			this.hide();
			this.show();
		},
		show: function() {
			$(".select").show();
			$(".main_page .active").css("display", "none");
			$(".main_page .active").removeClass("active");
			$(this.el).addClass("active");
			$(".main_page .active").css("display", "block");
		},
		hide: function() {
			$(".wrap_form_and_tabs").hide();
			$("#accordion").hide();
		}

	});





	//maintainType
	var MaintainTypeView = Backbone.View.extend({
		el: "#maintain",

		render: function (page, params, data, validdata) {
			this.hide();
			this.show();
			$(".search_type").text(page + " search using:");

			this.renderSelect(page, data);
			this.renderForm(params);
			this.renderTabsTables(validdata);
		},

		renderWithoutParams: function (page, params, data) {
			this.hide();
			this.show();
			$(".search_type").text(page + " search using:");
			this.renderForm(params);
			this.renderSelect(page, data);

		},

		renderForm: function(params) {

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



		renderTabsTables: function(validdata) {
			var customerTable = $(".customer_table");
			var orderTable = $(".order_table");
			customerTable.empty();
			orderTable.empty();
			var tempCustomerTable = validdata.response.tiers[0].displayDetails;
			var tempOrderTable = validdata.response.tiers[2].displayDetails;

			for (var key in tempCustomerTable) {
				customerTable.append("<tr><td>" + key + "</td>" +"<td>"+ tempCustomerTable [key]+"</td>"+ "</tr>");
			}
			for (var key in tempOrderTable) {
				orderTable.append("<tr><td>" + key + "</td>" + "<td>" + tempOrderTable[key] + "</td>" + "</tr>");
			}

			//console.log(tempCustomerTable);
			//console.log(tempOrderTable);
		},

		renderTables: function(data) {

		},

		renderSelect: function(page, data) {
			var select = $(".select_type");
			select.empty();
			select.append("<option>Choose type</option>").attr("selected", "selected");
			for (var key in data.response.sources) {
				select.append("<option>" + data.response.sources[key] + "</option>");
			}
			$(".select_type").val(page).attr("selected", "selected");
		},

		//common methods
		setInputValueHelper: function(inputClassName, params) {
			$(inputClassName).val(params[$(inputClassName).attr('name').toString()]);
		},

		autofillForm: function(params) {
			$.each(params, function(index, element) {
				this.setInputValueHelper(element, params);
			});
		},


		//show
		show: function() {
			$(".main_page .active").css("display", "none");
			$(".main_page .active").removeClass("active");
			$(this.el).addClass("active");
			$(".main_page .active").css("display", "block");
			$(".select").show();
			$(".wrap_form_and_tabs").show();
		},
		hide: function() {
			$(".main_page .hided").hide();
		}
	});









	//UpDownloadView
	var UpDownloadView = Backbone.View.extend({
		el: "#updownload",

		render: function() {


			this.hide();
			this.show();
		},
		show: function() {
			$(".main_page .active").css("display", "none");
			$(".main_page .active").removeClass("active");
			$(this.el).addClass("active");
			$(".main_page .active").css("display", "block");
		},
		hide: function() {
			$(".main_page .hided").hide();
			$(".select").hide();
		}
	});

	//Reports
	var ReportsView = Backbone.View.extend({
		el: "#reports",

		render: function() {

			this.hide();
			this.show();

		},
		show: function() {
			$(".main_page .active").css("display", "none");
			$(".main_page .active").removeClass("active");
			$(this.el).addClass("active");
			$(".main_page .active").css("display", "block");
		},
		hide: function() {
			$(".main_page .hided").hide();
			$(".select").hide();
		}
	});

	//Maintenance
	var MaintenanceView = Backbone.View.extend({
		el: "#maintenance",

		render: function() {


			this.hide();
			this.show();
		},
		show: function () {
			$(".main_page .active").css("display","none");
			$(".main_page .active").removeClass("active");
			$(this.el).addClass("active");
			$(".main_page .active").css("display", "block");
		},
		hide: function() {
			$(".main_page .hided").hide();
			$(".select").hide();
		}
	});


	app.maintainView = new MaintainView();
	app.updownloadView = new UpDownloadView();
	app.reportsView = new ReportsView();
	app.maintenanceView = new MaintenanceView();
	app.maintainTypeView = new MaintainTypeView();


})(jQuery);