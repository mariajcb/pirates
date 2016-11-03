`use strict`

app.controller(`onePirateController`, [`$scope`, `PiratesService`, `$routeParams`, `$location`, function($scope, PiratesService, $routeParams, $location) {
  const id = $routeParams.id

  $scope.pirate = {}
  PiratesService.one(id)
    .then(function(onePirate) {
      $scope.pirate = onePirate.data
    })

  // console.log(`delete controller is firing`);
  //   $scope.deletePirate = function(pirate) {
  //     const id = pirate.data
  //     PiratesService.delete(id)
  //     .then(function() {
  //       $location.url(`/`)
  //     })
  //   }

}])
