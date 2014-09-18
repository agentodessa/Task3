QUnit.module("Group C");
QUnit.test("Route", function (assert) {
	assert.ok(app.appRouter !== undefined, "Passed! app.appRouter  !== undefined");
	assert.ok(app.appRouter.routes !== undefined, "Passed! app.appRouter.routes  !== undefined");
	assert.ok(app.appRouter.maintain !== undefined, "Passed! app.appRouter.maintain  !== undefined");
	assert.ok(app.appRouter.updownload !== undefined, "Passed! app.appRouter.updownload  !== undefined");
	assert.ok(app.appRouter.reports !== undefined, "Passed! app.appRouter.reports  !== undefined");
	assert.ok(app.appRouter.maintaintype !== undefined, "Passed! app.appRouter.maintaintype  !== undefined");
	assert.ok(app.appRouter.maintenance !== undefined, "Passed! app.appRouter.maintenance  !== undefined");



	assert.ok(app.appRouter !== null, "Passed! app.appRouter  !== null");
	assert.ok(app.appRouter.routes !== null, "Passed! app.appRouter.routes  !== null");
	assert.ok(app.appRouter.maintain !== null, "Passed! app.appRouter.maintain  !== null");
	assert.ok(app.appRouter.updownload !== null, "Passed! app.appRouter.updownload  !== null");
	assert.ok(app.appRouter.reports !== null, "Passed! app.appRouter.reports  !== null");
	assert.ok(app.appRouter.maintaintype !== null, "Passed! app.appRouter.maintaintype  !== null");
	assert.ok(app.appRouter.maintenance !== null, "Passed! app.appRouter.maintenance  !== null");
});