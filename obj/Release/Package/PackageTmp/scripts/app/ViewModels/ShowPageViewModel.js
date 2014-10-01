var app = app || {};
function ShowPageViewModel() {

		this.showMaintain = ko.observable();
		this.showUpDownload = ko.observable();
		this.showReports = ko.observable();
		this.showMaintenance = ko.observable();
	}

	//ko.applyBindings(new ShowPageViewModel());