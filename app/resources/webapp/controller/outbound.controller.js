sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("app.app.controller.outbound", {
		onInit: function () {},
		onSearch: function (event) {
			var searchTerm = this.getView().byId('searchField').getValue();
			var that = this;
			$.get("/services/outbound.xsjs?searchTerm=" + searchTerm,
				function (results) {
					var data = results;
					if (data.length > 0) {
						var carousel = that.getView().byId("carousel");
						carousel.removeAllPages();
						for (let i = 0; i < data.length; i++) {
							carousel.addPage(new sap.m.Page({
								title: "Created by :" +
									(data[i].creator ? data[i].creator : "Not available"),
								content: new sap.m.Image({
									src: data[i].image.full,
									alt: data[i].image.alt,
									height: "400px",
									width: "500px"
								})
							}));
						}
					} else {
						var carousel = that.getView().byId("carousel");
						carousel.removeAllPages();
					}
				}).fail(function (data) {});
		},
		onNavBack: function () {
			history.go(-1);
		}
	});
});