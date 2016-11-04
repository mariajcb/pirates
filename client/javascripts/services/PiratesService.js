app.factory(`PiratesService`, [`$http`, function ($http) {
  return {
    all: function() {
      return $http.get(`/api/pirates`)
    },
    create: function(newPirate) {
      console.log(`NEW PIRATE SERVICE`, newPirate);
      return $http.post(`/api/pirates`, newPirate)
    },
    one: function(id) {
      console.log(`GETTING ONE PIRATE`);
      return $http.get(`/api/pirates/${id}`)
    },
    putOne: function(editedPirate) {
      let id = editedPirate.id
      return $http.put(`/api/pirates/${id}`, editedPirate)
    },
    deleteOne: function(id) {
      return $http.delete(`/api/pirates/${id}`)
    }
  }
}])
