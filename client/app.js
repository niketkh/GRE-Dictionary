// Client Side Angular JS Entry file
var myApp = angular.module('myApp', ['ngRoute']);

myApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'DashboardController',
		templateUrl: 'views/dashboard.html'
	})
	.when('/words', {
		controller: 'WordsController',
		templateUrl: 'views/words.html'
	})
	.when('/words/add', {
		controller: 'WordsController',
		templateUrl: 'views/add_word.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

