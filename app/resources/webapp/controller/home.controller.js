sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("app.app.controller.home", {
		onClick: function () {
			var routepara = sap.ui.core.UIComponent.getRouterFor(this);
			routepara.navTo("RouteView2");
		}
	});
});