var app = app || {};

function GetSourcesViewModel() {
	var self = this;
	self.dataArray = ko.observableArray(["Choose type"]);
		app.getSourceType().done(function (data) {
			for (var key in data.response.sources) {
				self.dataArray.push(data.response.sources[key]);
			}
		});

		self.showMaintain = ko.observable(true);
		self.showUpDownload = ko.observable(false);
		self.showReports = ko.observable(false);
		self.showMaintenance = ko.observable(false);


};

app.viewModel = new GetSourcesViewModel();

ko.applyBindings(app.viewModel);