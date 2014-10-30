var supplementModule = angular.module('ngRooms.domain.supplement', [])

    supplementModule.controller('SupplementsController',
    ['$scope', '$location', 'SupplementsService',
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

            $scope.newSupplement = function() {
                $location.path( "/supplements/new" );
            };

            $scope.editSupplement = function(id) {
                $location.path( "/supplements/edit/" + id );
            };

            $scope.createNewSupplement = function(name, price) {
                var supp = {};
                supp.id = $scope.supplements.length + 1;
                supp.type = 'supplement';
                supp.name = name.$modelValue;   // $scope.ns.name;
                supp.price = price.$modelValue; // $scope.ns.price;
                supplementService.add(supp).then(function() {
                    $location.path('/supplements');
                });
            };

            $scope.populateSupplementsTable();
        }
    ]
);