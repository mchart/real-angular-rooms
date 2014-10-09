angular.module('ngRooms.domain.supplement')

    .controller('SupplementController',
    ['$scope', '$location',
        function($scope, $location) {

            $scope.supplements= [
                { id: 1 }
            ];
        }
    ]
);