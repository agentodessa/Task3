QUnit.module("Group D");
QUnit.test("Views", function (assert) {
	//maintain
	assert.ok(app.maintainView.render !== undefined, "Passed! app.maintainView.render !== undefined");
	assert.ok(app.maintainView.show !== undefined, "Passed! app.maintainView.show !== undefined");
	assert.ok(app.maintainView.hide !== undefined, "Passed! app.maintainView.hide !== undefined");

	assert.ok(app.maintainView.render !== null, "Passed! app.maintainView !== null");
	assert.ok(app.maintainView.el !== null, "Passed! app.maintainView.el !== null");
	assert.ok(app.maintainView.show !== null, "Passed! app.maintainView.show !== null");
	assert.ok(app.maintainView.hide !== null, "Passed! app.maintainView.hide !== null");

	//maintainTypeView
	assert.ok(app.maintainTypeView.render !== undefined, "Passed! app.maintainTypeView.render  !== undefined");
	assert.ok(app.maintainTypeView.show !== undefined, "Passed! app.maintainTypeView.show !== undefined");
	assert.ok(app.maintainTypeView.hide !== undefined, "Passed! app.maintainTypeView.hide !== undefined");
	assert.ok(app.maintainTypeView.renderForm !== undefined, "Passed! app.maintainTypeView.renderForm !== undefined");

	assert.ok(app.maintainTypeView.render !== null, "Passed! app.maintainTypeView.render  !== null");
	assert.ok(app.maintainTypeView.el !== null, "Passed! app.maintainTypeView.el !== null");
	assert.ok(app.maintainTypeView.show !== null, "Passed! app.maintainTypeView.show !== null");
	assert.ok(app.maintainTypeView.hide !== null, "Passed! app.maintainTypeView.hide !== null");
	assert.ok(app.maintainTypeView.renderForm !== null, "Passed! app.maintainTypeView.renderForm !== null");

	//updownloadView
	assert.ok(app.updownloadView.render !== undefined, "Passed! app.updownloadView.render  !== undefined");
	assert.ok(app.updownloadView.show !== undefined, "Passed! app.updownloadView.show !== undefined");
	assert.ok(app.updownloadView.hide !== undefined, "Passed! app.updownloadView.hide !== undefined");

	assert.ok(app.updownloadView.render !== null, "Passed! app.updownloadView.render  !== null");
	assert.ok(app.updownloadView.el !== null, "Passed! app.updownloadView.el !== null");
	assert.ok(app.updownloadView.show !== null, "Passed! app.updownloadView.show !== null");
	assert.ok(app.updownloadView.hide !== null, "Passed! app.updownloadView.hide !== null");
	//reportsView
	assert.ok(app.reportsView.render !== undefined, "Passed! app.reportsView.render  !== undefined");
	assert.ok(app.reportsView.show !== undefined, "Passed! app.reportsView.show !== undefined");
	assert.ok(app.reportsView.hide !== undefined, "Passed! app.reportsView.hide !== undefined");

	assert.ok(app.reportsView.render !== null, "Passed! app.reportsView.render  !== null");
	assert.ok(app.reportsView.el !== null, "Passed! app.reportsView.el !== null");
	assert.ok(app.reportsView.show !== null, "Passed! app.reportsView.show !== null");
	assert.ok(app.reportsView.hide !== null, "Passed! app.reportsView.hide !== null");

	//maintenanceView


	assert.ok(app.maintenanceView.render !== undefined, "Passed! app.maintenanceView.render  !== undefined");
	assert.ok(app.maintenanceView.show !== undefined, "Passed! app.maintenanceView.show !== undefined");
	assert.ok(app.maintenanceView.hide !== undefined, "Passed! app.maintenanceView.hide !== undefined");

	assert.ok(app.maintenanceView.render !== null, "Passed! appmaintenanceView.render  !== null");
	assert.ok(app.maintenanceView.el !== null, "Passed! app.maintenanceView.el !== null");
	assert.ok(app.maintenanceView.show !== null, "Passed! app.maintenanceView.show !== null");
	assert.ok(app.maintenanceView.hide !== null, "Passed! app.maintenanceView.hide !== null");

});