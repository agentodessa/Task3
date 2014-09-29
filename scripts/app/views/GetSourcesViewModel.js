var app= app|| {}

function GetSourcesViewModel() {
	var self = this;
	self.dataArray = ko.observableArray(["Choose type"]);
	app.getSourceType().done(function(data) {
		for (var key in data.response.sources) {
			self.dataArray.push(data.response.sources[key]);
		}
	});

}

ko.applyBindings(new GetSourcesViewModel());