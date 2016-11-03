`use strict`

const app = angular.module(`pirates`, [`ngRoute`])

app.config(function($routeProvider) {
    $routeProvider
        .when(`/`, {
            templateUrl: `./views/pirates.html`,
            controller: `PiratesController`
        })
        .when(`/:id`, {
            templateUrl: `./views/pirate.html`,
            controller: `onePirateController`
        })
})
