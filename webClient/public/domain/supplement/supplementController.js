angular.module('ngRooms.domain.supplement', [])
    .controller('SupplementController',
        ['$scope', '$routeParams','$location', 'SupplementService',
            function($scope, $routeParams, $location, supplementService) {

                $scope.populateSingleSupplement = function (id) {
                    supplementService.single(id).then(function (data) {
                        $scope.es = data;
                        $scope.editing = id ? true : false;
                    });
                };

                $scope.newSupplement = function () {
                    var supplement = {
                        type: 'supplement',
                        name: $scope.ns.name,
                        price: $scope.ns.price
                    };
                    supplementService.add(supplement).then(function () {
//                        $scope.adding = false;
                        $location.path('/supplements');
                    });
                };

                $scope.editSupplement = function () {
                    var supplement = {
                        type: 'supplement',
                        name: $scope.es.name,
                        price: $scope.es.price
                    };
                    supplementService.edit($routeParams.id, supplement).then(function () {
//                        $scope.editing = false;
                        $location.path('/supplements');
                    });
                };

                $scope.populateSingleSupplement($routeParams.id);

            }
        ]
    );