'use strict';

describe('Controller: TournamentCtrl', function () {

  // load the controller's module
  beforeEach(module('ratingsApp'));

  var TournamentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TournamentCtrl = $controller('TournamentCtrl', {
      $scope: scope
    });
  }));

});
