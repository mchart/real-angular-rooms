angular.module('ngRooms.domain.supplement', [])
    .controller('SupplementController',
        ['$scope', '$routeParams','$location', 'SupplementService',
            function($scope, $routeParams, $location, supplementService) {

                $scope.populateSingleSupplement = function (id) {
                    supplementService.single(id).then(function (data) {
                        $scope.su = data;
                        $scope.editing = id ? true : false;
                    });
                };

                $scope.newSupplement = function () {
                    var supplement = {
                        type: 'supplement',
                        name: $scope.su.name,
                        price: $scope.su.price
                    };
                    supplementService.add(supplement).then(function () {
                        $location.path('/supplements');
                    });
                };

                $scope.editSupplement = function () {
                    var supplement = {
                        type: 'supplement',
                        name: $scope.su.name,
                        price: $scope.su.price
                    };
                    supplementService.edit($routeParams.id, supplement).then(function () {
                        $location.path('/supplements');
                    });
                };

                $scope.populateSingleSupplement($routeParams.id);

            }
        ]
    );