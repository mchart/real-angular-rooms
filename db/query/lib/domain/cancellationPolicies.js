'use strict';

var db = require('./../connection');
var _ = require('underscore');

module.exports = function(query){
    query.cancellationPolicies = {};

    var getCancellationPolicyKey = function (cancellationPolicy) {
        return cancellationPolicy.id;
    };

    query.cancellationPolicies.getList = function(callbackWithRooms) {
        var q = {
            limit: 10, 
            stale: false 
        };
        
        db.view("cancellationPoliciesView", "all", q).query(function(err, values) {
            var keys = _.pluck(values, 'id');

            db.getMulti(keys, null, function(err, results) {

                var cancellationPolicies = _.map(results, function(v, k) {
                    v.value.id = k;
                    return v.value;
                });

                callbackWithRooms(cancellationPolicies);
            });
        });
    };

    query.cancellationPolicies.store = function(cancellationPolicy, callback) {
        db.set(getCancellationPolicyKey(cancellationPolicy), cancellationPolicy, callback);
    };

    query.cancellationPolicies.storeList = function(cancellationPolicies, callback) {
        var docs = {};

        cancellationPolicies.forEach(function(cancellationPolicy) {
            docs[getCancellationPolicyKey(cancellationPolicy)] = { value: cancellationPolicy } ;
        });

        db.setMulti(docs, {}, callback);
    };

    query.cancellationPolicies.delete = function(id, callback) {
        db.remove(id, callback);
    };

    query.cancellationPolicies.shutdown = function() {
        db.shutdown();
    };
};
