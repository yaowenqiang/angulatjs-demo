var myNameSpace = angular.module('myApp',[]);
myNameSpace.controller('MyController',function($scope,$http){
    $http.get('js/data.json').success(function(data){
        $scope.artists = data;
    });
});

