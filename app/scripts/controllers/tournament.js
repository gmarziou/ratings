'use strict';

angular.module('RatingsApp')
  .controller('TournamentCtrl', function ($scope, $routeParams, tournamentSrv) {
    var tournamentId = parseInt($routeParams.tournamentId);
    $scope.tournament = tournamentSrv.getTournament(tournamentId);
  });
