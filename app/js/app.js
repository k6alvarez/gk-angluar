var myApp = angular.module('myApp' ,['ngMessages', 'ngResource', 'ngRoute']);

myApp.config(function ($routeProvider){
  //lets us specify routes based on the hash in the url
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController'
    })
    .when('/boarding/',{
      templateUrl: 'pages/boarding/index.html',
      controller: 'secondController'
    })
    .when('/training/',{
      templateUrl: 'pages/training/index.html',
      controller: 'secondController'
    })
    .when('/contact-us/',{
      templateUrl: 'pages/contact-us.html',
      controller: 'secondController'
    })
    .when('/policies/',{
      templateUrl: 'pages/policies/index.html',
      controller: 'secondController'
    })
    .when('/my-account/',{
      templateUrl: 'pages/accounts/index.html',
      controller: 'secondController'
    })
    .when('/search/',{
      templateUrl: 'pages/search.html',
      controller: 'secondController'
    })
    .when('/second/:num',{
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
})

//service - singleton object that will contain properties or functions
//use services to share content across pages
myApp.service('nameService', function() {
  var self = this;
  this.name = 'Jon Doe';

  this.nameLength = function() {
    return self.name.length;
  }
});

myApp.service('socialMediaService', function() {
  var self = this;
  this.facebook = 'http://www.facebook.com/pages/Gillette-Kennels/185259021530558';
  this.twitter = 'https://twitter.com/#!/KirkGillette1';
  this.youtube = 'http://www.youtube.com/user/gillettekennels';

  this.nameLength = function() {
    return self.facebook.length;
  }
});

myApp.controller('mainController', ['$scope', '$location', '$log', '$filter', '$resource', '$timeout', '$http', 'nameService', function($scope, $location, $log, $filter, $resource, $timeout, $http, nameService){

  $scope.name = "mainController";
  $scope.name = nameService.name;

  $log.main = 'Property from main';
  $log.log($log);
  $log.log($scope);
  $log.log(nameService.name);
  $log.log(nameService.nameLength());
  // $log.info($location.path());

  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$filter', '$resource', '$timeout', '$http', '$routeParams', 'nameService', function($scope, $location, $log, $filter, $resource, $timeout, $http, $routeParams, nameService){

  $scope.name = "secondController";
  $scope.num = $routeParams.num || 'no number';
  $scope.name = nameService.name;

  $log.second = 'Property from second';
  $log.log($log);
  $log.log($scope);
  // $log.info($location.path());

  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

}]);
