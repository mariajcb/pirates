`use strict`

app.controller(`onePirateController`, [`$scope`, `PiratesService`, `$routeParams`, `$location`, function($scope, PiratesService, $routeParams, $location) {
  const id = $routeParams.id

  $scope.pirate = {}
  PiratesService.one(id)
    .then(function(onePirate) {
      $scope.pirate = onePirate.data
    })

  $scope.submitEditPirate = function(pirate) {
      const editedPirate = $scope.pirate
      PiratesService.putOne(editedPirate)
      .then(function() {
        $location.url('/')
      })
  }

    $scope.deletePirate = function(pirate) {
      console.log(`delete controller is firing`);
      const id = pirate.id
      PiratesService.deleteOne(id)
      .then(function() {
        $location.url(`/`)
      })
    }

}])
