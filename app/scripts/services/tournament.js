'use strict';

angular.module('RatingsApp')
.service('tournamentSrv', function() {
    var tournaments = [
        {"id": 315, "logo_url": "http://www.ipttc.org/results/international/2013/egypt/details/logo1.gif", "name": "Egypt Open 2013", "city": "Sharm el Sheikh", "country": "EGYPT", "begin_date": "2013-12-17", "end_date": "2013-12-23", "players_count": 30},
        {"id": 314, "logo_url": "http://www.ipttc.org/results/international/2013/africa/details/logo1.gif", "name": "African Championships 2013", "city": "Sharm el Sheikh", "country": "EGYPT", "begin_date": "2013-12-14", "end_date": "2013-12-20", "players_count": 31},
        {"id": 313, "logo_url": "http://www.ipttc.org/results/international/2013/americas/details/logo1.gif", "name": "Para Panamerican Championships 2013", "city": "San José", "country": "COSTA RICA", "begin_date": "2013-12-09", "end_date": "2013-12-1", "players_count": 109},
        {"id": 312, "logo_url": "http://www.ipttc.org/results/international/2013/san_diego/details/logo1.gif", "name": "Mike Dempsey Memorial Table Tennis Championships 2013", "city": "San Diego", "country": "USA", "begin_date": "2013-12-05", "end_date": "2013-12-08", "players_count": 137}
      ];
    /*
    * Returns an array of tournaments that are included in the rating period passed in argument.
    */
    this.getTournaments = function(period){
      return tournaments;
    };

    /*
    * Returns a tournament from its id.
    */
    this.getTournament = function(id){
      for (var i=0; i<tournaments.length; i++) {
        if (id === tournaments[i].id) { return tournaments[i]; }
      }
      return null;
    };
  });
