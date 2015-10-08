(function () {

    'use strict';

    var directives = angular.module('authentification.directives');


    directives.directive('poney', function () {
        return {
            template: '<h1>Poney !!!</h1>'
        };
    }).directive('poneycolor', function () {
        return {
            link: function (scope, element, attributes) {
                scope.poney = {color: 'Red'};
                scope.turnColor = function () {
                    if (scope.poney.color === 'Red') {
                        scope.poney = {color: 'Blue'};
                    } else {
                        scope.poney = {color: 'Red'};
                    }
                }
            },
            templateUrl: 'views/poneyColor.html'
        };
    }).directive('poneyColorIsolate', function(){
        return {
            scope: {},
            template: '<h1>{{poney.color}} Poney</h1>'
        };
    }).directive('poneyColorArobase', function(){
        return {
            scope: {
                poneyColor: '@color'
            },
            template: '<h1>{{ poneyColor }} Poney</h1>'
        };
    }).directive('poneyColorAmpersand', function(){
        return {
            scope: {
                alertPoneyClicked: '&'
            },
            template: '<h1 ng-click="alertPoneyClicked()">Click Poney!</h1>',
            controller: 'indexController'// Pour accéder à la fonction alertPoneyClicked
        };
    }).directive('forbiddenName', function(){
        return {
            require: 'ngModel',
            link: function(scope, elem, attributes, modelCtrl){
// view to model update (i.e view has changed)
                modelCtrl.$parsers.unshift(function(value) {
// test the name
                    var valid = value !== 'Black Mamba';
                    console.log('is name forbidden?', valid);
                    modelCtrl.$setValidity('forbiddenNameError', valid);
// if it's valid, return the value to the model,
// otherwise return undefined.
                    return valid ? value : undefined;
                });
// model to view update (i.e model has changed)
                modelCtrl.$formatters.unshift(function(value) {
                    var valid = value !== 'Black Mamba';
                    modelCtrl.$setValidity('forbiddenNameError', valid);
// return the value or nothing will be written to the DOM.
                    return value;
                });
            }
        }
    });






})();
