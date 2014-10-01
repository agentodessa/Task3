QUnit.module("Group A");
QUnit.test("Common Module", function (assert) {
	assert.ok(app.retrieveDataFromServer !== undefined, "Passed! app.retrieveDataFromServer !== undefined");
	assert.ok(app.retrieveDataFromServer !== null, "Passed! app.retrieveDataFromServer  !== null");
});