'use strict';

var db = require('rooms-db-query');
var Guid = require('guid');

module.exports = function(server){
	server.get('/rooms', function(req, res, next) {
        db.rooms.getList(function(rooms) {
            res.send(200, rooms);
            return next();
        });
    });

    server.del('/rooms/:id', function (req, res, next) {
        var id = req.params.id;

        db.rooms.delete(id, function() {
            res.send();
            return next();
        });
    });

    server.get('/rooms/:id', function (req, res, next) {
        var id = req.params.id;

        db.rooms.getSingle(id, function(room) {
            if (room == undefined) {
                res.send(404);
            } else {
                res.send(200, room);
            }
            return next();
        });

    });

    server.put('/rooms/:id', function (req, res, next) {
        var room = {
            id: req.params.id,
            name: req.params.name,
            type: req.params.type,
            address: req.params.address
        };
        db.rooms.store(room, function(err, result) {
            if (err) {
                throw err;
            }
            res.send(200, room);
            return next();
        });
    });

    server.post('/rooms', function(req, res, next) {
        var room = {
            id: Guid.create(),
            name: req.params.name,
            type: req.params.type,
            address: req.params.address
       };
       db.rooms.store(room, function(err, result) {
           if (err) {
               throw err;
           }
           res.send(200, room);
           return next();
       });
    });
};