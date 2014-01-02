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
      $route: {current: {gender: 'M'}},
      $routeParams: {klass: 1}
    });
  }));

  it('should set gender and klass to the scope', function () {
    expect(scope.gender).toBe('M');
    expect(scope.klass).toBe(1);
  });

});
