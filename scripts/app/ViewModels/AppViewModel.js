﻿var app = app || {};

var AppViewModel= function() {
	var self = this;

	ko.bindingHandlers.foreachprop = {
		transformObject: function (obj) {
			var properties = [];
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					properties.push({ key: key, value: obj[key] });
				}
			}
			return properties;
		},
		init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
			var value = ko.utils.unwrapObservable(valueAccessor()),
				properties = ko.bindingHandlers.foreachprop.transformObject(value);
			ko.applyBindingsToNode(element, { foreach: properties }, bindingContext);
			return { controlsDescendantBindings: true };
		}
	};


	self.showMaintain = ko.observable(false);
	self.showUpdownload = ko.observable(false);
	self.showReports = ko.observable(false);
	self.showMaintenance = ko.observable(false);

	self.pageTabsArray = ko.observableArray([
		{ name: "Maintain commissions", link: "#maintain", active: true },
		{ name: "Upload download", link: "#updownload", active: true },
		{ name: "Reports", link: "#reports", active: true },
		{ name: "Maintenance", link: "#maintenance", active: true }
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

	//Bind select
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

		self.inputsArray([]);
		self.selectsArray([]);


		var temp = data.response.definitions;
		for (var key in temp) {
			if (temp[key].inputFieldType == "INPUT") {

				self.inputsArray.push(temp[key]);

			} else if (temp[key].inputFieldType == "SELECT") {
				self.selectsArray.push(temp[key]);
			}

		}
		console.info(self.inputsArray());
		console.info(self.selectsArray());
		console.info(self.inputsArray().length);
		console.info(self.selectsArray().length);
	};


	//Discriptive tabs
	self.formTabsArray = ko.observableArray([
		{ name: "Customer", link: "#fragment-customer",tabContent: ko.observableArray([])},
		{ name: "Order", link: "#fragment-order",tabContent: ko.observableArray([])},
		{ name: "Line", link: "#fragment-line", tabContent: ko.observableArray([])},
		{ name: "Device", link: "#fragment-device", tabContent: ko.observableArray([])}
	]);

	//Common arrays
	self.validDataForForm = ko.observableArray([]);
	self.formTabsArrayContent = ko.observableArray([]);



	//Bind tabs content
	self.fillTabsContent = function (data) {

		var len = self.formTabsArray().length;
		self.validDataForForm([]);
		self.formTabsArrayContent([]);
		for (var i = 0; i < len; i++) {
			self.formTabsArray()[i].tabContent([]);
		}
		var temp = data.response.tiers;


		//console.log(len);



		for (var key in temp) {


			self.validDataForForm.push(temp[key]);

			var tempMass = [];

			for (var prop in temp[key].displayDetails) {

				for (var i = 0; i < len; i++) {
					self.formTabsArray()[i].tabContent.push([prop, temp[key].displayDetails[prop]]);
				}

			}



			//for (var i = 0; i < len; i++) {
			//	tabContent.push(tempMass[i]);
			//	//for (var t in self.formTabsArray[i]) {

			//	//	console.log(tempMass[i]);
			//	//}
			//}


			self.formTabsArrayContent.push(tempMass);

		}
		console.log(self.formTabsArray());
		self.maintainType.showTabs(true);
		self.maintainType.showAccordion(true);
	}












	self.maintainType = {
		showForm: ko.observable(false),
		showTabs: ko.observable(false),
		showAccordion: ko.observable(false)
	}

	self.tableContentArray = ko.observableArray([]);


	self.fillTableContentArray = function(tableData) {


		var tempTableContent = tableData.response.results[0].tiers[0].allocations;
		console.info(tempTableContent);

	};


	self.selectTableRows = ko.pureComputed({
		read: function() {

		},
		write: function() {

		},
		owner: this
	});


};

app.viewModel = new AppViewModel();
ko.applyBindings(app.viewModel);