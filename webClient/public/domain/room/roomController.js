var roomModule = angular.module('ngRooms.domain.room',[]);

roomModule.controller('RoomController',
    ['$scope', '$routeParams', '$location', 'RoomService',
        function($scope, $routeParams, $location, roomService) {
            $scope.populateSingleRoom = function (id) {
                roomService.single(id).then(function(data) {
                        $scope.room = data;
                        $scope.editing = id ? true : false;
                    }

                );
            }

            $scope.editRoom = function () {
                var room = {
                    type: 'room',
                    name: $scope.room.name,
                    address: $scope.room.address
                }
                roomService.edit($routeParams.id, room).then(function () {
                        $location.path('/rooms');
                    }

                )

            }

            $scope.addRoom = function () {
                var room = {
                    type: 'room',
                    name: $scope.room.name,
                    address: $scope.room.address
                }
                roomService.add(room).then(function () {
                        $location.path('/rooms');
                    }

                )
            }

            $scope.populateSingleRoom($routeParams.id);
        }]);