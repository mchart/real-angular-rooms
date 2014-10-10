var cancellationPolicyModule = angular.module('ngRooms.domain.cancellationPolicy', []);

cancellationPolicyModule.controller('CancellationPoliciesController', 
	['$scope', '$location', 'CancellationPolicyService', 
	function($scope, $location, cancellationPolicyService){

	$scope.populateCancellationPoliciesTable = function(){
		cancellationPolicyService.list().then(function(data){
			$scope.cancellationPolicies = data;
		});
	};

	$scope.removeCancellationPolicy = function(id){
		cancellationPolicyService.remove(id).then(function(){
			$scope.populateCancellationPoliciesTable();
		});
	};

	$scope.newCancellationPolicy = function(){
		$location.path('/cancellationPolicies/new');
	}


	$scope.editCancellationPolicy= function(id){
		$location.path('/cancellationPolicies/edit/' + id);
	}

	$scope.populateCancellationPoliciesTable();

}]);