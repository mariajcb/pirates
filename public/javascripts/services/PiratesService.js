app.factory('PiratesService', ['$http', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates')
    },
    create: function(newPirate) {
      console.log(`NEW PIRATE SERVICE`, newPirate);
      return $http.post('/api/pirates', newPirate)
    }
  }
}])
