// @module TestVendor.TestExtension.WithRouterModule
define('TestVendor.TestExtension.WithRouterModule.View'
,	[
		'testvendor_testextension_withroutermodule.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		testvendor_testextension_withroutermodule_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class TestVendor.TestExtension.WithRouterModule.View @extends Backbone.View
	return Backbone.View.extend({

		template: testvendor_testextension_withroutermodule_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/WithRouterModule.Service.ss'));

			// jQuery.get(service_url)
			// .then((result) => {

			// 	this.message = result;
			// 	this.render();
			// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {
			
		}

		//@method getContext @return TestVendor.TestExtension.WithRouterModule.View.Context
	,	getContext: function getContext()
		{
			//@class TestVendor.TestExtension.WithRouterModule.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});