QUnit.module("Group B");
QUnit.test("Data Service", function (assert) {
	assert.ok(app !== undefined, "Passed! app !== undefined");
	assert.ok(app !== null, "Passed!app !== null ");

	var sourceType = app.getSourceType();
	assert.ok(sourceType !== {}, "Passed! Source types not an empty object");
	assert.ok(sourceType.response !== null, "Passed! Source types not a null");
});