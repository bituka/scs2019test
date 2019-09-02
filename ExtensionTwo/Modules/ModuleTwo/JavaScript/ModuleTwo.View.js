// @module VendorTwo.ExtensionTwo.ModuleTwo
define('VendorTwo.ExtensionTwo.ModuleTwo.View'
,	[
		'vendortwo_extensiontwo_moduletwo.tpl'
	,	'Utils'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		vendortwo_extensiontwo_moduletwo_tpl
	,	Utils
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	// @class VendorTwo.ExtensionTwo.ModuleTwo.View @extends Backbone.View
	return Backbone.View.extend({

		template: vendortwo_extensiontwo_moduletwo_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service 
				(you'll need to deploy and activate the extension first)
			*/
			this.message = '';
			// var service_url = Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ModuleTwo.Service.ss'));

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

		//@method getContext @return VendorTwo.ExtensionTwo.ModuleTwo.View.Context
	,	getContext: function getContext()
		{
			//@class VendorTwo.ExtensionTwo.ModuleTwo.View.Context
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});