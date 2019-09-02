//MyNewModule.View.js
define(
   'WithRouterModule.View'
,   [
      'my_new_module.tpl'
   ,   'Backbone'
   ,   'jQuery'
   ,   'Utils'
   ]
,   function (
      MyNewModuleTemplate
   ,   Backbone
   ,   jQuery
   ,   Utils
   )
{
   'use strict';

   //@class Address.List.View List profile's addresses @extend Backbone.View
   return Backbone.View.extend({

      template: MyNewModuleTemplate

   ,   events: {
         'click [data-action="test"]': 'testAction'
      ,  'click [data-action="test-add-cart"]': 'testAddCart'
      }

   ,   testAction: function ()
      {
         alert("This is a test action")
      }

   ,  testAddCart: function ()
      {
         // alert("This is a test add cart")
         // var plp = SC.Application('Shopping').getComponent('PLP');
         //WORKING
         SC.Application('Shopping').getComponent('Cart').addLine({
               line: {
                  quantity: 1,
                  item: {
                     internalid: 8066
                  }
               }
         }).then(function()
         {alert(Utils.translate('Item added.'))});

      }


   ,   getContext: function ()
      {
         return {
            //@property {String} myNewModuleContextVar
            myNewModuleContextVar: 'myVariable from WithRouterModule View'
         };
      }
   });
});

console.log('WithRouterModule.View');