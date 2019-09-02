//MyNewModule.js  -- http://testsuitecommerce.production.netsuitestaging.com/sca-dev-2019-1/shopping-local.ssp
// http://testsuitecommerce.production.netsuitestaging.com/sca-dev-2019-1/shopping-local.ssp#/my-new-module

define('TestVendor.TestExtension.WithRouterModule'
,   [
      'WithRouterModule.Router'
   ]
,   function (
      Router
   )
{
   'use strict';

   return   {
      mountToApp: function (container)
      {

		//var plp = container.getComponent('PLP');
                 
		//if(pdp)
		//{
  
		//  plp.addChildViews();
  
		  // new ExtensionModel({plp: plp});
		//}

         // Initializes the router
         return new Router(container);
      }
   };
});

console.log('Test WithRouterModule Entry');



/*
define(
	'TestVendor.TestExtension.WithRouterModule'
,   [
		'TestVendor.TestExtension.WithRouterModule.View'
	]
,   function (
		WithRouterModuleView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			
			var layout = container.getComponent('Layout');
			
			if(layout)
			{
				layout.addChildView('Header.Logo', function() { 
					return new WithRouterModuleView({ container: container });
				});
			}

		}
	};
});
*/