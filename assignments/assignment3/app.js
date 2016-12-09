(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
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
      //list.item = MenuSearchService.getMenuCategories();
      //console.log(list.item);
      //var promise = MenuSearchService.getMenuCategories();

      // promise.then(function (response) {
      //   list.item = response.data;
      // })
      // .catch(function (error) {
      //   console.log("Something went terribly wrong.");
      // });
    // HANDLE SEARCH SUBMIT
    list.shortName = "";
    var shortName = list.shortName;
    console.log(shortName);
    list.logMenuItems = function (shortName) {
      var promise = MenuSearchService.getMatchedMenuItems(shortName);
      promise.then(function (response) {
        //console.log(response.data);
        //list.item = response.data;
        list.item = response;
        //console.log(list.item);
      })
      .catch(function (error) {
        console.log(error);
      })
    };
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
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var num = 2;
  //returns  bought list
  service.getNum = function () {
    return num;
  };

  service.getMatchedMenuItems = function (searchTerm){
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function successCallback(response){
      console.log("found " + searchTerm);
    var items = response.data;

    for(var i = 0, len = items.length; i  < len; i++){
      //console.log(items[i].special_instructions);

      if( (items[i].special_instructions).includes(searchTerm) ){
        console.log(items[i].special_instructions);
      }

    }
      //console.log("response");

    }, function errorCallback(response){

    });

     //console.log(items);
     return response;

   };

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
