angular.module('ngRooms.domain.supplement')

    .controller('SupplementsController',
    ['$scope', '$location',
        function($scope, $location) {

            $scope.supplements= [
                { id: 1 }
            ];
        }
    ]
);