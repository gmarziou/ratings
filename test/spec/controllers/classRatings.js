'use strict';

describe('Controller: ClassRatingsCtrl', function () {

  // load the controller's module
  beforeEach(module('RatingsApp'));

  var ClassRatingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassRatingsCtrl = $controller('ClassRatingsCtrl', {
      $scope: scope,
      $routeParams: {class: 1}
    });
  }));

});
