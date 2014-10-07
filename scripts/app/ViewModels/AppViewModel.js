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
		{ name: "Maintenance", link: "#maintenance" }
	]);


	self.dataArray = ko.observableArray(["Choose type"]);
	app.getSourceType().done(function(data) {
		for (var key in data.response.sources) {
			self.dataArray.push(data.response.sources[key]);
		}
	});

	//Form controls arrays
	self.inputsArray = ko.observableArray([]);
	self.selectsArray = ko.observableArray([]);


	self.fillControlsArrays = function(data) {

		self.inputsArray().length = 0;
		self.selectsArray().length = 0;
		var temp = data.response.definitions;
		for (var key in temp) {
			if (temp[key].inputFieldType == "INPUT") {
				self.inputsArray.push(temp[key]);
			} else {
				self.selectsArray.push(temp[key]);
			}

		}
		console.info(self.inputsArray());
		console.info(self.selectsArray());
	};


//Discriptive tabs
	self.formTabsArray = ko.observableArray([
		{ name: "Customer", link: "#fragment-customer" },
		{ name: "Order", link: "#fragment-order" },
		{ name: "Line", link: "#fragment-line" },
		{ name: "Device", link: "#fragment-device" }
	]);

	self.formTabsArrayContent = ko.observableArray([]);


	self.fillTabsContent = function (data) {

		var temp = data.response.tiers;
		for (var key in temp) {
			console.log(temp);
		}
	}


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