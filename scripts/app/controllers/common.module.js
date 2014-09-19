var app = app || {};

(function(app){
	app.retrieveDataFromServer = function (page, params) {


		var data;
		app.getSourceType().done(function (dat) {
			data=dat;
		});
		if (params) {
			//if params !=null
			switch (page) {
				case 'All sources':
					app.validateTier().done(function (validdata) {
						console.log(data);
						console.log(validdata);
						app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
					});

					break;
				case 'Mobile':
					app.validateTierMobile().done(function (validdata) {
						console.log(data);
						console.log(validdata);
						app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
					});
				
					break;
				case 'SLAM':
					app.validateTierSlam().done(function (validdata) {
						console.log(data);
						console.log(validdata);
						app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
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
						app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
					});

					break;
				case 'Mobile':
					app.retrieveTierDetailsMobile().done(function (validdata) {
						console.log(validdata);
						app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
					});

					break;
				case 'SLAM':
					app.retrieveTierDetailsSlam().done(function (validdata) {
						console.log(validdata);
						app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
					});

					break;
				default:
					console.log("Error");
			}

			console.log(12312313123);
		}
	}

})(app);