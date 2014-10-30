'use strict';

var db = require('rooms-db-query');

module.exports = function(server){
	server.get('/cancellationPolicies', function(req, res, next) {
        db.cancellationPolicies.getList(function(cancellationPolicies) {
            res.send(200, cancellationPolicies);
            return next();
        });
    });

    server.del('/cancellationPolicies/:id', function (req, res, next) {
        var id = parseInt(req.params.id);

        db.cancellationPolicies.delete(id, function() {
            res.send();
            return next();
        });
    });

};