var myApp = angular.module("myApp");

myApp.controller('WordsController', ['$scope', '$http', '$location', function($scope, $http, $location){
	// $scope - Bind data to and from View
	// $http - Allows to make GET, POST & PUT requests
	// $location - Helps with routing and redirection
	console.log('WordsController Initialized...');

	$scope.getWords = function(){
		$http.get('/api/words').success(function(response){
			$scope.words = response;
			console.log(response);
		});
	}

	$scope.addWord = function(){
		console.log($scope.word);
		$http.post('/api/words', $scope.word).success(function(response){
			window.location.href="http://localhost:3000/#/";
		});
	}
	
}]);

