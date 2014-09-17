var app = app || {};


(function(app){
	app.callView = function(page,params) {
		if (params) {
			//if params !=null
			switch (page) {
				case 'All sources':
					app.validateTier().done(function (validdata) {
						console.log(validdata);
					});
					app.getSourceType().done(function (data) {
						app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
						console.log(data);
					});
					break;
				case 'Mobile':
					app.validateTierMobile().done(function (validdata) {
						console.log(validdata);
					});
					app.getSourceType().done(function (data) {
						app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
						console.log(data);
					});
					break;
				case 'SLAM':
					app.validateTierSlam().done(function (validdata) {
						console.log(validdata);
					});
					app.getSourceType().done(function (data) {
						app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
						console.log(data);
					});
					break;
				default:
					console.log("Error");
			}

		} else {
			switch (page) {
				//if params null
				case 'All sources':
					app.retrieveTierDetails().done(function (validdata) {
						console.log(validdata);
					});
					app.getSourceType().done(function (data) {
						console.log(data);
						app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
					});
					break;
				case 'Mobile':
					app.retrieveTierDetailsMobile().done(function (validdata) {
						console.log(validdata);
					});
					app.getSourceType().done(function (data) {
						app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
						console.log(data);
					});
					break;
				case 'SLAM':
					app.retrieveTierDetailsSlam().done(function (validdata) {
						console.log(validdata);
					});
					app.getSourceType().done(function (data) {
						app.maintaintype && app.maintaintype.renderWithParams(page, params, data);
						console.log(data);
					});
					break;
				default:
					console.log("Error");
			}
		}
	}

})(app);