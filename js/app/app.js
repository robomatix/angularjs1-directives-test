(function () {
    'use strict';

    var app = angular.module('authentification.app',
        [
            'ui.router',
            'ngAnimate',
            'ngMessages',
            'ui.bootstrap',
            'LocalStorageModule',
            'authentification.controllers',
            'authentification.services',
            'authentification.directives'
        ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/accueil");
        //
        // Now set up the states
        $stateProvider
            .state('accueil', {
                url: "/accueil",
                templateUrl: "views/accueil.html",
                controller: 'indexController'
            })
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: "LoginController"
            })
            .state('logged', {
                url: "/logged",
                templateUrl: "views/logged.html"
            }).state('directivesAngularJSInput', {
                url: "/directivesAngularJSInput",
                templateUrl: "views/directivesAngularJSInput.html",
                controller: "TestDirectivesAngularJSController",
            }).state('directivesAngularJSSelect', {
                url: "/directivesAngularJSSelect",
                templateUrl: "views/directivesAngularJSSelect.html",
                controller: "TestDirectivesAngularJSController",
            }).state('directivesAngularJSNgMessages', {
                url: "/directivesAngularJSNgMessages",
                templateUrl: "views/directivesAngularJSNgMessages.html"
            }).state('directivesPerso', {
                url: "/directivesPerso",
                templateUrl: "views/directivesPerso.html"
            });




    });

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });


    app.run(['authService', function (authService) {
        authService.fillAuthData();
    }]);

})();