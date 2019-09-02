//MyNewModule.Router.js
console.log('Start of Router');

define('WithRouterModule.Router'
,   [   
         'WithRouterModule.View'
      ,   'Backbone'
   ]
,   function (
         MyNewModuleView
      ,   Backbone
   )
{
   'use strict';

   //@class Address.Router @extend Backbone.Router
   return Backbone.Router.extend({

      routes: {
         'my-new-module': 'MyNewModuleRouter'
      }

   ,   initialize: function (application)
      {
         this.application = application;
      }

      // list myNewRouter output
    ,   MyNewModuleRouter: function (application)
      {

         console.log('my-new-module Router ttttt');

         var plp = SC.Application('Shopping').getComponent('PLP'); // working

         
      //   var plp = application.getComponent('PLP');
      //   console.log(plp);        

         // if(plp)
         //{
            
            

            // plp.addChildViews();
   
            // new ExtensionModel({plp: plp});
         //}

         var view = new MyNewModuleView({
            application: this.application
         })

         view.showContent();

        }
   });
});

console.log('End of Router');