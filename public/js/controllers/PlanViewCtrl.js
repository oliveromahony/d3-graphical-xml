'use strict';

angular.module('PlanViewCtrl', []).controller('PlanViewController', ['$scope', '$resource', 'Plans', PlanViewController]); 

// inject plan service and use that - check later why it isnt working
function PlanViewController($scope, $resource, Plans) {
    $scope.tagline = 'wanna see some plans?!';
	$scope.jsonData = angular.toJson(Plans.plan, true);
	var steps = Plans.plan["plan-steps"][0].step;
	var nodes = new Array();
	var links = new Array();
	
	for (var i = 0, len = steps.length; i < len; i++) {
		console.log(steps[i].fixlet[0].$.name);
		var obj = ({id: i+1, reflexive: false, name: steps[i].fixlet[0].$.name});
		nodes.push(obj);
	}
	
	nodes.unshift({id: 0, reflexive: false, name: "Start"});
	nodes.push({id: nodes.length, reflexive: false, name: "End"});
	
	for (var i = 1, len = nodes.length; i < len; i++) {
		var obj = ({ source: nodes[i-1], target: nodes[i], left: false, right: true });
		links.push(obj);
	}
	
	$scope.data = nodes;
	$scope.links = links;
}