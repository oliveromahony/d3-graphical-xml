angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    
    $routeProvider
		// home page
		.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainController'
        })
		.when('/planview', {
            templateUrl: 'views/planview.html',
            controller: 'PlanViewController',
			resolve: {
				Plans: function($resource) {
					return $resource('/api/v1/plans/:id').get({ id: 1 }).$promise;
				}
			}
        })
		
        .when('/experiment', {
            templateUrl: 'views/experiment.html',
            controller: 'ExperimentController'
        })
        .when('/oldview', {
            templateUrl: 'views/oldview.html',
            controller: 'OldViewController'
        });
    
    $locationProvider.html5Mode(true);

}]);