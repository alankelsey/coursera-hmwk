(function () {
'use strict';

angular.module('shoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    //populate to buy list
    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    //buyitems - moves items from to buy list to bought list
    toBuy.buyItems = function(index, name, quantity){
    ShoppingListCheckOffService.buyItems(index, name, quantity);

    }
  }

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var bought = this;

    //poplulate bought list
    bought.items = ShoppingListCheckOffService.getBoughtItems();

  }

//Begin service
function ShoppingListCheckOffService() {

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
}

})();
