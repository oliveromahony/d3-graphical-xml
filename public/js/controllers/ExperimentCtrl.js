angular.module('ExperimentCtrl', []).controller('ExperimentController', function ($scope) {
    
    $scope.tagline = 'Nothing beats Experimenting!';
	
	var nodes = [{
		id: 0,
		reflexive: false,
		name: "Start"
	}, {
		id: 1,
		reflexive: true,
		name: "A step in a plan"
	}, {
		id: 2,
		reflexive: false,
		name: "End"
	}],
	
	links = [{
			source: nodes[0],
			target: nodes[1],
			left: false,
			right: true
		}, {
			source: nodes[1],
			target: nodes[2],
			left: false,
			right: true
		}];
		
		$scope.data = nodes;
		$scope.links = links;

});