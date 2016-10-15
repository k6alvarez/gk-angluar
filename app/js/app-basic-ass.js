// var myApp = angular.module('myApp' ,['ngMessages', 'ngResource']);
//
// // myApp.controller('mainController', function($scope, $log, $filter, $resource){
// //   //new controller created
// //
// //   //scope service
// //   $scope.name = 'Juan Alvarez';
// //   $scope.occupation = 'Farmer';
// //
// //   //angular $log service
// //   $log.log("hola");
// //   $log.info("Some Information");
// //   $log.debug("Debug info for my code.");
// //   $log.warn("Ay pendejo, te doy un warning");
// //   $log.error("You fucked up big time man.");
// //
// //   //angular $resource module for interacting with RESTful services.
// //   $log.log($resource);
// //
// //
// //
// // });
//
// // always use this version of dependency injections so that minifiers don't
// // break your code. Angular will match the elements of the array with the
// // parameters of the function so that must be in the same order.
// myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', '$timeout', '$http', function($scope, $log, $filter, $resource, $timeout, $http){
//
//   //scope service
//   $scope.name = 'Juan Alvarez';
//   $scope.occupation = 'Farmer';
//
//   $timeout(function () {
//     $scope.name = 'Speedy Gonzalez';
//   }, 1500);
//
//   $scope.handle = '';//two way binds to input value for ng-model="handle"
//
//   $scope.lowercasehandle = function () {
//     return $filter('lowercase')($scope.handle)
//   }
//
//   $scope.characters = 5;
//
//   $scope.rules = [
//     { rulename: "rule 1", punish: "dead"},
//     { rulename: "rule 2", punish: "forgiven"},
//     { rulename: "rule 3", punish: "wealthy"}
//   ]
//
//   $scope.alertClick = function() {
//     alert('click');
//   }
//
//   // Native httpRequest
//   // var dataRequest = new XMLHttpRequest();//invented by microsoft way before its time, this object can go out and make requests on its own, without refreshing the page
//   // dataRequest.onreadystatechange = function() {
//   //   if (dataRequest.readyState == 4 && dataRequest.status == 200) {
//   //     $scope.data = JSON.parse(dataRequest.responseText);
//   //
//   //   }
//   // }
//   //
//   // dataRequest.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//   // dataRequest.send();
//
//   // Angular httpRequest
//   $http.get('https://jsonplaceholder.typicode.com/users')
//     .success(function(result){
//       $scope.data = result;
//     })
//     .error(function(data, status) {
//       console.log(data);
//     });
//
// }]);
