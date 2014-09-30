var app = app || {};
(function(app) {
	var ShowPageViewModel = function () {
		this.showMaintain = ko.observable(false);
		this.showUpDownload = ko.observable(false);
		this.showReports = ko.observable(false);
		this.showMaintenance = ko.observable(false);
	}
	app.showPage = new ShowPageViewModel();

	ko.applyBindings(app.showPage);
})(app);


