'use strict';

var db = require('rooms-db-query');

module.exports = function(server){
    server.supplements = {};

    server.get('/supplements', function(req, res, next) {
        db.supplements.getList(function(supplements) {
            res.send(200, supplements);
            return next();
        });
    });

    server.del('/supplements/:id', function (req, res, next) {
        var id = parseInt(req.params.id);

        db.supplements.delete(id, function() {
            res.send();
            return next();
        });
    });

    server.post('/supplements', function (req, res, next) {
        var supplement = { id: req.params.id, type: req.params.type, name: req.params.name, price: req.params.price };
        db.supplements.store(supplement, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(200, supplement);
            return next();
        });
    });
};