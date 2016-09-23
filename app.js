(function  () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  
  $scope.lunchList = "";
  $scope.response = "";
  //$scope.typeOut =  typeof $scope.lunchList.split(',');

  $scope.splitString = function(stringIn) {

    var splitCount = stringIn.split(',')
    var length = splitCount.length;
    $scope.name = stringIn[i]
    //splitCount.splice(0 , length);

    for (var i =0; i < length; i++) {

      if (stringIn[i] == null ) {
        return  0;

      } else {
        return length;
      //  return stringIn;
      }

    }


  };

  $scope.result = function (myList) {

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
