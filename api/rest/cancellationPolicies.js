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

    server.get('/cancellationPolicies/:id', function(req, res, next) {
        var id = req.params.id;

        db.cancellationPolicies.get(id, function(cancellationPolicy) {
            res.send(200, cancellationPolicy);
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

    server.put('/cancellationPolicies/:id', function(req, res, next){
        req.log.info({ reqparams: req.params }, 'PUTREQUESTDETAIL');

        var id = req.params.id;
        var type = req.params.type;

      if(Guid.isGuid(id) && type ==='cancellationPolicy'){

            var cancellationPolicy = {
                id: id,
                type: type,
                name: req.params.name,
                description: req.params.description
            }

            db.cancellationPolicies.store(cancellationPolicy, function(err, result) {
                console.log(result);
                res.send();
                return next();
            } );
        }


    });

};