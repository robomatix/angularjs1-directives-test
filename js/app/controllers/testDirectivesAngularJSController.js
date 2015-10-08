(function () {
    'use strict';

    var controllers = angular.module('authentification.controllers');

    controllers.controller('TestDirectivesAngularJSController', ['$scope', function ($scope) {
        /* Pour test input */
        $scope.counter=0;
        $scope.change = function(){
            $scope.counter++;
        }

        /* Pour test select */
        $scope.team = [
            {name: 'Agnes', gender: 'female', id:1},
            {name: 'Cédric', gender: 'male', id:2},
            {name: 'Cyril', gender: 'male', id:3},
            {name: 'JB', gender: 'male', id:4},
        ];
        $scope.team2 = [
            {name: 'Agnes', gender: 'female', available: true},
            {name: 'Cédric', gender: 'male', available: true},
            {name: 'Cyril', gender: 'male', available: true},
            {name: 'JB', gender: 'male', available: false}
        ];



    }]);
})();
