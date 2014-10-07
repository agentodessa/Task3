var app = app || {};

(function(app){
	app.retrieveDataFromServer = function (page, params) {

		if (params) {
			app.getSourceType().done(function (data) {
				switch (page) {
					case 'All sources':
						app.retrieveAllocationsByTier().done(function (accordionData) {
							console.log(accordionData);
						});
						app.retrieveTierDetails().done(function (validdata) {
							console.log(validdata);
						});
						app.validateTier().done(function (validdata) {
							console.log(data);
							console.log(validdata);
							app.viewModel.fillTabsContent(validdata);
							//app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);
						});

						break;
					case 'Mobile':
						app.retrieveAllocationsByTier().done(function (accordionData) {
							console.log(accordionData);
						});
						app.retrieveTierDetails().done(function (validdata) {
							console.log(validdata);
						});
						app.validateTierMobile().done(function (validdata) {
							console.log(data);
							console.log(validdata);
							app.viewModel.fillTabsContent(validdata);
							//app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);

						});
						break;
					case 'SLAM':
						app.retrieveAllocationsByTier().done(function (accordionData) {
							console.log(accordionData);
						});
						app.retrieveTierDetails().done(function (validdata) {
							console.log(validdata);
						});
						app.validateTierSlam().done(function (validdata) {
							console.log(data);
							console.log(validdata);

							app.viewModel.fillTabsContent(validdata);
							//app.maintainTypeView && app.maintainTypeView.render(page, params, data, validdata);

						});
						break;
					default:
						console.log("Error");
				}
			});
			

		} else {
			app.getSourceType().done(function (data) {
				console.log(data);
				switch (page) {
					case 'All sources':
						app.retrieveTierDetails().done(function (retrievedData) {

							
							app.viewModel.fillControlsArrays(retrievedData);
						});
						app.maintainTypeView && app.maintainTypeView.renderWithoutParams(page, params, data);

						break;

					case 'Mobile':
						app.retrieveTierDetailsMobile().done(function (retrievedData) {

							
							app.viewModel.fillControlsArrays(retrievedData);
						});
						app.maintainTypeView && app.maintainTypeView.renderWithoutParams(page, params, data);

						break;
					case 'SLAM':
						app.retrieveTierDetailsSlam().done(function (retrievedData) {

							
							app.viewModel.fillControlsArrays(retrievedData);
						});
						app.maintainTypeView && app.maintainTypeView.renderWithoutParams(page, params, data);

						break;
					default:
						console.log("Error");
				}
			});


		}
	}

})(app);