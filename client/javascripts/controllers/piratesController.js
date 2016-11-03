`use strict`

app.controller(`PiratesController`, [`$scope`, `PiratesService`, function($scope, PiratesService) {
    $scope.view = {};
    PiratesService.all()
      .then(pirates => {
        $scope.view.pirates = pirates.data
      })

    $scope.submitPirate = function(){
      // let newPirate = {}
      // newPirate.first_name = $scope.pirate.data.first_name;
      // newPirate.last_name = $scope.pirate.data.last_name;
      // newPirate.image_url = $scope.pirate.data.image_url;
      PiratesService.create($scope.pirate.data)
      .then(function() {
        $scope.view.pirates.push($scope.pirate.data);
        $scope.pirate.data = {};
        $scope.newPirate.$setPristine();
        })
      }
}])
