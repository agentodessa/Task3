QUnit.module("Group E");
QUnit.asyncTest("Ajax test: one second later!", function(assert) {

	app.getSourceType().done(function(data) {
		assert.ok(data !== null, "Ajax getSourceType passed");
	});


	app.getSourceType().error(function(data) {
		assert.ok(data === null, "Ajax getSourceType failed");
	});


	app.retrieveTierDetails().done(function(data) {
		assert.ok(data !== null, "Ajax retrieveTierDetails passed");
	});

	app.retrieveTierDetails().error(function(data) {
		assert.ok(data === null, "Ajax retrieveTierDetails failed");
	});


	app.retrieveTierDetailsMobile().done(function(data) {
		assert.ok(data !== null, "Ajax retrieveTierDetailsMobile passed");
	});


	app.retrieveTierDetailsMobile().error(function(data) {
		assert.ok(data === null, "Ajax retrieveTierDetailsMobile failed");

	});


	app.retrieveTierDetailsSlam().done(function(data) {
		assert.ok(data !== null, "Ajax retrieveTierDetailsSlam passed");
	});


	app.retrieveTierDetailsSlam().error(function(data) {
		assert.ok(data === null, "Ajax retrieveTierDetailsSlam failed");

	});


	app.validateTierMobile().done(function(data) {
		assert.ok(data !== null, "Ajax validateTierMobile passed");
	});

	app.validateTierMobile().error(function(data) {
		assert.ok(data === null, "Ajax validateTierMobile failed");

	});


	app.validateTierSlam().done(function(data) {
		assert.ok(data !== null, "Ajax validateTierSlam passed");
	});


	app.validateTierSlam().error(function(data) {
		assert.ok(data === null, "Ajax validateTierSlam failed");
	});

	app.validateTier().done(function(data) {
		assert.ok(data !== null, "Ajax validateTier passed");
	});


	app.validateTier().error(function(data) {
		assert.ok(data === null, "Ajax validateTier failed");
	});




	app.retrieveAllocationsByTier().done(function (data) {
		assert.ok(data !== null, "Ajax retrieveAllocationsByTier passed");
	});

	app.retrieveAllocationsByTier().error(function (data) {
		assert.ok(data === null, "Ajax retrieveAllocationsByTier failed");
	});

	setTimeout(function() {
		QUnit.start();
	});
});