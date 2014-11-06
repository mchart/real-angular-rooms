var supplementModule = angular.module('ngRooms.domain.supplement.supplementController', [])

supplementModule.controller('SupplementController',
    ['$scope', '$location', 'SupplementsService',
        function($scope, $location, supplementService) {

            $scope.newSupplement = function () {
                var supplement = {
                    name: $scope.ns.name,
                    price: $scope.ns.price
                };
                supplementService.add(supplement).then(function () {
                    $scope.ns = {};
                    $location.path('/supplements');
                });
            };

            $scope.populateSingleSupplement = function () {
                supplementService.single(id).then(function (supplement) {
                    $scope.es = supplement;
                });
            };

            $scope.editSupplement = function () {
                var supplement = {
                    name: $scope.es.name,
                    price: $scope.es.price
                };
                supplementService.edit($routeParams.id, supplement).then(function () {
                    $scope.es = {};
                    $location.path('/supplements');
                });
            };
        }]);