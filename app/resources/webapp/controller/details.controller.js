sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("app.app.controller.details", {
		onInit: function () {},
		onNavBack: function () {
			history.go(-1);
		}
	});
});