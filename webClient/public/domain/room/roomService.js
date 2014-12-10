angular.module('ngRooms.domain.room')
    
    .factory('RoomService', ['Restangular', function (restangular) {
       
       var domain = 'rooms';

       return {

            list: function() {
                return restangular.all(domain).getList();               
            },

            remove: function (id) {
                return restangular.one(domain, id).remove();
            },

            single: function (id) {
                return restangular.one(domain, id).get();
            },

            edit: function (id, room) {
                return restangular.one(domain, id).get().then(function (roomFound) {
                    roomFound.name = room.name;
                    roomFound.address = room.address;
                    return roomFound.put();
                });
            },

            add: function (room) {
                return restangular.all(domain).post(room);
            }
        };
    }]);