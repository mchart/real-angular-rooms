angular.module('ngRooms.domain.supplement')

    .factory('SupplementService', ['Restangular', function (restangular) {

        var domain = 'supplements';

        return {

            list: function() {
                return restangular.all(domain).getList();
            },

            remove: function (id) {
                return restangular.one(domain, id).remove();
            }

        };
    }]);