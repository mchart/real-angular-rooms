angular.module('ngRooms.domain.supplement')

    .controller('SupplementsController',
    ['$scope', '$location', 'SupplementService',
        function($scope, $location, supplementService) {

            $scope.populateSupplementsTable = function(id) {
                supplementService.list().then(function(data) {
                    $scope.supplements = data;
                });
            };

            $scope.removeSupplement = function(id) {
                supplementService.remove(id).then(function() {
                    $scope.populateSupplementsTable();
                });
            };

            $scope.newSupplement = function() {
                $location.path( "/supplements/new" );
            };

            $scope.editSupplement = function(id) {
                $location.path( "/supplements/edit/" + id );
            };

            $scope.populateSupplementsTable();
        }
    ]
);