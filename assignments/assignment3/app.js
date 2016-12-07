(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems);

//START DIRECTIVES
function FoundItems() {
  var ddo = {
    template : '{{nid.item}}'
  };
  return ddo;

}

// Start CONTROLLERS
NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    // list.item = {id:1};
      list.item = MenuSearchService.getNum();

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
//MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService() {
  var service = this;
  var num = 2;
  //returns  bought list
  service.getNum = function () {
    return num;
  }
//   function getMatchedMenuItems(searchTerm){
//
//     //$http SERVICE TO RETRIEVE A LIST OF ALL MENU items
//
//     // LOOP THROUGH LIST AND FIND MATCHES TO THE searchTerm
//
//     //RETURN LIST OF MATCHES WRAPPED IN A PROMISE WITH THEN
//     //return $http(...).then(function (result) {
//       //END POINT URL https://davids-restaurant.herokuapp.com/menu_items.json
//
//       // process result and only keep items that match
//       //var foundItems...
//
//       // return processed items
//       //return foundItems;
//     //});
//
//   }
//
//
//   // getMatchedMenuItems(searchTerm){
//   //   //Reaches out to server using $http
//   //   //then retrieves list of menu items
//   //   service.getMenuCategories = function () {
//   //     var response = $http({
//   //       method: "GET",
//   //       url: (ApiBasePath + "/categories.json")
//   //     });
//   //
//   //     return response;
//   //   };
//   //   //looop through and look for searchTerm
//   //
//   //   // return list of matches wrapped in a promise
//   // }
//
// /*
// // // // OLD SERVICE
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
// */
//
}


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
