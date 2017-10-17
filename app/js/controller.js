angular.module('ecommerce.controllers',[])
    .controller('BemVindoController', function($scope,$http){
        $scope.init =function(){
            $scope.listaCategorias = {}
            
            $http({
                method:'GET',
                url:'/api/categoria/consultar.php?retornar_imagem=sim'
                
            }).then(function(response){
                $scope.listaCategorias = response.data;
            });
        }
    });
            
            
            
        
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
        
        
        
    