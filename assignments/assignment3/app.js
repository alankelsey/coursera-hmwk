(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

// START DIRECTIVES
function foundItems() {


  /*
  // OLD DIRECTIVE
  var ddo = {
    template: '{{ item.quantity }} of {{ item.name }}'
  };

  return ddo;
  */

}

// Start CONTROLLERS
NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    // HANDLE SEARCH SUBMIT

    // HANDLE LIST OF FOUND ITEM

    // CALL getMatchedMenuItems AND store the result in a property called found

    /*
    // // // OLD CONTROLLER
    var bought = this;

    //poplulate bought list
    bought.items = ShoppingListCheckOffService.getBoughtItems();
    */

  }


// HANDLE SEARCH SUBMIT

// HANDLE LIST OF FOUND ITEMS

//Begin OLD service
MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {

  function getMatchedMenuItems(searchTerm){
    var service = this;
    //$http SERVICE TO RETRIEVE A LIST OF ALL MENU items

    // LOOP THROUGH LIST AND FIND MATCHES TO THE searchTerm

    //RETURN LIST OF MATCHES WRAPPED IN A PROMISE WITH THEN
    return $http(...).then(function (result) {
      //END POINT URL https://davids-restaurant.herokuapp.com/menu_items.json

      // process result and only keep items that match
      var foundItems;

      // return processed items
      return foundItems;
    });

  } //end get matched items

/*
// // // OLD SERVICE
  var service = this;
   //to store bought items
  var itemsBought = [];
   //to store itmes to buy items
  var itemsToBuy = [{
                name:"apple",
                quantity:"1"
              },
              {
                name:"pear",
                quantity:"2"
              },
              {
                name:"pickle",
                quantity:"3"
              },
              {
                name:"carrot",
                quantity:"5"
              },
              {
                name:"orange",
                quantity:"8"
              }
            ];

//adds item to to buy list
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };

    itemsBought.push(item);
  };

  //removes item from to buy list
  service.removeItem = function (itemIndex) {

  itemsToBuy.splice(itemIndex, 1);
  };

  //returns to buy list
  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  //returns  bought list
  service.getBoughtItems = function () {
    return itemsBought;
  };

//handles bought items - removes from to buy and moves to bought
  service.buyItems = function (index, name, quantity) {
    service.removeItem(index);
    service.addItem(name, quantity);

  };
*/

}  //end service


/*
// // // DECLARE CONTROLLERS
// .controller('ToBuyController', ToBuyController)
// .controller('AlreadyBoughtController', AlreadyBoughtController)

// // // DECLARE SERVICE
// .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

// // // TOBUY CPONTROLLER
// ToBuyController.$inject = ['ShoppingListCheckOffService'];
//   function ToBuyController(ShoppingListCheckOffService) {
//     var toBuy = this;
//
//     //populate to buy list
//     toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
//
//     //buyitems - moves items from to buy list to bought list
//     toBuy.buyItems = function(index, name, quantity){
//     ShoppingListCheckOffService.buyItems(index, name, quantity);
//
//     }
//   }

// // // ALERADY BOUGHT controller
// AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
//   function AlreadyBoughtController(ShoppingListCheckOffService) {
//
//     var bought = this;
//
//     //poplulate bought list
//     bought.items = ShoppingListCheckOffService.getBoughtItems();
//
//   }

// // // BEGIN SERVICE
// //Begin service
// function ShoppingListCheckOffService() {
//
//   var service = this;
//    //to store bought items
//   var itemsBought = [];
//    //to store itmes to buy items
//   var itemsToBuy = [{
//                 name:"apple",
//                 quantity:"1"
//               },
//               {
//                 name:"pear",
//                 quantity:"2"
//               },
//               {
//                 name:"pickle",
//                 quantity:"3"
//               },
//               {
//                 name:"carrot",
//                 quantity:"5"
//               },
//               {
//                 name:"orange",
//                 quantity:"8"
//               }
//             ];
//
// //adds item to to buy list
//   service.addItem = function (itemName, quantity) {
//     var item = {
//       name: itemName,
//       quantity: quantity
//     };
//
//     itemsBought.push(item);
//   };
//
//   //removes item from to buy list
//   service.removeItem = function (itemIndex) {
//
//   itemsToBuy.splice(itemIndex, 1);
//   };
//
//   //returns to buy list
//   service.getItemsToBuy = function () {
//     return itemsToBuy;
//   };
//
//   //returns  bought list
//   service.getBoughtItems = function () {
//     return itemsBought;
//   };
//
// //handles bought items - removes from to buy and moves to bought
//   service.buyItems = function (index, name, quantity) {
//     service.removeItem(index);
//     service.addItem(name, quantity);
//
//   };
// }
*/

})();
