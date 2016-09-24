(function  () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

  //list from input
  $scope.lunchList = "";
  //html output
  $scope.response = "";

  //function takes a string and splits on commas
  //returns counts of properties not empty or a comma
  $scope.splitString = function(stringIn) {

    var splitCount = stringIn.split(',')
    var length = splitCount.length;
    var count = 0;
    //splitCount.splice(0 , length);

    for (var i =0; i < length; i++) {

      //check if empty or a comma and count items
      if (splitCount[i] != "" && splitCount[i] != "," ) {
      count ++

      }

    }
    return count;
  };

  //function takes a string and returns response based on item count
  $scope.result = function (myList) {

    //send string to item count function
    var count = $scope.splitString($scope.lunchList)

    if (count > 0 && count <= 3){
         $scope.response = "Enjoy!";

    }else if (count > 3) {
         $scope.response = "Too Much!";

    }else {

        $scope.response =  "Please enter data first"

    }

  };

});

})();
