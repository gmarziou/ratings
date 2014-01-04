'use strict';

angular.module('RatingsApp')
.controller('MainCtrl', function ($scope, tournamentSrv) {
    $scope.tournaments = tournamentSrv.getTournaments(1401);
  });
