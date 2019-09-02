
function service(request, response)
{
	'use strict';
	try 
	{
		require('VendorTwo.ExtensionTwo.ModuleTwo.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('VendorTwo.ExtensionTwo.ModuleTwo.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}