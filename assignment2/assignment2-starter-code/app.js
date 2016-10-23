(function () {
'use strict';

angular.module('shoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.name = "";
  toBuy.quantity = "";
  // ShoppingListCheckOffService.addItem("apple", 2);
  // ShoppingListCheckOffService.addItem("pear", 10);

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  try{
    toBuy.buyItems = function(index, name, quantity){
    ShoppingListCheckOffService.buyItems(index, name, quantity);
    //console.log(index);
    }
  }catch(error){
    toBuy.errorMessage = error.message;

  }
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


    bought.items = ShoppingListCheckOffService.getBoughtItems();
    //console.log(bought.items);

  // console.log(bought.items);
  // console.log("tt");

  // bought.items = ShoppingListCheckOffService.getItems();
  // console.log(bought.items)

  // bought.addItem = function () {
  //   ShoppingListService.addItem(bought.itemName, bought.itemQuantity);
  // }
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsBought = [{}];
  // List of shopping items
  var itemsToBuy = [{
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
    itemsBought.push(item);
  };

  service.removeItem = function (itemIdex) {
    //console.log(itemIdex);
    //console.log(itemsToBuy);
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    // console.log(itemsToBuy.length);

    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    //console.log(itemsBought);
    console.log(itemsBought.length);

    return itemsBought;
  };

  service.buyItems = function (index, name, quantity) {
    //console.log(index);
    service.removeItem(index);
    service.addItem(name, quantity);
    //service.getBoughtItems();

  };
}

})();
