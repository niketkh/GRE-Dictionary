var myApp = angular.module("myApp");

myApp.controller('DashboardController', ['$scope', '$http', '$location', function($scope, $http, $location){
	// $scope - Bind data to and from View
	// $http - Allows to make GET, POST & PUT requests
	// $location - Helps with routing and redirection
	$scope.getWords = function(){
		$http.get('/api/words').success(function(response){
			$scope.words = response;
			console.log(response);
		})
	}
	console.log('DashboardController Initialized...')
}]);

