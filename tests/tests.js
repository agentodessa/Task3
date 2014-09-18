QUnit.test("Data Service", function (assert) {
	assert.ok(app !== undefined, "Passed! app !== undefined");
	assert.ok(app !== null, "Passed!app !== null ");

	var sourceType = app.getSourceType();
	assert.ok(sourceType !== {}, "Passed! Source types not an empty object");
	assert.ok(sourceType.response !== null, "Passed! Source types not a null");
});

QUnit.asyncTest("Ajax test: one second later!", function (assert) {

	setTimeout(function () {	
	app.getSourceType().done(function(data) {
		assert.ok(data !== null, "Ajax getSourceType passed");
	});
	}, 1000);

	setTimeout(function () {
		app.getSourceType().error(function (data) {
			assert.ok(data === null, "Ajax getSourceType failed");
			QUnit.start();
		});
	}, 1000);


	setTimeout(function () {
		app.retrieveTierDetails().done(function (data) {
			assert.ok(data !== null, "Ajax retrieveTierDetails passed");
		});
	}, 1000);

	setTimeout(function () {
		app.retrieveTierDetails().error(function (data) {
			assert.ok(data === null, "Ajax retrieveTierDetails failed");
			QUnit.start();
		});
	}, 1000);


	setTimeout(function () {
		app.retrieveTierDetailsMobile().done(function (data) {
			assert.ok(data !== null, "Ajax retrieveTierDetailsMobile passed");
		});
	}, 1000);

	setTimeout(function () {
		app.retrieveTierDetailsMobile().error(function (data) {
			assert.ok(data === null, "Ajax retrieveTierDetailsMobile failed");
			QUnit.start();
		});
	}, 1000);


	setTimeout(function () {
		app.retrieveTierDetailsSlam().done(function (data) {
			assert.ok(data !== null, "Ajax retrieveTierDetailsSlam passed");
		});
	}, 1000);

	setTimeout(function () {
		app.retrieveTierDetailsSlam().error(function (data) {
			assert.ok(data === null, "Ajax retrieveTierDetailsSlam failed");
			QUnit.start();
		});
	}, 1000);


	setTimeout(function () {
		app.validateTierMobile().done(function (data) {
			assert.ok(data !== null, "Ajax validateTierMobile passed");
		});
	}, 1000);

	setTimeout(function () {
		app.validateTierMobile().error(function (data) {
			assert.ok(data === null, "Ajax validateTierMobile failed");
			QUnit.start();
		});
	}, 1000);


	setTimeout(function () {
		app.validateTierSlam().done(function (data) {
			assert.ok(data !== null, "Ajax validateTierSlam passed");
		});
	}, 1000);

	setTimeout(function () {
		app.validateTierSlam().error(function (data) {
			assert.ok(data === null, "Ajax validateTierSlam failed");
			QUnit.start();
		});
	}, 1000);



	setTimeout(function () {
		app.validateTier().done(function (data) {
			assert.ok(data !== null, "Ajax validateTier passed");
		});
	}, 1000);

	setTimeout(function () {
		app.validateTier().error(function (data) {
			assert.ok(data === null, "Ajax validateTier failed");
			QUnit.start();
		});
	}, 1000);
});