
function service(request, response)
{
	'use strict';
	try 
	{
		require('TestVendor.TestExtension.WithRouterModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('TestVendor.TestExtension.WithRouterModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}