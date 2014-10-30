//angular.module('ngRooms.domain.supplement')
var supplementModule = angular.module('ngRooms.domain.supplement', [])

    supplementModule.controller('SupplementsController',
    ['$scope', '$location', 'SupplementsService',
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

            $scope.createNewSupplement = function(n, p) {
//
//                var name = $scope.ns.name;
//                var price = $scope.ns.price;
//                supplementService.add(name, price).then(function() {
//                    $location.path('/supplements/');
//                });
                var supp = $scope.ns;
                return supplementService.somethingElse(supp).then(function() {
                    $location.path('/supplements');
                });
            };

            $scope.populateSupplementsTable();
        }
    ]
);