// public/js/services/PlanService.js
'use strict';

angular.module('PlanService', []).service('planService', ['$resource', function ($resource) {

    return {
        // call to get all nerds
        get : function () {
            return $resource.get('api/v1/plans/');
        },
        
        // call to get and for a speific plan
        // might needa callback handler to be passed in
        get : function (id) {
            return $resource.get('/api/v1/plans/:id', id);
            //return $resource.get('api/v1/plans/', id);
        },
    }
}]);