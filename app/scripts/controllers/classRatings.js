'use strict';

angular.module('RatingsApp')
.controller('ClassRatingsCtrl', function ($scope, $route, $routeParams) {
  $scope.klass = $routeParams.klass;
  $scope.gender = $route.current.gender;
});
