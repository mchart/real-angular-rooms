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
            add: function(supp){
                var supplement = {};
                supplement.id = supp.id;
                supplement.type = supp.type;
                supplement.name = supp.name;
                supplement.price = supp.price;
                return restangular.all(domain).post(supplement);
            },
            edit: function(supp){
                var supplement = {};
                supplement.id = supp.id;
                supplement.type = supp.type;
                supplement.name = supp.name;
                supplement.price = supp.price;
                return restangular.all(domain, id).put(supplement);
            }
        };
    }]);