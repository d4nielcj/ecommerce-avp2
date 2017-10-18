     angular.module('ecommerce',['ngRoute','ecommerce.controllers'])
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl:'/app/pages/bemvindo.html',
            controller:'BemVindoController'
            
            
        })
        .otherwise({
            redirectTo: '/'
            
        });
        
    });       