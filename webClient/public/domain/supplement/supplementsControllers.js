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

            $scope.newSupplement = function() {
                $location.path( "/supplements/new" );
            };

            $scope.editSupplement = function(id) {
                supplementService.getSingle(id).then(function(supplement) {
                    $scope.name = supplement.name;
                    $scope.price = supplement.price;
                });
                $location.path( "/supplements/edit/" + id );
            };


//            addSupplement.html

            $scope.createNewSupplement = function() {
                var supp = {};
                supp.type = 'supplement';
                supp.name = $scope.ns.name;
                supp.price = $scope.ns.price;
                supplementService.add(supp).then(function() {
                    $location.path('/supplements');
                });
            };


//            supplements.html

            $scope.populateSupplementsTable();
        }
    ]
);