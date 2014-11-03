'use strict';

var db = require('rooms-db-query'),
    Guid = require('guid');


module.exports = function(server){

    server.pre(function (request, response, next) {
        request.log.info({ req: request }, 'REQUEST');
        next();
    });

	server.get('/cancellationPolicies', function(req, res, next) {
        db.cancellationPolicies.getList(function(cancellationPolicies) {
            res.send(200, cancellationPolicies);
            return next();
        });
    });

    server.del('/cancellationPolicies/:id', function (req, res, next) {
        var id = req.params.id;

        db.cancellationPolicies.delete(id, function() {
            res.send();
            return next();
        });
    });

    server.post('/cancellationPolicies/new', function(req, res, next){

        req.log.info({ reqparams: req.params }, 'POSTREQUESTDETAIL');

        var newCancellationPolicy = {
            id: Guid.create(),
            type: req.params.type,
            name: req.params.name,
            description: req.params.description
        }

        db.cancellationPolicies.store(newCancellationPolicy, function(err, result) {
            console.log(result);
            res.send();
            return next();
        } );

    });

};