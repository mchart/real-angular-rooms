angular.module('ngRooms.domain.supplements', [])
    .controller('SupplementsController',
        ['$scope', '$location', 'SupplementService',
            function($scope, $location, supplementService) {


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