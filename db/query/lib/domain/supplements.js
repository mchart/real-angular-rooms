'use strict';

var db = require('./../connection');
var _ = require('underscore');

module.exports = function(query){
    query.supplements = {};

    var getSupplementKey = function (supplement) {
        return supplement.id;
    };

    query.supplements.getSupplement = function(supplementId, callback) {
        db.get(supplementId, callback);
    };

    query.supplements.getList = function(callbackWithSupplements) {
        var q = {
            limit: 10,
            stale: false
        };

        db.view("supplementView", "all", q).query(function(err, values) {
            var keys = _.pluck(values, 'id');

            db.getMulti(keys, null, function(err, results) {

                var supplements = _.map(results, function(v, k) {
                    v.value.id = k;
                    return v.value;
                });

                callbackWithSupplements(supplements);
            });
        });
    };

    query.supplements.store = function(supplement, callback) {
        db.set(getSupplementKey(supplement), supplement, callback);
    };

    query.supplements.storeList = function(supplements, callback) {
        var docs = {};

        supplements.forEach(function(supplement) {
            docs[getSupplementKey(supplement)] = { value: supplement } ;
        });

        db.setMulti(docs, {}, callback);
    };

    query.supplements.delete = function(id, callback) {
        db.remove(id, callback);
    };

    query.supplements.shutdown = function() {
        db.shutdown();
    };
};
