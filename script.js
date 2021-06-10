var myApp = angular.module('GoodLookingCal', []);

 myApp.controller('calculatorCtrl', function($scope) {
   
   

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
   $scope.op = '+';
   $scope.calc = calc;

 });