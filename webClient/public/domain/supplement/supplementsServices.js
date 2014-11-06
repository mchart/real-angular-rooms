angular.module('ngRooms.domain.supplement')

    .factory('SupplementsService', ['Restangular', function (restangular) {

        var domain = 'supplements';

        return {

            list: function() {
                return restangular.all(domain).getList();
            },
            remove: function (id) {
                return restangular.one(domain, id).remove();
            },
            add: function(supplement){
                return restangular.all(domain).post(supplement);
            },
            single: function(id){
                return restangular.one(domain, id).get();
            },
            edit: function(id, supplement){
                return restangular.one(domain, id).put(supplement);
            }
//            edit: function(id, supplement){
//                return restangular.one(domain, id).get().then(function(data) {
//                    data.name = supplement.name;
//                    data.price = supplement.price;
//                    return data.put();
//                });
//            }
        };
    }]);