// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function ($scope, $http, $q) {

    $scope.tagline = 'Welcome to the main page for ServerUI Automation WebUI!';
	debugger;
	
	var deferred = $q.defer();

				
				$http.post('https://temsa1.galway.ie.ibm.com:52311/api/help').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
	deferred.resolve(data);
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
	 deferred.reject(data);
  });
    			return deferred.promise;
//    		}
 //   	};

});