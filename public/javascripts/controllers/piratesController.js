'use strict'

app.controller("PiratesController", ['$scope', function($scope) {
  console.log("controller is firing");
    $scope.message = "Welcome!"


    // $scope.view.pirates = [{
    //   name: "Long John Silver",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/TI-parrot.jpg/220px-TI-parrot.jpg"
    // }, {
    //   name: "Captain J. Flint",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Treasure-island05.png/250px-Treasure-island05.png"
    // }, {
    //   name: "Billy Bones",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/TI-billy.jpg/220px-TI-billy.jpg"
    // }]
}])
