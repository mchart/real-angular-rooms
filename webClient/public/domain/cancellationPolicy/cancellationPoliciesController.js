angular.module('ngRooms.domain.cancellationPolicy', [])
	.controller('CancellationPoliciesController',
	['$scope', '$location', 'CancellationPolicyService', 
	function($scope, $location, cancellationPolicyService){

	$scope.populateCancellationPoliciesTable = function(){
		cancellationPolicyService.list().then(function(data){
			$scope.cancellationPolicies = data;
		});
	};

	$scope.addCancellationPolicy = function() {
		cancellationPolicyService.add($scope.name, $scope.description).then(function(){
			$scope.populateCancellationPoliciesTable();
			$location.path('/cancellationPolicies');
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