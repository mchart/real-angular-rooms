'use strict';

var db = require('rooms-db-query');
var Guid = require('guid');

module.exports = function(server){
    server.supplements = {};

    server.get('/supplements', function(req, res, next) {
        db.supplements.getList(function(supplements) {
            res.send(200, supplements);
            return next();
        });
    });

    server.post('/supplements', function (req, res, next) {
        var sid = Guid.create();
        var supplement = { id: sid, type: req.params.type, name: req.params.name, price: req.params.price };
        db.supplements.store(supplement, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(200, supplement);
            return next();
        });
    });

    server.del('/supplements/:id', function (req, res, next) {
        var id = req.params.id;

        db.supplements.delete(id, function() {
            res.send();
            return next();
        });
    });

    server.get('supplements/:id', function (req, res, next) {
        var id = req.params.id;
        db.supplements.getSingle(id, function(supplement) {
            if( supplement === undefined ) {
                res.send(404);
            } else {
                res.send(200, supplement);
            }
            return next();
        });
    });

    server.put('/supplements/:id', function (req, res, next) {
        var sid = req.params.id;
        var supplement = { id: sid, type: req.params.type, name: req.params.name, price: req.params.price };
        db.supplements.store(supplement, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(200, supplement);
        });
        return next();
    });
};