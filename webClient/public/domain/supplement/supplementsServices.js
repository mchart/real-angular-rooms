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

            add: function (name, price) {
//                return restangular.all(domain,6).get().post()     //Cannot read property 'toString' of undefined


//                var id = restangular.all(domain).length + 1;
//                var newsupplement = {};
//                newsupplement.id = id;
//                newsupplement.name = name;
//                newsupplement.price = price;
//                return newsupplement.put();                       // Undefined is not a function


//                return restangular.one(domain,10).get().then(function(supplement) {
//                    supplement.id = 23;
//                    supplement.type = 'supplement';
//                    supplement.name = name;
//                    supplement.price = price;
//                    return supplement.put();                      // 405 Method not allowed
//                });


//                var supplements = restangular.all(domain).getList();
//                var sid = 23; // supplements.length + 1;
//                supplements.push({id:sid, type:domain, name:name, price:price});
//
//                restangular.all(domain).storeList(supplements, callback);         //callback not defined
//
//                restangular.all(domain).getList().then(function(supplements) {  //supplements is undefined
//                    var sid = '23'; // supplements.length + 1;
//                    supplements.push({id:sid, type:domain, name:name, price:price});
//                });
//
//                //restangular.all(domain).storeList(supplements, callback);
//
//                domain = 'ns';

            },
            somethingElse: function(ns){
                return restangular.all(domain).post(ns)
            }
        };
    }]);