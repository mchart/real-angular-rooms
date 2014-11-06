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


//            addSupplement.html

            $scope.newSupplement = function() {
                var supplement = {
                    name : $scope.ns.name,
                    price : $scope.ns.price
                };
                supplementService.add(supplement).then(function() {
                    $scope.ns = {};
                    $location.path('/supplements');
                });
            };


//            editSupplement.html

            $scope.populateSingleSupplement = function() {
                supplementService.single(id).then(function(supplement) {
                    $scope.es = supplement;
                });
            };

            $scope.editSupplement = function() {
                var supplement = {
                    name : $scope.es.name,
                    price : $scope.es.price
                };
                supplementService.edit($routeParams.id, supplement).then(function(){
                    $scope.es = {};
                    $location.path('/supplements');
                });
            };


//            supplements.html

//            if ($location === '/supplements'){
                $scope.populateSupplementsTable();
//            } else if ($location === '/supplements/edit/') {
//                $scope.populateSingleSupplement($routeParams.id);
//            }



        }
    ]
);