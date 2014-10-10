﻿var app = app || {};

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
	self.showTabPage = function (navigation) {
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

		self.inputsArray().length = 0;
		self.selectsArray().length = 0;


		var temp = data.response.definitions;
		for (var key in temp) {
			if (temp[key].inputFieldType == "INPUT") {

				self.inputsArray.push(temp[key]);

			} else if(temp[key].inputFieldType == "SELECT"){
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
		{ name: "Customer", link: "#fragment-customer" },
		{ name: "Order", link: "#fragment-order" },
		{ name: "Line", link: "#fragment-line" },
		{ name: "Device", link: "#fragment-device" }
	]);
	//Common arrays
	self.validDataForForm = ko.observableArray([]);
	self.formTabsArrayContent = ko.observableArray([]);

	//Bind tabs content
	self.fillTabsContent = function (data) {
		self.validDataForForm().length = 0;
		self.formTabsArrayContent().length = 0;


		var temp = data.response.tiers;
		for (var key in temp) {

			self.validDataForForm.push(temp[key]);
			var tempMass = [];

			for (var prop in temp[key].displayDetails) {

				tempMass.push([prop, temp[key].displayDetails[prop]]);
			}
			self.formTabsArrayContent.push(tempMass);

		}
		console.log(self.formTabsArrayContent());
		self.maintainType.showTabs(true);
		self.maintainType.showAccordion(true);
	}


	self.maintainType = {
		showForm: ko.observable(false),
		showTabs: ko.observable(false),
		showAccordion: ko.observable(false)
	}

	self.tableContentArray = ko.observableArray([]);

	self.fillTableContentAray = function(tableData) {


		var tempTableContent = tableData.response.results[0].tiers[0].allocations;
		console.info(tempTableContent);

	};




	self.selectTableRows = ko.pureComputed({
		read:function() {
			
		},
		write:function() {
			
		},
		owner:this
	});


};

app.viewModel = new AppViewModel();
ko.applyBindings(app.viewModel);