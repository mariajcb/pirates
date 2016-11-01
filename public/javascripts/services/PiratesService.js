app.factory('PiratesService', ['http', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    }
  }
}])
