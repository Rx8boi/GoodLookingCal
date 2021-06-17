var app = angular.module('GoodLookingCal', []);

 app.controller('calculatorCtrl', function($scope) {
   
   

   function add(x, y) {
     return x + y;
   }

   function sub(x, y) {
     return x - y;
   }

   function div(x,y) {
     return x / y;
   }

   function multiply(x,y) {
     return x * y;
   }
  
   function modulus(x,y) {
     return x % y;
   }

   function calc(op, x, y) {
     return $scope.operators[op](parseInt(x), parseInt(y));
   }

   $scope.operators = {
     '+': add,
     '-': sub,
     '/': div,
     '*': multiply,
     '%': modulus,
     
   };
     $scope.numArr = [];
     $scope.firstValue = "";
     $scope.secondValue = "";
     $scope.currentOperator = "";
     var valueFlag = false;

   $scope.op = '+';
   $scope.calc = calc;


   function currentValueToShow(num) {
     assignValues(num);
   }

   function assignValues(num) {
     if (valueFlag) {
       $scope.secondValue += num;
     } else {
       $scope.firstValue += num;
     }
   }

   $scope.showNumber = currentValueToShow;

   function activateFlag() {
     valueFlag = true;
   }

   function setCurrentOperator(operator) {
     activateFlag();
     $scope.currentOperator= operator;
   }

   $scope.makeSecondValue = setCurrentOperator;
 });