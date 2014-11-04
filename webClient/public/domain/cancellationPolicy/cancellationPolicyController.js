angular.module('ngRooms.domain.cancellationPolicy', [])
    .controller('CancellationPolicyController',
    ['$scope', '$routeParams','$location', 'CancellationPolicyService',
        function($scope, $routeParams, $location, cancellationPolicyService){

            $scope.populateSingleCancellationPolicy = function(id){
                
            };

            $scope.addCancellationPolicy = function() {
                cancellationPolicyService.add($scope.name, $scope.description).then(function(){
                    $scope.populateCancellationPoliciesTable();
                    $location.path('/cancellationPolicies');
                });
            };

            $scope.editCancellationPolicy = function() {
                cancellationPolicyService.edit($routeParams.id, $scope.name, $scope.description).then(function(){
                    $scope.populateCancellationPoliciesTable();
                    $location.path('/cancellationPolicies');
                });
            };

            $scope.populateSingleCancellationPolicy($routeParams.id);
        }]);