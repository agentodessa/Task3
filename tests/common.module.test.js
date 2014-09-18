QUnit.module("Group A");
QUnit.test("Common Module", function (assert) {
	assert.ok(app.callView !== undefined, "Passed! app.appRouter  !== undefined");

	assert.ok(app.callView !== null, "Passed! app.appRouter  !== null");
});