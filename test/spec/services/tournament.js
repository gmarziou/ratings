'use strict';

describe('Service: TournamentSrv', function () {

  // load the service's module
  beforeEach(module('RatingsApp'));

  // instantiate service
  var tournamentSrv;
  beforeEach(inject(function (_tournamentSrv_) {
    tournamentSrv = _tournamentSrv_;
  }));

  it('should do something', function () {
    expect(!!tournamentSrv).toBe(true);
  });

  it('should return 4 tournaments', function () {
    expect(tournamentSrv.getTournaments(1401).length).toBe(4);
  });

  it('should return one tournament if known', function () {
    var id = tournamentSrv.getTournaments(1401)[0].id;
    var tournament = tournamentSrv.getTournament(id);
    expect(tournament.id).toBe(id);
  });

  it('should return null if tournament is unknown', function () {
    var id = -1;
    var tournament = tournamentSrv.getTournament(id);
    expect(tournament).toBeNull();
  });

});
