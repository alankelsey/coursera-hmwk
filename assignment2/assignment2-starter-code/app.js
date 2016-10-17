(function () {
'use strict';

angular.module('shoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  // ShoppingListCheckOffService.addItem("apple", 2);
  // ShoppingListCheckOffService.addItem("pear", 10);
  toBuy.items = ShoppingListCheckOffService.getItems();

  //   showList.removeItem = function (itemIndex) {
  //   ShoppingListService.removeItem(itemIndex);
  // };

  // toBuy.addItem = function () {
  //   ShoppingListService.addItem(toBuy.itemName, toBuy.itemQuantity);
  // }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;


  // ShoppingListService.addItem(apple, 2);
  // bought.items = ShoppingListCheckOffService.getItems();
  // console.log(bought.items)

  // bought.addItem = function () {
  //   ShoppingListService.addItem(bought.itemName, bought.itemQuantity);
  // }
}

function ShoppingListCheckOffService() {
  var service = this;
  console.log("test");


var shoppingList1 = [
  // {
  //   name: "Milk",
  //   quantity: "2"
  // },
  // {
  //   name: "Donuts",
  //   quantity: "200"
  // },
  // {
  //   name: "Cookies",
  //   quantity: "300"
  // },
  // {
  //   name: "Chocolate",
  //   quantity: "5"
  // }
];
var shoppingList2 = [

];
  // List of shopping items
  var items = [{
                name:"apple",
                quantity:"1"
              },
              {
                name:"pear",
                quantity:"10"
              },
              {
                name:"pickle",
                quantity:"20"
              },
              {
                name:"carrot",
                quantity:"8"
              },
              {
                name:"orange",
                quantity:"12"
              }
            ];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
}

})();
