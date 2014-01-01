'use strict';

angular.module('RatingsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
     .when('/men/class/:klass', {
        templateUrl: 'views/classRatings.html',
        controller: 'ClassRatingsCtrl',
        gender: 'M'
      })
     .when('/women/class/:klass', {
        templateUrl: 'views/classRatings.html',
        controller: 'ClassRatingsCtrl',
        gender: 'F'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
