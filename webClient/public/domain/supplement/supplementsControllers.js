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

            $scope.createNewSupplement = function() {
                var supp = {};
                supp.type = 'supplement';
                supp.name = $scope.ns.name;
                supp.price = $scope.ns.price;
                supplementService.add(supp).then(function() {
                    $location.path('/supplements');
                });
            };

            $scope.editSupplement = function(id) {
                var aux2 = supplementService.getSingle(id)
                aux2.name = 'wtf';
                supplementService.getSingle(id).then(function(supplement) {
                    var aux = supplement;
                    aux.name = 'testing'
                    $scope.es.name = supplement.name;
                    $scope.es.price = supplement.price;
                });
                $location.path( "/supplements/edit/" + id );
            };

            $scope.populateSupplementsTable();
        }
    ]
);