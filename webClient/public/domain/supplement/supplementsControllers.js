var supplementModule = angular.module('ngRooms.domain.supplement', [])

    supplementModule.controller('SupplementsController',
    ['$scope', '$location', 'SupplementsService',
        function($scope, $location, supplementService) {

//            supplements.html

            $scope.populateSupplementsTable = function() {
                supplementService.list().then(function(data) {
                    $scope.supplements = data;
                });
            };

            $scope.removeSupplement = function(id) {
                supplementService.remove(id).then(function() {
                    $scope.populateSupplementsTable();
                });
            };

            $scope.gotoNewSupplement = function() {
                $location.path( "/supplements/new" );
            };

            $scope.gotoEditSupplement = function(id) {
                $location.path( "/supplements/edit/" + id );
            };

            $scope.populateSupplementsTable();

        }
    ]
);