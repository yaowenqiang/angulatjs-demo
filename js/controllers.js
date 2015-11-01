var artListControllers = angular.module('artListControllers',[]);
artListControllers.controller('ListController',['$scope','$http',function($scope,$http){
    $http.get('js/data.json').success(function(data){
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);

artListControllers.controller('DetailsController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    $http.get('js/data.json').success(function(data){
        console.log($routeParams.itemId);
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);
