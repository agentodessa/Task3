var app = app || {};

var AppViewModel= function() {
	console.info("Call Knockout");
	var self = this;
	self.showMaintain = ko.observable(false);
	self.showUpdownload = ko.observable(false);
	self.showReports = ko.observable(false);
	self.showMaintenance = ko.observable(false);


	self.dataArray = ko.observableArray(["Choose type"]);
	app.getSourceType().done(function(data) {
		for (var key in data.response.sources) {
			self.dataArray.push(data.response.sources[key]);
		}
	});
	self.showPage= function(navigation) {

	}

	self.maintainType = {
		showForm: ko.observable(false),
		showTabs: ko.observable(false),
		showAccordion: ko.observable(false)
}

};

app.viewModel = new AppViewModel();
ko.applyBindings(app.viewModel);