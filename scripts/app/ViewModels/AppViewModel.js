var app = app || {};

var AppViewModel= function() {
	var self = this;




	self.showMaintain = ko.observable(false);
	self.showUpdownload = ko.observable(false);
	self.showReports = ko.observable(false);
	self.showMaintenance = ko.observable(false);

	self.pageTabsArray = ko.observableArray([
	{ name: "Maintain commissions", link: "#maintain" },
	{ name: "Upload download", link: "#updownload" },
	{ name: "Reports", link: "#reports" },
	{ name: "Maintenance", link: "#maintenance" }]);



	self.dataArray = ko.observableArray(["Choose type"]);
	app.getSourceType().done(function(data) {
		for (var key in data.response.sources) {
			self.dataArray.push(data.response.sources[key]);
		}
	});

	self.formFieldsArray = ko.observableArray([{
		"tierLevel": "TIER_1",
		"type": "ALPHANUMERIC",
		"shortName": "Customer",
		"name": "CUSTOMER",
		"descriptiveName": "Customer Number",
		"hoverHelpInfo": "This is a customers account number.  Such as '1123676'.",
		"disabledUntilPreviousTierSet": false,
		"allowSearchSeriesGroup": false,
		"allowStartEndDate": true,
		"inputFieldType": "INPUT"
	},
	{
		"tierLevel": "TIER_2",
		"type": "ALPHANUMERIC",
		"shortName": "Order",
		"name": "ORDER_NUM",
		"descriptiveName": "Order Number",
		"hoverHelpInfo": "This is an order number.",
		"disabledUntilPreviousTierSet": false,
		"allowSearchSeriesGroup": false,
		"allowStartEndDate": false,
		"inputFieldType": "INPUT"
	},
	{
		"tierLevel": "TIER_3",
		"type": "NUMERIC",
		"shortName": "Line",
		"name": "ORDER_LINE_NUM",
		"descriptiveName": "Order Line Number",
		"hoverHelpInfo": "This is an order line number (1-999).",
		"disabledUntilPreviousTierSet": true,
		"allowSearchSeriesGroup": false,
		"allowStartEndDate": false,
		"inputFieldType": "INPUT"
	},
	{
		"tierLevel": "TIER_4",
		"type": "NUMERIC",
		"shortName": "Device",
		"name": "MOBILE_DEVICE_NUMBER",
		"descriptiveName": "Mobile Device Number",
		"hoverHelpInfo": "This is a mobile device number (1-999).",
		"disabledUntilPreviousTierSet": true,
		"allowSearchSeriesGroup": false,
		"allowStartEndDate": false,
		"inputFieldType": "INPUT"
	}

	]);





	self.showTabPage = function(navigation) {
		switch (navigation) {
			case 1:
				self.showMaintain(true);
				self.showUpdownload(false);
				self.showReports(false);
				self.showMaintenance(false);
				break;
			case 2:
				self.showMaintain(false);
				self.showUpdownload(true);
				self.showReports(false);
				self.showMaintenance(false);
				break;
			case 3:
				self.showMaintain(false);
				self.showUpdownload(false);
				self.showReports(true);
				self.showMaintenance(false);
				break;
			case 4:
				self.showMaintain(false);
				self.showUpdownload(false);
				self.showReports(false);
				self.showMaintenance(true);
				break;
		default:
		}
	}

	self.maintainType = {
		showForm: ko.observable(false),
		showTabs: ko.observable(false),
		showAccordion: ko.observable(false)
}

};

app.viewModel = new AppViewModel();
ko.applyBindings(app.viewModel);