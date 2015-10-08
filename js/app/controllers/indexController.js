(function () {
    'use strict';

    var controllers = angular.module('authentification.controllers');

    controllers.controller('indexController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

        $scope.logOut = function () {
            authService.logOut();
            $location.path('/accueil');
        }

        $scope.authentication = authService.authentication;

        $scope.alertPoneyClicked = function(){// Utilisée dans la directives poney
            alert('Poney Clicked !');
        };//



    }]);
})();
