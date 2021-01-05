sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"

], function (
	Controller,
	MessageToast,
	Fragment
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
		onShowHello: function () {
			// show a native JavaScript alert
			// alert("Hello World");

			MessageToast.show('heloo')
		},
		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog()
		}
		//onCloseDialog: function () {
		//	this.byId("helooDialog").close();
		//}

	});
});