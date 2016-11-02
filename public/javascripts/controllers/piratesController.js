'use strict'

app.controller("PiratesController", ['$scope', 'PiratesService', function($scope, PiratesService) {
  console.log("controller is firing");
    $scope.view = {};
    PiratesService.all()
      .then(pirates => {
        console.log(pirates);
        $scope.view.pirates = pirates.data
      })

    $scope.submitPirate = function(){
      let newPirate = {}
      newPirate.first_name = $scope.pirate.data.first_name;
      newPirate.last_name = $scope.pirate.data.last_name;
      newPirate.image_url = $scope.pirate.data.image_url;
      console.log('LOGGING NEW PIRATE', newPirate);
      PiratesService.create(newPirate)
      .then(function() {
        $scope.view.pirates.push(newPirate);
        $scope.pirate.data = {};
        $scope.newPirate.$setPristine();
        })
      }
}])
